import { Icon } from "@/components/icons";
import { PhotoFrame } from "@/components/photo-frame";
import { SectionHeading } from "@/components/section-heading";
import { events, wearWhatYouWant, type WeddingEvent } from "@/content/site";

export function Events() {
  return (
    <section id="events" className="mx-auto max-w-5xl px-4 py-24">
      <SectionHeading
        eyebrow="The celebrations"
        title="Sangeet & Wedding"
        intro="Two days, two very different moods. Here’s what each event is, and a little inspiration for what to wear."
      />
      <ol className="relative space-y-24 border-l border-caramel/40 pl-8 sm:pl-12">
        {events.map((event) => (
          <EventCard key={event.name} event={event} />
        ))}
      </ol>
    </section>
  );
}

function EventCard({ event }: { event: WeddingEvent }) {
  return (
    <li className="relative">
      <span
        className="absolute -left-[calc(2rem+5px)] top-2 h-2.5 w-2.5 rounded-full border border-cocoa bg-ivory sm:-left-[calc(3rem+5px)]"
        aria-hidden
      />
      <div className="reveal">
        <p className="eyebrow">{event.dayLabel}</p>
        <h3 className="mt-3 font-display text-5xl font-normal text-cocoa sm:text-6xl">
          {event.name}
        </h3>
        <p className="mt-2 text-xl italic text-caramel">{event.what}</p>
        <div className="mt-5 flex flex-wrap gap-x-8 gap-y-2 text-base text-espresso/80">
          <span className="flex items-center gap-2">
            <Icon name="clock" className="h-4 w-4 text-caramel" />
            {event.time}
          </span>
          <span className="flex items-center gap-2">
            <Icon name="pin" className="h-4 w-4 text-caramel" />
            {event.venue}
          </span>
        </div>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed">{event.explainer}</p>
      </div>

      <div className="reveal mt-10">
        <p className="eyebrow">Mood board</p>
        <div className="mt-4 grid grid-cols-3 grid-rows-2 gap-2 sm:grid-cols-4">
          {event.moodboard.map((photo, i) => (
            <PhotoFrame
              key={i}
              photo={photo}
              sizes="25vw"
              className={i === 0 ? "col-span-2 row-span-2 aspect-square sm:aspect-auto" : "aspect-square"}
            />
          ))}
        </div>
        <div className="mt-5 flex flex-wrap items-center gap-4">
          {event.palette.map((c) => (
            <span key={c.name} className="flex items-center gap-2 text-sm">
              <span
                className="h-5 w-5 rounded-full border border-espresso/10"
                style={{ background: c.hex }}
                aria-hidden
              />
              {c.name}
            </span>
          ))}
        </div>
        <p className="mt-6 text-lg">
          <span className="font-medium text-cocoa">What to wear · </span>
          {event.dressCode}
        </p>
        <p className="mt-6 border-l-2 border-caramel/60 bg-paper/60 py-4 pl-5 pr-4 text-lg italic text-espresso/85">
          {wearWhatYouWant}
        </p>
      </div>
    </li>
  );
}
