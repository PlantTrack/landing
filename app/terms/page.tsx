import type { Metadata } from 'next';
import { LegalPage } from '@/components/LegalPage';
import { PRIVACY_URL } from '@/components/links';
import { LEGAL_UPDATED } from '@/components/legal';
import { termsIntro, termsSections } from './content';

export const metadata: Metadata = {
  title: 'Terms and Conditions — Home Plants',
  description: 'The terms for using Home Plants and Home Plants Premium.',
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms and Conditions"
      updated={LEGAL_UPDATED}
      intro={termsIntro}
      sections={termsSections}
      other={{ href: PRIVACY_URL, label: 'Privacy Policy' }}
    />
  );
}
