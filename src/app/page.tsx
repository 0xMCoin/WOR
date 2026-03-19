"use client";

import Image from "next/image";
import {
  Zap,
  Shield,
  TrendingUp,
  Menu,
  X,
  Copy,
  Check,
  Flame,
  ExternalLink,
} from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  MagicNavButton,
  MagicCompactPrimary,
  MagicSecondaryButton,
  MagicIconButton,
} from "@/components/ui/magic-button";
import {
  FadeIn,
  StaggerIn,
  StaggerChild,
  HeroStagger,
  HeroLine,
} from "@/components/ui/motion-section";
import { Globe3D, type GlobeMarker } from "@/components/ui/3d-globe";

const easeSmooth = [0.22, 1, 0.36, 1] as const;

const HERO_GLOBE_MARKERS: GlobeMarker[] = [
  { lat: 29.76, lng: -95.37, src: "/images/logo.jpg", label: "Houston" },
  { lat: 25.2, lng: 55.27, src: "/images/logo.jpg", label: "Dubai" },
  { lat: 51.51, lng: -0.13, src: "/images/logo.jpg", label: "London" },
  { lat: 35.68, lng: 139.76, src: "/images/logo.jpg", label: "Tokyo" },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#overview", label: "About" },
    { href: "#tokenomics", label: "Tokenomics" },
    { href: "#roadmap", label: "Roadmap" },
    { href: "#buy", label: "Buy WOR" },
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: easeSmooth }}
      className="sticky top-0 z-50 w-full border-b border-neutral-200/80 bg-white/80 backdrop-blur-md dark:border-neutral-800 dark:bg-neutral-950/80"
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <a
          href="#"
          className="flex items-center gap-2 font-semibold text-neutral-900 dark:text-white"
        >
          <Image
            src="/images/logo.jpg"
            alt="WOR — War Oil Reserve"
            width={40}
            height={40}
            className="h-9 w-9 rounded-xl object-contain"
          />
          <span className="text-lg">WOR</span>
        </a>

        <div className="hidden md:flex md:items-center md:gap-1">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <MagicNavButton href="#buy" className="ml-2">
            Buy
          </MagicNavButton>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="rounded-lg p-2 text-neutral-600 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:bg-neutral-800"
            aria-label="Open menu"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-neutral-200 bg-white px-4 py-3 dark:border-neutral-800 dark:bg-neutral-950 md:hidden">
          <div className="flex flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-neutral-600 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:bg-neutral-800"
              >
                {link.label}
              </a>
            ))}
            <div onClick={() => setOpen(false)} className="pt-1">
              <MagicNavButton href="#buy" className="w-full justify-center">
                Buy
              </MagicNavButton>
            </div>
          </div>
        </div>
      )}
    </motion.header>
  );
}

const TOKEN_SPECS = [
  { label: "Ticker", value: "$WOR" },
  { label: "Project", value: "WAR OIL RESERVE" },
  { label: "Supply", value: "1,000,000,000" },
  { label: "Tax", value: "0 / 0" },
  { label: "LP", value: "Burned" },
  { label: "Contract", value: "Renounced" },
  { label: "Chain", value: "Solana" },
  { label: "Status", value: "LIVE" },
];

function Hero() {
  return (
    <>
      <section className="bg-neutral-100/40 px-4 py-8 dark:bg-neutral-950/40 sm:py-10">
        <motion.div
          className="relative mx-auto min-h-[480px] w-full overflow-hidden rounded-xl bg-white shadow-sm ring-1 shadow-black/10 ring-black/10 dark:bg-neutral-950 md:h-[400px] md:min-h-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: easeSmooth }}
        >
          {/* Copy + CTAs */}
          <div className="relative z-20 max-w-xl p-6 md:absolute md:inset-y-0 md:left-0 md:flex md:max-w-[55%] md:flex-col md:justify-center md:p-12">
            <HeroStagger>
              <HeroLine>
                <p className="text-xs font-semibold uppercase tracking-widest text-amber-600 dark:text-amber-500">
                  Now Live on Solana
                </p>
              </HeroLine>
              <HeroLine>
                <h1 className="mt-3 max-w-2xl text-balance text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl md:text-5xl lg:text-6xl dark:text-white">
                  War Oil Reserve{" "}
                  <span className="bg-gradient-to-r from-amber-600 to-amber-500 bg-clip-text text-transparent dark:from-amber-400 dark:to-amber-300">
                    $WOR
                  </span>
                </h1>
              </HeroLine>
              <HeroLine>
                <p className="mt-2 text-balance text-neutral-600 dark:text-neutral-400 md:mt-4 md:max-w-lg md:text-lg">
                  Energy · Reserves · Power — true power lives in energy, not currency. Those who control the reserves shape the world.
                </p>
              </HeroLine>
              <HeroLine>
                <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
                  <a
                    href="#buy"
                    className="flex cursor-pointer items-center justify-center rounded-lg bg-neutral-900 px-4 py-2.5 text-sm font-medium text-white shadow-[0px_0px_10px_0px_rgba(255,255,255,0.2)_inset] ring ring-white/20 ring-inset ring-offset-2 ring-offset-neutral-900 transition-all duration-200 hover:shadow-[0px_0px_20px_0px_rgba(255,255,255,0.4)_inset] hover:ring-white/40 active:scale-[0.98] dark:bg-white dark:text-neutral-900 dark:shadow-[inset_0_0_12px_rgba(0,0,0,0.06)] dark:ring-black/10 dark:ring-offset-neutral-950 dark:hover:bg-neutral-100"
                  >
                    Fill Up — Buy $WOR
                  </a>
                  <a
                    href="#overview"
                    className="flex cursor-pointer items-center justify-center rounded-lg bg-white px-4 py-2.5 text-sm font-medium text-neutral-900 ring ring-inset ring-neutral-200 transition-all duration-200 hover:bg-neutral-50 hover:ring-neutral-300 active:scale-[0.98] dark:bg-neutral-800 dark:text-neutral-100 dark:ring-neutral-600 dark:hover:bg-neutral-700 dark:hover:ring-neutral-500"
                  >
                    Read the Brief
                  </a>
                </div>
              </HeroLine>
            </HeroStagger>
          </div>

          {/* Globe — desktop: corner; mobile: below copy */}
          <motion.div
            className="relative z-10 mx-auto mt-2 h-[260px] w-full max-w-sm sm:h-[300px] md:absolute md:-right-72 md:bottom-[-6.5rem] md:left-auto md:mt-0 md:h-[min(36rem,90vw)] md:w-[min(36rem,90vw)] md:max-w-none lg:-right-64 lg:bottom-[-7rem]"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.75, delay: 0.2, ease: easeSmooth }}
          >
            <Globe3D
              className="h-full w-full !min-h-0"
              markers={HERO_GLOBE_MARKERS}
              config={{
                atmosphereColor: "#4da6ff",
                atmosphereIntensity: 1.2,
                atmosphereBlur: 3,
                bumpScale: 5,
                autoRotateSpeed: 0.3,
                showAtmosphere: true,
                backgroundColor: null,
              }}
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Token specs strip */}
      <section className="border-y border-neutral-200 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900/50">
        <FadeIn>
          <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm">
            {TOKEN_SPECS.map(({ label, value }) => (
              <div key={label} className="flex items-center gap-2">
                <span className="text-neutral-500 dark:text-neutral-400">{label}</span>
                <span className="text-neutral-400 dark:text-neutral-500">·</span>
                <span className="font-semibold text-neutral-900 dark:text-white">
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>
        </FadeIn>
      </section>
    </>
  );
}

const features = [
  {
    icon: Zap,
    title: "Instant transactions",
    description:
      "Fast network with low fees. Buy and sell in seconds.",
  },
  {
    icon: Shield,
    title: "Locked liquidity",
    description:
      "Liquidity locked to ensure security and trust for the community.",
  },
  {
    icon: TrendingUp,
    title: "Value potential",
    description:
      "Tokenomics designed to reward long-term holders.",
  },
];

function Features() {
  return (
    <section
      id="features"
      className="border-t border-neutral-200 bg-white px-4 py-16 dark:border-neutral-800 dark:bg-neutral-950 sm:px-6 lg:py-20"
    >
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-amber-600 dark:text-amber-500">
            Why WOR
          </p>
          <h2 className="mt-2 text-center text-3xl font-bold text-neutral-900 dark:text-white sm:text-4xl">
            Built for the long run
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-center text-neutral-600 dark:text-neutral-400">
            Stored strength on-chain — built for those who stand behind the chaos.
          </p>
        </FadeIn>
        <StaggerIn className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, description }) => (
            <StaggerChild key={title}>
              <div className="group h-full rounded-xl border border-neutral-200 bg-neutral-50/50 p-6 transition dark:border-neutral-800 dark:bg-neutral-900/30 dark:hover:border-amber-500/20">
                <div className="flex h-8 w-8 items-center justify-center rounded-md bg-amber-500/10 text-amber-600 dark:text-amber-400">
                  <Icon className="h-3.5 w-3.5" />
                </div>
                <h3 className="mt-4 font-semibold text-neutral-900 dark:text-white">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                  {description}
                </p>
              </div>
            </StaggerChild>
          ))}
        </StaggerIn>
      </div>
    </section>
  );
}

function Overview() {
  return (
    <section
      id="overview"
      className="border-t border-neutral-200 bg-neutral-50 px-4 py-16 dark:border-neutral-800 dark:bg-neutral-900/30 sm:px-6 lg:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-widest text-amber-600 dark:text-amber-500">
            The Lore
          </p>
          <h2 className="mt-2 text-3xl font-bold text-neutral-900 dark:text-white sm:text-4xl">
            The Reserve
          </h2>
        </FadeIn>
        <div className="mt-10 grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <FadeIn className="space-y-6 text-neutral-600 dark:text-neutral-300 leading-relaxed" delay={0.08}>
            <p>
              War Oil Reserve represents the idea that true power has always been stored in energy, not currency, and those who control the reserves shape the world.
            </p>
            <p>
              In a volatile system, WOR becomes a decentralized symbol of stored strength, positioning its holders as part of the reserve behind the chaos.
            </p>
          </FadeIn>
          <FadeIn className="relative mx-auto w-full max-w-md lg:max-w-none" delay={0.12}>
            <div
              className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-amber-500/30 via-amber-600/10 to-transparent opacity-70 blur-2xl dark:from-amber-500/20"
              aria-hidden
            />
            <div className="relative overflow-hidden rounded-2xl border border-neutral-200/80 bg-white p-1 shadow-2xl shadow-amber-500/10 dark:border-neutral-700 dark:bg-neutral-900">
              <Image
                src="/images/logo.jpg"
                alt="War Oil Reserve emblem"
                width={560}
                height={560}
                className="aspect-square w-full rounded-[14px] object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function VisualBanner() {
  return (
    <section
      className="relative border-t border-neutral-200 dark:border-neutral-800"
      aria-label="Brand visual"
    >
      <FadeIn>
        <div className="relative h-56 w-full overflow-hidden sm:h-72 md:h-80">
          <Image
            src="/images/banner.jpg"
            alt="War Oil Reserve — global reserve network"
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority={false}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/50 to-neutral-950/20 dark:from-neutral-950 dark:via-neutral-950/60" />
          <div className="absolute inset-0 flex flex-col justify-end px-4 pb-8 sm:px-6 md:px-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-amber-400">
              Network
            </p>
            <p className="mt-1 max-w-xl text-lg font-semibold text-white drop-shadow md:text-xl">
              Reserve-grade infrastructure. Built for global liquidity.
            </p>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}

const SPECS_ROWS = [
  { label: "Ticker", value: "$WOR" },
  { label: "Full Name", value: "War Oil Reserve" },
  { label: "Network", value: "Solana" },
  { label: "Total Supply", value: "1,000,000,000" },
  { label: "Buy Tax", value: "0%" },
  { label: "Sell Tax", value: "0%" },
  { label: "Liquidity", value: "Burned" },
  { label: "Contract", value: "Renounced" },
  { label: "Team Tokens", value: "0%" },
  { label: "Authority", value: "Community Only" },
];

function Specs() {
  return (
    <section className="border-t border-neutral-200 bg-white px-4 py-16 dark:border-neutral-800 dark:bg-neutral-950 sm:px-6 lg:py-24">
      <div className="mx-auto max-w-4xl">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-widest text-amber-600 dark:text-amber-500">
            Technical Data
          </p>
          <h2 className="mt-2 text-3xl font-bold text-neutral-900 dark:text-white sm:text-4xl">
            Reserve Specs
          </h2>
          <p className="mt-2 text-neutral-600 dark:text-neutral-400">
            Token intelligence at a glance.
          </p>
        </FadeIn>
        <FadeIn className="mt-10 overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800" delay={0.1}>
          <table className="w-full text-left text-sm">
            <tbody className="divide-y divide-neutral-200 dark:divide-neutral-800">
              {SPECS_ROWS.map(({ label, value }) => (
                <tr key={label} className="bg-neutral-50/50 dark:bg-neutral-900/30">
                  <th className="px-5 py-4 font-medium text-neutral-500 dark:text-neutral-400">
                    {label}
                  </th>
                  <td className="px-5 py-4 font-semibold text-neutral-900 dark:text-white">
                    {value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </FadeIn>
      </div>
    </section>
  );
}

const TOKENOMICS_ITEMS = [
  {
    pct: "90%",
    title: "Liquidity Pool",
    desc: "Permanently burned at launch. Immovable. Trustless.",
  },
  {
    pct: "10%",
    title: "Reserve Fund",
    desc: "Reserved for CEX listings, marketing, and expanding the WOR network.",
  },
  {
    pct: "0%",
    title: "Team Allocation",
    desc: "Zero insider stake. No private sales, no team wallets.",
  },
  {
    pct: "0 / 0",
    title: "Buy / Sell Tax",
    desc: "Trade freely — no friction. Pure transfers.",
  },
  {
    pct: "∞",
    title: "Immutability",
    desc: "Contract renounced at launch. Community authority, forever.",
  },
  {
    pct: "1B",
    title: "Fixed Supply",
    desc: "One billion tokens, hard-capped. Finite and sovereign.",
  },
];

function Tokenomics() {
  return (
    <section
      id="tokenomics"
      className="border-t border-neutral-200 bg-neutral-50 px-4 py-16 dark:border-neutral-800 dark:bg-neutral-900/30 sm:px-6 lg:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-amber-600 dark:text-amber-500">
            Distribution
          </p>
          <h2 className="mt-2 text-center text-3xl font-bold text-neutral-900 dark:text-white sm:text-4xl">
            Tokenomics
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-center text-neutral-600 dark:text-neutral-400">
            Transparent allocation. No hidden supply.
          </p>
        </FadeIn>
        <StaggerIn className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TOKENOMICS_ITEMS.map(({ pct, title, desc }) => (
            <StaggerChild key={title}>
              <div className="h-full rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-950">
                <div className="flex items-start justify-between">
                  <span className="text-xl font-bold text-neutral-900 dark:text-white">
                    {pct}
                  </span>
                </div>
                <h3 className="mt-4 font-semibold text-neutral-900 dark:text-white">
                  {title}
                </h3>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {desc}
                </p>
              </div>
            </StaggerChild>
          ))}
        </StaggerIn>
      </div>
    </section>
  );
}

const ROADMAP_PHASES = [
  {
    phase: "01",
    status: "Complete",
    title: "Site prep",
    items: [
      "Fair launch on Pump.fun",
      "Website & identity live",
      "Telegram & X community activated",
      "Liquidity seeded & burned",
    ],
  },
  {
    phase: "02",
    status: "Complete",
    title: "First pump",
    items: [
      "1,000+ holders reached",
      "CoinGecko & CMC listing",
      "Raydium migration completed",
      "KOL & influencer partnerships",
    ],
  },
  {
    phase: "03",
    status: "In progress",
    title: "Full extraction",
    items: [
      "Tier-2 CEX listings",
      "10,000+ holder milestone",
      "$WOR branded merchandise",
      "NFT collection — Reserve Badges",
    ],
  },
  {
    phase: "04",
    status: "Upcoming",
    title: "Global dominion",
    items: [
      "Tier-1 CEX listing",
      "100,000+ global holders",
      "WOR DeFi ecosystem",
      "Strategic alliance announcements",
    ],
  },
];

function Roadmap() {
  return (
    <section
      id="roadmap"
      className="border-t border-neutral-200 bg-white px-4 py-16 dark:border-neutral-800 dark:bg-neutral-950 sm:px-6 lg:py-24"
    >
      <div className="mx-auto max-w-5xl">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-widest text-amber-600 dark:text-amber-500">
            Operations Timeline
          </p>
          <h2 className="mt-2 text-3xl font-bold text-neutral-900 dark:text-white sm:text-4xl">
            The Roadmap
          </h2>
          <p className="mt-2 text-neutral-600 dark:text-neutral-400">
            From launch to global reserve.
          </p>
        </FadeIn>
        <StaggerIn className="mt-12 space-y-8 lg:space-y-10">
          {ROADMAP_PHASES.map(({ phase, status, title, items }) => (
            <StaggerChild key={phase}>
              <div className="rounded-xl border border-neutral-200 bg-neutral-50/50 p-6 dark:border-neutral-800 dark:bg-neutral-900/30">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-sm font-bold text-amber-600 dark:text-amber-500">
                  Phase {phase}
                </span>
                <span className="rounded-full bg-neutral-200 px-2.5 py-0.5 text-xs font-medium text-neutral-600 dark:bg-neutral-700 dark:text-neutral-300">
                  {status}
                </span>
              </div>
              <h3 className="mt-2 text-lg font-semibold uppercase tracking-wide text-neutral-900 dark:text-white">
                {title}
              </h3>
              <ul className="mt-4 space-y-2">
                {items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400"
                  >
                    <span className="h-1 w-1 shrink-0 rounded-full bg-amber-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            </StaggerChild>
          ))}
        </StaggerIn>
      </div>
    </section>
  );
}

const BUY_STEPS = [
  {
    step: "01",
    title: "Get Phantom",
    desc: "Download Phantom wallet from phantom.app — Chrome, Firefox, iOS & Android. Your gateway to the Solana reserve.",
  },
  {
    step: "02",
    title: "Load SOL",
    desc: "Buy SOL from Coinbase, Binance, or Kraken and transfer it to your Phantom wallet.",
  },
  {
    step: "03",
    title: "Open Jupiter",
    desc: "Visit jup.ag or Raydium.io and connect your Phantom wallet to access the swap interface.",
  },
  {
    step: "04",
    title: "Swap to $WOR",
    desc: "Paste the $WOR contract address, set slippage 1–3%, confirm the swap. Welcome to the Reserve.",
  },
];

const CONTRACT_ADDRESS = "8x5AYb4DUpf8e7d2ivyjZPece84Fb8tu3crrytoopump";

function HowToBuy() {
  const [copied, setCopied] = useState(false);

  const copyContract = () => {
    void navigator.clipboard.writeText(CONTRACT_ADDRESS);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="buy"
      className="border-t border-neutral-200 bg-neutral-50 px-4 py-16 dark:border-neutral-800 dark:bg-neutral-900/30 sm:px-6 lg:py-24"
    >
      <div className="mx-auto max-w-4xl">
        <FadeIn>
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-amber-600 dark:text-amber-500">
            Acquisition Protocol
          </p>
          <h2 className="mt-2 text-center text-3xl font-bold text-neutral-900 dark:text-white sm:text-4xl">
            How to Buy $WOR
          </h2>
        </FadeIn>
        <StaggerIn className="mt-12 grid gap-8 sm:grid-cols-2">
          {BUY_STEPS.map(({ step, title, desc }) => (
            <StaggerChild key={step}>
              <div className="flex h-full gap-4 rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-950">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-amber-500/15 text-lg font-bold text-amber-600 dark:text-amber-400">
                  {step}
                </span>
                <div>
                  <h3 className="font-semibold text-neutral-900 dark:text-white">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {desc}
                  </p>
                </div>
              </div>
            </StaggerChild>
          ))}
        </StaggerIn>
        <FadeIn className="mt-12 rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-950" delay={0.08}>
          <p className="text-xs font-medium uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
            Contract Address
          </p>
          <div className="mt-3 flex flex-wrap items-center gap-3">
            <code className="break-all font-mono text-sm text-neutral-700 dark:text-neutral-300">
              {CONTRACT_ADDRESS}
            </code>
            <MagicIconButton type="button" onClick={copyContract}>
              {copied ? (
                <Check className="h-3.5 w-3.5 text-green-600" />
              ) : (
                <Copy className="h-3.5 w-3.5" />
              )}
              {copied ? "Copied" : "Copy CA"}
            </MagicIconButton>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <MagicCompactPrimary
              href={`https://jup.ag/swap/SOL-${CONTRACT_ADDRESS}`}
            >
              Buy on Jupiter
              <ExternalLink className="h-3.5 w-3.5 opacity-90" />
            </MagicCompactPrimary>
            <MagicSecondaryButton
              href={`https://raydium.io/swap/?inputMint=${CONTRACT_ADDRESS}&outputMint=sol`}
            >
              Buy on Raydium
              <ExternalLink className="h-3.5 w-3.5 opacity-80" />
            </MagicSecondaryButton>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

const FOOTER_LINKS = [
  { href: "#overview", label: "About" },
  { href: "#tokenomics", label: "Tokenomics" },
  { href: "#roadmap", label: "Roadmap" },
  { href: "#buy", label: "Buy $WOR" },
];

function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white px-4 py-12 dark:border-neutral-800 dark:bg-neutral-950 sm:px-6">
      <FadeIn>
        <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/images/logo.jpg"
              alt="WOR"
              width={32}
              height={32}
              className="h-8 w-8 rounded-lg object-contain"
            />
            <div>
              <span className="font-bold text-neutral-900 dark:text-white">$WOR</span>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                War Oil Reserve
              </p>
            </div>
          </div>
          <nav className="flex flex-wrap gap-6">
            {FOOTER_LINKS.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="text-sm font-medium text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
              >
                {label}
              </a>
            ))}
            <a
              href="https://t.me/woroilreserve"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
            >
              Telegram
            </a>
            <a
              href="https://x.com/woroilreserve"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
            >
              Twitter
            </a>
          </nav>
        </div>
        <p className="mt-8 max-w-2xl text-xs leading-relaxed text-neutral-500 dark:text-neutral-500">
          $WOR is a meme/community coin with no intrinsic value or expectation of financial return. This is not financial advice. Cryptocurrency involves significant risk. Always do your own research before investing.
        </p>
        <p className="mt-6 text-xs text-neutral-500 dark:text-neutral-500">
          © {new Date().getFullYear()} War Oil Reserve · $WOR · All Rights Reserved
        </p>
        </div>
      </FadeIn>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <VisualBanner />
        <Overview />
        <Specs />
        <Tokenomics />
        <Roadmap />
        <HowToBuy />
      </main>
      <Footer />
    </div>
  );
}
