# CV — Hamza Simou

Professional 1-page CV in **English** and **French**.

## Files

| File | Description |
|------|-------------|
| `en/resume.html` | English CV (portfolio-style, print-ready) |
| `fr/resume.html` | French CV |
| `en/resume.tex` | English LaTeX source |
| `fr/resume.tex` | French LaTeX source |
| `en/Hamza_Simou_CV_EN.pdf` | Generated English PDF |
| `build-pdf.mjs` | Builds PDF from HTML |

The portfolio download button uses `src/containers/greeting/resume.pdf` (English).

## Generate PDF (HTML → PDF)

```bash
cd cv
npm install puppeteer
node build-pdf.mjs
```

Or open `en/resume.html` in Chrome → **Print → Save as PDF** (A4, no margins, background graphics on).

## Compile LaTeX (optional)

Upload `en/resume.tex` or `fr/resume.tex` to [Overleaf](https://www.overleaf.com), or locally:

```bash
pdflatex resume.tex
```

## Customize

Edit the HTML or `.tex` files, then re-run `node build-pdf.mjs` to update the portfolio download.
