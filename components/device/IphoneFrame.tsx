'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';

/** Canvas lógico em que todas as telas-mock são desenhadas */
export const SCREEN_W = 390;
export const SCREEN_H = 844;

type IphoneFrameProps = {
  children: ReactNode;
  className?: string;
  /** Sombra projetada (desligar quando o contexto já tem glow próprio) */
  shadow?: boolean;
};

/**
 * Frame de iPhone em CSS puro — titânio, dynamic island, botões laterais.
 * As telas filhas são desenhadas em 390×844 e escaladas para o tamanho real
 * via ResizeObserver, então px nos mocks são estáveis em qualquer tamanho.
 */
export function IphoneFrame({ children, className, shadow = true }: IphoneFrameProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ro = new ResizeObserver((entries) => {
      setWidth(entries[0].contentRect.width);
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const scale = width > 0 ? width / SCREEN_W : 0;
  // Proporções derivadas do iPhone 15 Pro (393×852 lógico, raio de tela ~55pt)
  const outerRadius = width * 0.172;
  const screenRadius = width * 0.138;
  const bezel = Math.max(width * 0.028, 6);

  return (
    <div
      ref={ref}
      className={className}
      style={{ aspectRatio: `${SCREEN_W} / ${SCREEN_H}`, position: 'relative' }}
    >
      {/* Botões laterais */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          left: -width * 0.008,
          top: '22%',
          width: width * 0.012,
          height: '5%',
          borderRadius: 4,
          background: 'linear-gradient(90deg, #3A3A3C, #1C1C1E)',
        }}
      />
      <div
        aria-hidden
        style={{
          position: 'absolute',
          left: -width * 0.008,
          top: '30%',
          width: width * 0.012,
          height: '8%',
          borderRadius: 4,
          background: 'linear-gradient(90deg, #3A3A3C, #1C1C1E)',
        }}
      />
      <div
        aria-hidden
        style={{
          position: 'absolute',
          right: -width * 0.008,
          top: '26%',
          width: width * 0.012,
          height: '11%',
          borderRadius: 4,
          background: 'linear-gradient(270deg, #3A3A3C, #1C1C1E)',
        }}
      />

      {/* Carcaça de titânio */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: outerRadius,
          background:
            'linear-gradient(145deg, #5A5A5E 0%, #2C2C2E 18%, #48484C 50%, #1F1F21 82%, #515155 100%)',
          boxShadow: shadow
            ? '0 40px 80px -24px rgba(0,0,0,0.65), 0 12px 28px rgba(0,0,0,0.4)'
            : undefined,
        }}
      >
        {/* Bezel preto */}
        <div
          style={{
            position: 'absolute',
            inset: bezel * 0.45,
            borderRadius: outerRadius - bezel * 0.4,
            background: '#050505',
          }}
        >
          {/* Tela */}
          <div
            style={{
              position: 'absolute',
              inset: bezel * 0.55,
              borderRadius: screenRadius,
              overflow: 'hidden',
              background: '#000',
            }}
          >
            <div
              style={{
                width: SCREEN_W,
                height: SCREEN_H,
                transform: `scale(${scale * (1 - (2 * (bezel * 0.45 + bezel * 0.55)) / width)})`,
                transformOrigin: 'top left',
              }}
            >
              {scale > 0 ? children : null}
            </div>

            {/* Dynamic island */}
            <div
              aria-hidden
              style={{
                position: 'absolute',
                top: '1.6%',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '32%',
                height: '4.2%',
                borderRadius: 999,
                background: '#000',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                paddingRight: '3.5%',
              }}
            >
              <div
                style={{
                  width: '12%',
                  aspectRatio: '1',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle at 35% 35%, #1D2B3A 0%, #0A0F16 70%)',
                }}
              />
            </div>

            {/* Home indicator */}
            <div
              aria-hidden
              style={{
                position: 'absolute',
                bottom: '1.1%',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '36%',
                height: 5,
                borderRadius: 999,
                background: 'rgba(255,255,255,0.45)',
                mixBlendMode: 'difference',
              }}
            />

            {/* Reflexo de vidro */}
            <div
              aria-hidden
              style={{
                position: 'absolute',
                inset: 0,
                borderRadius: screenRadius,
                background:
                  'linear-gradient(118deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.02) 28%, transparent 42%)',
                pointerEvents: 'none',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

/** Barra de status iOS compartilhada pelos mocks de tela */
export function StatusBar({ dark = false }: { dark?: boolean }) {
  const color = dark ? '#FFFFFF' : '#0A0A0A';
  return (
    <div
      style={{
        height: 54,
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        padding: '0 32px 6px',
        fontSize: 15,
        fontWeight: 600,
        color,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        flexShrink: 0,
      }}
    >
      <span style={{ width: 54 }}>9:41</span>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
        {/* Sinal */}
        <svg width="18" height="12" viewBox="0 0 18 12" fill={color}>
          <rect x="0" y="7" width="3" height="4" rx="1" />
          <rect x="5" y="5" width="3" height="6" rx="1" />
          <rect x="10" y="3" width="3" height="8" rx="1" />
          <rect x="15" y="0" width="3" height="11" rx="1" />
        </svg>
        {/* Wi-Fi */}
        <svg width="16" height="12" viewBox="0 0 16 12" fill={color}>
          <path d="M8 9.5a1.7 1.7 0 1 1 0 3.4 1.7 1.7 0 0 1 0-3.4ZM8 5.6c1.7 0 3.2.65 4.35 1.7l-1.45 1.5A4.1 4.1 0 0 0 8 7.7c-1.1 0-2.1.4-2.9 1.1L3.65 7.3A6.3 6.3 0 0 1 8 5.6ZM8 1.5c2.8 0 5.35 1.1 7.25 2.85l-1.45 1.5A8.2 8.2 0 0 0 8 3.6c-2.2 0-4.2.85-5.8 2.25L.75 4.35A10.4 10.4 0 0 1 8 1.5Z" transform="translate(0,-1.5)" />
        </svg>
        {/* Bateria */}
        <svg width="25" height="12" viewBox="0 0 25 12">
          <rect x="0.5" y="0.5" width="21" height="11" rx="3.5" fill="none" stroke={color} opacity="0.4" />
          <rect x="2" y="2" width="15" height="8" rx="2" fill={color} />
          <path d="M23 4 v4 a2.2 2.2 0 0 0 0-4Z" fill={color} opacity="0.4" />
        </svg>
      </div>
    </div>
  );
}
