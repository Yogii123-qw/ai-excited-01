import { copyFileSync, existsSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.png");
if (!existsSync(source)) {
  console.error("entry.png is missing next to main.ts");
  process.exit(1);
}
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const target = join(outDir, "entry.png");
const bytes = statSync(source).size;
copyFileSync(source, target);
console.log(`entry.png copied (${bytes} bytes)`);
