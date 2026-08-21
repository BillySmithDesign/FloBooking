# FloBooking

An open-source, conversion-first booking portal for Square Appointments. FloBooking keeps service discovery, live availability and booking in one branded mobile journey instead of sending customers through Square's hosted portal.

## Why it exists

In a timed salon benchmark, the original custom flow reached the final booking action in 33 seconds versus 1 minute 36 seconds for Square Appointments. FloBooking is built around that difference: fewer decisions, no account wall, live availability immediately after service selection, and customer details collected once at the end.

## Ownership model

FloBooking is not a central SaaS. Every business deploys its own copy and owns its repository, Vercel project, Square credentials, domain, and any optional authentication or database added later. The core flow needs neither authentication nor a database: Square remains the source of truth for services, availability, customers and appointments.

## Deploy

1. Fork this repository or import it into Vercel.
2. Create a Square application and production access token with Catalog, Customers and Bookings permissions.
3. Add the variables from `.env.example` to the Vercel project.
4. Deploy and test `/api/square/health` before sharing `/book`.
5. Embed `/book?embed=1` using:

```html
<iframe src="https://booking.example.com/book?embed=1" title="Book an appointment" style="width:100%;height:780px;border:0;border-radius:20px" loading="lazy"></iframe>
```

Social platforms normally do not allow iframe embeds. Link directly to `/book` from Instagram, Facebook, Google Business Profile, email and SMS.

## Local development

```bash
npm install
cp .env.example .env.local
npm run dev
```

## Security

`SQUARE_ACCESS_TOKEN` is used only by server routes. Never prefix it with `NEXT_PUBLIC_`, commit `.env.local`, or put credentials in a booking URL. Public deployments should add rate limiting and bot protection appropriate to their traffic.

## Licence

Apache-2.0. Commercial deployment, integration and managed-service offerings are permitted.
