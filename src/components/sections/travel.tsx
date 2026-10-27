import { Icon } from "@/components/icons";
import { PhotoFrame } from "@/components/photo-frame";
import { SectionHeading } from "@/components/section-heading";
import { gettingThere, places, stay } from "@/content/site";

export function GettingThere() {
  return (
    <section id="travel" className="mx-auto max-w-5xl px-4 py-24">
      <SectionHeading eyebrow="Welcome to Sri Lanka" title="Getting There" />
      <div className="grid gap-10 md:grid-cols-3">
        {gettingThere.map((item) => (
          <div key={item.title} className="reveal text-center md:text-left">
            <Icon name={item.icon} className="mx-auto h-8 w-8 text-caramel md:mx-0" />
            <h3 className="mt-4 font-display text-2xl text-cocoa">{item.title}</h3>
            <p className="mt-3 text-lg leading-relaxed">{item.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Stay() {
  const { featured, nearby } = stay;
  return (
    <section id="stay" className="mx-auto max-w-5xl px-4 py-24">
      <SectionHeading
        eyebrow="During your visit"
        title="Where to Stay"
        intro="Stay where the celebrations happen, or pick one of our favourites nearby in Negombo."
      />
      <article className="reveal grid overflow-hidden bg-paper md:grid-cols-2">
        <PhotoFrame photo={featured.photo} sizes="(min-width: 768px) 512px, 100vw" className="aspect-[4/3] md:aspect-auto md:min-h-80" />
        <div className="p-8 sm:p-12">
          <p className="eyebrow">The wedding venue</p>
          <h3 className="mt-3 font-display text-3xl text-cocoa">{featured.name}</h3>
          <p className="mt-4 text-lg leading-relaxed">{featured.blurb}</p>
          <a
            href={featured.url}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-3 bg-cocoa px-7 py-3.5 text-sm uppercase tracking-[0.25em] text-paper transition hover:bg-espresso"
          >
            Book your room <Icon name="arrow" className="h-4 w-4" />
          </a>
        </div>
      </article>

      <p className="eyebrow reveal mt-16 text-center">Also around Negombo</p>
      <ul className="mt-6 divide-y divide-sand border-y border-sand">
        {nearby.map((h) => (
          <li key={h.name} className="reveal">
            <a
              href={h.url}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between gap-4 py-5"
            >
              <span>
                <span className="block font-display text-2xl text-cocoa">{h.name}</span>
                <span className="text-base text-espresso/70">{h.note}</span>
              </span>
              <Icon name="arrow" className="h-5 w-5 shrink-0 text-caramel transition group-hover:translate-x-1" />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function Explore() {
  return (
    <section id="explore" className="mx-auto max-w-6xl px-4 py-24">
      <SectionHeading
        eyebrow="Make a trip of it"
        title="Explore Sri Lanka"
        intro="If you’re travelling all this way, stay a little longer. A few places we love:"
      />
      <div className="grid gap-x-10 gap-y-16 md:grid-cols-2">
        {places.map((place, i) => (
          <article key={place.name} className={`reveal ${i % 2 ? "md:mt-24" : ""}`}>
            <PhotoFrame photo={place.photo} sizes="(min-width: 768px) 560px, 100vw" className="aspect-[4/3]" />
            <p className="eyebrow mt-6 flex items-center gap-2">
              <Icon name="pin" className="h-3.5 w-3.5" />
              {place.region}
            </p>
            <h3 className="mt-2 font-display text-4xl text-cocoa">{place.name}</h3>
            <p className="mt-1 text-base italic text-espresso/70">{place.distance}</p>
            <p className="mt-4 text-lg leading-relaxed">{place.why}</p>
            <ul className="mt-4 space-y-1 text-base">
              {place.tips.map((t) => (
                <li key={t} className="before:mr-2 before:text-caramel before:content-['—']">
                  {t}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
