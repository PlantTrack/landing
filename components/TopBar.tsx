import { Container } from '@/components/Container';
import { Logo } from '@/components/Logo';
import { ThemeToggle } from '@/components/ThemeToggle';
import { APP_STORE_URL } from '@/components/links';

const sections = [
  { id: 'how', label: 'How it works' },
  { id: 'features', label: 'Features' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'questions', label: 'Questions' },
];

// The bar over every page: the logo, the home page's sections (from 1024 up,
// where they fit), the theme switch and the way to the app. On the home page
// the links stay on the page; elsewhere they lead back to it.
export function TopBar({ onHome = false }: { onHome?: boolean }) {
  const at = (id: string) => (onHome ? `#${id}` : `/#${id}`);
  return (
    <Container className="flex items-center justify-between py-6 lg:grid lg:grid-cols-[1fr_auto_1fr]">
      <a href={onHome ? '#top' : '/'} aria-label="Home Plants" className="justify-self-start">
        <Logo />
      </a>
      <nav className="hidden items-center gap-9 lg:flex" aria-label="Sections">
        {sections.map((section) => (
          <a key={section.id} href={at(section.id)} className="text-[15px] font-medium text-cream/70 transition hover:text-cream">
            {section.label}
          </a>
        ))}
      </nav>
      <div className="flex items-center gap-3 justify-self-end">
        <ThemeToggle />
        <a href={APP_STORE_URL} className="hidden whitespace-nowrap rounded-full bg-cream px-6 py-3 text-[15px] font-semibold text-forest transition hover:bg-white sm:inline-flex">
          Get the app
        </a>
      </div>
    </Container>
  );
}
