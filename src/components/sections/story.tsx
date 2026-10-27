import { PhotoFrame } from "@/components/photo-frame";
import { RichText, SectionHeading } from "@/components/section-heading";
import { engagement, story } from "@/content/site";

export function Story() {
  const [a, b, c] = story.photos;
  return (
    <section id="story" className="mx-auto max-w-5xl px-4 py-24">
      <SectionHeading eyebrow="How it began" title={story.title} />
      <div className="reveal grid grid-cols-[1.4fr_1fr] grid-rows-2 gap-3">
        <PhotoFrame photo={a} sizes="60vw" className="row-span-2 aspect-[4/5] h-full" />
        <PhotoFrame photo={b} sizes="40vw" className="h-full min-h-32" />
        <PhotoFrame photo={c} sizes="40vw" className="h-full min-h-32" />
      </div>
      <div className="mx-auto mt-14 max-w-2xl space-y-6 text-lg leading-relaxed">
        {story.paragraphs.map((p, i) => (
          <p key={i} className={`reveal ${i === 0 ? "drop-cap" : ""}`}>
            <RichText text={p} />
          </p>
        ))}
      </div>
    </section>
  );
}

export function Engagement() {
  return (
    <section id="engagement" className="mx-auto max-w-5xl px-4 py-24">
      <SectionHeading eyebrow={engagement.dateLabel} title={engagement.title} />
      <div className="grid items-center gap-12 md:grid-cols-2">
        <div className="reveal relative">
          <PhotoFrame photo={engagement.photo} sizes="(min-width: 768px) 480px, 90vw" className="aspect-[4/5]" />
          <p className="absolute -bottom-6 right-4 bg-ivory px-4 font-script text-4xl text-caramel">
            she said yes
          </p>
        </div>
        <div className="space-y-6 text-lg leading-relaxed">
          {engagement.paragraphs.map((p, i) => (
            <p key={i} className="reveal">
              <RichText text={p} />
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
