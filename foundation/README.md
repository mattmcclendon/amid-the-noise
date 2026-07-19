# Amid the Noise Foundation

The standalone public site for `amidthenoise.org`.

## Local development

```sh
npm install
npm run dev
```

## Production build

```sh
npm run build
```

Astro writes the static site to `dist/`.

## Vercel setup

Import the `mattmcclendon/amid-the-noise` repository into Vercel and use these settings:

- Root Directory: `foundation`
- Framework Preset: Astro
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

No environment variables or Vercel adapter are required. Add both `amidthenoise.org` and `www.amidthenoise.org` under Project Settings → Domains, then choose one as the redirect target.
