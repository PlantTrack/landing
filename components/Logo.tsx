// The app's icon and the name. The picture is the iOS app's own icon
// (ios/.../AppIcon.appiconset/AppIcon.png, scaled to public/app-icon.png) —
// replace that file and it changes everywhere.
export function LeafMark({ className = 'h-9 w-9' }: { className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src="/app-icon.png" alt="" aria-hidden="true" width={36} height={36} className={`shrink-0 rounded-[22.5%] ${className}`} />
  );
}

export function Logo({ className = '' }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LeafMark />
      <span className="whitespace-nowrap text-[19px] font-semibold tracking-[-0.01em]">Home Plants</span>
    </span>
  );
}
