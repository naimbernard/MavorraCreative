import { google } from 'googleapis';

export async function POST(request) {
  try {
    const body = await request.json();

    const requiredFields = ['name', 'email', 'phone', 'businessName', 'marketingSupport', 'startTimeline'];

    for (const field of requiredFields) {
      if (!body[field] || String(body[field]).trim() === '') {
        return Response.json({ ok: false, message: `Missing required field: ${field}` }, { status: 400 });
      }
    }

    const clientEmail = process.env.GOOGLE_SHEETS_CLIENT_EMAIL;
    const privateKey = process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, '\n');
    const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
    const sheetName = process.env.GOOGLE_SHEETS_SHEET_NAME || 'Leads';

    if (!clientEmail || !privateKey || !spreadsheetId) {
      return Response.json(
        { ok: false, message: 'Google Sheets environment variables are not configured yet.' },
        { status: 500 }
      );
    }

    const auth = new google.auth.JWT({
      email: clientEmail,
      key: privateKey,
      scopes: ['https://www.googleapis.com/auth/spreadsheets']
    });

    const sheets = google.sheets({ version: 'v4', auth });

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: `${sheetName}!A:I`,
      valueInputOption: 'USER_ENTERED',
      insertDataOption: 'INSERT_ROWS',
      requestBody: {
        values: [[
          new Date().toISOString(),
          body.name,
          body.email,
          body.phone,
          body.businessName,
          body.marketingSupport,
          body.startTimeline,
          body.projectDetails || '',
          body.source || 'Mavorra Creative website'
        ]]
      }
    });

    return Response.json({ ok: true, message: 'Lead saved successfully.' });
  } catch (error) {
    console.error('Lead submission error:', error);
    return Response.json(
      { ok: false, message: 'Something went wrong while saving the lead.' },
      { status: 500 }
    );
  }
}
