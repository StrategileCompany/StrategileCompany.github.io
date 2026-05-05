'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { RevealText } from './RevealText';

type Props = {
  eyebrow?: string;
  title: string;
  sub?: string;
  children?: ReactNode;
};

export function PageHeader({ eyebrow, title, sub, children }: Props) {
  return (
    <header className="container-editorial pt-32 sm:pt-40 lg:pt-48 pb-12 lg:pb-20">
      {eyebrow && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-3 mb-6"
        >
          <span aria-hidden className="h-px w-10 bg-gold-300/60" />
          <span className="text-eyebrow uppercase text-gold-300">{eyebrow}</span>
        </motion.div>
      )}
      <h1
        className="font-display font-light text-bone-50 text-display leading-[0.96] tracking-tight text-balance"
      >
        <RevealText splitWords text={title} />
      </h1>
      {sub && (
        <RevealText delay={0.3} className="mt-8 max-w-2xl text-body-lg text-bone-200/75 leading-relaxed text-pretty">
          {sub}
        </RevealText>
      )}
      {children}
    </header>
  );
}
