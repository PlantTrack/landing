import { Container } from '@/components/Container';
import { Logo } from '@/components/Logo';
import { CONTACT_URL, PRIVACY_URL, TERMS_URL } from '@/components/links';

// The last row of every page. Under the home page's closing words a rule sets
// it apart; after a page of paper the forest does that on its own.
export function SiteFooter({ divided = true }: { divided?: boolean }) {
  return (
    <footer className="bg-forest text-cream">
      <Container>
        <div className={`flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between ${divided ? 'border-t border-cream/10' : ''}`}>
          <div className="flex items-center gap-6">
            <a href="/" aria-label="Home Plants">
              <Logo />
            </a>
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
