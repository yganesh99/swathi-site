import { PhotoFrame } from "@/components/photo-frame";
import { couple, wedding } from "@/content/site";

export function Hero() {
  return (
    <section
      id="top"
      className="relative mx-auto grid min-h-[calc(100svh-3.5rem)] max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-[1.1fr_1fr] md:gap-16"
    >
      <div className="text-center md:text-left">
        <p className="eyebrow rise" style={{ "--i": 0 } as React.CSSProperties}>
          The story of
        </p>
        <h1 className="mt-6 font-display font-normal leading-[0.9] text-cocoa">
          <span className="rise block text-7xl sm:text-8xl lg:text-9xl" style={{ "--i": 1 } as React.CSSProperties}>
            {couple.bride}
          </span>
          <span
            className="rise block py-2 text-6xl italic text-caramel sm:text-7xl md:pl-24"
            style={{ "--i": 2 } as React.CSSProperties}
          >
            &amp;
          </span>
          <span
            className="rise block text-7xl italic sm:text-8xl md:pl-10 lg:text-9xl"
            style={{ "--i": 3 } as React.CSSProperties}
          >
            {couple.groom}
          </span>
        </h1>
        <div className="rise mt-10 space-y-1" style={{ "--i": 4 } as React.CSSProperties}>
          <p className="text-xl">are getting married</p>
          <p className="eyebrow">
            {wedding.dateLabel} · {wedding.city}
          </p>
        </div>
        <a
          href="#story"
          className="rise mt-10 inline-flex items-center gap-3 text-sm uppercase tracking-[0.3em] text-cocoa"
          style={{ "--i": 5 } as React.CSSProperties}
        >
          <span className="h-10 w-px bg-cocoa/50" aria-hidden />
          Begin our story
        </a>
      </div>

      <div className="rise relative mx-auto w-full max-w-sm" style={{ "--i": 2 } as React.CSSProperties}>
        <div className="arch absolute -inset-3 border border-caramel/40" aria-hidden />
        <PhotoFrame photo={wedding.hero} priority sizes="(min-width: 768px) 400px, 90vw" className="arch aspect-[3/4.2]" />
      </div>
    </section>
  );
}
