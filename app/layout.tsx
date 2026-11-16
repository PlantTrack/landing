import type { Metadata, Viewport } from 'next';
import { Inter, Instrument_Serif } from 'next/font/google';
import './globals.css';

const sans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const serif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Home Plants — Water when they need it. Not on a set day.',
  description:
    'Home Plants asks how the soil feels now and then, and learns each plant’s rhythm in your home. Free for three plants, on iPhone.',
  openGraph: {
    title: 'Home Plants — Water when they need it. Not on a set day.',
    description: 'Learns each plant’s rhythm in your home, from a quick soil check now and then.',
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
  // The app's own icon. PNG and ICO as well as SVG: Safari keeps an old
  // favicon for a long time and doesn't always take SVG ones.
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32 48x48' },
      { url: '/icon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-touch-icon.png',
  },
};

export const viewport: Viewport = {
  themeColor: '#13241A',
};

// Picks the theme before the first paint — the saved choice, else the
// system's — so the page never flashes the other one.
const themeScript = `(() => {
  document.documentElement.classList.add('js');
  try {
    const saved = localStorage.getItem('theme');
    const dark = saved ? saved === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.classList.toggle('dark', dark);
  } catch (e) {}
})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="bg-forest font-sans text-cream antialiased">{children}</body>
    </html>
  );
}
