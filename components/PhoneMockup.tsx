import Image from 'next/image';

// A real screen from the app (simulator, sample data) in a plain iPhone
// frame. Each screen comes in both themes; the page shows the one that
// matches its own.
export function PhoneMockup({
  screen,
  alt,
  className = '',
  priority = false,
}: {
  screen: 'todo' | 'photo-id';
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div className={`flow-root rounded-[17%/7.9%] bg-[#0B0D0B] shadow-[0_40px_80px_-24px_rgba(0,0,0,0.45)] ${className}`}>
      {/* The screen keeps the screenshot's own proportions, so nothing is
          cropped. Its margin is the bezel: a share of the frame's own width. */}
      <div className="relative m-[2.4%] aspect-[804/1748] overflow-hidden rounded-[14.6%/6.7%]">
        <Image src={`/screens/${screen}-light.webp`} alt={alt} fill sizes="(max-width: 768px) 70vw, 340px" priority={priority} className="object-cover dark:hidden" />
        <Image src={`/screens/${screen}-dark.webp`} alt={alt} fill sizes="(max-width: 768px) 70vw, 340px" priority={priority} className="hidden object-cover dark:block" />
      </div>
    </div>
  );
}
