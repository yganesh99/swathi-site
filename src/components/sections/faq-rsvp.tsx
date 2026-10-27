import { RsvpForm } from "@/components/rsvp-form";
import { SectionHeading } from "@/components/section-heading";
import { couple, faqs, wedding } from "@/content/site";

export function Faq() {
  return (
    <section id="faq" className="mx-auto max-w-3xl px-4 py-24">
      <SectionHeading eyebrow="Good to know" title="Q&A" />
      <div className="divide-y divide-sand border-y border-sand">
        {faqs.map((f) => (
          <details key={f.q} className="reveal group py-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-display text-xl text-cocoa [&::-webkit-details-marker]:hidden">
              {f.q}
              <span className="text-2xl font-light text-caramel transition group-open:rotate-45" aria-hidden>
                +
              </span>
            </summary>
            <p className="mt-3 pr-8 text-lg leading-relaxed">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export function Rsvp() {
  return (
    <section id="rsvp" className="px-4 py-24">
      <div className="mx-auto max-w-2xl bg-paper/80 px-6 py-16 backdrop-blur-sm sm:px-14">
        <SectionHeading
          eyebrow={`Kindly respond by ${wedding.rsvpBy}`}
          title="RSVP"
          intro="We would be so happy to have you with us. Please reply for everyone in your party."
        />
        <RsvpForm />
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="px-4 pb-16 pt-8 text-center">
      <p className="font-script text-5xl text-cocoa">
        {couple.bride} &amp; {couple.groom}
      </p>
      <p className="eyebrow mt-4">
        {wedding.city} · {new Date(wedding.date).getFullYear()}
      </p>
    </footer>
  );
}
