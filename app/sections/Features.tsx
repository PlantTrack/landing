import Image from 'next/image';
import { Container } from '@/components/Container';
import { PhoneMockup } from '@/components/PhoneMockup';
import { Reveal } from '@/components/Reveal';

const features = [
  { title: 'Two photos, and it knows', body: 'Not sure what it is? Photo ID names the plant and sets it up.' },
  { title: 'Something looks off?', body: 'Tick what you see. It tells you the likely cause and how soon to act.' },
  { title: 'Knows when they rest', body: 'Plants that rest in winter get fewer checks and a lighter watering.' },
  { title: 'The right amount', body: 'A mist, a little, or a full watering — each plant gets its own words.' },
];

// Photo ID on a leaf, and what else is inside, as a list of type.
export function Features() {
  return (
    <section id="features" className="scroll-mt-4 bg-forest text-cream">
      <Container className="grid items-center gap-14 py-24 sm:py-32 lg:grid-cols-[minmax(0,520px)_minmax(0,1fr)] lg:gap-24">
        <Reveal className="relative mx-auto h-[560px] w-full max-w-[520px] overflow-hidden rounded-[32px] sm:h-[680px]">
          <Image src="/photos/monstera-leaf.webp" alt="" fill sizes="(max-width: 1024px) 100vw, 520px" className="object-cover" />
          <PhoneMockup
            screen="photo-id"
            alt="Photo ID in Home Plants: two photos, and the likeliest match — Monstera."
            className="absolute left-1/2 top-1/2 w-[min(62vw,288px)] -translate-x-1/2 -translate-y-1/2"
          />
        </Reveal>

        <div>
          <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-mint">What’s inside</p>
          <ul className="mt-6">
            {features.map((f, i) => (
              <Reveal as="li" key={f.title} delay={i * 80} className="border-t border-cream/15 py-6">
                <h3 className="font-serif text-[clamp(1.9rem,2.6vw,2.25rem)] leading-[1.1] tracking-[-0.01em]">{f.title}</h3>
                <p className="mt-2 text-[17px] leading-[26px] text-cream/70">{f.body}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
