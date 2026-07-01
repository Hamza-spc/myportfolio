# Hamza Simou — Portfolio

Personal portfolio website built with [developerFolio](https://github.com/saadpasta/developerFolio).

**Live site:** [hamza-spc.github.io/myportfolio](https://hamza-spc.github.io/myportfolio/)

## Local development

```bash
cp env.example .env
# Add a GitHub personal access token (no scopes required) to REACT_APP_GITHUB_TOKEN

npm install
npm start
```

## Customize content

Edit `src/portfolio.js` to update your bio, experience, projects, skills, and contact info.

## Deploy

### Option A — GitHub Pages (free)

The 404 happens because **GitHub Pages is not enabled yet** on the repo.

1. Open **[Settings → Pages](https://github.com/Hamza-spc/myportfolio/settings/pages)**
2. Under **Build and deployment → Source**, choose **Deploy from a branch**
3. Set **Branch** to `gh-pages` and folder to `/ (root)`
4. Click **Save** — the site will be live in 1–2 minutes at:
   [https://hamza-spc.github.io/myportfolio/](https://hamza-spc.github.io/myportfolio/)

To deploy manually after changes:

```bash
npm run deploy
```

Pushes the build to the `gh-pages` branch. Source code stays on `main`.

### Option B — Vercel (recommended, easier)

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. **Import** the `Hamza-spc/myportfolio` repo
3. Vercel auto-detects settings from `vercel.json` — click **Deploy**
4. Your site will be live at a URL like `https://myportfolio-xxx.vercel.app`

No branch setup needed. Future pushes to `main` auto-deploy.

## Pin GitHub repos

The Open Source Projects section shows your **pinned** GitHub repositories. Pin your best repos on your GitHub profile for them to appear here.
