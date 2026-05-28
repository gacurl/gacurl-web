# AGENTS.md

## Project Purpose

`gacurl-web` is the public CV and consulting website for Greg Curl / CurlTech.
It presents operational systems work, consulting positioning, project proof, and
public contact paths for the consulting practice.

This repository is a public-facing consulting/CV website, not an internal
operations application.

## Project Boundaries

- Preserve the existing Next.js App Router structure unless explicitly directed
  otherwise.
- Keep changes small, safe, incremental, and easy to review.
- Keep styling changes minimal and intentional.
- Prefer implementation slices that are easy to verify manually.
- Do not import `AGENTS.md` or Codex instructions from sibling repositories.
- Treat sibling repositories as separate projects with separate instructions.

## Source-of-Truth Hierarchy

When instructions or context conflict, use this order:

1. Direct user instructions
2. This `AGENTS.md`
3. Current repository state
4. Local docs in `docs/`

## Development Expectations

- Follow the current framework, routing, styling, and deployment assumptions
  already present in the repository.
- Avoid hidden refactors and unrelated cleanup.
- Do not expand scope without explicit user instruction.
- Preserve existing route behavior unless route changes are specifically in
  scope.
- Prefer straightforward implementation over broad abstraction.
- Keep public-facing work aligned with the current lightweight Next.js site
  foundation.

## Content & Messaging Guidance

- Position Greg Curl / CurlTech around operational systems, disciplined
  delivery, practical modernization, and real project work.
- Favor Smart Brevity and operational clarity in public-facing copy.
- Avoid hype, exaggerated claims, inflated outcomes, or startup-marketing
  language.
- Use concrete proof points where available, but do not overstate project scope,
  production status, customer results, or business impact.
- Keep copy direct, credible, and useful to a potential consulting contact.

## Verification Expectations

- Run `npm run build` for implementation changes unless the task is explicitly
  docs-only and does not affect the app.
- For user-facing changes, manually inspect the affected routes at relevant
  desktop and mobile widths when practical.
- Report any verification that could not be completed.
- Include concise manual verification steps in final task reports.

## Non-Goals

- Do not change CI, deployment, DNS, or Vercel settings unless explicitly
  directed.
- Do not create `codex/` or `.codex/` directories unless explicitly directed.
- Do not import operational-app assumptions from AssetTrack or other sibling
  repositories.
- Do not redesign the full site unless explicitly requested.
