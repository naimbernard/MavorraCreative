# Deployment Checklist

## Before upload

Check these files are at the top level of the GitHub repository:

- app
- public
- package.json
- next.config.mjs
- vercel.json
- .env.example
- README.md
- DEPLOYMENT_CHECKLIST.md

## Vercel root directory

If the repo contains this folder directly, set Vercel Root Directory to:

```text
./
```

If you uploaded the folder itself inside another repo folder, set Vercel Root Directory to that folder name.

## Production deployment

Redeploy in Production.

The custom GoDaddy domain will only show the production deployment.

## Environment variables

Required for the Google Sheets form:

```text
GOOGLE_SHEETS_CLIENT_EMAIL
GOOGLE_SHEETS_PRIVATE_KEY
GOOGLE_SHEETS_SPREADSHEET_ID
GOOGLE_SHEETS_SHEET_NAME
NEXT_PUBLIC_SITE_URL
```

## Final test

1. Open the live domain.
2. Check homepage design and logo.
3. Click Start a project.
4. Submit a test lead.
5. Confirm the Google Sheet receives the row.
