import { readdir, writeFile } from "node:fs/promises";
import path from "node:path";

const ICON_DIR_STRING = "./icons/svg"
const ICON_DIR = path.resolve(ICON_DIR_STRING);
const OUT_FILE = path.resolve("index.js");

const files = await readdir(ICON_DIR);

const imports = files
    .filter(f => f.endsWith(".svg"))
    .map(f => {
        const name = path.basename(f, ".svg");
        return `import ${name} from "${ICON_DIR_STRING + "/" + f}"`;
    })


const exports = files
    .filter(f => f.endsWith(".svg"))
    .map(f => {
        const name = path.basename(f, ".svg");
        return `  ${name}`;
    })

const output = `// AUTO-GENERATED — do not edit
${imports.join("\n")}

export const icons = {
${exports.join(",\n")}
};

export default icons;
`;

await writeFile(OUT_FILE, output);
console.log("✅ index.js generated");
