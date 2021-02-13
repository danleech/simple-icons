#!/usr/bin/env node
/**
 * @fileoverview
 * Generates a MarkDown file that lists every brand name and their slug.
 */

const fs = require("fs");
const path = require("path");

const dataFile = path.resolve(__dirname, "..", "_data", "simple-icons.json");
const slugsFile = path.resolve(__dirname, "..", "slugs.md");

const data = require(dataFile);
const { titleToSlug } = require("./utils.js");

let content = `<!--
This file is automatically generated. If you want to change something, please
update the script at '${__filename.replace(__dirname, "scripts")}'.
-->

# Simple Icons slugs

| Brand name | Brand slug |
| :--- | :--- |
`;

data.icons.forEach(icon => {
  const brandName = icon.title;
  const brandSlug = titleToSlug(icon.title);
  content += `| \`${brandName}\` | \`${brandSlug}\` |\n`
});

fs.writeFileSync(slugsFile, content);
