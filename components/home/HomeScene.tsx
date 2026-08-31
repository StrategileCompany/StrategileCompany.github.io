'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { products, type Product } from '@/lib/products';
import { useLanguage } from '@/lib/i18n/LanguageProvider';
import { AppIcon } from '@/components/icons/AppIcon';
import { IphoneFrame } from '@/components/device/IphoneFrame';
import { SCREENS } from '@/components/device/screens';
import { ShaderBackdrop } from '@/components/ShaderBackdrop';
import { MagneticButton } from '@/components/MagneticButton';
import { RevealText } from '@/components/RevealText';

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * Posições espalhadas dos ícones no hero (vw/vh, determinísticas — coreografia,
 * não acaso) e o slot de cada um na grade da "tela inicial".
 * A ordem segue lib/products.ts.
 */
// Posições escolhidas para emoldurar o texto do hero sem nunca cobri-lo
// (o bloco de texto ocupa ~7–45vw × 20–80vh).
const SCATTER = [
  { x: 10, y: 11, s: 0.82, r: -9 },
  { x: 76, y: 16, s: 1.04, r: 7 },
  { x: 90, y: 42, s: 0.72, r: -5 },
  { x: 71, y: 76, s: 1.08, r: 11 },
  { x: 38, y: 88, s: 0.88, r: -7 },
  { x: 58, y: 62, s: 0.68, r: 6 },
  { x: 50, y: 11, s: 0.78, r: -11 },
  { x: 91, y: 84, s: 0.94, r: 9 },
  { x: 63, y: 31, s: 0.86, r: 5 },
  { x: 83, y: 61, s: 0.74, r: -8 },
];

const GRID_COLS = [12, 23, 34, 45, 56]; // vw
const GRID_ROWS = [40, 66]; // vh
/**
 * SCATTER e GRID_COLS × GRID_ROWS precisam comportar products.length: uma
 * posição faltando vira `undefined` e derruba a cena. A grade é 5×2 — ao
 * passar de dez produtos, acrescente uma linha em GRID_ROWS.
 */
const GRID = products.map((_, i) => ({
  x: GRID_COLS[i % GRID_COLS.length],
  y: GRID_ROWS[Math.floor(i / GRID_COLS.length)],
}));

/** Janela de viagem de cada ícone dentro do progresso global — escalonada */
function travelWindow(i: number): [number, number] {
  const start = 0.16 + i * 0.022;
  return [start, start + 0.34];
}

export function HomeScene() {
  const reduce = useReducedMotion();
  const [isDesktop, setIsDesktop] = useState<boolean | null>(null);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)');
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  // Antes da hidratação decidir, renderiza o layout simples (válido em ambos)
  if (isDesktop && !reduce) return <DesktopScene />;
  return <StackedScene />;
}

/* ————————————————— Desktop: cena coreografada ————————————————— */

function DesktopScene() {
  const { t, locale, localeHref } = useLanguage();
  const router = useRouter();
  const sceneRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<string | null>(null);

  const { scrollYProgress } = useScroll({ target: sceneRef, offset: ['start start', 'end end'] });
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 26, mass: 0.4 });

  // Hero sai de cena
  const heroY = useTransform(progress, [0.06, 0.3], ['0vh', '-10vh']);
  const heroOpacity = useTransform(progress, [0.06, 0.26], [1, 0]);
  // opacity 0 não desliga pointer events — os CTAs invisíveis roubariam o
  // hover dos ícones da grade que ocupam a mesma região
  const heroPointer = useTransform(heroOpacity, (o) => (o < 0.4 ? 'none' : 'auto'));

  // Portfólio entra
  const headerOpacity = useTransform(progress, [0.52, 0.68], [0, 1]);
  const headerY = useTransform(progress, [0.52, 0.68], ['-3vh', '0vh']);
  const phoneOpacity = useTransform(progress, [0.5, 0.68], [0, 1]);
  const phoneY = useTransform(progress, [0.5, 0.7], ['14vh', '0vh']);
  const labelOpacity = useTransform(progress, [0.66, 0.8], [0, 1]);
  const hintOpacity = useTransform(progress, [0.74, 0.86], [0, 1]);

  // Interatividade só com a grade montada
  const [settled, setSettled] = useState(false);
  const settledRef = useRef(false);
  useMotionValueEvent(progress, 'change', (v) => {
    const nextSettled = v > 0.72;
    if (settledRef.current !== nextSettled) {
      settledRef.current = nextSettled;
      setSettled(nextSettled);
    }
  });

  const activeProduct = active ? products.find((p) => p.slug === active) ?? null : null;

  const scrollToGrid = () => {
    const el = sceneRef.current;
    if (!el) return;
    const total = el.offsetHeight - window.innerHeight;
    window.scrollTo({ top: el.offsetTop + total * 0.92, behavior: 'smooth' });
  };

  return (
    <div ref={sceneRef} className="relative hidden lg:block" style={{ height: '250vh' }}>
      {/* âncora do menu: aterrissa com a grade montada */}
      <div id="portfolio" className="absolute" style={{ top: '64%' }} />

      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="absolute inset-0 bg-ink-950">
          <ShaderBackdrop className="absolute inset-0" />
        </div>

        {/* ——— Hero ——— */}
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0 z-10 flex flex-col items-start justify-center px-[7vw] pointer-events-none"
        >
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
            className="font-mono text-eyebrow uppercase tracking-[0.35em] text-gold-200/80"
          >
            {t.hero.kicker}
          </motion.p>
          <h1 className="mt-7 font-display font-light text-display text-bone-50 max-w-[12em]">
            <RevealText splitWords text={t.hero.titleA} delay={0.3} />
            <br />
            <em className="text-gold-300">
              <RevealText splitWords text={t.hero.titleB} delay={0.55} />
            </em>
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.85, ease: EASE }}
            className="mt-8 max-w-[34rem] text-body-lg text-bone-200/75"
          >
            {t.hero.subtitle}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.05, ease: EASE }}
            style={{ pointerEvents: heroPointer }}
            className="mt-10 flex items-center gap-5"
          >
            <MagneticButton
              onClick={scrollToGrid}
              className="inline-flex items-center gap-2 rounded-full bg-bone-50 px-7 py-3.5 text-body-sm font-medium text-ink-950 transition-colors hover:bg-gold-100"
            >
              {t.hero.ctaPrimary} <span aria-hidden>↓</span>
            </MagneticButton>
            <MagneticButton
              href="#contato"
              className="inline-flex items-center gap-2 rounded-full border border-bone-100/20 px-7 py-3.5 text-body-sm text-bone-100/85 transition-colors hover:border-gold-300/50 hover:text-gold-200"
            >
              {t.hero.ctaSecondary}
            </MagneticButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 1 }}
            className="absolute bottom-9 left-[7vw] flex items-center gap-3 font-mono text-micro uppercase tracking-[0.3em] text-bone-200/40"
          >
            <motion.span
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              aria-hidden
            >
              ↓
            </motion.span>
            {t.hero.scrollHint}
          </motion.div>
        </motion.div>

        {/* ——— Cabeçalho do portfólio ——— */}
        <motion.div
          style={{ opacity: headerOpacity, y: headerY }}
          className="absolute left-0 right-[40vw] top-[10vh] z-10 text-center pointer-events-none"
        >
          <p className="font-mono text-eyebrow uppercase tracking-[0.35em] text-gold-200/70">
            {t.homescreen.kicker}
          </p>
          <h2 className="mt-3 font-display font-light text-h1 text-bone-50">{t.homescreen.title}</h2>
          <p className="mt-3 text-body text-bone-200/65">{t.homescreen.subtitle}</p>
        </motion.div>

        {/* ——— Ícones ——— */}
        {products.map((p, i) => (
          <SceneIcon
            key={p.slug}
            product={p}
            index={i}
            progress={progress}
            labelOpacity={labelOpacity}
            settled={settled}
            active={active}
            onActivate={setActive}
            onOpen={() => router.push(`/portfolio/${p.slug}/`)}
          />
        ))}

        {/* ——— iPhone ——— */}
        {/* pointer-events-none no contêiner: a caixa dele se estende desde x=0
            (o deslocamento é via margin) e engoliria o hover dos ícones */}
        <motion.div
          style={{ opacity: phoneOpacity, y: phoneY }}
          className="pointer-events-none absolute z-20 top-1/2"
        >
          {/* o framer controla o transform do contêiner acima; a centralização
              vertical vive neste div para não ser sobrescrita */}
          <div
            className="relative pointer-events-auto"
            style={{ marginLeft: '64vw', width: 'min(21vw, 19.5rem)', transform: 'translateY(-52%)' }}
          >
            {/* aura da cor do produto ativo */}
            <AnimatePresence>
              {activeProduct && (
                <motion.div
                  key={activeProduct.slug}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.5 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.7 }}
                  aria-hidden
                  className="absolute -inset-16 rounded-full"
                  style={{
                    background: `radial-gradient(circle, ${activeProduct.accent}33 0%, transparent 65%)`,
                  }}
                />
              )}
            </AnimatePresence>

            <IphoneFrame shadow>
              <PhoneContent active={activeProduct} />
            </IphoneFrame>

            {/* legenda sob o iPhone */}
            <div className="relative mt-7 h-20 text-center">
              <AnimatePresence mode="wait">
                {activeProduct ? (
                  <motion.div
                    key={activeProduct.slug}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.35, ease: EASE }}
                  >
                    <Link href={localeHref(`/portfolio/${activeProduct.slug}/`)} className="group inline-block">
                      <div className="font-display text-h3 text-bone-50">{activeProduct.name}</div>
                      <div className="mt-1 font-mono text-micro uppercase tracking-[0.25em] text-bone-200/50">
                        {activeProduct.category[locale]}
                      </div>
                      <div className="mt-2 text-caption text-gold-300 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        {t.homescreen.open} →
                      </div>
                    </Link>
                  </motion.div>
                ) : (
                  <motion.div
                    key="hint"
                    style={{ opacity: hintOpacity }}
                    exit={{ opacity: 0 }}
                    className="pt-4 font-mono text-micro uppercase tracking-[0.3em] text-bone-200/35"
                  >
                    {t.homescreen.hoverHint}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

type SceneIconProps = {
  product: Product;
  index: number;
  progress: MotionValue<number>;
  labelOpacity: MotionValue<number>;
  settled: boolean;
  active: string | null;
  onActivate: (slug: string | null) => void;
  onOpen: () => void;
};

function SceneIcon({ product, index, progress, labelOpacity, settled, active, onActivate, onOpen }: SceneIconProps) {
  const [a, b] = travelWindow(index);
  const sc = SCATTER[index];
  const gd = GRID[index];

  const x = useTransform(progress, [a, b], [`${sc.x}vw`, `${gd.x}vw`], { ease: (v) => 1 - Math.pow(1 - v, 3) });
  const y = useTransform(progress, [a, b], [`${sc.y}vh`, `${gd.y}vh`], { ease: (v) => 1 - Math.pow(1 - v, 3) });
  const scale = useTransform(progress, [a, b], [sc.s, 1]);
  const rotate = useTransform(progress, [a, b], [sc.r, 0]);
  // flutuação ambiente que cessa conforme a grade se forma
  const amp = useTransform(progress, [a, b], ['7px', '0px']);

  const isActive = active === product.slug;
  const dimmed = active !== null && !isActive;

  return (
    <motion.div
      style={{ x, y, scale, rotate }}
      className="absolute left-0 top-0 z-20"
      aria-hidden={!settled}
    >
      <motion.div
        style={{ ['--amp' as string]: amp, animationDelay: `${index * 0.7}s` }}
        // items-center: o bloco tem a largura do rótulo, que pode passar dos 92px do
        // ícone — sem isso, nomes longos empurram o squircle para a esquerda da grade.
        className={`flex flex-col items-center ${settled ? 'icon-anchor' : 'icon-anchor icon-float'}`}
      >
        <motion.button
          type="button"
          tabIndex={settled ? 0 : -1}
          onMouseEnter={() => settled && onActivate(product.slug)}
          onMouseLeave={() => settled && onActivate(null)}
          onFocus={() => settled && onActivate(product.slug)}
          onBlur={() => settled && onActivate(null)}
          onClick={() => settled && onOpen()}
          aria-label={product.name}
          animate={{
            scale: isActive ? 1.14 : 1,
            opacity: dimmed ? 0.55 : 1,
            filter: dimmed ? 'saturate(0.75)' : 'saturate(1)',
          }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          className="relative block outline-none focus-visible:ring-2 focus-visible:ring-gold-300/70 rounded-[28%]"
          style={{ cursor: settled ? 'pointer' : 'default' }}
        >
          {/* aura na cor do produto */}
          <motion.span
            aria-hidden
            animate={{ opacity: isActive ? 0.85 : 0 }}
            transition={{ duration: 0.45 }}
            className="absolute -inset-7 rounded-full"
            style={{
              background: `radial-gradient(circle, ${product.accent}40 0%, transparent 70%)`,
              filter: 'blur(14px)',
            }}
          />
          <AppIcon slug={product.slug} size={92} className="relative drop-shadow-[0_14px_28px_rgba(0,0,0,0.45)]" />
        </motion.button>

        {/* rótulo de tela inicial */}
        <motion.div
          style={{ opacity: labelOpacity }}
          className="pointer-events-none mt-2.5 text-center text-caption text-bone-100/80"
        >
          {product.name}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

/* ————————————————— Conteúdo do iPhone ————————————————— */

function PhoneContent({ active }: { active: Product | null }) {
  return (
    <div className="relative h-full w-full" style={{ width: 390, height: 844 }}>
      <PhoneHomeScreen visible={active === null} />
      <AnimatePresence>
        {active && (
          <motion.div
            key={active.slug}
            initial={{ opacity: 0, scale: 0.82, borderRadius: 80 }}
            animate={{ opacity: 1, scale: 1, borderRadius: 0 }}
            exit={{ opacity: 0, scale: 0.92 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="absolute inset-0 overflow-hidden"
            style={{ transformOrigin: '50% 42%' }}
          >
            {SCREENS[active.slug] ? SCREENS[active.slug]() : null}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/** Tela inicial do iPhone em repouso — autorreferência: os mesmos 10 apps */
function PhoneHomeScreen({ visible }: { visible: boolean }) {
  const { t } = useLanguage();
  const [time, setTime] = useState('');
  useEffect(() => {
    const update = () =>
      setTime(new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }));
    update();
    const id = setInterval(update, 30_000);
    return () => clearInterval(id);
  }, []);

  return (
    <motion.div
      animate={{ opacity: visible ? 1 : 0, scale: visible ? 1 : 1.06 }}
      transition={{ duration: 0.45, ease: EASE }}
      className="absolute inset-0"
      style={{
        width: 390,
        height: 844,
        background:
          'radial-gradient(120% 90% at 50% 0%, #1A1A18 0%, #0A0A0A 55%), linear-gradient(#0A0A0A, #0A0A0A)',
        display: 'flex',
        flexDirection: 'column',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      }}
    >
      <div style={{ height: 54 }} />
      <div style={{ textAlign: 'center', marginTop: 26 }}>
        <div style={{ fontSize: 64, fontWeight: 250, letterSpacing: -1, color: '#F5F0E8', lineHeight: 1, minHeight: 64 }}>
          {time || ' '}
        </div>
        <div style={{ marginTop: 10, fontSize: 11, letterSpacing: 3.2, color: 'rgba(201,169,107,0.85)', textTransform: 'uppercase', fontWeight: 600 }}>
          Strategile Company
        </div>
        <div style={{ marginTop: 4, fontSize: 10, letterSpacing: 1.4, color: 'rgba(245,240,232,0.4)' }}>
          {t.homescreen.phoneTag}
        </div>
      </div>
      {/* Duas colunas por cinco linhas: os ícones ocupam a altura inteira da tela
          em vez de se amontoarem num bloco no rodapé. */}
      <div
        style={{
          flex: 1,
          marginTop: 30,
          marginBottom: 58,
          padding: '0 34px',
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gridAutoRows: '1fr',
          justifyItems: 'center',
          alignContent: 'stretch',
        }}
      >
        {products.map((p) => (
          <div
            key={p.slug}
            style={{
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <AppIcon slug={p.slug} size={68} />
            <div style={{ marginTop: 7, fontSize: 10, color: 'rgba(245,240,232,0.78)' }}>{p.name}</div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

/* ————————————————— Stacked: mobile e reduced-motion ————————————————— */

function StackedScene() {
  const { t, locale, localeHref } = useLanguage();

  return (
    <div className="relative">
      <section className="relative flex min-h-[92svh] flex-col justify-center overflow-hidden bg-ink-950 px-6 py-24 sm:px-10">
        <div className="absolute inset-0">
          <ShaderBackdrop className="absolute inset-0" />
        </div>
        <div className="relative">
          <p className="font-mono text-eyebrow uppercase tracking-[0.3em] text-gold-200/80">{t.hero.kicker}</p>
          <h1 className="mt-6 font-display font-light text-display text-bone-50">
            <RevealText splitWords text={t.hero.titleA} delay={0.2} />
            <br />
            <em className="text-gold-300">
              <RevealText splitWords text={t.hero.titleB} delay={0.45} />
            </em>
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7, ease: EASE }}
            className="mt-7 max-w-[32rem] text-body-lg text-bone-200/75"
          >
            {t.hero.subtitle}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9, ease: EASE }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 rounded-full bg-bone-50 px-6 py-3 text-body-sm font-medium text-ink-950"
            >
              {t.hero.ctaPrimary} <span aria-hidden>↓</span>
            </a>
            <a
              href="#contato"
              className="inline-flex items-center gap-2 rounded-full border border-bone-100/20 px-6 py-3 text-body-sm text-bone-100/85"
            >
              {t.hero.ctaSecondary}
            </a>
          </motion.div>
        </div>
      </section>

      <section id="portfolio" className="relative bg-ink-950 px-6 py-20 sm:px-10">
        <div className="mx-auto max-w-xl text-center">
          <p className="font-mono text-eyebrow uppercase tracking-[0.3em] text-gold-200/70">
            {t.homescreen.kicker}
          </p>
          <h2 className="mt-3 font-display font-light text-h2 text-bone-50">{t.homescreen.title}</h2>
          <p className="mt-3 text-body text-bone-200/65">{t.homescreen.tapHint}</p>
        </div>

        <div className="mx-auto mt-12 grid max-w-md grid-cols-3 gap-x-4 gap-y-9 justify-items-center sm:max-w-lg sm:grid-cols-4">
          {products.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 22, scale: 0.85 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: (i % 4) * 0.06, ease: EASE }}
            >
              <Link href={localeHref(`/portfolio/${p.slug}/`)} className="block text-center" aria-label={p.name}>
                <AppIcon slug={p.slug} size={76} className="drop-shadow-[0_12px_22px_rgba(0,0,0,0.45)]" />
                <div className="mt-2 text-caption text-bone-100/80">{p.name}</div>
                <div className="mt-0.5 font-mono text-[9px] uppercase tracking-[0.14em] text-bone-200/40">
                  {p.category[locale]}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
