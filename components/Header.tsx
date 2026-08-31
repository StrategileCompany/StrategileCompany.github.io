'use client';

import { usePathname } from 'next/navigation';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Logo } from '@/components/Logo';
import { LangToggle } from '@/components/LangToggle';
import { useLanguage } from '@/lib/i18n/LanguageProvider';

export function Header() {
  const { t, localeHref } = useLanguage();
  const pathname = usePathname();
  const isHome = pathname === '/' || pathname === '/en' || pathname === '/en/';
  const prefix = isHome ? '' : localeHref('/');

  const { scrollY } = useScroll();
  const bg = useTransform(scrollY, [0, 120], ['rgba(10,10,10,0)', 'rgba(10,10,10,0.72)']);
  const line = useTransform(scrollY, [0, 120], ['rgba(245,240,232,0)', 'rgba(245,240,232,0.08)']);
  const blur = useTransform(scrollY, [0, 120], ['blur(0px)', 'blur(14px)']);

  const links = [
    { href: `${prefix}#portfolio`, label: t.nav.portfolio },
    { href: `${prefix}#estudio`, label: t.nav.studio },
    { href: `${prefix}#contato`, label: t.nav.contact },
  ];

  return (
    <motion.header
      style={{ backgroundColor: bg, backdropFilter: blur, borderColor: line }}
      className="fixed inset-x-0 top-0 z-50 border-b"
    >
      <div className="flex items-center justify-between px-6 py-4 sm:px-10">
        <Logo className="text-[1.15rem]" />
        <nav aria-label="principal" className="hidden items-center gap-8 sm:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-caption text-bone-200/70 transition-colors duration-200 hover:text-bone-50"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <LangToggle />
      </div>
    </motion.header>
  );
}
