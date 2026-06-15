# Mavorra Creative Website

Premium Vercel-ready website for Mavorra Creative.

## Included

- SEO-friendly homepage
- Instagram and Facebook links added to footer
- Separate landing page with lead form at `/start-project`
- Approved logo in `/public/logo.png`
- Google Sheets lead capture API at `/api/lead`
- Responsive design for phone, tablet and desktop
- Premium animations, reveal effects, hover effects and layered visual styling
- Open Graph metadata, Twitter metadata, robots file, sitemap file and structured data
- `vercel.json` for Vercel deployment

## Upload to GitHub

Upload the CONTENTS of this folder to GitHub.

Do not upload the ZIP file itself.

Your GitHub repository should show these at the top level:

```text
app
public
package.json
next.config.mjs
vercel.json
.env.example
README.md
DEPLOYMENT_CHECKLIST.md
```

## Google Sheet columns

Create a Google Sheet tab called:

```text
Leads
```

Add these columns in row 1:

```text
Date | Name | Email | Phone | Business Name | Marketing Type | Start Timeline | Project Details | Source
```

## Vercel environment variables

Add these inside Vercel Project Settings > Environment Variables:

```text
GOOGLE_SHEETS_CLIENT_EMAIL
GOOGLE_SHEETS_PRIVATE_KEY
GOOGLE_SHEETS_SPREADSHEET_ID
GOOGLE_SHEETS_SHEET_NAME
NEXT_PUBLIC_SITE_URL
```

Use:

```text
Leads
```

for `GOOGLE_SHEETS_SHEET_NAME`.

Use your live domain for:

```text
NEXT_PUBLIC_SITE_URL
```

Example:

```text
https://mavorracreative.com
```

## Deploy to production

Push the project to the `main` branch on GitHub.

Vercel will create a production deployment.

If using Vercel CLI:

```bash
npm install
vercel --prod
```

## Local testing

```bash
npm install
npm run dev
```

Open:

```text
http://localhost:3000
```
