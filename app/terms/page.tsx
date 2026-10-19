import type { Metadata } from 'next';
import { Blank, LegalPage, type LegalSection } from '@/components/LegalPage';
import { PRIVACY_URL } from '@/components/links';

export const metadata: Metadata = {
  title: 'Terms of Service — Home Plants',
  description: 'The agreement for using Home Plants: the free plan and Plus, care advice, your content, and fair use.',
};

// The subscription terms follow what Apple asks apps with auto-renewing
// subscriptions to say (App Review Guideline 3.1.2). Prices live in the app,
// never here, so this page doesn't change when they do.
const sections: LegalSection[] = [
  {
    id: 'agreement',
    title: 'These terms',
    body: (
      <p>
        These terms are an agreement between you and <Blank field="company" /> (“we”) about the Home Plants app and this website. By
        using either, you agree to them. Our <a href={PRIVACY_URL}>Privacy Policy</a> explains what happens to your data.
      </p>
    ),
  },
  {
    id: 'service',
    title: 'Home Plants',
    body: (
      <p>
        Home Plants helps you care for houseplants. It asks how the soil feels, learns each plant’s rhythm in your home, and tells you
        when to check and when to water. It can also name a plant from photos and help when something looks off.
      </p>
    ),
  },
  {
    id: 'account',
    title: 'Your account',
    body: (
      <p>
        The app makes an anonymous account the first time you open it. If you sign in with Apple, the same account follows you to a new
        phone. You’re responsible for what happens on your account, so keep your phone and your Apple ID secure. You must be at least 13
        to use Home Plants.
      </p>
    ),
  },
  {
    id: 'plus',
    title: 'Free and Plus',
    body: (
      <>
        <p>
          Three plants are free, for good. Plus adds more plants and the features the app marks as Plus. Plus is an auto-renewing
          subscription sold through the App Store:
        </p>
        <ul>
          <li>The price and the period are shown in the app before you buy.</li>
          <li>Payment is charged to your Apple ID when you confirm the purchase.</li>
          <li>
            The subscription renews automatically unless you turn it off at least 24 hours before the current period ends. Your account
            is charged for the next period within the 24 hours before it ends.
          </li>
          <li>
            You can manage or cancel it anytime in your iPhone’s Settings → your name → Subscriptions. Cancelling stops the next
            renewal; Plus stays on until the end of the period you’ve paid for.
          </li>
          <li>
            If a free trial is offered, it becomes a paid subscription when it ends, unless you cancel at least 24 hours before.
            Whatever is left of a trial ends when you buy a subscription.
          </li>
          <li>
            Refunds are handled by Apple, under its own policies, at <a href="https://reportaproblem.apple.com">reportaproblem.apple.com</a>.
          </li>
          <li>If the price changes, you’ll be told before it applies to you.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'advice',
    title: 'Care advice',
    body: (
      <>
        <p>
          Home Plants gives general guidance. Plants are living things: the same plant can need different care in a different home, and
          the app learns as you answer. Photo ID, plant health and AI diagnosis can be wrong. Look at your plant before you act, and
          don’t rely on Home Plants alone where a lot is at stake.
        </p>
        <p>
          Notes on plants that are toxic to pets or people are general. If a person or a pet may have eaten part of a plant, call a
          doctor, a vet or poison control right away.
        </p>
      </>
    ),
  },
  {
    id: 'content',
    title: 'Your content',
    body: (
      <p>
        The photos, names, notes and answers you add are yours. You let us store and process them to run Home Plants for you, as the{' '}
        <a href={PRIVACY_URL}>Privacy Policy</a> describes. Send only photos you have the right to share, and nothing unlawful or
        offensive.
      </p>
    ),
  },
  {
    id: 'fair-use',
    title: 'Fair use',
    body: (
      <>
        <p>Please don’t:</p>
        <ul>
          <li>copy, sell or resell the app, the plant guide or its texts;</li>
          <li>get around the free plan, Plus or our security, or reach our servers other than through the app;</li>
          <li>use bots or scripts, or put an unfair load on the service;</li>
          <li>send us abusive messages, or anything unlawful.</li>
        </ul>
        <p>We may suspend or close an account that breaks these terms.</p>
      </>
    ),
  },
  {
    id: 'ours',
    title: 'The app is ours',
    body: (
      <>
        <p>
          The app, the plant guide, its texts and its design belong to us or to those who license them to us. We give you a personal,
          non-transferable license to use the app on Apple devices you own or control, under the App Store’s usage rules. If you got the
          app from the App Store, Apple’s{' '}
          <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/">standard license agreement</a> applies as well.
        </p>
        <p>
          We may add, change or remove features, and we may stop offering Home Plants. If we stop, we’ll tell you ahead of time so you
          can export your plants.
        </p>
      </>
    ),
  },
  {
    id: 'apple',
    title: 'Apple',
    body: (
      <p>
        These terms are between you and us, not Apple. Apple isn’t responsible for Home Plants or its support. If the app fails to meet
        a warranty that applies to it, you can tell Apple, and Apple will refund what you paid for it, if anything; Apple has no other
        warranty obligation. Apple and its subsidiaries are third-party beneficiaries of these terms and may enforce them.
      </p>
    ),
  },
  {
    id: 'liability',
    title: 'Warranty and liability',
    body: (
      <>
        <p>
          Home Plants is provided “as is”. As far as the law allows, we don’t promise that it’s free of errors, always available, or that
          any plant will thrive.
        </p>
        <p>
          As far as the law allows, we aren’t liable for indirect or consequential losses, or for the loss of a plant, and our total
          liability to you is limited to what you paid for Plus in the 12 months before the claim. Some places don’t allow these limits,
          so they may not apply to you.
        </p>
      </>
    ),
  },
  {
    id: 'ending',
    title: 'Ending',
    body: (
      <p>
        You can stop using Home Plants at any time and ask us to delete your account, as the Privacy Policy explains. The parts of these
        terms that should outlast your account — ownership, warranty and liability — do.
      </p>
    ),
  },
  {
    id: 'law',
    title: 'Governing law',
    body: (
      <p>
        These terms are governed by the laws of <Blank field="law" />, without regard to its conflict-of-law rules. If a court finds part
        of them unenforceable, the rest still applies.
      </p>
    ),
  },
  {
    id: 'changes',
    title: 'Changes',
    body: (
      <p>
        We may update these terms. We’ll change the date at the top and, when a change matters, tell you in the app before it applies. If
        you keep using Home Plants after that, the new terms apply.
      </p>
    ),
  },
  {
    id: 'contact',
    title: 'Contact',
    body: (
      <p>
        <Blank field="company" /> · <Blank field="email" /> · or Settings → Contact us in the app.
      </p>
    ),
  },
];

export default function TermsOfService() {
  return (
    <LegalPage
      title="Terms of Service"
      summary={[
        'Three plants are free. Plus is a subscription through Apple — cancel anytime.',
        'Care advice is guidance, not a guarantee. Look at your plant, too.',
        'The photos and notes you add stay yours.',
        'Use Home Plants fairly: no scraping, no getting around Plus.',
      ]}
      sections={sections}
      other={{ href: PRIVACY_URL, label: 'Privacy Policy' }}
    />
  );
}
