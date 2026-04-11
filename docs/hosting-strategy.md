# Hosting Strategy

## Purpose
Define the platform split for the gregcurl.dev rebuild so hosting stays clear and stable.

## Decision
- `gregcurl.dev` will be rebuilt as a Next.js application and hosted on Vercel.
- `assettrack.gregcurl.dev` will remain hosted on DigitalOcean.

## Why
- Vercel is the best fit for the public consulting site:
  - optimized for Next.js
  - simple deployment flow
  - easy custom domain support
  - supports forms, server actions, and Stripe checkout patterns cleanly
- DigitalOcean remains the right fit for AssetTrack:
  - already deployed and working
  - container/app hosting is already in place
  - no reason to migrate a stable system just for uniformity

## Operating Model
- Marketing / consulting site on Vercel
- Application systems can live separately where operationally appropriate
- Do not force all systems onto one hosting provider without a clear benefit

## Non-Goals
- No DNS cutover in this issue
- No deployment work in this issue
- No infrastructure migration for AssetTrack

## Result
This repo will be built for Vercel deployment.
AssetTrack remains on DigitalOcean.