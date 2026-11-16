const fs = require("node:fs");
const path = require("node:path");

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const src = path.join(__dirname, "entry.png");
const dest = path.join(outDir, "entry.png");

if (!fs.existsSync(src)) {
  console.error(`error: source image not found: ${src}`);
  process.exit(1);
}

fs.mkdirSync(outDir, { recursive: true });
fs.copyFileSync(src, dest);
const bytes = fs.statSync(dest).size;
console.log(`entry.png copied (${bytes} bytes)`);
