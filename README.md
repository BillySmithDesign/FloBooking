# FloBooking

### The conversion-first booking experience for Square Appointments

[![Next.js](https://img.shields.io/badge/Next.js-16-111111?style=flat-square&logo=nextdotjs)](https://nextjs.org/)
[![Square API](https://img.shields.io/badge/Square-Bookings_API-006AFF?style=flat-square&logo=square)](https://developer.squareup.com/)
[![Vercel](https://img.shields.io/badge/Deploy-Vercel-111111?style=flat-square&logo=vercel)](https://vercel.com/)
[![License](https://img.shields.io/badge/License-Apache--2.0-C98668?style=flat-square)](LICENSE)

FloBooking replaces Square's generic hosted booking portal with a fast, branded and mobile-first customer journey. Services, live availability and confirmed appointments remain powered by Square—the experience customers see is yours.

**[View the live demo →](https://flo-booking-xi.vercel.app/book)**

## Why FloBooking?

Most booking tools optimise for administration. FloBooking optimises for the moment a customer decides to book.

In a timed salon benchmark, the original custom experience reached the final booking action in **33 seconds**, compared with **1 minute 36 seconds** through Square Appointments. FloBooking turns those findings into an open-source product:

- four clear steps from service to confirmation;
- no customer account or verification wall;
- live dates immediately after service selection;
- customer details requested only when intent is highest;
- responsive presentation for mobile, desktop and website embeds;
- branded confirmation without redirecting into another company's portal.

## The booking journey

| Step | Customer experience | Conversion principle |
| --- | --- | --- |
| **1. Services** | Browse live Square services by category and combine an appointment | Make the offer easy to understand |
| **2. Date** | See only dates with real availability | Remove dead ends and uncertainty |
| **3. Time** | Choose from available appointment times | Keep decisions focused |
| **4. Details** | Enter contact details once and confirm | Delay effort until intent is established |

## Features

- Live Square service catalogue, pricing and durations
- Multi-service appointment selection
- Real-time Square Bookings availability
- Optional team-member restriction
- Customer creation and matching in Square
- Direct appointment creation in Square
- Premium responsive booking interface
- Website iframe embedding
- Social, email and Google Business Profile booking links
- Customer-owned credentials and deployment
- No central FloBooking database or authentication dependency
- Reduced-motion accessibility support

## Customer-owned architecture

FloBooking is deliberately not a multi-tenant SaaS. Each business owns its complete deployment:

```text
Customer website or social link
              ↓
      Customer's FloBooking app
              ↓
    Customer's Square API account
              ↓
Services · Availability · Customers · Bookings
```

Every installation has its own GitHub repository, Vercel project, Square application, domain and environment variables. Square remains the source of truth, so the core booking flow requires no separate database.

## Deploy to Vercel

### 1. Create the project

Fork this repository or import it into a new Vercel project.

### 2. Configure Square

Create a Square application and obtain a production access token with the permissions required for:

- Catalog
- Bookings
- Customers
- Locations

### 3. Add environment variables

Copy `.env.example` into your local environment or add the same variables in Vercel:

```bash
SQUARE_ENV=production
SQUARE_ACCESS_TOKEN=
SQUARE_LOCATION_ID=
SQUARE_TEAM_MEMBER_ID=

NEXT_PUBLIC_BUSINESS_NAME=Your Studio
NEXT_PUBLIC_BUSINESS_LOCATION=Adelaide, SA
NEXT_PUBLIC_TIMEZONE=Australia/Adelaide
NEXT_PUBLIC_CURRENCY=AUD
NEXT_PUBLIC_LOCALE=en-AU
NEXT_PUBLIC_LOGO_URL=
NEXT_PUBLIC_WEBSITE_URL=
NEXT_PUBLIC_INSTAGRAM_URL=
NEXT_PUBLIC_PHONE=
NEXT_PUBLIC_EMAIL=
NEXT_PUBLIC_BOOKING_POLICY=
```

`SQUARE_TEAM_MEMBER_ID` is optional. Leave it empty to return availability across all bookable team members.

### 4. Verify the connection

Deploy, then open:

```text
https://your-domain.com/api/square/health
```

A working connection returns `"ok": true` and the configured Square location.

## Embed FloBooking

Use the full booking page as an iframe on any website that accepts custom HTML:

```html
<iframe
  src="https://booking.example.com/book?embed=1"
  title="Book an appointment"
  style="width:100%;height:780px;border:0;border-radius:20px"
  loading="lazy"
></iframe>
```

Instagram, Facebook and most social platforms do not support iframe widgets. Link directly to `/book` instead.

## Local development

```bash
git clone https://github.com/BillySmithDesign/FloBooking.git
cd FloBooking
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000/book](http://localhost:3000/book).

Production verification:

```bash
npm run build
npm run typecheck
```

## Project structure

```text
app/book/                         Customer booking experience
app/api/square/services/          Live Square catalogue
app/api/square/availability/      Availability search
app/api/square/book/              Customer and booking creation
app/api/square/health/            Configuration health check
lib/square.ts                     Server-only Square client
```

## Security

- Square access tokens are used only by server routes.
- Never prefix `SQUARE_ACCESS_TOKEN` with `NEXT_PUBLIC_`.
- Never commit `.env.local` or include credentials in booking URLs.
- Rotate exposed or rejected Square tokens immediately.
- Add rate limiting and bot protection appropriate to production traffic.

## Managed deployment and integration

FloBooking is open source. Billy Smith Design offers paid setup, branding, Square integration, website embedding, deployment and ongoing management for businesses that want a fully managed implementation.

## Contributing

Issues and pull requests are welcome. Please keep changes aligned with the core principle: reduce booking friction without hiding important customer decisions.

## License

Licensed under [Apache-2.0](LICENSE). Commercial deployment, integration and managed-service offerings are permitted.
