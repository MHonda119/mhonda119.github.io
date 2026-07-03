import { mkdir, rm } from "node:fs/promises";
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
  thumb: { widths: [320, 480], aspectRatio: [1, 1], fit: "cover" },
  full: { widths: [1280, 1600], fit: "inside" },
};

function normalizeName(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
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

async function createPhotoVariant(source, preset, width, photo) {
  if (preset.fit === "inside" || photo.cropOffsetY == null) {
    return source
      .clone()
      .resize(resizeOptions(preset, width, photo.position ?? "center"));
  }

  const metadata = await source.clone().metadata();
  const [ratioWidth, ratioHeight] = preset.aspectRatio;

  return source
    .clone()
    .extract(coverCropRegion(metadata, preset, photo))
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
  await rm(photoOutputDir, { recursive: true, force: true });
  await mkdir(photoOutputDir, { recursive: true });

  await Promise.all(
    photos.map(async (photo) => {
      const photoId = normalizeName(photo.id);
      const outputDir = path.join(photoOutputDir, photoId);
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
