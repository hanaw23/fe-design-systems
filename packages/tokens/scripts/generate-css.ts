import { writeFileSync, mkdirSync } from "node:fs";
import { resolve } from "node:path";
import { generateCss } from "../src/css";

const distPath = resolve("dist");
const outputPath = resolve(distPath, "tokens.css");

mkdirSync(distPath, { recursive: true });

writeFileSync(outputPath, generateCss(), "utf8");

console.log(`Generated ${outputPath}`);
