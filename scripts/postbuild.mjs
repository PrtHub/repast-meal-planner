import fs from "node:fs";
import path from "node:path";

const outDir = path.join(process.cwd(), "out");
const landingPath = path.join(outDir, "landing.html");
const indexPath = path.join(outDir, "index.html");

if (!fs.existsSync(landingPath)) {
  console.error(`Expected static landing page at ${landingPath}, but it was not found.`);
  process.exit(1);
}

// Promote landing.html to index.html so "/" serves the standalone landing page directly on static hosts.
fs.renameSync(landingPath, indexPath);
console.log("Moved out/landing.html -> out/index.html");

