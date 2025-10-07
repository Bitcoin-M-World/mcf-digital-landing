# MCF.DIGITAL (Next.js App Router)

## Dev
```bash
npm install
npm run dev
```

## Deploy
- Vercel: push to a Git repo and import; defaults work.
- Netlify/Render: build command `npm run build`, output `.next` (use adapter if required).

## Editing
- Pages live under `app/*/page.tsx`.
- Global styles in `app/globals.css`.
- Download flow: `components/DownloadButton` → `LeadModal` → `/api/lead` → open fallback PDF → redirect to `/thanks`.

## Wiring real PDFs later
Drop real files into `public/assets/pdfs/` and keep the same slugs:
- `flare-site-operators.pdf`
- `low-netback.pdf`
- `bitcoin-miners.pdf`
- `hnwi.pdf`

## Assets
Place hero images here:
```
public/assets/
  hero-poster.jpg
  flare-hero.jpg
  netback-hero.jpg
  miners-hero.jpg
  hnwi-hero.jpg
  about-hero.jpg
  pdfs/
    flare-site-operators.pdf
    low-netback.pdf
    bitcoin-miners.pdf
    hnwi.pdf
```
