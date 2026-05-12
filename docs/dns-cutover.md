# DNS Cutover Strategy 

## Purpose
Define a safe and reversible process to transition gregcurl.dev from GitHub Pages to Vercel without downtime.

## Current State
- `gregcurl.dev` → GitHub Pages (Jekyll site from `cv`)
- `assettrack.gregcurl.dev` → DigitalOcean (active app)

## Target State
- `gregcurl.dev` → Vercel (Next.js app)
- `assettrack.gregcurl.dev` → remains on DigitalOcean

## Strategy (Parallel Build)
1. Build the new site fully on Vercel using a temporary domain (e.g., vercel.app URL)
2. Validate:
   - all routes render
   - contact flow works
   - payment flow works (when implemented)
3. Only after full validation, proceed to DNS cutover

## Cutover Steps
1. Update DNS records:
   - point apex/root domain to Vercel
   - update `www` if applicable
2. Remove or update GitHub Pages configuration (CNAME in `cv`)
3. Allow DNS propagation
4. Verify:
   - homepage loads from Vercel
   - all routes function
   - HTTPS is active

## Rollback Plan
- revert DNS records back to GitHub Pages
- confirm old site resumes control
- no data loss expected (static site)

## Non-Goals
- No DNS changes in this issue
- No deployment actions
- No removal of legacy site

## Result
A clear, low-risk migration path from GitHub Pages to Vercel.