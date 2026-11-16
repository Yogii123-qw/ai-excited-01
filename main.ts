// Clay Fist — emits the bundled artwork as the competition entry image.
//
// The picture lives in this repository as entry.png, next to this file.
// Running this program copies those exact bytes into the directory named
// by MAKEFUN_OUTPUT_DIR (or /output when the variable is unset), under
// the name entry.png. No pixels are generated or altered here, so every
// run produces an identical file.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = dirname(fileURLToPath(import.meta.url));
const bundledImage = join(repoRoot, "entry.png");

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const outputPath = join(outputDir, "entry.png");

const imageBytes = readFileSync(bundledImage);
mkdirSync(outputDir, { recursive: true });
writeFileSync(outputPath, imageBytes);
const writtenBack = readFileSync(outputPath);
if (!writtenBack.equals(imageBytes)) {
  throw new Error("output bytes do not match the bundled image");
}
