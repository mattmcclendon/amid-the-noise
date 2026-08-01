# Repository workflow

## Editorial standard

Before discovery, outlining, or drafting, read `docs/STUDIO-MODE.md` in full whenever a request invokes **Studio Mode**, **McClendon Protocol**, **McClendon voice**, **McClendon strict**, **Amid the Noise**, “write this in my voice,” “this should sound like me,” or an equivalent request for Matthew McClendon’s established long-form voice. Treat Studio Mode as the publication-wide editorial operating model, not merely a style guide or series label, and do not rely on a remembered or summarized version.

Once invoked, keep Studio Mode active for that writing effort until Matthew explicitly exits it or changes the requested form. Follow the deterministic workflow in `docs/STUDIO-MODE.md` without restating it unless Matthew asks to see the process.

When the user requests “McClendon strict,” apply the complete McClendon strict review in `docs/STUDIO-MODE.md` before presenting the draft as finished.

When publishing or scheduling writing in this repository:

1. Verify the site build with `npm run build`.
2. Run `npm run sync:sheet`.
3. Run `npm run sync:calendar`.

Treat both external sync commands as required publishing steps unless the user explicitly asks to skip them.
