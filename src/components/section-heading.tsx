type Props = { eyebrow: string; title: string; intro?: string };

export function SectionHeading({ eyebrow, title, intro }: Props) {
  return (
    <header className="reveal mx-auto mb-14 max-w-xl text-center">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-4 font-display text-4xl font-normal italic text-cocoa sm:text-5xl">
        {title}
      </h2>
      <div className="rule mx-auto mt-6 w-40" aria-hidden>
        <span className="text-xs">◆</span>
      </div>
      {intro && <p className="mt-6 text-lg leading-relaxed text-espresso/80">{intro}</p>}
    </header>
  );
}

// Turns **name** into bold text for the story paragraphs.
export function RichText({ text }: { text: string }) {
  return (
    <>
      {text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
        part.startsWith("**") ? (
          <strong key={i} className="font-medium text-cocoa">
            {part.slice(2, -2)}
          </strong>
        ) : (
          part
        ),
      )}
    </>
  );
}
