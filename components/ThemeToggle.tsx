'use client';

import { Moon, Sun } from 'lucide-react';

// Light or dark, remembered on this device. Until someone picks, the page
// follows the system (the script in app/layout.tsx).
export function ThemeToggle() {
  const toggle = () => {
    const dark = !document.documentElement.classList.contains('dark');
    document.documentElement.classList.toggle('dark', dark);
    try {
      localStorage.setItem('theme', dark ? 'dark' : 'light');
    } catch {}
  };

  return (
    <button
      type="button"
      onClick={toggle}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full text-cream/80 ring-1 ring-cream/20 transition hover:text-cream hover:ring-cream/40"
      aria-label="Switch between light and dark"
    >
      <Moon className="h-[18px] w-[18px] dark:hidden" strokeWidth={1.8} />
      <Sun className="hidden h-[18px] w-[18px] dark:block" strokeWidth={1.8} />
    </button>
  );
}
