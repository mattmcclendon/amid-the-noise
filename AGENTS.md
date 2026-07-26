# Repository workflow

## Editorial standard

When creating or revising an Amid the Noise article, read `docs/STUDIO-MODE.md` in full before drafting. Treat Studio Mode as the publication-wide editorial operating system, not merely a series label.

When the user requests “McClendon strict,” apply the complete McClendon strict review in `docs/STUDIO-MODE.md` before presenting the draft as finished.

When publishing or scheduling writing in this repository:

1. Verify the site build with `npm run build`.
2. Run `npm run sync:sheet`.
3. Run `npm run sync:calendar`.

Treat both external sync commands as required publishing steps unless the user explicitly asks to skip them.
