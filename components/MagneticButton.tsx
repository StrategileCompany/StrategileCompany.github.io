'use client';

import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion';
import { useRef, type ReactNode, type MouseEvent } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
  /** Raio de atração em px a partir do centro */
  strength?: number;
  onClick?: () => void;
  href?: string;
  ariaLabel?: string;
};

/**
 * Botão magnético: o contêiner persegue o cursor com mola e o conteúdo
 * interno acompanha com parallax mais raso — gramática de interação da casa.
 */
export function MagneticButton({ children, className, strength = 0.32, onClick, href, ariaLabel }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 22, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 220, damping: 22, mass: 0.6 });
  const cx = useSpring(x, { stiffness: 300, damping: 24, mass: 0.5 });
  const cy = useSpring(y, { stiffness: 300, damping: 24, mass: 0.5 });

  const onMove = (e: MouseEvent) => {
    if (reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
  };
  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  const inner = (
    <motion.span style={{ x: cx, y: cy, display: 'inline-flex', alignItems: 'center', gap: '0.5em' }}>
      {children}
    </motion.span>
  );

  return (
    <motion.div ref={ref} onMouseMove={onMove} onMouseLeave={onLeave} style={{ x: sx, y: sy }} className="inline-block">
      {href ? (
        <a href={href} className={className} aria-label={ariaLabel} onClick={onClick}>
          {inner}
        </a>
      ) : (
        <button type="button" className={className} aria-label={ariaLabel} onClick={onClick}>
          {inner}
        </button>
      )}
    </motion.div>
  );
}
