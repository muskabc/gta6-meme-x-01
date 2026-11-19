// gta6-meme-x-01 entry (Node 22, standard library only).
//
// The entry is the X post itself: a GTA 6 meme whose picture shows
// make.fun's ghost mascot holding its magenta star coin, posted from a
// public X account with make.fun / @makefunai and our play code in its
// text. This program only hands the post's address to the grader: it
// copies POST.json from the repository root to /output/POST.json, where
// the gate reads it. Nothing this program writes is judged; the house
// reads the post from X and builds the dossier the judge sees.
//
// Run it the way the grader does (outside the grader's container):
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// An X post address, as X shows it: https://x.com/<handle>/status/<id>
// (twitter.com, www./mobile. prefixes and /i/web/status/<id> also read).
const POST_URL_RE =
  /^https:\/\/(www\.|mobile\.)?(x\.com|twitter\.com)\/([^/]+\/status\/\d+|i\/web\/status\/\d+)$/;

const src = join(BOT_DIR, 'POST.json');
const dst = join(OUTPUT_DIR, 'POST.json');

let post: unknown;
let raw: string;
try {
  raw = readFileSync(src, 'utf8');
  post = JSON.parse(raw);
} catch (err) {
  console.error(`POST.json could not be read from ${src}: ${(err as Error).message}`);
  process.exit(1);
}

// The gate reads POST.json only up to 16384 bytes.
if (Buffer.byteLength(raw, 'utf8') > 16384) {
  console.error('POST.json is over the 16384-byte limit the gate reads.');
  process.exit(1);
}

if (typeof post !== 'object' || post === null || typeof (post as { url?: unknown }).url !== 'string') {
  console.error('POST.json must be a JSON object with a string "url" field.');
  process.exit(1);
}

const url = (post as { url: string }).url;
if (!POST_URL_RE.test(url)) {
  // Warn, don't fail: before the post goes up POST.json still holds the
  // placeholder address, and the local run should still prove the copy
  // works. The gate refuses a placeholder at submission time instead.
  console.error(`warning: POST.json url is not a post address yet: ${url}`);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(src, dst);
} catch (err) {
  console.error(`POST.json could not be copied to ${dst}: ${(err as Error).message}`);
  process.exit(1);
}
