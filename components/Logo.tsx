// The app's leaf on its green, and the name. A stand-in until the logo is
// chosen (Figma, page "5 · App icon") — swap the mark here and it changes
// everywhere.
export function LeafMark({ className = 'h-9 w-9' }: { className?: string }) {
  return (
    <span className={`inline-flex items-center justify-center rounded-[10px] bg-accent text-on-accent ${className}`} aria-hidden="true">
      <svg viewBox="0 0 24 24" className="h-[58%] w-[58%]" fill="currentColor">
        <path d="M5 19C5 10.7 10.7 5 19 5c0 8.3-5.7 14-14 14Z" />
        <path d="M5 19 13.2 10.8" stroke="rgb(var(--accent))" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    </span>
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
