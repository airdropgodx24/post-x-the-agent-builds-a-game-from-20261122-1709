// Entry program for the make.fun bounty "post-x-the-agent-builds-a-game-from-20261122-1709"
// (Node 22, standard library only). The entry is a video posted on X: an AI agent built a
// tiny neon snake game from a single prompt, filmed itself building it, and the video went
// out natively on X with make.fun and the play code in its text. This program does the one
// mechanical job the house needs: it copies POST.json from the repository root to the output
// directory, where the gate reads the post's address and scores its views and interactions.
// It does no network, reads no clock, and writes nothing outside the output directory, so
// two runs of it produce the same bytes.
//
// Local check:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const source = join(BOT_DIR, 'POST.json');
const target = join(OUTPUT_DIR, 'POST.json');

if (!existsSync(source)) {
  console.error(`POST.json not found in ${BOT_DIR} — nothing to hand in.`);
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(source, target);
} catch (err) {
  console.error(`POST.json could not be copied from ${BOT_DIR} to ${OUTPUT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
console.log(`POST.json handed in: ${source} -> ${target}`);
