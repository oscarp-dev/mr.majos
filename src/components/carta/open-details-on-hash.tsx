"use client";

import { useEffect } from "react";

/** Si la URL apunta a un <details> (/carta#margaritas-frozen), lo abre. */
export function OpenDetailsOnHash() {
  useEffect(() => {
    const open = () => {
      const target = window.location.hash && document.getElementById(window.location.hash.slice(1));
      if (target instanceof HTMLDetailsElement) {
        target.open = true;
        target.scrollIntoView({ block: "start" });
      }
    };
    open();
    window.addEventListener("hashchange", open);
    return () => window.removeEventListener("hashchange", open);
  }, []);

  return null;
}
