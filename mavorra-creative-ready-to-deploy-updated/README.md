# Mavorra Creative Website

This is the complete Vercel-ready website for Mavorra Creative.

## Included

- Main website homepage
- Separate landing page with form at `/start-project`
- Approved logo included at `/public/logo.png`
- Logo placed on the website and landing page
- Google Sheets lead capture API at `/api/lead`
- Responsive phone, tablet and desktop styling
- `vercel.json` included so Vercel recognises the project as Next.js
- Ready to upload to GitHub and deploy with Vercel

## Upload to GitHub

Upload the CONTENTS of this folder to GitHub.

Do not upload the ZIP file itself.

The GitHub repository should show these at the top level:

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
```

Use:

```text
Leads
```

for `GOOGLE_SHEETS_SHEET_NAME`.

## Deploy to production

Push the project to the `main` branch on GitHub.

Vercel will then create a production deployment.

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
