import { copyFileSync, existsSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const src = join(here, "entry.png");
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const dest = join(outDir, "entry.png");

if (!existsSync(src)) {
  console.error(`entry.png not found beside main.ts: ${src}`);
  process.exit(1);
}

copyFileSync(src, dest);
const bytes = statSync(dest).size;
console.log(`entry.png copied (${bytes} bytes)`);
