# Public Copy Cohesion Recon

Issue: 2-4 - Recon public copy cohesion and readability after rewrites

Scope reviewed:

- `/` from `app/page.tsx`
- `/services` from `app/services/page.tsx`
- `/projects` from `app/projects/page.tsx`

This is docs-only recon. No public route copy was changed.

## 1. Executive Finding

Milestone 2 is close, but I recommend one small follow-up cleanup issue before
closing it.

The homepage, services page, and projects page now clearly point in the same
direction: CurlTech helps small teams turn messy workflows, scattered tracking,
unclear handoffs, and practical operating problems into simpler systems people
can actually use.

The core phrase lands well:

> Simple systems for messy work.

The remaining issue is not strategy. It is cohesion. The rewritten hero,
services page, and projects page sound more direct and human than a few older
homepage sections and CTA labels. A small Issue 2-5 would make the milestone
feel finished instead of mostly finished.

## 2. Page-by-Page Assessment

### `/`

Overall: strong hero, mixed lower-page cohesion.

The hero is the clearest expression of the new positioning. It says what
CurlTech does, who it helps, and what kind of messy work it addresses. The
supporting note adds useful examples: tracking, records, status, handoffs, and
unwritten steps.

The lower homepage still has some older wording that feels more formal:

- "Capability Summary"
- "Operational systems"
- "Practical modernization"
- "Delivery discipline"
- "Review project direction"

These are accurate, but less plain-spoken than the new hero, services, and
projects copy.

### `/services`

Overall: strongest page for customer recognition.

The services page now starts from situations a visitor can recognize:
spreadsheets and email, memory-based handoffs, tools people work around, and
processes that outgrew clear ownership.

This page does the best job of making the visitor think, "That sounds like my
team." It is practical, readable, and not corporate.

The line "another ball gets dropped" is clear and human. It is a little more
casual than the rest of the site, but still within the desired voice.

### `/projects`

Overall: much clearer proof, with one tone watch item.

The projects page now shows why the work matters, not just what was built. The
problem / approach / proof point pattern is useful and easy to scan.

The project descriptions stay public-safe. They do not add private names,
metrics, testimonials, or inflated claims.

The only watch item is "Practical proof points, not polished case-study
theater." It is memorable and not corporate, but it is the sharpest line in the
three-page set. If the site wants a slightly steadier tone, this could be
softened later.

## 3. Cross-Page Cohesion Notes

The three pages now share a clear vocabulary:

- messy work
- scattered spreadsheets
- email handoffs
- unclear processes
- tracking
- records
- handoffs
- practical tools
- systems people can actually use
- easier to run

That is the right language for the CurlTech direction.

The main cohesion gap is that the homepage still has some older section labels
and capability card titles that sound more like consulting categories than the
newer customer-situation copy.

This does not break the site. It just makes the homepage feel like it has one
new lead voice and a few older supporting blocks.

## 4. CTA Consistency Notes

The strongest CTA is:

- "Talk through a messy workflow"

It is specific, low-pressure, and aligned with the new positioning.

The services page does not have a direct CTA, but its "How It Starts" section
explains the first step well.

The weakest CTA wording is still on the lower homepage:

- "Go to contact"
- "Review project direction"

Those labels work, but they are less human than the updated hero CTA. They are
good candidates for the follow-up cleanup.

## 5. Readability and Voice Notes

Readability is now close to the target. The rewritten pages mostly use short
sentences, familiar words, and concrete examples.

The voice is:

- practical
- CurlTech-first
- small-business friendly
- more energetic than before
- less corporate than before

The site does not feel flashy or inflated. It also does not sound like a SaaS
product. It stays grounded in workflow cleanup, operational clarity, and useful
systems.

The remaining generic terms are mostly on the homepage:

- operational systems
- practical modernization
- delivery discipline
- operational clarity
- consulting shaped by operations

These phrases are not wrong. They just do not carry the new voice as well as
"messy work," "cleaner handoffs," and "tools people can actually use."

## 6. Recommended Follow-Up

Create Issue 2-5 for targeted homepage cohesion cleanup.

Suggested title:

> Issue 2-5: Tighten homepage supporting copy and CTA cohesion

Suggested scope:

- Keep the current homepage hero.
- Update only the homepage capability section labels/card copy if needed.
- Tighten the lower homepage CTA labels.
- Do not touch `/services`, `/projects`, `/about`, or `/contact`.
- Do not change layout, styles, metadata, assets, packages, or routes.

Why it matters:

The hero, services page, and projects page now have the right voice. A small
homepage cleanup would make the supporting homepage sections sound like the same
site instead of older copy under a newer hero.

## 7. Milestone 2 Close Recommendation

Recommendation: create Issue 2-5 before closing Milestone 2.

Milestone 2 is strategically ready. The positioning is clear and the rewritten
routes support "Simple systems for messy work." The remaining work is small,
copy-only polish to make the homepage support sections and CTA wording match the
newer voice.

If Milestone 2 needs to close immediately, the current copy is usable. If the
goal is for the milestone to feel complete, Issue 2-5 is the safer finish.
