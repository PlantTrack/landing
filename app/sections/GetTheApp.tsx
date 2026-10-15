import { AppStoreBadge } from '@/components/AppStoreBadge';
import { Container } from '@/components/Container';
import { Logo } from '@/components/Logo';
import { Reveal } from '@/components/Reveal';
import { CONTACT_URL, PRIVACY_URL, TERMS_URL } from '@/components/links';

// The way out, as the Plus offer says it, and the footer under it.
export function GetTheApp() {
  return (
    <footer className="bg-forest text-cream">
      <Container className="flex flex-col items-center py-28 text-center sm:py-36">
        <Reveal>
          <h2 className="font-serif text-[clamp(3.1rem,7vw,6rem)] leading-[0.96] tracking-[-0.02em]">
            Every plant
            <br />
            <em className="text-mint">in the house.</em>
          </h2>
        </Reveal>
        <Reveal delay={90} className="mt-10">
          <AppStoreBadge outlined />
        </Reveal>
      </Container>

      <Container>
        <div className="flex flex-col gap-6 border-t border-cream/10 py-10 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-6">
            <Logo />
            <span className="text-[15px] text-cream/50">© 2026 Home Plants</span>
          </div>
          <nav className="flex gap-8 text-[15px] text-cream/70" aria-label="Legal">
            <a href={PRIVACY_URL} className="transition hover:text-cream">
              Privacy
            </a>
            <a href={TERMS_URL} className="transition hover:text-cream">
              Terms
            </a>
            <a href={CONTACT_URL} className="transition hover:text-cream">
              Contact
            </a>
          </nav>
        </div>
      </Container>
    </footer>
  );
}
