import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { AppStoreBadge } from '@/components/AppStoreBadge';
import { Container } from '@/components/Container';
import { Logo } from '@/components/Logo';
import { PhoneMockup } from '@/components/PhoneMockup';
import { ThemeToggle } from '@/components/ThemeToggle';
import { APP_STORE_URL } from '@/components/links';

const nav = [
  { href: '#how', label: 'How it works' },
  { href: '#features', label: 'Features' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#questions', label: 'Questions' },
];

// The rule, set large; under it the app's To do between two plants,
// cut off by the next section the way a magazine crops a photograph.
export function Hero() {
  return (
    <header id="top" className="relative overflow-hidden bg-forest text-cream">
      <Container className="flex items-center justify-between py-6 lg:grid lg:grid-cols-[1fr_auto_1fr]">
        <a href="#top" aria-label="Home Plants" className="justify-self-start">
          <Logo />
        </a>
        <nav className="hidden items-center gap-9 lg:flex" aria-label="Sections">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="text-[15px] font-medium text-cream/70 transition hover:text-cream">
              {item.label}
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

      <Container className="flex flex-col items-center pt-14 text-center sm:pt-20">
        <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-cream/60">Home Plants · for iPhone</p>
        <h1 className="mt-6 font-serif text-[clamp(2.6rem,7.4vw,6.75rem)] leading-[0.98] tracking-[-0.02em]">
          Water when they need&nbsp;it.
          <br />
          <em className="text-mint">Not on a set day.</em>
        </h1>
        <p className="mt-7 max-w-[600px] text-balance text-[clamp(1.05rem,1.6vw,1.25rem)] leading-[1.55] text-cream/75">
          Home Plants asks how the soil feels now and then, and learns each plant’s rhythm in your home.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-x-7 gap-y-4">
          <AppStoreBadge outlined />
          <a href="#how" className="inline-flex items-center gap-2 text-[17px] font-semibold text-cream transition hover:text-mint">
            See how it works <ArrowRight className="h-[18px] w-[18px]" strokeWidth={2} />
          </a>
        </div>
      </Container>

      <div className="relative mx-auto mt-14 h-[440px] w-full max-w-[1200px] sm:mt-16 sm:h-[560px] lg:h-[600px]">
        <div className="absolute left-[3%] top-[110px] hidden h-[480px] w-[27%] overflow-hidden rounded-[28px] md:block lg:top-[120px] lg:h-[520px]">
          <Image src="/photos/peace-lily.webp" alt="" fill sizes="330px" className="object-cover" />
        </div>
        <div className="absolute right-[3%] top-[110px] hidden h-[480px] w-[27%] overflow-hidden rounded-[28px] md:block lg:top-[120px] lg:h-[520px]">
          <Image src="/photos/zz-plant.webp" alt="" fill sizes="330px" className="object-cover" />
        </div>
        <PhoneMockup
          screen="todo"
          priority
          alt="To do in Home Plants: today’s soil checks and waterings, room by room."
          className="absolute left-1/2 top-0 w-[min(76vw,330px)] -translate-x-1/2"
        />
      </div>
    </header>
  );
}
