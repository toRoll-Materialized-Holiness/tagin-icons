import { readdir, writeFile } from "node:fs/promises";
import path from "node:path";

const ICON_DIR = path.resolve("icons/svg");
const OUT_FILE = path.resolve("index.js");

const files = await readdir(ICON_DIR);

const entries = files
    .filter(f => f.endsWith(".svg"))
    .map(f => {
        const name = path.basename(f, ".svg");
        return `  ${name}: new URL("./icons/svg/${f}", import.meta.url).href`;
    })
    .join(",\n");

const output = `// AUTO-GENERATED — do not edit
export const icons = {
${entries}
};

export default icons;
`;

await writeFile(OUT_FILE, output);
console.log("✅ index.js generated");
