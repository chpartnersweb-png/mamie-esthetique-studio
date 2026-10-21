import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';
await mkdir('public/images/generated', { recursive: true });
const images = [
  ['docs/references/generated/hero.png', 'public/images/generated/hero.webp', 1536],
  ['docs/references/generated/hero.png', 'public/images/generated/hero-mobile.webp', 800],
  ['docs/references/generated/care.png', 'public/images/generated/care.webp', 1122],
  ['docs/references/generated/homecare.png', 'public/images/generated/homecare.webp', 1448],
  ['docs/references/salon.jpg', 'public/images/original/salon.webp', 550],
];
for (const [source, output, width] of images) {
  await sharp(source).resize({ width, withoutEnlargement: true }).webp({ quality: 86 }).toFile(output);
  const metadata = await sharp(output).metadata();
  console.log(`${output}: ${metadata.width}x${metadata.height}`);
}
