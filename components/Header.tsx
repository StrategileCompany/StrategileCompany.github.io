'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageProvider';
import { LangToggle } from './LangToggle';
import { Logo } from './Logo';
import { cn } from '@/lib/cn';

export function Header() {
  const { t } = useLanguage();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Fechar menu mobile ao trocar rota
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock body scroll quando menu mobile aberto
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const links = [
    { href: '/portfolio', label: t.nav.portfolio },
    { href: '/sobre', label: t.nav.about },
    { href: '/contato', label: t.nav.contact },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-apple',
          scrolled
            ? 'bg-ink-950/75 backdrop-blur-xl border-b border-bone-100/[0.08]'
            : 'bg-transparent',
        )}
      >
        <div className="container-editorial flex h-16 sm:h-18 items-center justify-between gap-4">
          <Logo />

          <nav className="hidden md:flex items-center gap-1" aria-label="Navegacao principal">
            {links.map((link) => {
              const active =
                link.href === '/'
                  ? pathname === '/'
                  : pathname?.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'relative px-4 py-2 text-caption tracking-wide rounded-full transition-colors duration-200 ease-apple',
                    active
                      ? 'text-bone-50'
                      : 'text-bone-200/70 hover:text-bone-50',
                  )}
                >
                  {active && (
                    <motion.span
                      layoutId="header-pill"
                      className="absolute inset-0 rounded-full bg-bone-100/[0.06] border border-bone-100/[0.08]"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="relative">{link.label}</span>
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <LangToggle className="hidden sm:inline-flex" />
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-bone-100/15 text-bone-100"
              aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
              aria-expanded={open}
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 md:hidden bg-ink-950/95 backdrop-blur-xl"
          >
            <div className="container-editorial pt-24 pb-12 h-full flex flex-col">
              <nav className="flex flex-col gap-2" aria-label="Navegacao mobile">
                {links.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.06 * i, ease: [0.25, 0.46, 0.45, 0.94] }}
                  >
                    <Link
                      href={link.href}
                      className="group flex items-baseline justify-between border-b border-bone-100/10 py-5"
                    >
                      <span className="font-display text-h2 text-bone-50 transition-transform duration-300 ease-apple group-hover:-translate-x-1">
                        {link.label}
                      </span>
                      <span className="text-eyebrow uppercase text-bone-200/40">
                        0{i + 1}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <div className="mt-auto flex items-center justify-between pt-8">
                <span className="text-eyebrow uppercase text-bone-200/50">
                  {t.langToggle.label}
                </span>
                <LangToggle />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
