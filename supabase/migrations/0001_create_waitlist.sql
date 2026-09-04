-- Waitlist table for the "coming soon" landing page.
-- RLS is enabled and only INSERT is permitted for anonymous visitors, so the
-- public can join the list but cannot read it. Reads happen via the dashboard
-- or the service_role key.

create table if not exists public.waitlist (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  source text not null default 'coming_soon',
  created_at timestamptz not null default now()
);

create unique index if not exists waitlist_email_lower_key
  on public.waitlist (lower(email));

alter table public.waitlist enable row level security;

drop policy if exists "Public can join waitlist" on public.waitlist;
create policy "Public can join waitlist"
  on public.waitlist
  for insert
  to anon, authenticated
  with check (true);
