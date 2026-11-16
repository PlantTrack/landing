import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/Container';
import { SiteFooter } from '@/components/SiteFooter';
import { TopBar } from '@/components/TopBar';

export type LegalSection = { id: string; title: string; body: React.ReactNode };

// The Privacy Policy and the Terms: the title on forest, then the opening
// words and the sections on paper — numbered, with a list of them beside from
// 1024 up. The text itself is Home Tasker's, made true for Home Plants
// (app/privacy/content.tsx, app/terms/content.tsx).
export function LegalPage({
  title,
  updated,
  intro,
  sections,
  other,
}: {
  title: string;
  updated: string;
  intro: React.ReactNode;
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
          <p className="mt-6 text-[15px] text-cream/60">Last updated {updated}</p>
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
            <div className="legal mb-12">{intro}</div>
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
