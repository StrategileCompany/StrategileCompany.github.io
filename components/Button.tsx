'use client';

import Link from 'next/link';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/cn';
import type { ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

const base =
  'group relative inline-flex items-center justify-center gap-2 rounded-full font-sans font-medium tracking-wide transition-colors duration-200 ease-apple disabled:opacity-50 disabled:cursor-not-allowed select-none whitespace-nowrap';

const variantClass: Record<Variant, string> = {
  primary:
    'bg-bone-50 text-ink-950 hover:bg-bone-100 shadow-[0_8px_24px_-12px_rgba(245,240,232,0.6)]',
  secondary:
    'border border-bone-100/20 bg-bone-100/[0.03] text-bone-50 hover:border-bone-100/40 hover:bg-bone-100/[0.06]',
  ghost: 'text-bone-100/80 hover:text-bone-50 underline-offset-4 hover:underline decoration-gold-300/60',
};

const sizeClass: Record<Size, string> = {
  sm: 'h-9 px-4 text-caption',
  md: 'h-11 px-5 text-body-sm',
  lg: 'h-13 px-7 text-body',
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  withArrow?: boolean;
  className?: string;
};

type ButtonAsLink = CommonProps & {
  href: string;
  external?: boolean;
};

type ButtonAsButton = CommonProps &
  Omit<HTMLMotionProps<'button'>, 'children' | 'className'> & {
    href?: undefined;
  };

export function Button(props: ButtonAsLink | ButtonAsButton) {
  const {
    variant = 'primary',
    size = 'md',
    children,
    withArrow,
    className,
    ...rest
  } = props as CommonProps & Record<string, unknown>;

  const classes = cn(base, variantClass[variant], sizeClass[size], className);

  const inner = (
    <>
      <span className="relative">{children}</span>
      {withArrow && (
        <ArrowUpRight
          className="h-4 w-4 transition-transform duration-300 ease-apple group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          aria-hidden
        />
      )}
    </>
  );

  if ('href' in props && props.href) {
    const { href, external } = props;
    if (external || href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('#')) {
      return (
        <a
          href={href}
          className={classes}
          target={external ? '_blank' : undefined}
          rel={external ? 'noopener noreferrer' : undefined}
        >
          {inner}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {inner}
      </Link>
    );
  }

  return (
    <motion.button
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.15 }}
      className={classes}
      {...(rest as HTMLMotionProps<'button'>)}
    >
      {inner}
    </motion.button>
  );
}
