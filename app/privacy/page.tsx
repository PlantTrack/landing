import type { Metadata } from 'next';
import { LegalPage } from '@/components/LegalPage';
import { TERMS_URL } from '@/components/links';
import { LEGAL_UPDATED } from '@/components/legal';
import { privacyIntro, privacySections } from './content';

export const metadata: Metadata = {
  title: 'Privacy Policy — Home Plants',
  description: 'What Home Plants collects, why, who else sees it, and how to delete it.',
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated={LEGAL_UPDATED}
      intro={privacyIntro}
      sections={privacySections}
      other={{ href: TERMS_URL, label: 'Terms and Conditions' }}
    />
  );
}
