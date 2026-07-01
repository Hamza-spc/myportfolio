import fs from "fs";
import path from "path";
import {fileURLToPath} from "url";
import {createRequire} from "module";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, "..", "public");
const require = createRequire(import.meta.url);
const puppeteer = require("../cv/node_modules/puppeteer");

const BEIGE = "#F5F0E6";
const TEXT_COLOR = "#000000";

function faviconHtml(size) {
  const fontSize = Math.round(size * 0.42);
  const radius = Math.round(size * 0.22);

  return `<!DOCTYPE html>
<html>
  <head>
    <style>
      * { margin: 0; padding: 0; box-sizing: border-box; }
      html, body {
        width: ${size}px;
        height: ${size}px;
        background: transparent;
      }
      .icon {
        width: ${size}px;
        height: ${size}px;
        border-radius: ${radius}px;
        background: ${BEIGE};
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${TEXT_COLOR};
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
        font-size: ${fontSize}px;
        font-weight: 800;
        letter-spacing: -0.04em;
        line-height: 1;
        user-select: none;
      }
    </style>
  </head>
  <body>
    <div class="icon">HS</div>
  </body>
</html>`;
}

async function renderPng(size) {
  const browser = await puppeteer.launch({headless: true});
  const page = await browser.newPage();
  await page.setViewport({width: size, height: size, deviceScaleFactor: 1});
  await page.setContent(faviconHtml(size), {waitUntil: "networkidle0"});
  const buffer = await page.screenshot({
    type: "png",
    omitBackground: true,
    clip: {x: 0, y: 0, width: size, height: size}
  });
  await browser.close();
  return buffer;
}

function writeIco(png16, png32) {
  const images = [
    {width: 16, height: 16, data: png16},
    {width: 32, height: 32, data: png32}
  ];

  const count = images.length;
  const headerSize = 6;
  const dirEntrySize = 16;
  const offset = headerSize + dirEntrySize * count;

  let dataOffset = offset;
  const entries = images.map(image => {
    const entry = {
      width: image.width,
      height: image.height,
      size: image.data.length,
      offset: dataOffset
    };
    dataOffset += image.data.length;
    return entry;
  });

  const totalSize = dataOffset;
  const buffer = Buffer.alloc(totalSize);

  buffer.writeUInt16LE(0, 0);
  buffer.writeUInt16LE(1, 2);
  buffer.writeUInt16LE(count, 4);

  entries.forEach((entry, index) => {
    const base = headerSize + index * dirEntrySize;
    buffer.writeUInt8(entry.width === 256 ? 0 : entry.width, base);
    buffer.writeUInt8(entry.height === 256 ? 0 : entry.height, base + 1);
    buffer.writeUInt8(0, base + 2);
    buffer.writeUInt8(0, base + 3);
    buffer.writeUInt16LE(1, base + 4);
    buffer.writeUInt16LE(32, base + 6);
    buffer.writeUInt32LE(entry.size, base + 8);
    buffer.writeUInt32LE(entry.offset, base + 12);
  });

  entries.forEach((entry, index) => {
    images[index].data.copy(buffer, entry.offset);
  });

  return buffer;
}

const safariPinnedSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <rect width="512" height="512" rx="112" fill="#000"/>
  <text x="256" y="330" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="260" font-weight="800" fill="#000">HS</text>
</svg>
`;

async function main() {
  const outputs = [
    {name: "favicon-16x16.png", size: 16},
    {name: "favicon-32x32.png", size: 32},
    {name: "apple-touch-icon.png", size: 180},
    {name: "android-chrome-192x192.png", size: 192},
    {name: "android-chrome-384x384.png", size: 384},
    {name: "mstile-150x150.png", size: 150}
  ];

  const rendered = {};

  for (const output of outputs) {
    const png = Buffer.from(await renderPng(output.size));
    const filePath = path.join(publicDir, output.name);
    fs.writeFileSync(filePath, png);
    rendered[output.size] = png;
    console.log(`Generated ${output.name}`);
  }

  const ico = writeIco(rendered[16], rendered[32]);
  fs.writeFileSync(path.join(publicDir, "favicon.ico"), ico);
  console.log("Generated favicon.ico");

  fs.writeFileSync(path.join(publicDir, "safari-pinned-tab.svg"), safariPinnedSvg);
  console.log("Generated safari-pinned-tab.svg");

  const svgFavicon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <rect width="64" height="64" rx="14" fill="${BEIGE}"/>
  <text x="32" y="43" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="28" font-weight="800" fill="${TEXT_COLOR}">HS</text>
</svg>
`;
  fs.writeFileSync(path.join(publicDir, "favicon.svg"), svgFavicon);
  console.log("Generated favicon.svg");
}

main().catch(error => {
  console.error(error);
  process.exit(1);
});
