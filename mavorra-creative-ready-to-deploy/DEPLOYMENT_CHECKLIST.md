# Mavorra Creative Deployment Checklist

## Upload to GitHub

Upload the CONTENTS of this folder to GitHub.

Do not upload the ZIP file itself.

Your GitHub repository should show these files and folders at the top level:

- app
- public
- package.json
- next.config.mjs
- vercel.json
- .env.example
- README.md
- DEPLOYMENT_CHECKLIST.md

## Vercel production deployment

Your domain can be configured correctly and still show no website if there is no production deployment.

To create a production deployment:

1. Push this project to the `main` branch on GitHub.
2. In Vercel, import or connect that GitHub repository.
3. Vercel should deploy automatically from `main`.

Alternative:

Run this inside the project folder:

```bash
npm install
vercel --prod
```

## Google Sheets setup

Create a Google Sheet tab named:

```text
Leads
```

Add these columns in row 1:

```text
Date | Name | Email | Phone | Business Name | Marketing Type | Start Timeline | Project Details | Source
```

Add these environment variables in Vercel:

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

## Final test

After deployment:

1. Open your domain.
2. Click Start a project.
3. Submit the form.
4. Check the Google Sheet.
