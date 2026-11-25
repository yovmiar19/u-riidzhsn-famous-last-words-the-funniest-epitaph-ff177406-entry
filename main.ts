// Famous Last Words: The Funniest Epitaph — one-line tombstone epitaph entry.
// Writes the entry line exactly to /output/entry.txt (no trailing newline).

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = "Relax, I watched a YouTube tutorial.";

// Output: the tombstone's last words — a dead person's final, falsely confident
// reassurance. The epitaph is written verbatim, so the file content is exactly
// the line above and nothing else (no trailing newline, no extra whitespace).

// Gate: the entry must be UTF-8 text of 1 to 150 characters, not only whitespace.
if (ENTRY.length < 1 || ENTRY.length > 150 || ENTRY.trim().length === 0) {
  console.error(`entry failed gate: ${ENTRY.length} chars`);
  process.exit(1);
}

// Guard: refuse to write anything that is not exactly the intended line.
if (ENTRY !== "Relax, I watched a YouTube tutorial.") {
  console.error("entry does not match the intended epitaph line");
  process.exit(1);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`validated ${ENTRY.length} chars (gate 1-150) and wrote /output/entry.txt`);
