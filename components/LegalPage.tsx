import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/Container';
import { SiteFooter } from '@/components/SiteFooter';
import { TopBar } from '@/components/TopBar';
import { legal, legalDraft, legalHints, type LegalField } from '@/components/legal';

export type LegalSection = { id: string; title: string; body: React.ReactNode };

// A fact only the company can give (components/legal.ts): the value once it's
// there, a highlighted blank until then.
export function Blank({ field }: { field: LegalField }) {
  const value = legal[field];
  return value ? <>{value}</> : <mark className="blank">[{legalHints[field]}]</mark>;
}

// The Privacy Policy and the Terms: the title and the short version on forest,
// then the sections on paper — numbered, with a list of them beside from 1024 up.
export function LegalPage({
  title,
  summary,
  sections,
  other,
}: {
  title: string;
  summary: string[];
  sections: LegalSection[];
  other: { href: string; label: string };
}) {
  return (
    <>
      <header className="bg-forest text-cream">
        <TopBar />
        <Container className="pb-16 pt-10 sm:pb-24 sm:pt-16">
          <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-cream/60">Home Plants · Legal</p>
          <h1 className="mt-5 text-balance font-serif text-[clamp(3rem,7vw,6rem)] leading-[0.98] tracking-[-0.02em]">{title}</h1>
          <p className="mt-6 text-[15px] text-cream/60">
            Last updated <Blank field="updated" />
          </p>
          {legalDraft ? (
            <p className="mt-5 inline-flex rounded-full px-4 py-2 text-[14px] text-cream/80 ring-1 ring-cream/25">
              Draft — the highlighted blanks need filling before this goes live.
            </p>
          ) : null}

          <div className="mt-14 border-t border-cream/15 pt-8">
            <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-mint">In short</p>
            <ul className="mt-6 grid gap-x-10 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
              {summary.map((point) => (
                <li key={point} className="font-serif text-[22px] leading-[1.25]">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </header>

      <main className="bg-paper text-ink">
        <Container className="py-16 sm:py-24 lg:grid lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-20">
          <nav aria-label="On this page" className="hidden lg:block">
            <div className="sticky top-8">
              <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-ink-soft">On this page</p>
              <ol className="mt-5 space-y-2.5 text-[15px] leading-[20px]">
                {sections.map((section, i) => (
                  <li key={section.id}>
                    <a href={`#${section.id}`} className="flex gap-3 text-ink-soft transition hover:text-ink">
                      <span className="w-5 shrink-0 tabular-nums text-accent">{i + 1}</span>
                      {section.title}
                    </a>
                  </li>
                ))}
              </ol>
              <a href={other.href} className="mt-8 inline-flex items-center gap-2 text-[15px] font-semibold text-accent transition hover:opacity-80">
                {other.label} <ArrowRight className="h-4 w-4" strokeWidth={2} />
              </a>
            </div>
          </nav>

          <article className="max-w-[720px]">
            {sections.map((section, i) => (
              <section key={section.id} id={section.id} className="scroll-mt-8 border-t border-line py-10 first:border-t-0 first:pt-0 last:pb-0">
                <h2 className="flex gap-4 font-serif text-[clamp(1.75rem,3vw,2.25rem)] leading-[1.1] tracking-[-0.01em]">
                  <span className="text-accent">{String(i + 1).padStart(2, '0')}</span>
                  <span>{section.title}</span>
                </h2>
                <div className="legal mt-5">{section.body}</div>
              </section>
            ))}
          </article>
        </Container>
      </main>

      <SiteFooter divided={false} />
    </>
  );
}
