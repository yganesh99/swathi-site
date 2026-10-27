"use client";

import { useSyncExternalStore } from "react";

const UNITS = [
  ["days", 86_400_000],
  ["hours", 3_600_000],
  ["mins", 60_000],
  ["secs", 1_000],
] as const;

function split(ms: number) {
  let rest = Math.max(ms, 0);
  return UNITS.map(([label, size]) => {
    const value = Math.floor(rest / size);
    rest -= value * size;
    return { label, value };
  });
}

function subscribe(tick: () => void) {
  const id = setInterval(tick, 1000);
  return () => clearInterval(id);
}

// Second-resolution clock so snapshots stay stable between ticks.
const getNow = () => Math.floor(Date.now() / 1000) * 1000;

export function Countdown({ to }: { to: string }) {
  // Null on the server so the prerendered markup is stable; ticks once hydrated.
  const now = useSyncExternalStore(subscribe, getNow, () => null);

  const parts = now === null ? null : split(new Date(to).getTime() - now);

  return (
    <div className="flex justify-center gap-5 sm:gap-8" aria-label="Countdown to the wedding">
      {UNITS.map(([label], i) => (
        <div key={label} className="min-w-12 text-center">
          <div className="font-display text-3xl tabular-nums text-cocoa sm:text-4xl">
            {parts ? String(parts[i].value).padStart(2, "0") : "––"}
          </div>
          <div className="eyebrow mt-1 !text-[0.6rem]">{label}</div>
        </div>
      ))}
    </div>
  );
}
