'use client';

import Link from 'next/link';
import { useEffect, useRef, useState, useCallback } from 'react';
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { products } from '@/lib/products';
import { useLanguage } from '@/lib/i18n/LanguageProvider';
import { ProductMockup } from './ProductMockup';
import { cn } from '@/lib/cn';

/**
 * Coverflow 3D horizontal:
 * - Cards alinhados em arco com perspective
 * - Card central plano + escala 1; laterais com rotateY ate 35° + escala 0.85 + opacidade reduzida
 * - Drag horizontal, scroll wheel, setas e click em card lateral
 * - 60fps (transform-only, will-change, sem reflow)
 */
export function PortfolioCoverflow() {
  const { locale, t } = useLanguage();
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const total = products.length;
  const containerRef = useRef<HTMLDivElement>(null);
  const dragStartX = useRef<number | null>(null);
  const dragStartActive = useRef(0);
  const wheelAcc = useRef(0);
  const [dragging, setDragging] = useState(false);
  const [stepX, setStepX] = useState(160);

  useEffect(() => {
    const computeStep = () => {
      const w = window.innerWidth;
      if (w >= 1024) setStepX(200);
      else if (w >= 640) setStepX(160);
      else setStepX(120);
    };
    computeStep();
    window.addEventListener('resize', computeStep);
    return () => window.removeEventListener('resize', computeStep);
  }, []);

  const goTo = useCallback(
    (idx: number) => {
      const safe = ((idx % total) + total) % total;
      setActive(safe);
    },
    [total],
  );

  const next = useCallback(() => goTo(active + 1), [active, goTo]);
  const prev = useCallback(() => goTo(active - 1), [active, goTo]);

  // Keyboard
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!containerRef.current) return;
      const inside =
        document.activeElement &&
        containerRef.current.contains(document.activeElement);
      if (!inside && document.activeElement?.tagName !== 'BODY') return;
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        next();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prev();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [next, prev]);

  // Wheel horizontal — apenas scroll com modificador horizontal forte (deltaX > deltaY)
  // ou scroll vertical proximo do componente. Usamos throttle por acumulador.
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      const horizontal = Math.abs(e.deltaX) > Math.abs(e.deltaY);
      const delta = horizontal ? e.deltaX : e.deltaY;
      // Apenas reage a scroll horizontal forte (trackpad swipe)
      if (!horizontal || Math.abs(e.deltaX) < 8) return;
      e.preventDefault();
      wheelAcc.current += delta;
      const STEP = 80;
      while (wheelAcc.current > STEP) {
        wheelAcc.current -= STEP;
        next();
      }
      while (wheelAcc.current < -STEP) {
        wheelAcc.current += STEP;
        prev();
      }
    };

    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
  }, [next, prev]);

  // Drag handlers
  const onPointerDown = (e: React.PointerEvent) => {
    dragStartX.current = e.clientX;
    dragStartActive.current = active;
    setDragging(true);
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (dragStartX.current === null) return;
    const dx = e.clientX - dragStartX.current;
    const STEP = 110;
    const move = -Math.round(dx / STEP);
    if (move !== 0) {
      goTo(dragStartActive.current + move);
      dragStartX.current = e.clientX;
      dragStartActive.current = ((dragStartActive.current + move) % total + total) % total;
    }
  };
  const endDrag = () => {
    dragStartX.current = null;
    setDragging(false);
  };

  // Tamanhos do card
  // mobile: 240x320, tablet: 300x400, desktop: 360x480
  return (
    <div
      ref={containerRef}
      className="relative perspective-1600 select-none"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
      onPointerLeave={endDrag}
      style={{ touchAction: 'pan-y' }}
      role="region"
      aria-label={t.portfolioSection.title}
      aria-roledescription="carousel"
    >
      <div
        className={cn(
          'relative h-[480px] sm:h-[560px] lg:h-[620px] flex items-center justify-center',
          dragging ? 'cursor-grabbing' : 'cursor-grab',
        )}
      >
        {products.map((product, i) => {
          // Distancia "circular" — escolhe o caminho mais curto
          let offset = i - active;
          if (offset > total / 2) offset -= total;
          if (offset < -total / 2) offset += total;

          const abs = Math.abs(offset);
          const visible = abs <= 3;

          // Geometria
          const x = offset * stepX;
          const rotY = offset * -22;
          const z = -abs * 80;
          const scale = abs === 0 ? 1 : Math.max(0.78, 1 - abs * 0.09);
          const opacity = abs === 0 ? 1 : Math.max(0.25, 1 - abs * 0.32);
          const blur = abs === 0 ? 0 : Math.min(6, abs * 2.5);
          const zIndex = 100 - abs;

          return (
            <motion.button
              key={product.slug}
              type="button"
              onClick={() => {
                if (offset === 0) return;
                goTo(i);
              }}
              aria-label={`${product.name} — ${product.copy[locale].tagline}`}
              aria-current={offset === 0}
              className={cn(
                'absolute outline-none',
                'w-[240px] h-[320px] sm:w-[300px] sm:h-[400px] lg:w-[360px] lg:h-[480px]',
                offset === 0 ? 'cursor-default' : 'cursor-pointer',
              )}
              tabIndex={visible ? 0 : -1}
              animate={
                reduce
                  ? { x, opacity, zIndex }
                  : {
                      x,
                      rotateY: rotY,
                      z,
                      scale,
                      opacity,
                      filter: `blur(${blur}px)`,
                      zIndex,
                    }
              }
              transition={{
                type: 'spring',
                stiffness: 220,
                damping: 32,
                mass: 0.8,
              }}
              style={{
                transformStyle: 'preserve-3d',
                willChange: 'transform, opacity, filter',
                pointerEvents: visible ? 'auto' : 'none',
                visibility: visible ? 'visible' : 'hidden',
              }}
            >
              <ProductMockup product={product} compact className="h-full w-full" />

              {/* Overlay click-to-detail no card central */}
              {offset === 0 && (
                <Link
                  href={`/portfolio/${product.slug}`}
                  className="absolute inset-0 rounded-3xl focus-visible:ring-2 focus-visible:ring-gold-300/60"
                  aria-label={`${product.name} — abrir detalhes`}
                />
              )}
            </motion.button>
          );
        })}
      </div>

      {/* Info do card ativo */}
      <div className="mt-10 lg:mt-14 max-w-2xl mx-auto text-center px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={products[active].slug}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <span className="text-eyebrow uppercase text-bone-200/50">
              {products[active].category[locale]}
            </span>
            <h3 className="mt-3 font-display text-h2 text-bone-50 tracking-tight">
              {products[active].name}
            </h3>
            <p className="mt-3 text-body text-bone-200/75 leading-relaxed">
              {products[active].copy[locale].tagline}
            </p>
            <Link
              href={`/portfolio/${products[active].slug}`}
              className="inline-flex items-center gap-1.5 mt-5 text-caption text-gold-300 hover:text-gold-200 transition-colors duration-200 underline-offset-4 hover:underline"
            >
              {t.portfolio.visitSite}
              <span aria-hidden>→</span>
            </Link>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controles */}
      <div className="mt-8 flex items-center justify-center gap-3">
        <button
          type="button"
          onClick={prev}
          aria-label={t.portfolio.prevProduct}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-bone-100/15 bg-bone-100/[0.02] text-bone-100 hover:bg-bone-100/[0.06] hover:border-bone-100/30 transition-all duration-200 ease-apple"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>

        <div className="flex items-center gap-1.5" role="tablist" aria-label="Navegacao do portfolio">
          {products.map((p, i) => (
            <button
              key={p.slug}
              type="button"
              role="tab"
              aria-selected={i === active}
              aria-label={p.name}
              onClick={() => goTo(i)}
              className={cn(
                'h-1.5 rounded-full transition-all duration-300 ease-apple',
                i === active
                  ? 'w-8 bg-gold-300'
                  : 'w-1.5 bg-bone-100/15 hover:bg-bone-100/30',
              )}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={next}
          aria-label={t.portfolio.nextProduct}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-bone-100/15 bg-bone-100/[0.02] text-bone-100 hover:bg-bone-100/[0.06] hover:border-bone-100/30 transition-all duration-200 ease-apple"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      <p className="mt-6 text-center text-eyebrow uppercase text-bone-200/40">
        {t.portfolioSection.dragHint}
      </p>
    </div>
  );
}
