import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { salon, reviews } from '../src/data/salon.ts';

const html = readFileSync('dist/index.html', 'utf8');
assert.match(html, /<html lang="ja"/);
assert.equal((html.match(/<h1\b/g) ?? []).length, 1, 'H1 must be unique');
const ids = new Set([...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]));
for (const match of html.matchAll(/href="#([^"]+)"/g)) assert.ok(ids.has(match[1]), `Missing anchor: ${match[1]}`);
const localImages = [...html.matchAll(/<img[^>]+src="([^"]+)"/g)].map(match => match[1]);
for (const src of localImages) assert.ok(existsSync(`public${src}`), `Missing local image: ${src}`);
assert.ok(localImages.includes('/images/brand/mamie-logo-original.jpg'), 'Original logo must be used');
for (const url of [salon.links.contact, salon.links.menu, salon.links.shopping, salon.links.voices, salon.phoneHref]) {
  assert.ok(html.includes(`href="${url}"`), `Missing destination: ${url}`);
}
const normalize = text => text.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '').replace(/<[^>]+>/g, '').replace(/\s/g, '');
for (const review of reviews) {
  const id = review.source.split('/').pop();
  const source = normalize(readFileSync(`docs/sources/${id}.html`, 'utf8'));
  assert.ok(source.includes(normalize(review.text)), `Review differs from source: ${id}`);
  assert.ok(html.includes(review.text) && html.includes(review.source), `Missing review: ${id}`);
}
for (const prohibited of ['画像はイメージです', 'Image is for illustration', 'Lorem ipsum', '<title>Astro</title>']) {
  assert.ok(!html.includes(prohibited), `Unwanted placeholder: ${prohibited}`);
}
assert.ok(!/<form\b/i.test(html), 'Contact should link to existing HP');
assert.ok(localImages.every(src => src.startsWith('/')), 'Content images must be served locally; absolute social metadata URLs are allowed');
console.log(`Verified: Japanese metadata, one H1, anchors, ${localImages.length} local image instances, existing HP destinations, 3 original review excerpts, no placeholder or new contact form.`);
