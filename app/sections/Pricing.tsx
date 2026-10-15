import { Check } from 'lucide-react';
import { Container } from '@/components/Container';
import { Reveal } from '@/components/Reveal';
import { APP_STORE_URL } from '@/components/links';

// The app's own plans (PlusPlan in the iOS code). Prices there are
// placeholders until StoreKit sets them; keep the two in step.
const free = ['Three plants', 'Soil checks that learn', 'Photo ID and the plant guide', 'Plant health'];
const plus = ['Every plant in the house', 'AI diagnosis from a photo', 'Everything in Free'];

export function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-4 bg-paper text-ink">
      <Container className="py-24 sm:py-32">
        <Reveal className="text-center">
          <h2 className="font-serif text-[clamp(2.75rem,5vw,4.5rem)] leading-[1] tracking-[-0.015em]">
            Three plants are free.
            <br />
            <em className="text-accent">For good.</em>
          </h2>
        </Reveal>

        {/* Side by side, the cards share rows, so their rules, lists and
            buttons line up although Plus has a line more under its price. */}
        <div className="mx-auto mt-14 grid max-w-[864px] gap-6 md:grid-cols-2 md:gap-y-0">
          <Reveal className="flex flex-col rounded-[30px] p-8 ring-1 ring-line sm:p-9 md:row-span-4 md:grid md:grid-rows-subgrid">
            <div>
              <h3 className="text-[22px] font-semibold">Free</h3>
              <p className="mt-2 flex items-baseline gap-2">
                <span className="text-[44px] font-bold leading-none tracking-[-0.02em]">$0</span>
                <span className="text-[17px] text-ink-soft">for good</span>
              </p>
            </div>
            <hr className="my-7 border-line" />
            <ul className="flex-1 space-y-3.5">
              {free.map((item) => (
                <li key={item} className="flex items-center gap-3 text-[17px]">
                  <Check className="h-[18px] w-[18px] shrink-0 text-accent" strokeWidth={2.2} /> {item}
                </li>
              ))}
            </ul>
            <a href={APP_STORE_URL} className="mt-8 inline-flex h-14 items-center justify-center rounded-full bg-accent text-[17px] font-semibold text-on-accent transition hover:opacity-90">
              Download free
            </a>
          </Reveal>

          <Reveal delay={90} className="flex flex-col rounded-[30px] bg-accent p-8 text-on-accent sm:p-9 md:row-span-4 md:grid md:grid-rows-subgrid">
            <div>
              <div className="flex items-center justify-between">
                <h3 className="text-[22px] font-semibold">Plus</h3>
                <span className="text-[13px] font-semibold uppercase tracking-[0.1em] opacity-80">7 days free</span>
              </div>
              <p className="mt-2 flex items-baseline gap-2">
                <span className="text-[44px] font-bold leading-none tracking-[-0.02em]">$24</span>
                <span className="text-[17px] opacity-80">a year</span>
              </p>
              <p className="mt-1.5 text-[15px] opacity-80">or $2.99 a month · cancel anytime</p>
            </div>
            <hr className="my-7 border-on-accent/20" />
            <ul className="flex-1 space-y-3.5">
              {plus.map((item) => (
                <li key={item} className="flex items-center gap-3 text-[17px]">
                  <Check className="h-[18px] w-[18px] shrink-0" strokeWidth={2.2} /> {item}
                </li>
              ))}
            </ul>
            <a href={APP_STORE_URL} className="mt-8 inline-flex h-14 items-center justify-center rounded-full bg-on-accent text-[17px] font-semibold text-accent transition hover:opacity-90">
              Start free trial
            </a>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
