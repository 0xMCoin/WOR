"use client";

import { motion } from "framer-motion";
import { clsx } from "clsx";

type Props = {
  href: string;
  className?: string;
  children: React.ReactNode;
};

const shine =
  "pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full";

/** Primary CTA — animated amber gradient border + inner panel + shine sweep */
export function MagicPrimaryButton({ href, className, children }: Props) {
  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 420, damping: 22 }}
      className={clsx(
        "group relative inline-flex overflow-hidden rounded-xl p-[1px]",
        "bg-[linear-gradient(110deg,#fbbf24,#f59e0b,#d97706,#eab308,#fbbf24)] bg-[length:200%_200%] animate-gradient-shift",
        "shadow-lg shadow-amber-500/30 hover:shadow-[0_0_42px_rgba(251,191,36,0.45)]",
        className
      )}
    >
      <span className="relative flex w-full items-center justify-center overflow-hidden rounded-[11px] bg-gradient-to-b from-neutral-900 to-neutral-950 px-6 py-3.5 text-base font-semibold text-white dark:from-neutral-950 dark:to-black">
        <span className={shine} aria-hidden />
        <span className="relative z-[1]">{children}</span>
      </span>
    </motion.a>
  );
}

/** Hero outline — glass + light gradient border (for dark backgrounds) */
export function MagicOutlineHeroButton({ href, className, children }: Props) {
  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 420, damping: 22 }}
      className={clsx(
        "group relative inline-flex overflow-hidden rounded-xl p-[1px]",
        "bg-[linear-gradient(110deg,rgba(255,255,255,0.5),rgba(255,255,255,0.15),rgba(255,255,255,0.35),rgba(255,255,255,0.2))] bg-[length:200%_200%] animate-gradient-shift",
        "hover:shadow-[0_0_36px_rgba(255,255,255,0.12)]",
        className
      )}
    >
      <span className="relative flex w-full items-center justify-center overflow-hidden rounded-[11px] bg-white/10 px-6 py-3.5 text-base font-semibold text-white backdrop-blur-md">
        <span className={shine} aria-hidden />
        <span className="relative z-[1]">{children}</span>
      </span>
    </motion.a>
  );
}

/** Smaller primary (DEX links, inline CTAs) */
export function MagicCompactPrimary({ href, className, children }: Props) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 420, damping: 22 }}
      className={clsx(
        "group relative inline-flex overflow-hidden rounded-lg p-[1px]",
        "bg-[linear-gradient(110deg,#fbbf24,#f59e0b,#d97706,#eab308,#fbbf24)] bg-[length:200%_200%] animate-gradient-shift",
        "shadow-md shadow-amber-500/25 hover:shadow-[0_0_28px_rgba(251,191,36,0.4)]",
        className
      )}
    >
      <span className="relative flex items-center gap-2 overflow-hidden rounded-[7px] bg-gradient-to-b from-neutral-900 to-neutral-950 px-4 py-2.5 text-sm font-semibold text-white">
        <span className={shine} aria-hidden />
        <span className="relative z-[1] flex items-center gap-2">{children}</span>
      </span>
    </motion.a>
  );
}

/** Compact navbar CTA */
export function MagicNavButton({ href, className, children }: Props) {
  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: "spring", stiffness: 450, damping: 24 }}
      className={clsx(
        "group relative inline-flex overflow-hidden rounded-lg p-[1px]",
        "bg-[linear-gradient(110deg,#fbbf24,#f59e0b,#d97706,#fbbf24)] bg-[length:200%_200%] animate-gradient-shift",
        "shadow-md shadow-amber-500/25 hover:shadow-[0_0_24px_rgba(251,191,36,0.35)]",
        className
      )}
    >
      <span className="relative flex w-full min-w-0 items-center justify-center overflow-hidden rounded-[7px] bg-neutral-950 px-4 py-2 text-sm font-semibold text-white">
        <span className={shine} aria-hidden />
        <span className="relative z-[1]">{children}</span>
      </span>
    </motion.a>
  );
}

/** Secondary / neutral outline (light pages) */
export function MagicSecondaryButton({ href, className, children }: Props) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={clsx(
        "group relative inline-flex overflow-hidden rounded-lg p-[1px]",
        "bg-[linear-gradient(110deg,#a3a3a3,#737373,#525252,#a3a3a3)] bg-[length:200%_200%] animate-gradient-shift dark:from-neutral-600",
        "hover:shadow-[0_0_24px_rgba(115,115,115,0.25)]",
        className
      )}
    >
      <span className="relative flex items-center gap-2 overflow-hidden rounded-[7px] bg-white px-4 py-2.5 text-sm font-semibold text-neutral-800 dark:bg-neutral-950 dark:text-neutral-100">
        <span className={shine} aria-hidden />
        <span className="relative z-[1] flex items-center gap-2">{children}</span>
      </span>
    </motion.a>
  );
}

type ButtonProps = {
  type?: "button" | "submit";
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
};

/** Copy / action button with subtle animated border */
export function MagicIconButton({
  type = "button",
  onClick,
  className,
  children,
}: ButtonProps) {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={clsx(
        "group relative inline-flex overflow-hidden rounded-lg p-[1px]",
        "bg-[linear-gradient(110deg,#d4d4d4,#a3a3a3,#d4d4d4)] bg-[length:200%_200%] animate-gradient-shift dark:bg-[linear-gradient(110deg,#404040,#525252,#404040)]",
        className
      )}
    >
      <span className="relative flex items-center gap-2 overflow-hidden rounded-[7px] bg-neutral-50 px-3 py-2 text-sm font-medium text-neutral-800 dark:bg-neutral-900 dark:text-neutral-200">
        <span className={shine} aria-hidden />
        <span className="relative z-[1] flex items-center gap-2">{children}</span>
      </span>
    </motion.button>
  );
}
