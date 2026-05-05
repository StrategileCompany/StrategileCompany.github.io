'use client';

import { motion, useReducedMotion } from 'framer-motion';
import type { Product } from '@/lib/products';
import { cn } from '@/lib/cn';

type Props = {
  product: Product;
  className?: string;
  /** Se true, renderiza variante reduzida (sem chrome) — para uso no coverflow */
  compact?: boolean;
};

/**
 * Mockup elegante: device frame abstrato com gradient da paleta do produto.
 * Sem screenshot real — placeholder editorial pensado para se manter bonito sem foto.
 */
export function ProductMockup({ product, className, compact }: Props) {
  const reduce = useReducedMotion();
  const { color, name, copy } = product;
  const inkLight = color.ink === 'light';

  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-3xl border border-bone-100/[0.08]',
        'shadow-[0_30px_80px_-30px_rgba(0,0,0,0.7),0_8px_30px_-12px_rgba(0,0,0,0.5)]',
        className,
      )}
      style={{
        background: `linear-gradient(140deg, ${color.from} 0%, ${color.to} 100%)`,
      }}
    >
      {/* Grain overlay */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.95' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundSize: '256px',
        }}
      />

      {/* Glow do acento */}
      <div
        aria-hidden
        className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{ background: color.accent }}
      />

      {/* Topo: nome + chips */}
      <div
        className={cn(
          'absolute inset-x-0 top-0 px-6 sm:px-8 pt-6 sm:pt-8 flex items-start justify-between gap-4',
          inkLight ? 'text-bone-50' : 'text-ink-950',
        )}
      >
        <div>
          <span className="text-eyebrow uppercase opacity-60">
            {product.category.pt}
          </span>
          <div className="font-display text-h2 sm:text-[clamp(2rem,3.5vw,3.5rem)] leading-none tracking-tight mt-2">
            {name}
          </div>
        </div>
        <span
          className={cn(
            'shrink-0 hidden sm:inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-eyebrow uppercase backdrop-blur-md',
            inkLight ? 'border-white/15 bg-white/5' : 'border-black/15 bg-black/5',
          )}
          style={{ color: color.accent }}
        >
          <span
            className="h-1.5 w-1.5 rounded-full"
            style={{ background: color.accent }}
          />
          {product.status}
        </span>
      </div>

      {/* Conteudo central: cards stylized representando a interface (placeholder editorial) */}
      <div className="absolute inset-0 flex items-center justify-center px-6 sm:px-12 pt-32 pb-10">
        <motion.div
          className="w-full max-w-md"
          initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Card "metric" */}
          <div
            className={cn(
              'rounded-2xl backdrop-blur-md p-5 border',
              inkLight
                ? 'bg-white/[0.05] border-white/[0.08]'
                : 'bg-black/[0.05] border-black/[0.08]',
            )}
          >
            <div
              className={cn(
                'text-eyebrow uppercase opacity-50',
                inkLight ? 'text-bone-50' : 'text-ink-950',
              )}
            >
              {copy.pt.metric ? 'Impacto medido' : 'Tagline'}
            </div>
            <div
              className={cn(
                'mt-3 font-display text-h3 leading-tight tracking-tight',
                inkLight ? 'text-bone-50' : 'text-ink-950',
              )}
              style={{ color: copy.pt.metric ? color.accent : undefined }}
            >
              {copy.pt.metric ?? copy.pt.tagline}
            </div>
          </div>

          {!compact && (
            <div className="mt-3 grid grid-cols-3 gap-3">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className={cn(
                    'rounded-xl backdrop-blur-md p-3 border h-16 flex flex-col justify-between',
                    inkLight
                      ? 'bg-white/[0.04] border-white/[0.08]'
                      : 'bg-black/[0.04] border-black/[0.08]',
                  )}
                >
                  <span
                    className={cn(
                      'h-1.5 w-6 rounded-full',
                      inkLight ? 'bg-white/20' : 'bg-black/20',
                    )}
                  />
                  <span
                    className={cn(
                      'h-2 w-12 rounded-full',
                      inkLight ? 'bg-white/40' : 'bg-black/40',
                    )}
                    style={i === 1 ? { background: color.accent } : undefined}
                  />
                </div>
              ))}
            </div>
          )}
        </motion.div>
      </div>

      {/* Linha sutil inferior */}
      <div
        aria-hidden
        className={cn(
          'absolute inset-x-6 bottom-5 h-px',
          inkLight ? 'bg-white/10' : 'bg-black/10',
        )}
      />
    </div>
  );
}
