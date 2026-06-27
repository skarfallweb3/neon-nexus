import { createFileRoute } from "@tanstack/react-router";
import {
  Search,
  Wallet,
  Compass,
  LayoutGrid,
  BarChart3,
  Gift,
  Rocket,
  UserCircle2,
  Bell,
  ChevronRight,
  ChevronLeft,
  Flame,
  Heart,
  Verified,
  Image as ImageIcon,
  Music2,
  Gamepad2,
  Camera,
  Palette,
  Globe2,
  TrendingUp,
  TrendingDown,
  Twitter,
  Github,
  Send,
  Sparkles,
} from "lucide-react";

import heroArt from "@/assets/nft-hero.jpg";
import n1 from "@/assets/nft-1.jpg";
import n2 from "@/assets/nft-2.jpg";
import n3 from "@/assets/nft-3.jpg";
import n4 from "@/assets/nft-4.jpg";
import n5 from "@/assets/nft-5.jpg";
import n6 from "@/assets/nft-6.jpg";
import n7 from "@/assets/nft-7.jpg";
import n8 from "@/assets/nft-8.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nebula — The Premium Web3 NFT Marketplace" },
      {
        name: "description",
        content:
          "Discover, collect, and trade extraordinary NFTs. Live auctions, top creators, and curated drops on Nebula — the most refined Web3 marketplace.",
      },
      { property: "og:title", content: "Nebula — The Premium Web3 NFT Marketplace" },
      {
        property: "og:description",
        content: "Discover, collect, and trade extraordinary NFTs on Nebula.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Nav />
      <main>
        <Hero />
        <Stats />
        <TrendingCarousel />
        <CategoryFilters />
        <LiveAuctions />
        <PopularCreators />
        <RecentlyListed />
        <TopSales />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

/* ---------- NAV ---------- */
function Nav() {
  const links = [
    { label: "Explore", icon: Compass },
    { label: "Collections", icon: LayoutGrid },
    { label: "Stats", icon: BarChart3 },
    { label: "Rewards", icon: Gift },
    { label: "Launchpad", icon: Rocket },
    { label: "Profile", icon: UserCircle2 },
  ];
  return (
    <header className="sticky top-0 z-50">
      <div className="glass-strong border-b border-border/60">
        <div className="mx-auto flex h-16 max-w-7xl items-center gap-6 px-6">
          <a href="#" className="flex items-center gap-2">
            <div className="relative grid h-9 w-9 place-items-center rounded-xl btn-glow">
              <Sparkles className="h-4 w-4" />
            </div>
            <span className="font-display text-lg font-bold tracking-tight">Nebula</span>
          </a>
          <nav className="hidden items-center gap-1 lg:flex">
            {links.map((l) => (
              <a
                key={l.label}
                href="#"
                className="flex items-center gap-2 rounded-full px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
              >
                <l.icon className="h-4 w-4" />
                {l.label}
              </a>
            ))}
          </nav>
          <div className="ml-auto flex items-center gap-3">
            <div className="hidden items-center gap-2 rounded-full glass px-3 py-2 md:flex w-72">
              <Search className="h-4 w-4 text-muted-foreground" />
              <input
                placeholder="Search collections, creators, items…"
                className="w-full bg-transparent text-sm placeholder:text-muted-foreground/70 focus:outline-none"
              />
              <kbd className="rounded-md border border-border bg-white/5 px-1.5 py-0.5 text-[10px] text-muted-foreground">
                ⌘K
              </kbd>
            </div>
            <button className="grid h-10 w-10 place-items-center rounded-full glass hover:bg-white/10 transition">
              <Bell className="h-4 w-4" />
            </button>
            <button className="flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold btn-glow">
              <Wallet className="h-4 w-4" />
              Connect Wallet
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

/* ---------- HERO ---------- */
function Hero() {
  return (
    <section className="relative">
      <div className="pointer-events-none absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} />
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-[1.05fr_1fr] lg:py-28">
        <div className="animate-fade-in">
          <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-neon-purple)] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-neon-purple)]" />
            </span>
            New drop live · Genesis Volume 04
          </div>
          <h1 className="mt-6 text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
            Discover, collect & trade{" "}
            <span className="text-gradient">extraordinary</span> digital art.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            The most refined Web3 marketplace for collectors, creators and the
            curious. Bid on live auctions, follow top creators, and own a piece
            of the future.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button className="rounded-full px-6 py-3 text-sm font-semibold btn-glow">
              Explore marketplace
            </button>
            <button className="rounded-full glass px-6 py-3 text-sm font-semibold hover:bg-white/10 transition">
              Create on Nebula
            </button>
          </div>
          <div className="mt-12 grid max-w-lg grid-cols-3 gap-6">
            {[
              { k: "240K+", v: "Artworks" },
              { k: "92K", v: "Creators" },
              { k: "$1.8B", v: "Volume" },
            ].map((s) => (
              <div key={s.v}>
                <div className="font-display text-2xl font-bold">{s.k}</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">{s.v}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-10 -z-10 rounded-[3rem] opacity-60 blur-3xl"
               style={{ background: "var(--gradient-primary)" }} />
          <div className="glass-strong relative overflow-hidden rounded-[2rem] p-5 shadow-[var(--shadow-card)]">
            <div className="relative overflow-hidden rounded-[1.5rem]">
              <img
                src={heroArt}
                alt="Featured NFT — Iridescent Genesis #001"
                width={1280}
                height={1280}
                className="aspect-square w-full object-cover animate-float"
              />
              <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full glass-strong px-3 py-1.5 text-xs">
                <Flame className="h-3.5 w-3.5 text-[var(--color-neon-purple)]" />
                Featured collection
              </div>
              <div className="absolute right-4 top-4 rounded-full glass-strong px-3 py-1.5 text-xs">
                #001 / 999
              </div>
            </div>

            <div className="mt-5 flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-display text-lg font-semibold">Iridescent Genesis</h3>
                  <Verified className="h-4 w-4 text-[var(--color-neon-blue)]" />
                </div>
                <p className="text-xs text-muted-foreground">by Aria Volkov</p>
              </div>
              <CountdownPill h={12} m={48} s={9} />
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <PriceTile label="Current bid" value="14.82 ETH" sub="≈ $42,180" />
              <PriceTile label="Floor price" value="9.20 ETH" sub="+12.4% 24h" trend="up" />
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <button className="rounded-2xl px-4 py-3 text-sm font-semibold btn-glow">Place a bid</button>
              <button className="rounded-2xl glass px-4 py-3 text-sm font-semibold hover:bg-white/10 transition">View item</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PriceTile({
  label, value, sub, trend,
}: { label: string; value: string; sub: string; trend?: "up" | "down" }) {
  return (
    <div className="rounded-2xl glass p-4">
      <div className="text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
      <div className="mt-1 font-display text-xl font-semibold">{value}</div>
      <div className={`mt-0.5 flex items-center gap-1 text-xs ${trend === "up" ? "text-emerald-400" : "text-muted-foreground"}`}>
        {trend === "up" && <TrendingUp className="h-3 w-3" />}
        {sub}
      </div>
    </div>
  );
}

function CountdownPill({ h, m, s }: { h: number; m: number; s: number }) {
  const Cell = ({ n, l }: { n: number; l: string }) => (
    <div className="text-center">
      <div className="font-display text-sm font-semibold tabular-nums">{String(n).padStart(2, "0")}</div>
      <div className="text-[9px] uppercase tracking-wider text-muted-foreground">{l}</div>
    </div>
  );
  return (
    <div className="flex items-center gap-2 rounded-full glass px-3 py-1.5">
      <Cell n={h} l="h" />
      <span className="text-muted-foreground">:</span>
      <Cell n={m} l="m" />
      <span className="text-muted-foreground">:</span>
      <Cell n={s} l="s" />
    </div>
  );
}

/* ---------- STATS / MARQUEE ---------- */
function Stats() {
  const items = [
    "ETH 3,498.20 · +2.4%",
    "SOL 184.10 · +3.1%",
    "MATIC 1.24 · +0.8%",
    "Volume 24h · 12,480 ETH",
    "Active auctions · 482",
    "New mints today · 1,206",
  ];
  const row = [...items, ...items];
  return (
    <section className="border-y border-border/60 glass">
      <div className="relative overflow-hidden py-3">
        <div className="flex w-max gap-10 animate-marquee whitespace-nowrap text-xs text-muted-foreground">
          {row.map((t, i) => (
            <span key={i} className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-[var(--color-neon-purple)]" /> {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- TRENDING CAROUSEL ---------- */
const collections = [
  { name: "Chromatic Souls", img: n2, floor: "4.20", change: "+8.2%", items: "8,888" },
  { name: "Voidwalkers", img: n1, floor: "12.6", change: "+24.1%", items: "4,200" },
  { name: "Prism Polyhedra", img: n3, floor: "1.85", change: "-2.3%", items: "10,000" },
  { name: "Hooded Genesis", img: n4, floor: "3.10", change: "+5.4%", items: "5,555" },
  { name: "Neon Topographies", img: n5, floor: "0.92", change: "+11.7%", items: "12,000" },
  { name: "Aether Orbs", img: n6, floor: "2.40", change: "+3.6%", items: "6,000" },
];

function TrendingCarousel() {
  return (
    <SectionShell
      eyebrow="Trending"
      title="Top collections this week"
      sub="Curated by floor velocity, volume and verified creator activity."
      action={
        <div className="hidden gap-2 md:flex">
          <CarouselBtn dir="left" />
          <CarouselBtn dir="right" />
        </div>
      }
    >
      <div className="-mx-6 overflow-x-auto px-6 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex gap-5">
          {collections.map((c, i) => (
            <article
              key={c.name}
              className="min-w-[280px] max-w-[280px] rounded-2xl glass p-3 transition hover:-translate-y-1 hover:bg-white/[0.06]"
            >
              <div className="relative overflow-hidden rounded-xl">
                <img src={c.img} alt={c.name} loading="lazy" width={768} height={768}
                     className="aspect-square w-full object-cover transition duration-500 hover:scale-105" />
                <div className="absolute left-2 top-2 rounded-full glass-strong px-2 py-1 text-[10px] font-semibold">
                  #{i + 1}
                </div>
              </div>
              <div className="mt-3 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <h3 className="text-sm font-semibold">{c.name}</h3>
                  <Verified className="h-3.5 w-3.5 text-[var(--color-neon-blue)]" />
                </div>
                <span className="text-xs text-muted-foreground">{c.items}</span>
              </div>
              <div className="mt-3 flex items-end justify-between rounded-xl bg-white/[0.03] p-3">
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Floor</div>
                  <div className="font-display text-sm font-semibold">{c.floor} ETH</div>
                </div>
                <span className={`text-xs font-medium ${c.change.startsWith("-") ? "text-rose-400" : "text-emerald-400"}`}>
                  {c.change.startsWith("-") ? <TrendingDown className="mr-1 inline h-3 w-3" /> : <TrendingUp className="mr-1 inline h-3 w-3" />}
                  {c.change}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

function CarouselBtn({ dir }: { dir: "left" | "right" }) {
  const Icon = dir === "left" ? ChevronLeft : ChevronRight;
  return (
    <button className="grid h-10 w-10 place-items-center rounded-full glass hover:bg-white/10 transition">
      <Icon className="h-4 w-4" />
    </button>
  );
}

/* ---------- CATEGORY FILTERS ---------- */
function CategoryFilters() {
  const cats = [
    { label: "All", icon: Globe2, active: true },
    { label: "Art", icon: Palette },
    { label: "Photography", icon: Camera },
    { label: "Music", icon: Music2 },
    { label: "Gaming", icon: Gamepad2 },
    { label: "PFPs", icon: ImageIcon },
  ];
  return (
    <section className="mx-auto max-w-7xl px-6 pt-8">
      <div className="flex flex-wrap items-center gap-2">
        {cats.map((c) => (
          <button
            key={c.label}
            className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm transition ${
              c.active
                ? "btn-glow font-semibold"
                : "glass text-muted-foreground hover:text-foreground hover:bg-white/10"
            }`}
          >
            <c.icon className="h-3.5 w-3.5" />
            {c.label}
          </button>
        ))}
      </div>
    </section>
  );
}

/* ---------- LIVE AUCTIONS ---------- */
const auctions = [
  { img: n7, name: "Cyber Mask 042", creator: "Kai Mendez", bid: "6.42", h: 2, m: 14, s: 8 },
  { img: n8, name: "Floating Realm", creator: "Mira Sato", bid: "3.18", h: 5, m: 32, s: 41 },
  { img: n2, name: "Liquid Aether #19", creator: "Studio Vols", bid: "9.04", h: 0, m: 48, s: 22 },
  { img: n3, name: "Polyhedron 008", creator: "ARC Lab", bid: "2.66", h: 11, m: 5, s: 17 },
];

function LiveAuctions() {
  return (
    <SectionShell
      eyebrow="Live now"
      title="Auctions ending soon"
      sub="High-stakes drops with live bidding from collectors worldwide."
      action={
        <a href="#" className="hidden items-center gap-1 text-sm text-muted-foreground hover:text-foreground md:flex">
          View all <ChevronRight className="h-4 w-4" />
        </a>
      }
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {auctions.map((a) => (
          <NftCard key={a.name} {...a} />
        ))}
      </div>
    </SectionShell>
  );
}

function NftCard({
  img, name, creator, bid, h, m, s,
}: { img: string; name: string; creator: string; bid: string; h: number; m: number; s: number }) {
  return (
    <article className="group overflow-hidden rounded-2xl glass p-3 transition hover:-translate-y-1 hover:bg-white/[0.06]">
      <div className="relative overflow-hidden rounded-xl">
        <img src={img} alt={name} loading="lazy" width={768} height={768}
             className="aspect-square w-full object-cover transition duration-500 group-hover:scale-105" />
        <div className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full glass-strong px-2.5 py-1 text-[10px] font-medium">
          <span className="h-1.5 w-1.5 rounded-full bg-rose-400 animate-pulse-glow" /> LIVE
        </div>
        <button className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full glass-strong hover:bg-white/15 transition">
          <Heart className="h-3.5 w-3.5" />
        </button>
        <div className="absolute inset-x-3 bottom-3 flex items-center justify-between rounded-xl glass-strong px-3 py-2 text-xs">
          <span className="text-muted-foreground">Ends in</span>
          <span className="font-display font-semibold tabular-nums">
            {String(h).padStart(2, "0")}:{String(m).padStart(2, "0")}:{String(s).padStart(2, "0")}
          </span>
        </div>
      </div>
      <div className="px-1 pb-1 pt-3">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold">{name}</h3>
          <span className="text-[10px] text-muted-foreground">#{Math.floor(Math.random() * 999)}</span>
        </div>
        <p className="mt-0.5 text-xs text-muted-foreground">by {creator}</p>
        <div className="mt-3 flex items-end justify-between">
          <div>
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Highest bid</div>
            <div className="font-display text-base font-semibold">{bid} ETH</div>
          </div>
          <button className="rounded-full px-3 py-1.5 text-xs font-semibold btn-glow">Bid</button>
        </div>
      </div>
    </article>
  );
}

/* ---------- POPULAR CREATORS ---------- */
const creators = [
  { name: "Aria Volkov", handle: "@aria", vol: "1,820", img: n1 },
  { name: "Kai Mendez", handle: "@kaim", vol: "1,402", img: n4 },
  { name: "Mira Sato", handle: "@mira", vol: "1,188", img: n7 },
  { name: "Studio Vols", handle: "@vols", vol: "964", img: n2 },
  { name: "ARC Lab", handle: "@arc", vol: "812", img: n3 },
  { name: "Nyx Atelier", handle: "@nyx", vol: "734", img: n6 },
];

function PopularCreators() {
  return (
    <SectionShell eyebrow="Spotlight" title="Popular creators" sub="The artists shaping this season on Nebula.">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {creators.map((c, i) => (
          <div key={c.name} className="flex items-center gap-4 rounded-2xl glass p-4 transition hover:bg-white/[0.06]">
            <div className="grid h-8 w-6 place-items-center font-display text-sm font-semibold text-muted-foreground">
              {String(i + 1).padStart(2, "0")}
            </div>
            <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full ring-2 ring-white/10">
              <img src={c.img} alt={c.name} loading="lazy" width={120} height={120} className="h-full w-full object-cover" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-1.5">
                <h3 className="truncate text-sm font-semibold">{c.name}</h3>
                <Verified className="h-3.5 w-3.5 text-[var(--color-neon-blue)]" />
              </div>
              <p className="text-xs text-muted-foreground">{c.handle}</p>
            </div>
            <div className="text-right">
              <div className="font-display text-sm font-semibold">{c.vol} ETH</div>
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Volume</div>
            </div>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}

/* ---------- RECENTLY LISTED ---------- */
const recent = [
  { img: n5, name: "Topography #214", creator: "ARC Lab", price: "0.92" },
  { img: n6, name: "Aether Orb", creator: "Nyx Atelier", price: "2.40" },
  { img: n1, name: "Voidwalker 314", creator: "Aria Volkov", price: "12.60" },
  { img: n3, name: "Polyhedron 142", creator: "ARC Lab", price: "1.85" },
];

function RecentlyListed() {
  return (
    <SectionShell
      eyebrow="Fresh drops"
      title="Recently listed"
      sub="Just hit the marketplace — get in before the floor moves."
      action={
        <a href="#" className="hidden items-center gap-1 text-sm text-muted-foreground hover:text-foreground md:flex">
          Browse all <ChevronRight className="h-4 w-4" />
        </a>
      }
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {recent.map((r) => (
          <article key={r.name} className="group overflow-hidden rounded-2xl glass p-3 transition hover:-translate-y-1 hover:bg-white/[0.06]">
            <div className="overflow-hidden rounded-xl">
              <img src={r.img} alt={r.name} loading="lazy" width={768} height={768}
                   className="aspect-square w-full object-cover transition duration-500 group-hover:scale-105" />
            </div>
            <div className="px-1 pb-1 pt-3">
              <div className="flex items-center gap-1.5">
                <h3 className="text-sm font-semibold">{r.name}</h3>
                <Verified className="h-3.5 w-3.5 text-[var(--color-neon-blue)]" />
              </div>
              <p className="mt-0.5 text-xs text-muted-foreground">by {r.creator}</p>
              <div className="mt-3 flex items-end justify-between">
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Price</div>
                  <div className="font-display text-base font-semibold">{r.price} ETH</div>
                </div>
                <button className="rounded-full glass px-3 py-1.5 text-xs font-semibold hover:bg-white/10 transition">Buy now</button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}

/* ---------- TOP SALES ---------- */
const sales = [
  { img: n2, name: "Chromatic Soul #018", buyer: "0xA3…91f", price: "84.20", change: "+18%" },
  { img: n1, name: "Voidwalker 088", buyer: "0xC1…44b", price: "62.40", change: "+12%" },
  { img: n7, name: "Cyber Mask 011", buyer: "0x8F…712", price: "51.80", change: "+9.4%" },
  { img: n6, name: "Aether Orb 003", buyer: "0x21…aa9", price: "47.10", change: "+7.1%" },
  { img: n8, name: "Floating Realm #02", buyer: "0xE9…3d1", price: "39.60", change: "+5.8%" },
];

function TopSales() {
  return (
    <SectionShell eyebrow="Last 24h" title="Top sales" sub="The biggest moves across the marketplace.">
      <div className="overflow-hidden rounded-2xl glass">
        <div className="grid grid-cols-[40px_1.5fr_1fr_1fr_120px] items-center gap-4 border-b border-border/60 px-6 py-3 text-[11px] uppercase tracking-wider text-muted-foreground">
          <span>#</span>
          <span>Item</span>
          <span className="hidden sm:block">Buyer</span>
          <span>Price</span>
          <span className="text-right">24h</span>
        </div>
        {sales.map((s, i) => (
          <div
            key={s.name}
            className="grid grid-cols-[40px_1.5fr_1fr_1fr_120px] items-center gap-4 border-b border-border/40 px-6 py-4 text-sm last:border-b-0 transition hover:bg-white/[0.04]"
          >
            <span className="font-display font-semibold text-muted-foreground">{i + 1}</span>
            <div className="flex min-w-0 items-center gap-3">
              <img src={s.img} alt={s.name} loading="lazy" width={96} height={96}
                   className="h-11 w-11 shrink-0 rounded-lg object-cover" />
              <span className="truncate font-medium">{s.name}</span>
            </div>
            <span className="hidden truncate text-muted-foreground sm:block">{s.buyer}</span>
            <span className="font-display font-semibold">{s.price} ETH</span>
            <span className="text-right text-emerald-400">
              <TrendingUp className="mr-1 inline h-3 w-3" />
              {s.change}
            </span>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}

/* ---------- CTA ---------- */
function CTA() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="relative overflow-hidden rounded-3xl glass-strong p-10 md:p-16">
        <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full blur-3xl opacity-50"
             style={{ background: "var(--gradient-primary)" }} />
        <div className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full blur-3xl opacity-40"
             style={{ background: "var(--gradient-primary)" }} />
        <div className="relative grid items-center gap-8 md:grid-cols-[1.4fr_1fr]">
          <div>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              Launch your collection on <span className="text-gradient">Nebula</span>.
            </h2>
            <p className="mt-4 max-w-xl text-muted-foreground">
              Mint, drop and grow your audience with our zero-fee Launchpad,
              royalties built-in, and discovery surfaces designed for creators.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <button className="rounded-full px-6 py-3 text-sm font-semibold btn-glow">Apply to Launchpad</button>
              <button className="rounded-full glass px-6 py-3 text-sm font-semibold hover:bg-white/10 transition">Read the docs</button>
            </div>
          </div>
          <div className="grid gap-3">
            {[
              { k: "0%", v: "Gas-optimised mint fees for verified creators" },
              { k: "92K+", v: "Wallets following Launchpad drops" },
              { k: "48h", v: "Average curation turnaround" },
            ].map((s) => (
              <div key={s.v} className="flex items-center gap-4 rounded-2xl glass p-4">
                <div className="font-display text-2xl font-bold text-gradient">{s.k}</div>
                <div className="text-sm text-muted-foreground">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- FOOTER ---------- */
function Footer() {
  const cols = [
    { title: "Marketplace", items: ["Explore", "Collections", "Stats", "Activity"] },
    { title: "Creators", items: ["Launchpad", "Royalties", "Verification", "Resources"] },
    { title: "Company", items: ["About", "Careers", "Press", "Contact"] },
  ];
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[1.4fr_2fr_1fr]">
        <div>
          <div className="flex items-center gap-2">
            <div className="grid h-9 w-9 place-items-center rounded-xl btn-glow">
              <Sparkles className="h-4 w-4" />
            </div>
            <span className="font-display text-lg font-bold">Nebula</span>
          </div>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            The premium Web3 marketplace for collectors and creators. Crafted for clarity, built for speed.
          </p>
          <div className="mt-5 flex gap-2">
            {[Twitter, Github, Send].map((Ic, i) => (
              <a key={i} href="#" className="grid h-9 w-9 place-items-center rounded-full glass hover:bg-white/10 transition">
                <Ic className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-3 gap-8">
          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="font-display text-sm font-semibold">{c.title}</h4>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {c.items.map((i) => (
                  <li key={i}><a href="#" className="hover:text-foreground transition">{i}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div>
          <h4 className="font-display text-sm font-semibold">Stay in the loop</h4>
          <p className="mt-2 text-sm text-muted-foreground">Weekly drops, top sales and creator stories.</p>
          <form className="mt-4 flex items-center gap-2 rounded-full glass p-1.5">
            <input className="flex-1 bg-transparent px-3 py-1.5 text-sm placeholder:text-muted-foreground/70 focus:outline-none"
                   placeholder="you@nebula.xyz" />
            <button className="rounded-full px-4 py-1.5 text-xs font-semibold btn-glow">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-6 py-5 text-xs text-muted-foreground">
          <span>© 2026 Nebula Labs. All rights reserved.</span>
          <div className="flex gap-5">
            <a href="#" className="hover:text-foreground">Terms</a>
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ---------- SECTION SHELL ---------- */
function SectionShell({
  eyebrow, title, sub, action, children,
}: {
  eyebrow: string;
  title: string;
  sub?: string;
  action?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-8 flex items-end justify-between gap-6">
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-gradient">{eyebrow}</div>
          <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
          {sub && <p className="mt-2 max-w-xl text-sm text-muted-foreground">{sub}</p>}
        </div>
        {action}
      </div>
      {children}
    </section>
  );
}
