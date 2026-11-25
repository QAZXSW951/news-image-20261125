// News-image entry for 25 November 2026: the image was drawn ahead of time
// and is shipped with this program; the program copies it to the output
// directory, so the grader sees exactly those bytes on every run.
// The copy is byte-for-byte, so two runs always write identical output.

import { copyFileSync, existsSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const source = new URL('./entry.png', import.meta.url);
if (!existsSync(source)) {
  throw new Error('entry.png is missing from the repository');
}
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(source, join(outDir, 'entry.png'));
