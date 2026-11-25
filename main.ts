// Famous Last Words: The Funniest Epitaph — one-line tombstone epitaph entry.
// Writes the entry line exactly to /output/entry.txt (no trailing newline).

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = "Here lies Dave. He replied all.";

// Gate: the entry must be UTF-8 text of 1 to 150 characters, not only whitespace.
if (ENTRY.length < 1 || ENTRY.length > 150 || ENTRY.trim().length === 0) {
  console.error(`entry failed gate: ${ENTRY.length} chars`);
  process.exit(1);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`validated ${ENTRY.length} chars (gate 1-150) and wrote /output/entry.txt`);
