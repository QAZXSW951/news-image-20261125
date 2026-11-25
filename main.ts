// 25 November 2026 world-news image.
//
// The picture is drawn ahead of time and stored next to this program.
// All this program does is copy it into the folder the grader reads,
// so every run produces exactly the same bytes. No network, no
// randomness, no drawing at run time. After the copy it checks the
// sizes match, so a truncated write fails loudly instead of
// silently handing the grader a broken picture.

import { copyFileSync, mkdirSync, existsSync, statSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const folder = dirname(fileURLToPath(import.meta.url));
const picture = join(folder, 'entry.png');
if (!existsSync(picture)) {
  throw new Error(`cannot find the picture at ${picture}`);
}
const dest = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(dest, { recursive: true });
const target = join(dest, 'entry.png');
copyFileSync(picture, target);
if (statSync(picture).size !== statSync(target).size) {
  throw new Error(`copied picture is the wrong size: ${target}`);
}
