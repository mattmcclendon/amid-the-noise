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
| Shell | `Layout.astro` | Metadata and document shell | Keep; reduced to the stable page contract |
| Shell | `SiteHeader.astro` | Wordmark and primary navigation frame | Keep |
| Navigation | `PrimaryNav.astro` | Route-aware Writing, Podcast, About, and Search navigation | Keep |
| Shell | `RightRail.astro` | About the Editor and Connect rail | Keep |
| Shell | `SiteFooter.astro` | Legal navigation, sitemap, social links, and back to top | Keep |
| System | `styles/global.css` | Global tokens, base rules, shared shell, and transitional legacy styles | Keep; split legacy page rules as their components are audited |
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
15. Reduced `Layout.astro` from more than 1,000 lines to the document shell and extracted the header, primary navigation, right rail, and footer.
16. Moved global CSS into a dedicated stylesheet, removed duplicated inline rail styles, and established explicit display, reading, UI, and mono font tokens.
17. Restored the complete v4 lexicon source and consolidated emerging, stabilizing, and established concepts into the single `/lexicon` page.
18. Reframed the v4 bibliography content as a standalone reference page at `/research/bibliography`; both reference destinations remain discoverable through the human sitemap.
19. Moved Papers into the Writing library at `/writing/papers`, moved the web paper to `/writing/papers/[slug]`, and retained compatibility redirects for the previous Research and `/papers` index URLs.
20. Moved Field Studies into the Writing library at `/writing/field-studies`, added the complete archive to Home, Writing, and Sitemap, and retained compatibility redirects for all previous Research URLs.
21. Established a site-wide embedded-link contract: prose links use a persistent underline in addition to color, while structurally identifiable navigation, cards, tags, and standalone actions retain their component treatments.
22. Moved Books into the Writing library at `/writing/books`, added contextual discovery from Home, Writing, About, and Sitemap, and retained `/books` as a compatibility redirect.
23. Audited Home link semantics: renamed Selected Learning to Selected Field Studies, restored explicit content-type colors, removed inert tag-like controls, and linked genuine Writing tags to subject pages.
24. Removed Selected Work from Home so the editor's-desk sequence now moves directly from the introduction into Field Studies, Papers, Writing, and Published Writing.
25. Restored the Podcast archival studio illustration and made Archive and Sitemap share one generated top-20 subject list from the published Writing corpus.
26. Moved the five standalone Thought Experiments into Writing, grouped all six Aurelia Reach pieces through tags and contextual linking, and preserved every `/thinking/[slug]` URL as a permanent redirect.

## Findings and next actions

### P0 — resolved in this pass

- The new Podcast navigation target returned 404.
- Collections contradicted the v5 discovery model.
- Writing tags looked interactive but were not links.
- The archive contained dormant filtering code and silently ignored component props.

### P1 — next component pass

- `PublicationLayout.astro` is 500+ lines. Extract `PublicationHeader`, `PublicationPagination`, and `SubscribeForm` while keeping article markup and URLs unchanged.
- `ContentRow` and `PublicationRow` duplicate most structure and CSS. Create one row primitive with explicit variants (`publication`, `destination`) after legacy-section decisions are made.
- `SectionPage.showHeader` is accepted but ignored. Remove the prop after confirming what the legacy callers intended.
- The home page hand-codes several row/card patterns rather than using shared primitives. Recompose it only after the editor's-desk content hierarchy is set.

### P2 — system cleanup

- Replace remaining direct `Inter` declarations with the established UI-font token as each owning component is audited.
- Several color variables serve both current and legacy sections. Keep them until Research, Lexicon, and Career are intentionally repositioned; then remove obsolete section variants.
- `ArchiveImageModule` references an undefined `--surface` token and should add `decoding="async"` plus explicit dimensions where known.
- Tag names need an editorial normalization pass (`AI` vs `Artificial Intelligence`, `UX` vs `User Experience`, and similar pairs) so discovery counts represent concepts rather than spelling variants.
- Search uses Pagefind's supported legacy Default UI. Consider the newer Component UI during the Search redesign, not as part of this navigation pass.

## Verification

- `npm run build` passes.
- 547 static pages build successfully, including 22 compatibility redirects.
- Pagefind indexes 337 pages.
- Desktop and narrow mobile checks show no horizontal overflow.
- Writing and Podcast receive the correct active primary-navigation state.
- Embedded prose links remain identifiable without color; hover and keyboard focus strengthen the underline.
- No push or deployment was performed.
