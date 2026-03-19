"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export function ScrollRestoration() {
  const pathname = usePathname();
  const scrollPositions = useRef<Record<string, number>>({});

  useEffect(() => {
    const save = () => {
      scrollPositions.current[pathname] = window.scrollY;
    };
    window.addEventListener("scroll", save, { passive: true });
    return () => window.removeEventListener("scroll", save);
  }, [pathname]);

  useEffect(() => {
    const saved = scrollPositions.current[pathname];
    if (saved != null) {
      window.scrollTo(0, saved);
    }
  }, [pathname]);

  return null;
}
