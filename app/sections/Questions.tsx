import { Container } from '@/components/Container';
import { Reveal } from '@/components/Reveal';

const questions = [
  {
    q: 'How does it know when to water?',
    a: 'It asks you to check the soil, and learns from your answers how fast each plant dries in your home — your pot, your light, your season.',
  },
  { q: 'Do I need an account?', a: 'No. It works from the first minute. Sign in with Apple only if you want your plants on a new phone.' },
  {
    q: 'What if I don’t know what my plant is?',
    a: 'Take two photos and it names it. If the guide doesn’t have it yet, ask for it — you’ll hear when it’s in.',
  },
  { q: 'What happens after three plants?', a: 'Your three stay free. Plus adds every other plant, for $24 a year after a free week.' },
  { q: 'Where does it work?', a: 'In the US for now: your town sets the seasons and weather for your plants.' },
];

export function Questions() {
  return (
    <section id="questions" className="scroll-mt-4 bg-paper text-ink">
      <Container>
        <div className="grid gap-12 border-t border-line pb-28 pt-24 sm:pb-32 lg:grid-cols-[360px_minmax(0,1fr)] lg:gap-20">
          <Reveal>
            <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-accent">Questions</p>
            <h2 className="mt-4 font-serif text-[clamp(2.5rem,4vw,3.5rem)] leading-[1.02] tracking-[-0.01em]">Good to know</h2>
          </Reveal>
          <dl>
            {questions.map((item, i) => (
              <Reveal key={item.q} delay={i * 60} className="border-b border-line py-6 first:pt-0">
                <dt className="font-serif text-[clamp(1.6rem,2.2vw,1.9rem)] leading-[1.15]">{item.q}</dt>
                <dd className="mt-2 text-[17px] leading-[26px] text-ink-soft">{item.a}</dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
}
