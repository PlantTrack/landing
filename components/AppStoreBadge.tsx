import { APP_STORE_URL } from '@/components/links';

// TODO(launch): swap for Apple's official badge (developer.apple.com →
// App Store Marketing Guidelines → badges) once the app has its listing;
// Apple's guidelines don't allow a home-made one on a live site.
export function AppStoreBadge({ outlined = false }: { outlined?: boolean }) {
  return (
    <a
      href={APP_STORE_URL}
      className={`inline-flex h-[54px] flex-col justify-center rounded-[14px] bg-black px-5 text-left text-white transition-opacity hover:opacity-85 ${
        outlined ? 'ring-1 ring-cream/30' : ''
      }`}
      aria-label="Download on the App Store"
    >
      <span className="text-[11px] leading-[13px] tracking-[0.01em]">Download on the</span>
      <span className="text-[21px] font-semibold leading-[24px] tracking-[-0.02em]">App Store</span>
    </a>
  );
}
