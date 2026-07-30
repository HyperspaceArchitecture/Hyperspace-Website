import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

import {
  disciplineOrder,
  disciplinePaths,
  disciplines,
  projects,
  sectorFilters,
} from "../app/site-data.ts";

const scriptDirectory = dirname(fileURLToPath(import.meta.url));
const repositoryRoot = resolve(scriptDirectory, "..");
const themeDirectory = resolve(
  repositoryRoot,
  "wordpress/hyperspace-architecture",
);

await mkdir(resolve(themeDirectory, "inc"), { recursive: true });

const data = {
  disciplineOrder,
  disciplinePaths,
  disciplines,
  projects,
  sectorFilters,
};

await writeFile(
  resolve(themeDirectory, "inc/site-data.json"),
  `${JSON.stringify(data, null, 2)}\n`,
  "utf8",
);

const sourceCss = await readFile(
  resolve(repositoryRoot, "app/globals.css"),
  "utf8",
);
const wordpressCss = sourceCss.replace(/^@import "tailwindcss";\s*/u, "");

const themeHeader = `/*
Theme Name: Hyperspace Architecture
Theme URI: https://www.hyper-space.com.au/
Author: Hyperspace Architecture
Author URI: https://www.hyper-space.com.au/
Description: The complete multi-page WordPress test theme for Hyperspace Architecture.
Version: 1.0.0
Requires at least: 6.0
Tested up to: 6.9
Requires PHP: 7.4
Text Domain: hyperspace-architecture
*/

`;

await writeFile(
  resolve(themeDirectory, "style.css"),
  `${themeHeader}${wordpressCss}\n`,
  "utf8",
);
