# Surecover

Marketing site for **Surecover**, an independent financial consultancy. This
first iteration is a "coming soon" landing page with a waitlist signup, built to
grow into the full site (landing, services, bio, and contact form).

- **Framework:** [Next.js 16](https://nextjs.org) (App Router) + React 19 + TypeScript
- **Styling:** Tailwind CSS v4
- **Database:** [Supabase](https://supabase.com) (Postgres) — waitlist signups
- **Hosting:** [Vercel](https://vercel.com)

## Tech overview

- The landing page (`src/app/page.tsx`) renders the "coming soon" hero and a
  waitlist form.
- The form posts to a route handler (`src/app/api/notify/route.ts`) that inserts
  the email into the `public.waitlist` table in Supabase.
- Row Level Security is enabled on `waitlist`; the public may only `INSERT`
  (join the list), not read it. See `supabase/migrations/0001_create_waitlist.sql`.

## Environment variables

Copy `.env.example` to `.env.local` and fill in your Supabase project values
(Project Settings → API in the Supabase dashboard):

| Variable | Description |
| --- | --- |
| `NEXT_PUBLIC_SUPABASE_URL` | Your Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | The **publishable / anon** key (safe for the browser) |

Never put the `service_role` / secret key in a `NEXT_PUBLIC_` variable — those
are exposed to the browser.

## Deploying to Vercel

1. Import the repository into Vercel (framework preset: **Next.js**).
2. In **Project → Settings → Environment Variables**, add
   `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` for the
   Production (and Preview) environments.
3. Deploy. Vercel builds with `next build` automatically.

The app builds and runs even without Supabase configured — the waitlist form
simply returns a friendly "not available yet" message until the environment
variables are set.

## Database migrations

The schema lives in `supabase/migrations/`. Apply it to a Supabase project with
the [Supabase CLI](https://supabase.com/docs/guides/local-development):

```bash
supabase link --project-ref <your-project-ref>
supabase db push
```
