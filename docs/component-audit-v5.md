# Amid the Noise v5 Component Audit

Date: 2026-07-13

## Product constraints

- Primary navigation: Writing, Podcast, About, Search.
- Home is the editor's desk; Writing is the library.
- Preserve `/writing/[slug]` article URLs.
- Tags are the discovery model. Collections are retired.
- Preserve the shared left-content/right-rail layout.
- Do not push or deploy while Vercel bandwidth is over quota.

## Current component map

| Layer | Component | Role | Audit status |
| --- | --- | --- | --- |
| Shell | `Layout.astro` | Metadata, header, primary navigation, two-column frame, rail, footer, global tokens/styles | Keep; split in a later pass |
| Publication | `PublicationLayout.astro` | Long-form article header, body, pagination, subscription CTA | Keep; extract article subcomponents later |
| Section | `SectionPage.astro` | Section heading and contextual intro | Keep; local navigation removed |
| Listing | `PublicationRow.astro` | Writing title, date, summary, and linked tags | Keep; canonical writing-row primitive |
| Listing | `ContentRow.astro` | Research/career/lexicon listing row | Keep temporarily; reconcile with `PublicationRow` |
| Listing | `DestinationRow.astro` | Minimal destination link row | Keep until the remaining legacy sections are resolved |
| Navigation | `SectionMoreLink.astro` | Section-level continuation link | Keep |
| Media | `ArchiveImageModule.astro` | Editorial image with optional caption and credit | Keep; align tokens and image attributes |
| Icons | `components/icons/*` | Social and platform marks | Keep used icons; inventory the full set before pruning |

## Changes completed in this pass

1. Rebuilt the primary navigation from a single data structure with the Search SVG and route-aware active states.
2. Replaced the placeholder `/podcast` page with a concise launch narrative, collaboration invitation, and studio-rebuilding context.
3. Retired the Collections route tree, component, and data model.
4. Reframed Writing as a library: Start Here, Browse by Subject, Recent Writing, and Archive.
5. Made tags valid discovery links on Writing, Archive, and tag result pages.
6. Repaired the writing-row contract. The archive previously passed unsupported props and its filtering script targeted classes the component never rendered.
7. Removed an empty component and untouched Astro starter component/assets.
8. Preserved the global two-column content/rail shell and all `/writing/[slug]` routes.
9. Normalized the layout title contract so callers that already include the site name do not render it twice.
10. Restored the Search SVG, moved Follow links into the footer, and added a compact footer sitemap.
11. Removed the second-level navigation pattern; Writing now links to the full archive within its introduction.
12. Added a human-readable `/sitemap` page organized around Writing, Podcast, About, and Legal.
13. Reframed Home as the editor's desk and added a concise About the Editor/Connect rail.
14. Added `mattm.cc` to Related Projects on the About page.

## Findings and next actions

### P0 — resolved in this pass

- The new Podcast navigation target returned 404.
- Collections contradicted the v5 discovery model.
- Writing tags looked interactive but were not links.
- The archive contained dormant filtering code and silently ignored component props.

### P1 — next component pass

- `Layout.astro` is 1,000+ lines and owns unrelated page styles. Extract `SiteHeader`, `PrimaryNav`, `RightRail`, and `SiteFooter`, then move global tokens/base rules into a dedicated stylesheet.
- `PublicationLayout.astro` is 500+ lines. Extract `PublicationHeader`, `PublicationPagination`, and `SubscribeForm` while keeping article markup and URLs unchanged.
- `ContentRow` and `PublicationRow` duplicate most structure and CSS. Create one row primitive with explicit variants (`publication`, `destination`) after legacy-section decisions are made.
- `SectionPage.showHeader` is accepted but ignored. Remove the prop after confirming what the legacy callers intended.
- The home page hand-codes several row/card patterns rather than using shared primitives. Recompose it only after the editor's-desk content hierarchy is set.

### P2 — system cleanup

- The global type system mixes Georgia, Source Serif 4, and an unloaded Inter declaration. Establish explicit display, reading, and UI font tokens.
- Several color variables serve both current and legacy sections. Keep them until Research, Lexicon, and Career are intentionally repositioned; then remove obsolete section variants.
- `ArchiveImageModule` references an undefined `--surface` token and should add `decoding="async"` plus explicit dimensions where known.
- Tag names need an editorial normalization pass (`AI` vs `Artificial Intelligence`, `UX` vs `User Experience`, and similar pairs) so discovery counts represent concepts rather than spelling variants.
- Search uses Pagefind's supported legacy Default UI. Consider the newer Component UI during the Search redesign, not as part of this navigation pass.

## Verification

- `npm run build` passes.
- 527 static pages build successfully.
- Pagefind indexes 337 pages.
- Desktop and narrow mobile checks show no horizontal overflow.
- Writing and Podcast receive the correct active primary-navigation state.
- No push or deployment was performed.
