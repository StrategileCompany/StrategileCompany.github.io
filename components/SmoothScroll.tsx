'use client';

import Lenis from 'lenis';
import { useEffect, type ReactNode } from 'react';

/**
 * Smooth scroll global via Lenis, sincronizado em rAF próprio.
 * Desativado quando o usuário prefere movimento reduzido.
 */
export function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 1.6,
    });

    let raf = 0;
    let running = false;
    const tick = (time: number) => {
      lenis.raf(time);
      if (running) raf = requestAnimationFrame(tick);
    };
    const start = () => {
      if (running) return;
      running = true;
      lenis.start();
      raf = requestAnimationFrame(tick);
    };
    const stop = () => {
      running = false;
      if (raf) cancelAnimationFrame(raf);
      raf = 0;
      lenis.stop();
    };
    const onVisibilityChange = () => {
      if (document.hidden) stop();
      else start();
    };
    document.addEventListener('visibilitychange', onVisibilityChange);
    start();

    return () => {
      stop();
      document.removeEventListener('visibilitychange', onVisibilityChange);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
