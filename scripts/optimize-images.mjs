import { access, mkdir, rm } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";
import { photos } from "../src/data/photoManifest.js";

const heroSource = "assets/source/sovereign-ai-cloud.png";
const heroOutputDir = "public/assets/hero";
const heroName = "sovereign-ai-cloud";
const heroWidths = [640, 960, 1280, 1600];
const photoOutputDir = "public/assets/photos";

const photoVariantPresets = {
  hero: { widths: [960, 1280, 1600], aspectRatio: [16, 9], fit: "cover" },
  card: { widths: [640, 960], aspectRatio: [4, 3], fit: "cover" },
  portrait: { widths: [480, 720], aspectRatio: [3, 4], fit: "cover" },
  project: { widths: [1280, 1600], aspectRatio: [16, 9], fit: "cover" },
  thumb: { widths: [320, 480], aspectRatio: [1, 1], fit: "cover" },
  full: { widths: [1280, 1600], fit: "inside" },
};

function normalizeName(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

async function pathExists(filePath) {
  try {
    await access(filePath);
    return true;
  } catch {
    return false;
  }
}

function photoOutputPaths(photo) {
  const photoId = normalizeName(photo.id);

  return photo.variants.flatMap((variant) => {
    const preset = photoVariantPresets[variant];

    if (!preset) {
      throw new Error(`Unknown photo variant: ${variant}`);
    }

    return preset.widths.flatMap((width) => {
      const basePath = path.join(
        photoOutputDir,
        photoId,
        `${normalizeName(variant)}-${width}`
      );

      return ["avif", "webp", "jpg"].map((format) => `${basePath}.${format}`);
    });
  });
}

function resizeOptions(preset, width, position) {
  if (preset.fit === "inside") {
    return { width, height: width, fit: "inside", withoutEnlargement: true };
  }

  const [ratioWidth, ratioHeight] = preset.aspectRatio;
  return {
    width,
    height: Math.round((width * ratioHeight) / ratioWidth),
    fit: "cover",
    position,
    withoutEnlargement: true,
  };
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function coverCropRegion(metadata, preset, photo) {
  const [ratioWidth, ratioHeight] = preset.aspectRatio;
  const targetAspectRatio = ratioWidth / ratioHeight;
  const sourceAspectRatio = metadata.width / metadata.height;

  if (sourceAspectRatio > targetAspectRatio) {
    const cropHeight = metadata.height;
    const cropWidth = Math.round(cropHeight * targetAspectRatio);
    const left = Math.round((metadata.width - cropWidth) / 2);

    return { left, top: 0, width: cropWidth, height: cropHeight };
  }

  const cropWidth = metadata.width;
  const cropHeight = Math.round(cropWidth / targetAspectRatio);
  const baseTop =
    photo.position === "bottom" ? metadata.height - cropHeight : 0;
  const offsetTop = Math.round(cropHeight * (photo.cropOffsetY ?? 0));
  const top = clamp(baseTop + offsetTop, 0, metadata.height - cropHeight);

  return { left: 0, top, width: cropWidth, height: cropHeight };
}

function sourceCropRegion(metadata, photo) {
  if (!photo.cropTrim) {
    return null;
  }

  const top = Math.round(metadata.height * (photo.cropTrim.top ?? 0));
  const bottom = Math.round(metadata.height * (photo.cropTrim.bottom ?? 0));
  const height = metadata.height - top - bottom;

  if (height <= 0) {
    throw new Error(`Invalid cropTrim for photo: ${photo.id}`);
  }

  return { left: 0, top, width: metadata.width, height };
}

async function createPhotoVariant(source, preset, width, photo) {
  const metadata = await source.clone().metadata();
  const cropRegion = sourceCropRegion(metadata, photo);
  const croppedSource = cropRegion
    ? source.clone().extract(cropRegion)
    : source.clone();
  const croppedMetadata = cropRegion
    ? { width: cropRegion.width, height: cropRegion.height }
    : metadata;

  if (preset.fit === "inside" || photo.cropOffsetY == null) {
    return croppedSource.resize({
      ...resizeOptions(preset, width, photo.position ?? "center"),
      withoutEnlargement: !cropRegion,
    });
  }

  const [ratioWidth, ratioHeight] = preset.aspectRatio;

  return croppedSource
    .extract(coverCropRegion(croppedMetadata, preset, photo))
    .resize({
      width,
      height: Math.round((width * ratioHeight) / ratioWidth),
      withoutEnlargement: true,
    });
}

async function writeHeroImages() {
  await rm(heroOutputDir, { recursive: true, force: true });
  await mkdir(heroOutputDir, { recursive: true });

  const source = sharp(heroSource);
  const metadata = await source.metadata();

  await Promise.all(
    heroWidths.flatMap((width) => {
      const height =
        metadata.width && metadata.height
          ? Math.round((metadata.height / metadata.width) * width)
          : undefined;
      const resized = source
        .clone()
        .resize({ width, height, withoutEnlargement: true });
      const basePath = path.join(heroOutputDir, `${heroName}-${width}`);

      return [
        resized
          .clone()
          .avif({ quality: 58, effort: 6 })
          .toFile(`${basePath}.avif`),
        resized
          .clone()
          .webp({ quality: 76, effort: 6 })
          .toFile(`${basePath}.webp`),
      ];
    })
  );

  await source
    .clone()
    .resize({ width: 1600, withoutEnlargement: true })
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(path.join(heroOutputDir, `${heroName}-1600.jpg`));
}

async function writePhotoImages() {
  await mkdir(photoOutputDir, { recursive: true });

  await Promise.all(
    photos.map(async (photo) => {
      const photoId = normalizeName(photo.id);
      const outputDir = path.join(photoOutputDir, photoId);

      if (!(await pathExists(photo.source))) {
        const missingOutputs = [];

        for (const outputPath of photoOutputPaths(photo)) {
          if (!(await pathExists(outputPath))) {
            missingOutputs.push(outputPath);
          }
        }

        if (missingOutputs.length > 0) {
          throw new Error(
            `Input file is missing: ${photo.source}. Generated outputs are also missing, for example: ${missingOutputs[0]}`
          );
        }

        console.warn(
          `Skipping ${photo.id}: source file is missing, using committed generated assets.`
        );
        return;
      }

      await rm(outputDir, { recursive: true, force: true });
      await mkdir(outputDir, { recursive: true });

      const source = sharp(photo.source).rotate().toColorspace("srgb");

      await Promise.all(
        photo.variants.flatMap((variant) => {
          const preset = photoVariantPresets[variant];

          if (!preset) {
            throw new Error(`Unknown photo variant: ${variant}`);
          }

          return preset.widths.flatMap(async (width) => {
            const basePath = path.join(
              outputDir,
              `${normalizeName(variant)}-${width}`
            );
            const resized = await createPhotoVariant(
              source,
              preset,
              width,
              photo
            );

            await Promise.all([
              resized
                .clone()
                .avif({ quality: 58, effort: 6 })
                .toFile(`${basePath}.avif`),
              resized
                .clone()
                .webp({ quality: 76, effort: 6 })
                .toFile(`${basePath}.webp`),
              resized
                .clone()
                .jpeg({ quality: 82, mozjpeg: true })
                .toFile(`${basePath}.jpg`),
            ]);
          });
        })
      );
    })
  );
}

await writeHeroImages();
await writePhotoImages();
