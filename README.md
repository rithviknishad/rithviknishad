# rithviknishad — portfolio

Electrical-engineering themed portfolio. Astro + Tailwind v4. Sage green, monospace, terminal vibes.

## Dev

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output -> dist/
```

## Edit me

- `src/data/site.ts` — name, role, taglines, social links
- `src/data/projects.ts` — project cards (templates seeded)
- `src/data/life100.ts` — the 100-item checklist (read-only; set `done: true` to mark complete)
- `src/styles/global.css` — theme colors / fonts

life-100 is read-only for visitors; completion is author-controlled via the data file.

## Deploy

Static site — drop `dist/` on Cloudflare Pages, or connect the repo.
