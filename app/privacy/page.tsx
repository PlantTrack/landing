import type { Metadata } from 'next';
import { Blank, LegalPage, type LegalSection } from '@/components/LegalPage';
import { TERMS_URL } from '@/components/links';

export const metadata: Metadata = {
  title: 'Privacy Policy — Home Plants',
  description: 'What Home Plants collects, why, who else sees it, and how to export or delete it.',
};

// Written from what the app on main actually sends (PlantTrack/iOS, October
// 2026): its API calls, Firebase (Auth, Messaging, App Check) and Apple's
// services. When the app starts sending something new, this page changes too.
const sections: LegalSection[] = [
  {
    id: 'who',
    title: 'Who we are',
    body: (
      <p>
        Home Plants is an iPhone app and this website, run by <Blank field="company" /> (“we”). Questions about your data go to{' '}
        <Blank field="email" />, or write to us in the app: Settings → Contact us.
      </p>
    ),
  },
  {
    id: 'collect',
    title: 'What we collect',
    body: (
      <>
        <p>Only what the app needs to care for your plants:</p>
        <ul>
          <li>
            <strong>Your plants.</strong> Each plant’s species, name and room, what you tell us when you set it up, your soil-check
            answers, waterings and the rest of its history.
          </li>
          <li>
            <strong>Your town.</strong> The town you pick, with its state, country, ZIP code and where it is on the map — it sets the
            seasons and weather for your plants. If you use your current location, the phone finds your town from an approximate
            position, and the position itself stays on the phone.
          </li>
          <li>
            <strong>Photos you send us.</strong> One or two photos when you identify a plant, and when you ask for an AI diagnosis —
            with your answers about what changed and any note you add. If you rate a diagnosis, the rating and whatever you add to it.
          </li>
          <li>
            <strong>Plant requests.</strong> The name of a plant you ask us to add to the guide.
          </li>
          <li>
            <strong>Your account.</strong> The app makes an anonymous account the first time you open it, so there’s nothing to sign up
            for. If you sign in with Apple, Apple gives us an identifier for you and, if you choose to share them, your name and email
            address — which can be a private relay address from Apple.
          </li>
          <li>
            <strong>Notifications.</strong> A token that lets us send notifications to your phone, your time zone, and when you’d like
            to hear from us.
          </li>
          <li>
            <strong>Messages to us.</strong> What you write in Contact us, and our replies.
          </li>
          <li>
            <strong>A check that it’s really the app.</strong> Apple’s App Attest, through Firebase App Check, tells our servers a
            request comes from Home Plants and not from a script.
          </li>
        </ul>
        <p>
          We don’t collect your contacts or your precise location. There are no ads in Home Plants, and we don’t track you across other
          companies’ apps or websites.
        </p>
      </>
    ),
  },
  {
    id: 'use',
    title: 'How we use it',
    body: (
      <>
        <ul>
          <li>To time each plant’s checks and waterings, and learn how fast it dries in your home.</li>
          <li>To name a plant from its photos, and to answer an AI diagnosis.</li>
          <li>To send the notifications you’ve turned on.</li>
          <li>To answer you when you write to us, and to consider the plants you ask us to add.</li>
          <li>To keep Home Plants working and secure.</li>
        </ul>
        <p>We don’t sell your data, and we don’t use it for advertising.</p>
      </>
    ),
  },
  {
    id: 'share',
    title: 'Who else sees it',
    body: (
      <>
        <p>Only the services that run Home Plants for us, and only what each one needs:</p>
        <ul>
          <li>
            <strong>Google Firebase</strong> — your account and sign-in, notifications, and the check that it’s really the app.
          </li>
          <li>
            <strong>Apple</strong> — Sign in with Apple, delivering notifications, town search in Apple Maps, and payment for Plus. Apple
            handles the payment; we never see your card.
          </li>
          <li>
            <strong>
              <Blank field="photoServices" />
            </strong>{' '}
            — identifying plants from photos, and reading photos for an AI diagnosis.
          </li>
          <li>
            <strong>Our cloud provider</strong> — runs our servers and stores what’s described here.
          </li>
        </ul>
        <p>
          We also share data when the law requires it, or to protect the people who use Home Plants. If Home Plants changes owners, your
          data goes with it, still under this policy.
        </p>
      </>
    ),
  },
  {
    id: 'keep',
    title: 'How long we keep it',
    body: (
      <p>
        Your plants and their history stay while you use Home Plants — that’s how the app learns. Photos sent to identify a plant or for
        a diagnosis are kept <Blank field="photosKept" />. When you ask us to delete your account, we erase it and its data within{' '}
        <Blank field="deletedWithin" /> days, except what the law requires us to keep.
      </p>
    ),
  },
  {
    id: 'choices',
    title: 'Your choices',
    body: (
      <>
        <ul>
          <li>
            <strong>Export.</strong> Settings → Export your plants gives you a file with every plant and its whole history.
          </li>
          <li>
            <strong>Delete a plant.</strong> Deleting a plant erases its history with it.
          </li>
          <li>
            <strong>Delete everything.</strong> Write to us in Settings → Contact us, or at <Blank field="email" />, and we’ll delete
            your account and all its data.
          </li>
          <li>
            <strong>Town and notifications.</strong> Change your town or turn notifications off in the app’s Settings, or in your
            iPhone’s Settings, at any time.
          </li>
        </ul>
        <p>
          Depending on where you live, you may have more rights over your data, such as getting a copy or correcting it. Write to us and
          we’ll help.
        </p>
      </>
    ),
  },
  {
    id: 'security',
    title: 'Security',
    body: (
      <p>
        Everything travels encrypted between the app and our servers, and we limit who can reach it. No system is perfectly safe, but we
        work to keep yours protected.
      </p>
    ),
  },
  {
    id: 'children',
    title: 'Children',
    body: (
      <p>
        Home Plants isn’t meant for children under 13, and we don’t knowingly collect their data. If you think a child has given us
        some, write to us and we’ll delete it.
      </p>
    ),
  },
  {
    id: 'website',
    title: 'This website',
    body: (
      <p>
        This site uses no cookies and no analytics. It remembers whether you picked the light or the dark look — in your browser only.
        The service that hosts it may keep standard logs, such as IP addresses, to deliver the pages and keep them safe.
      </p>
    ),
  },
  {
    id: 'changes',
    title: 'Changes',
    body: (
      <p>
        If we change this policy, we’ll update the date at the top, and when a change matters, we’ll tell you in the app before it
        applies.
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

export default function PrivacyPolicy() {
  return (
    <LegalPage
      title="Privacy Policy"
      summary={[
        'No ads, and no tracking across other apps and sites.',
        'What you tell us about your plants is used to time their care.',
        'Photos reach us only when you ask us to name a plant or check its health.',
        'Export your plants anytime, or ask us to delete everything.',
      ]}
      sections={sections}
      other={{ href: TERMS_URL, label: 'Terms of Service' }}
    />
  );
}
