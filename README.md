# Sureclear

Public holding page for the domain, with a draft customer homepage in progress.

- **`/`** — “under development” holding page (animated infinity logo). This is
  what visitors see today.
- **`/home`** — draft **Sureclear** customer homepage (not linked from `/`,
  `noindex`). Specialist advisory positioning for the cleared derivatives
  industry.

- **Framework:** [Next.js 16](https://nextjs.org) (App Router) + React 19 + TypeScript
- **Styling:** Tailwind CSS v4
- **Hosting:** [Vercel](https://vercel.com)

## Development

```bash
npm install
cp .env.example .env.local
# Add your Web3Forms access key to .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) for the holding page, or
[http://localhost:3000/home](http://localhost:3000/home) for the Sureclear draft.
Contact form: [http://localhost:3000/contact](http://localhost:3000/contact)
(also embedded on `/home#contact`).

## Contact form (Web3Forms)

The contact UI is custom (no provider iframe). Submissions go to our
`/api/contact` route, which forwards to [Web3Forms](https://web3forms.com) and
emails the inbox configured on that access key.

1. Create a free Web3Forms access key for `hello@sureclear.com`.
2. In Vercel → Project → Settings → Environment Variables, add:
   - `WEB3FORMS_ACCESS_KEY` = your access key  
     (Production + Preview). Prefer this server-only name.
3. In Web3Forms, allow the site domain (`sureclear-dev.vercel.app`).
4. In the Web3Forms form settings, enable **hCaptcha** as spam protection
   (required for the step-2 captcha to validate).
5. Redeploy after adding the env var.
6. Test at `/contact`.

Locally, copy `.env.example` to `.env.local` and set `WEB3FORMS_ACCESS_KEY`.

## Deploying to Vercel

Import the repository into Vercel (framework preset: **Next.js**) and deploy.
Add `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` before relying on the contact form.