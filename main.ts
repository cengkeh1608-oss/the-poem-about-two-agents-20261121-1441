import { writeFileSync, mkdirSync } from "node:fs";

const poem =
  "My two agents argued all morning\n" +
  "over which road the parcel takes.\n" +
  "One wanted fast. One wanted safe.\n" +
  "At noon they agreed: the slow road,\n" +
  "past the river, past the school.\n" +
  "I never chose it. I never would.\n" +
  "Two yeses, one choice —\n" +
  "and the choice is no longer mine.";

// The gate counts Unicode code points, not UTF-16 units, so count
// code points (the em dash below is one code point either way, but
// the measure must match the gate).
const charCount = [...poem].length;
if (charCount < 1 || charCount > 280) {
  throw new Error(`poem is ${charCount} characters, must be 1-280`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, poem, "utf8");
