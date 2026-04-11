# Environment Contract

## Purpose
Define the required environment variables for the gregcurl.dev rebuild before implementation begins.

## Rules
- `.env.example` defines the contract
- `.env.local` is used for local development
- secrets must never be committed
- production secrets must live in the hosting platform environment settings

## Required Variables

### App
- `NEXT_PUBLIC_APP_URL`
  - base application URL for local or deployed environments

### Contact
- `CONTACT_EMAIL`
  - destination email for contact form submissions

### Stripe
- `STRIPE_PUBLIC_KEY`
  - public Stripe key used by the frontend
- `STRIPE_SECRET_KEY`
  - secret Stripe key used server-side only

## Future Variables
These are not required yet, but may be added later:
- `STRIPE_WEBHOOK_SECRET`
- `ADMIN_EMAIL`
- `ADMIN_SESSION_SECRET`

## Result
The project has a clear environment variable contract before application scaffolding and integrations begin.