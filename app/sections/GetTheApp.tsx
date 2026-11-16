import { AppStoreBadge } from '@/components/AppStoreBadge';
import { Container } from '@/components/Container';
import { Reveal } from '@/components/Reveal';

// The way out, as the Premium offer says it.
export function GetTheApp() {
  return (
    <section className="bg-forest text-cream">
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
    </section>
  );
}
