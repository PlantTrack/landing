import { Container } from '@/components/Container';
import { Reveal } from '@/components/Reveal';

const steps = [
  { n: '01', title: 'Add a plant', body: 'Search the guide, or take two photos — it names the plant and sets it up.' },
  { n: '02', title: 'Check the soil when asked', body: 'A finger in the top inch. Three answers: still damp, dry or bone dry.' },
  { n: '03', title: 'It learns the rhythm', body: 'Every answer tunes the next check to your plant, your pot and your light.' },
];

// How the app talks, then what it asks of you: three steps.
export function HowItWorks() {
  return (
    <section id="how" className="scroll-mt-4 bg-paper text-ink">
      <Container className="pb-24 pt-28 sm:pb-32 sm:pt-36">
        <Reveal className="mx-auto max-w-[920px] text-center">
          <p className="text-balance font-serif text-[clamp(2rem,4.3vw,3.75rem)] leading-[1.1] tracking-[-0.01em]">
            <em className="text-accent">Late isn’t failing.</em> It just says since when — never in red, never a streak to break.
          </p>
          <p className="mt-6 text-[13px] font-semibold uppercase tracking-[0.12em] text-ink-soft">How Home Plants talks to you</p>
        </Reveal>

        <ol className="mt-24 grid gap-12 sm:mt-32 md:grid-cols-3 md:gap-12">
          {steps.map((step, i) => (
            <Reveal as="li" key={step.n} delay={i * 90} className="border-t border-line pt-7">
              <span className="block font-serif text-[clamp(4.5rem,7vw,6rem)] leading-[0.9] text-accent">{step.n}</span>
              <h3 className="mt-4 text-[22px] font-semibold leading-[28px] tracking-[-0.01em]">{step.title}</h3>
              <p className="mt-3 text-[17px] leading-[26px] text-ink-soft">{step.body}</p>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
