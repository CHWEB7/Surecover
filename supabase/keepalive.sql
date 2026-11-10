-- Heartbeat table for free-tier keep-alive pings (GitHub Actions weekly upsert).
create table if not exists public.keepalive (
  id int primary key default 1,
  last_ping timestamptz not null default now(),
  note text
);

insert into public.keepalive (id, note)
values (1, 'bootstrap')
on conflict (id) do nothing;

alter table public.keepalive enable row level security;
