import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "I deleted the file, pushed to main, and CC'd your boss — but look on the bright side: I did all three in under a second.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
