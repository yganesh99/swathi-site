const paths = {
  plane: "M2 16l20-6-20-6 3 6-3 6zm3-6h9",
  car: "M3 13l2-5a2 2 0 012-1h10a2 2 0 012 1l2 5v5h-3v-2H6v2H3v-5zm0 0h18M7 16h.01M17 16h.01",
  passport: "M6 3h12v18H6zM12 13a3 3 0 100-6 3 3 0 000 6zm-3 4h6",
  pin: "M12 21s-7-6.3-7-11a7 7 0 0114 0c0 4.7-7 11-7 11zm0-8a3 3 0 100-6 3 3 0 000 6z",
  clock: "M12 21a9 9 0 100-18 9 9 0 000 18zm0-14v5l3 2",
  arrow: "M5 12h14m-5-5l5 5-5 5",
};

export type IconName = keyof typeof paths;

export function Icon({ name, className = "h-5 w-5" }: { name: IconName; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d={paths[name]} />
    </svg>
  );
}
