# Hamilton Electrical & Air — Beta preview

React + Vite project for the separate beta website. This is not the live production website.

## Run locally

```bash
npm install
npm run dev
```

## Build for Vercel

- Framework preset: Vite
- Build command: `npm run build`
- Output directory: `dist`
- Root directory: repository root

The beta page is marked `noindex,nofollow`. Keep deployment on the separate beta subdomain; do not change the root domain or existing email MX records.

The quote form validates required fields and then opens a pre-filled WhatsApp message to +61 438 605 733. The visitor must review and send it in WhatsApp. The public email shown is info@hamiltonelectricalair.com.au; confirm the mailbox is configured before launch.
