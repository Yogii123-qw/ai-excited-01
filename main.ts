// SPDX-License-Identifier: MIT
//
// ai-excited-01 — copy the entry image into the grader's output directory.
// The grader runs this program twice in a fresh container with no network;
// a plain copy is deterministic by construction.
import { copyFileSync, existsSync, mkdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = dirname(fileURLToPath(import.meta.url));
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const source = join(repoRoot, "entry.png");

if (!existsSync(source)) {
  throw new Error(`entry image missing: ${source}`);
}

mkdirSync(outputDir, { recursive: true });
copyFileSync(source, join(outputDir, "entry.png"));
console.log(`entry.png copied (${statSync(source).size} bytes)`);
