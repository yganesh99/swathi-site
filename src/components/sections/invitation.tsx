import { Countdown } from "@/components/countdown";
import { couple, stay, wedding } from "@/content/site";

export function Invitation() {
  return (
    <section id="invitation" className="px-4 py-24">
      <div className="reveal mx-auto max-w-2xl bg-paper p-3 shadow-[0_30px_80px_-40px_rgb(46_31_23/0.45)]">
        <div className="border border-caramel/50 p-2">
          <div className="border border-caramel/30 px-6 py-16 text-center sm:px-14">
            <p className="eyebrow">You are invited</p>
            <p className="mt-8 text-lg italic text-espresso/80">
              Together with their families
            </p>
            <h2 className="mt-6 font-display text-5xl font-normal text-cocoa sm:text-6xl">
              {couple.bride}
              <span className="mx-3 italic text-caramel">&amp;</span>
              <span className="italic">{couple.groom}</span>
            </h2>
            <p className="mx-auto mt-8 max-w-sm text-lg leading-relaxed">
              request the pleasure of your company as they celebrate their marriage
            </p>
            <div className="rule mx-auto my-10 w-48" aria-hidden>
              <span className="text-xs">◆</span>
            </div>
            <p className="font-display text-2xl text-cocoa">{wedding.dateLabel}</p>
            <p className="mt-2 text-lg">
              {stay.featured.name} · {wedding.city}
            </p>
            <div className="mt-12">
              <Countdown to={wedding.date} />
            </div>
            <a
              href="#rsvp"
              className="mt-12 inline-block border border-cocoa px-10 py-3.5 text-sm uppercase tracking-[0.3em] text-cocoa transition hover:bg-cocoa hover:text-paper"
            >
              RSVP
            </a>
            <p className="mt-5 text-sm italic text-espresso/70">
              Kindly respond by {wedding.rsvpBy}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
