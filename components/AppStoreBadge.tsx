import { APP_STORE_URL } from '@/components/links';

// Apple's own "Download on the App Store" badge (black, US English), as
// downloaded from developer.apple.com/app-store/marketing/guidelines on
// 2026-11-16 — public/app-store-badge.svg. Apple's rules: use only their
// artwork, unchanged (its grey border is part of it), at least 40 px high,
// with a quarter of its height clear around it.
export function AppStoreBadge() {
  return (
    <a href={APP_STORE_URL} className="inline-flex transition-opacity hover:opacity-85" aria-label="Download on the App Store">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/app-store-badge.svg" alt="Download on the App Store" width={162} height={54} className="h-[54px] w-auto" />
    </a>
  );
}
