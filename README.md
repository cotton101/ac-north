# AC North

Marketing site for AC North, an SEO company. Next.js 16 (App Router), Tailwind CSS 4, fully static.

## Develop

```bash
npm install
npm run dev
```

## Structure

- `src/content/services.ts` — the seven service pages (copy lives here)
- `src/content/faq.ts` — FAQ questions and answers
- `src/lib/site.ts` — site name, description, navigation and `SITE_URL`
- `src/app` — pages, sitemap, robots, OG image

Set `SITE_URL` in `src/lib/site.ts` to the live domain before launch.
