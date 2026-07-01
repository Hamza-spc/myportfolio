import path from "path";
import { fileURLToPath } from "url";
import { createRequire } from "module";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const require = createRequire(import.meta.url);

async function build() {
  const puppeteer = await import("puppeteer").then(m => m.default);
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  const htmlPath = path.join(__dirname, "en", "resume.html");
  await page.goto(`file://${htmlPath}`, { waitUntil: "networkidle0" });

  const portfolioPdf = path.join(
    __dirname,
    "..",
    "src",
    "containers",
    "greeting",
    "resume-en.pdf"
  );
  const resumeFrPdf = path.join(
    __dirname,
    "..",
    "src",
    "containers",
    "greeting",
    "resume-fr.pdf"
  );
  const cvEnPdf = path.join(__dirname, "en", "Hamza_Simou_CV_EN.pdf");
  const cvFrPdf = path.join(__dirname, "fr", "Hamza_Simou_CV_FR.pdf");

  const pdfOptions = {
    format: "A4",
    printBackground: true,
    margin: { top: "0", right: "0", bottom: "0", left: "0" }
  };

  await page.pdf({ ...pdfOptions, path: portfolioPdf });
  await page.pdf({ ...pdfOptions, path: cvEnPdf });

  const frHtmlPath = path.join(__dirname, "fr", "resume.html");
  await page.goto(`file://${frHtmlPath}`, { waitUntil: "networkidle0" });
  await page.pdf({ ...pdfOptions, path: cvFrPdf });
  await page.pdf({ ...pdfOptions, path: resumeFrPdf });

  await browser.close();
  console.log(`Generated: ${portfolioPdf}`);
  console.log(`Generated: ${resumeFrPdf}`);
  console.log(`Generated: ${cvEnPdf}`);
  console.log(`Generated: ${cvFrPdf}`);
}

build().catch(err => {
  console.error(err);
  process.exit(1);
});
