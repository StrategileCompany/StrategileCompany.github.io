'use client';

import { motion, useReducedMotion, type Variants } from 'framer-motion';
import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

type Props =
  | {
      children: ReactNode;
      className?: string;
      as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
      delay?: number;
      splitWords?: false;
      text?: never;
    }
  | {
      children?: ReactNode;
      className?: string;
      as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
      delay?: number;
      /** Para hero gigantes: revela palavra por palavra */
      splitWords: true;
      text: string;
    };

const wordVariants: Variants = {
  hidden: { y: '110%', opacity: 0 },
  visible: (i: number) => ({
    y: '0%',
    opacity: 1,
    transition: {
      duration: 0.9,
      delay: 0.05 * i,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

export function RevealText({
  children,
  className,
  as: Component = 'span',
  delay = 0,
  splitWords,
  text,
}: Props) {
  const reduce = useReducedMotion();

  if (splitWords && text) {
    const words = text.split(' ');
    return (
      <Component className={cn('inline-block', className)}>
        <span className="sr-only">{text}</span>
        <span aria-hidden className="inline-block">
          {words.map((word, i) => (
            <span
              key={`${word}-${i}`}
              className="inline-block overflow-hidden align-bottom mr-[0.22em] last:mr-0"
            >
              <motion.span
                custom={i}
                initial={reduce ? 'visible' : 'hidden'}
                animate="visible"
                variants={wordVariants}
                className="inline-block"
                style={{ willChange: 'transform' }}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </span>
      </Component>
    );
  }

  return (
    <motion.div
      initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay }}
      className={cn(className)}
    >
      <Component className="block">{children}</Component>
    </motion.div>
  );
}
