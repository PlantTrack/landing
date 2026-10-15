'use client';

import { useEffect, useRef } from 'react';

// Fades its children up the first time they scroll into view, once.
// Reduced motion shows them as they are (app/globals.css).
export function Reveal({
  children,
  delay = 0,
  className = '',
  as: Tag = 'div',
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: 'div' | 'li' | 'section';
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.dataset.shown = 'true';
          observer.disconnect();
        }
      },
      { rootMargin: '0px 0px -10% 0px' }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag ref={ref as never} className={`reveal ${className}`} style={{ '--delay': `${delay}ms` } as React.CSSProperties}>
      {children}
    </Tag>
  );
}
