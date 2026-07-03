import { mkdir, rm } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const heroSource = "assets/source/sovereign-ai-cloud.png";
const heroOutputDir = "public/assets/hero";
const heroName = "sovereign-ai-cloud";
const heroWidths = [640, 960, 1280, 1600];

async function writeHeroImages() {
  await rm(heroOutputDir, { recursive: true, force: true });
  await mkdir(heroOutputDir, { recursive: true });

  const source = sharp(heroSource);
  const metadata = await source.metadata();

  await Promise.all(
    heroWidths.flatMap((width) => {
      const height = metadata.width && metadata.height ? Math.round((metadata.height / metadata.width) * width) : undefined;
      const resized = source.clone().resize({ width, height, withoutEnlargement: true });
      const basePath = path.join(heroOutputDir, `${heroName}-${width}`);

      return [
        resized.clone().avif({ quality: 58, effort: 6 }).toFile(`${basePath}.avif`),
        resized.clone().webp({ quality: 76, effort: 6 }).toFile(`${basePath}.webp`),
      ];
    }),
  );

  await source.clone().resize({ width: 1600, withoutEnlargement: true }).jpeg({ quality: 82, mozjpeg: true }).toFile(
    path.join(heroOutputDir, `${heroName}-1600.jpg`),
  );
}

await writeHeroImages();
