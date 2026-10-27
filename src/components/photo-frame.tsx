import Image from "next/image";
import type { Photo } from "@/content/site";

type Props = {
  photo: Photo;
  className?: string;
  sizes?: string;
  priority?: boolean;
};

// Renders the photo if a src is set, otherwise a soft placeholder so the layout reads correctly.
export function PhotoFrame({ photo, className = "", sizes = "100vw", priority }: Props) {
  return (
    <div className={`relative overflow-hidden bg-linen ${className}`}>
      {photo.src ? (
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
        />
      ) : (
        <div
          role="img"
          aria-label={photo.alt}
          className="absolute inset-0 flex items-end justify-center bg-[linear-gradient(160deg,var(--color-sand),var(--color-linen)_55%,var(--color-caramel))] p-4 opacity-80"
        >
          <span className="eyebrow !text-[0.6rem] !text-cocoa/70">Photo coming soon</span>
        </div>
      )}
    </div>
  );
}
