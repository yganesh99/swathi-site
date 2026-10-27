# RSVP → Google Sheet setup

RSVPs are submitted by a server action (`src/app/actions/rsvp.ts`) which POSTs each response
to a Google Apps Script web app that appends a row to a Google Sheet.

## 1. Create the Sheet

Create a Google Sheet and name the first tab `RSVPs`. Add this header row:

| submittedAt | name | email | phone | attending | guests | events | dietary | message |

## 2. Add the Apps Script

In the Sheet: **Extensions → Apps Script**, replace the code with:

```js
const SECRET = "change-me"; // must match RSVP_WEBHOOK_SECRET

function doPost(e) {
  const data = JSON.parse(e.postData.contents);
  if (data.secret !== SECRET) {
    return ContentService.createTextOutput("forbidden");
  }
  const sheet = SpreadsheetApp.getActive().getSheetByName("RSVPs");
  sheet.appendRow([
    data.submittedAt, data.name, data.email, data.phone, data.attending,
    data.guests, data.events, data.dietary, data.message,
  ]);
  return ContentService.createTextOutput("ok");
}
```

## 3. Deploy

**Deploy → New deployment → Web app**
- Execute as: **Me**
- Who has access: **Anyone**

Copy the web app URL.

## 4. Configure the site

Locally, create `.env.local`; on Vercel, add these under **Project → Settings → Environment Variables**:

```
RSVP_WEBHOOK_URL=https://script.google.com/macros/s/XXXX/exec
RSVP_WEBHOOK_SECRET=change-me
```

Without `RSVP_WEBHOOK_URL`, local dev just logs RSVPs to the terminal; production shows a
"not open yet" message.
