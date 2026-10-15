import { Features } from './sections/Features';
import { GetTheApp } from './sections/GetTheApp';
import { Hero } from './sections/Hero';
import { HowItWorks } from './sections/HowItWorks';
import { Pricing } from './sections/Pricing';
import { Questions } from './sections/Questions';

// The editorial direction (Figma, "4 · Landing — web", B): forest sections
// and paper ones in turn, the rule set large in Instrument Serif.
export default function Home() {
  return (
    <>
      <Hero />
      <main>
        <HowItWorks />
        <Features />
        <Pricing />
        <Questions />
      </main>
      <GetTheApp />
    </>
  );
}
