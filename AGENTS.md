# Repository workflow

When publishing or scheduling writing in this repository:

1. Verify the site build with `npm run build`.
2. Run `npm run sync:sheet`.
3. Run `npm run sync:calendar`.

Treat both external sync commands as required publishing steps unless the user explicitly asks to skip them.
