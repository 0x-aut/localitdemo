# localit-demo

A working Next.js app built to demonstrate Localit. It uses route-based i18n with `next-intl` and the Lingo.dev CLI so you can point a Localit test run at it and see real visual regression results.

Live: [localitdemo.vercel.app](https://localitdemo.vercel.app) — Source: [github.com/0x-aut/localitdemo](https://github.com/0x-aut/localitdemo)

---

## What this is for

This app exists so you can see Localit working against a real translated app without having to set up your own first. It also serves as a reference implementation for how to structure a Next.js app so Localit can crawl it correctly.

---

## Stack

- **Next.js 14** (App Router)
- **next-intl** — translation handling
- **lingo.dev** — translation generation
- **Vercel** — hosting

---

## Using this as a test target

Deploy the demo (or use the live link above) and submit the URL to Localit. Make sure your locale configuration in Localit matches what the demo app is set up with. Localit will crawl each route for both locales, diff the screenshots, and return a full report.

---

## Using this as a reference for your own app

Localit supports two i18n patterns with `next-intl`: route-based and cookie-based. The demo uses the route-based pattern, which is what we recommend. Here is how it works and how to replicate it.

### Route-based (recommended)

All routes are nested under a `[locale]` segment in the App Router:

```
app/
  [locale]/
    layout.tsx
    page.tsx
    about/
      page.tsx
```

The locale prefix appears in the URL, for example `/en/about` and `/fr/about`. Localit can crawl each locale independently by swapping the prefix.

**Cookie-based** is also supported by `next-intl`. The locale is stored in a cookie and the URL stays clean. `next-intl` has detailed documentation on setting this up if you prefer it. Either pattern works with Localit.

---

## Setting up translations in your own app

### 1. Install dependencies

```bash
npm install next-intl
npm install lingo.dev
```

### 2. Initialise Lingo.dev

```bash
npx lingo.dev@latest init
```

This generates an `i18n.json` file at the project root. Configure your source and target locales:

```json
{
  "$schema": "https://lingo.dev/schema/i18n.json",
  "version": "1.10",
  "locale": {
    "source": "en",
    "targets": ["fr", "de"]
  },
  "buckets": {
    "json": {
      "include": ["messages/[locale].json"]
    }
  }
}
```

### 3. Generate translations

```bash
npx lingo.dev@latest run
```

This reads your source locale file, translates every string, and writes the output files for each target locale.

### 4. Set up next-intl

Follow the `next-intl` setup guide at [next-intl-docs.vercel.app](https://next-intl-docs.vercel.app). For route-based i18n, the key steps are:

- Create the `[locale]` folder under `app/` and move all pages into it
- Add a `middleware.ts` at the project root to handle locale detection and redirects
- Set up a `i18n.ts` request config file

The `next-intl` docs are thorough and cover both the route-based and cookie-based approaches in detail.

### 5. Test with Localit

Once your app is deployed and translations are generated, submit the URL to [Localit](https://localit-eight.vercel.app). Localit will crawl each route, compare the locales visually, and report on any differences.

---

## Related repositories

- **Main app** — [github.com/0x-aut/localit](https://github.com/0x-aut/localit)
- **Worker service** — [github.com/0x-aut/localit-worker](https://github.com/0x-aut/localit-worker)