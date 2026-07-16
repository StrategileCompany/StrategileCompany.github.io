import type { CSSProperties } from 'react';
import { getSvgPath } from 'figma-squircle';
import { getProductBySlug } from '@/lib/products';

/**
 * Squircle iOS real — "arc with shoulders" do algoritmo Figma/Apple
 * (cornerSmoothing 0.6, o mesmo dos ícones do iOS), não superelipse pura.
 * Gerado uma única vez em module scope; determinístico, seguro para SSG.
 */
export const SQUIRCLE_PATH = getSvgPath({
  width: 120,
  height: 120,
  cornerRadius: 27,
  cornerSmoothing: 0.6,
});

type GlyphProps = { accent: string };

/* ————— Glifos — um por produto, derivados da identidade real de cada app ————— */

/** Anel partido com nós ciano orbitando — derivado do logo real do Strategile */
function StrategileGlyph(_: GlyphProps) {
  return (
    <g>
      <defs>
        <linearGradient id="g-strategile-ring" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#22D3EE" />
          <stop offset="100%" stopColor="#0891B2" />
        </linearGradient>
      </defs>
      <path d="M75 34.02 A30 30 0 0 0 34.02 75" fill="none" stroke="url(#g-strategile-ring)" strokeWidth="5" strokeLinecap="round" />
      <path d="M45 85.98 A30 30 0 0 0 85.98 45" fill="none" stroke="url(#g-strategile-ring)" strokeWidth="5" strokeLinecap="round" />
      <circle cx="81.21" cy="38.79" r="4.5" fill="#22D3EE" />
      <circle cx="81.21" cy="38.79" r="8" fill="#22D3EE" opacity="0.25" />
      <circle cx="38.79" cy="81.21" r="4.5" fill="#67E8F9" />
      <circle cx="38.79" cy="81.21" r="8" fill="#67E8F9" opacity="0.25" />
      <rect x="48" y="62" width="6" height="12" rx="3" fill="#EAFBFF" opacity="0.75" />
      <rect x="57" y="54" width="6" height="20" rx="3" fill="#EAFBFF" opacity="0.88" />
      <rect x="66" y="46" width="6" height="28" rx="3" fill="#EAFBFF" />
    </g>
  );
}

/** Logo-mark real do TaMarkado, vetorial — copiado de wwwroot/assets/loading.html
 *  do próprio app (viewBox 72, reposicionado no slot de glifo de 120). */
function TamarkadoGlyph(_: GlyphProps) {
  return (
    <g transform="translate(23 23) scale(1.028)">
      <rect x="8" y="16" width="56" height="48" rx="8" fill="rgba(30, 41, 59, 0.9)" stroke="#3B82F6" strokeWidth="1.5" />
      <rect x="8" y="16" width="56" height="14" rx="8" fill="#3B82F6" />
      <rect x="8" y="24" width="56" height="6" fill="#3B82F6" />
      <rect x="22" y="10" width="3" height="14" rx="1.5" fill="#60A5FA" />
      <rect x="47" y="10" width="3" height="14" rx="1.5" fill="#60A5FA" />
      <line x1="18" y1="42" x2="36" y2="42" stroke="rgba(148, 163, 184, 0.45)" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="18" y1="48" x2="30" y2="48" stroke="rgba(148, 163, 184, 0.38)" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="18" y1="54" x2="33" y2="54" stroke="rgba(148, 163, 184, 0.3)" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M30 44 L35 50 L52 36" stroke="#22D3EE" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </g>
  );
}

function XpidGlyph(_: GlyphProps) {
  return (
    <g>
      <path d="M41 40 L79 80" stroke="#FFFFFF" strokeWidth="15" strokeLinecap="round" />
      <path d="M79 40 L41 80" stroke="#DBEAFE" strokeWidth="15" strokeLinecap="round" opacity="0.94" />
    </g>
  );
}

function RoteiroGlyph(_: GlyphProps) {
  return (
    <g>
      <defs>
        <clipPath id="g-roteiro-arch">
          <path d="M38 88 V58 A22 22 0 0 1 82 58 V88 Z" />
        </clipPath>
      </defs>
      <g clipPath="url(#g-roteiro-arch)">
        <rect x="38" y="30" width="44" height="36" fill="#A5E3F7" />
        <circle cx="72" cy="45" r="5.5" fill="#FFFCEF" />
        <path d="M36 66 L52 50 L62 60 L70 54 L84 66 Z" fill="#1F4D3D" />
        <rect x="38" y="64" width="44" height="14" fill="#122E63" />
        <path
          d="M40 70 Q44 66 48 70 T56 70 T64 70 T72 70 T80 70"
          fill="none"
          stroke="#6BD5EB"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <rect x="38" y="78" width="44" height="10" fill="#FFB561" />
      </g>
      <path
        d="M38 88 V58 A22 22 0 0 1 82 58 V88 Z"
        fill="none"
        stroke="#F5F0E8"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />
    </g>
  );
}

function CamadaGlyph(_: GlyphProps) {
  return (
    <g>
      <defs>
        <linearGradient id="g-camada-core" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#6EE7F9" />
          <stop offset="100%" stopColor="#F8C77A" />
        </linearGradient>
        <radialGradient id="g-camada-glow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#6EE7F9" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#6EE7F9" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="60" cy="60" r="34" fill="url(#g-camada-glow)" />
      <rect x="34" y="34" width="52" height="52" rx="15" fill="none" stroke="#6BDFEB" strokeWidth="3" opacity="0.9" />
      <rect x="43.5" y="43.5" width="33" height="33" rx="10" fill="none" stroke="#F8C77A" strokeWidth="3" opacity="0.95" />
      <rect x="52.5" y="52.5" width="15" height="15" rx="5" fill="url(#g-camada-core)" />
    </g>
  );
}

/** Bíblia aberta com cruz emergindo das páginas — evolução do ícone real da Play Store */
function IgrejaGlyph(_: GlyphProps) {
  return (
    <g>
      {/* cruz */}
      <rect x="56.5" y="26" width="7" height="26" rx="3" fill="#4FC3F7" />
      <rect x="48" y="33" width="24" height="7" rx="3" fill="#4FC3F7" />
      {/* páginas abertas */}
      <path
        d="M60 82 C52 73 41 70.5 32 72.5 V51 C41 49 52 51.5 60 59 Z"
        fill="#F2F7FB"
        opacity="0.95"
      />
      <path
        d="M60 82 C68 73 79 70.5 88 72.5 V51 C79 49 68 51.5 60 59 Z"
        fill="#DCEAF5"
        opacity="0.95"
      />
      {/* lombada */}
      <path d="M60 59 V82" stroke="#9FC4DE" strokeWidth="2" strokeLinecap="round" />
      {/* fita marcadora dourada */}
      <path d="M68 71 L68 79 L71 76.5 L74 79 L74 69" fill="#D2A43C" opacity="0.9" />
    </g>
  );
}

function SmartScanGlyph(_: GlyphProps) {
  return (
    <g>
      <g stroke="rgba(255,255,255,0.55)" strokeWidth="4" strokeLinecap="round" fill="none">
        <path d="M34 44 V40 A6 6 0 0 1 40 34 H44" />
        <path d="M76 34 H80 A6 6 0 0 1 86 40 V44" />
        <path d="M86 76 V80 A6 6 0 0 1 80 86 H76" />
        <path d="M44 86 H40 A6 6 0 0 1 34 80 V76" />
      </g>
      <g fill="#FFFFFF">
        <rect x="44" y="46" width="4" height="28" rx="1.5" />
        <rect x="51" y="46" width="3" height="28" rx="1.5" />
        <rect x="57" y="46" width="7" height="28" rx="1.5" />
        <rect x="67" y="46" width="3" height="28" rx="1.5" />
        <rect x="73" y="46" width="4" height="28" rx="1.5" />
      </g>
      <rect x="37" y="58" width="46" height="5" rx="2.5" fill="#F4B860" opacity="0.35" />
      <rect x="37" y="59.25" width="46" height="2.5" rx="1.25" fill="#F4B860" />
    </g>
  );
}

/** Infinito chat → gráfico — o mark real do TantaGrana: a conversa que vira controle */
function TantaGranaGlyph(_: GlyphProps) {
  return (
    <g>
      <path
        d="M30 60 C30 44 50 44 60 60 C70 76 90 76 90 60 C90 44 70 44 60 60 C50 76 30 76 30 60 Z"
        fill="none"
        stroke="#9FE870"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* laço esquerdo: balão de conversa (3 pontos) */}
      <circle cx="37" cy="60" r="2" fill="#9FE870" />
      <circle cx="43" cy="60" r="2" fill="#9FE870" />
      <circle cx="49" cy="60" r="2" fill="#9FE870" />
      {/* laço direito: barras ascendentes */}
      <rect x="70" y="60" width="4" height="7" rx="2" fill="#9FE870" opacity="0.8" />
      <rect x="76.5" y="56" width="4" height="11" rx="2" fill="#9FE870" opacity="0.9" />
      <rect x="83" y="52" width="4" height="15" rx="2" fill="#9FE870" />
    </g>
  );
}

const GLYPHS: Record<string, (p: GlyphProps) => JSX.Element> = {
  strategile: StrategileGlyph,
  tamarkado: TamarkadoGlyph,
  'spid-app': XpidGlyph,
  'roteiro-temporada': RoteiroGlyph,
  'layer-one': CamadaGlyph,
  'app-igreja': IgrejaGlyph,
  'smart-scan': SmartScanGlyph,
  tantagrana: TantaGranaGlyph,
};

export type AppIconProps = {
  slug: string;
  /** Tamanho renderizado em px (o SVG escala) */
  size?: number;
  className?: string;
  style?: CSSProperties;
};

/**
 * Ícone de app no formato de tela inicial de smartphone:
 * squircle de superelipse real, gradiente da marca do produto,
 * luz superior sutil e borda interna de definição.
 */
export function AppIcon({ slug, size = 96, className, style }: AppIconProps) {
  const product = getProductBySlug(slug);
  if (!product) return null;
  const [from, to] = product.iconGradient;
  const Glyph = GLYPHS[slug];
  const uid = `appicon-${slug}`;
  const image = product.iconImage;
  const bleed = image?.mode === 'bleed';

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      className={className}
      style={style}
      role="img"
      aria-label={product.name}
    >
      <defs>
        <linearGradient id={`${uid}-bg`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={from} />
          <stop offset="100%" stopColor={to} />
        </linearGradient>
        <radialGradient id={`${uid}-light`} cx="0.32" cy="0.12" r="0.9">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.16" />
          <stop offset="45%" stopColor="#FFFFFF" stopOpacity="0.04" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </radialGradient>
        <clipPath id={`${uid}-clip`}>
          <path d={SQUIRCLE_PATH} />
        </clipPath>
      </defs>
      <g clipPath={`url(#${uid}-clip)`}>
        {/* Arte 'bleed' traz o próprio fundo e a própria luz — o gradiente e o brilho
            do sistema ficariam por baixo dela, ou lavariam o ícone real. */}
        {!bleed && <path d={SQUIRCLE_PATH} fill={`url(#${uid}-bg)`} />}
        {!bleed && <path d={SQUIRCLE_PATH} fill={`url(#${uid}-light)`} />}
        {image ? (
          bleed ? (
            <image href={image.src} x="0" y="0" width="120" height="120" preserveAspectRatio="xMidYMid slice" />
          ) : (
            <image href={image.src} x="23" y="23" width="74" height="74" preserveAspectRatio="xMidYMid meet" />
          )
        ) : Glyph ? (
          <Glyph accent={product.accent} />
        ) : null}
        {/* sombra interna inferior — assenta o glifo no squircle */}
        <path d={SQUIRCLE_PATH} fill="none" stroke="rgba(0,0,0,0.25)" strokeWidth="2.5" transform="translate(0,-1)" opacity="0.5" />
        <path d={SQUIRCLE_PATH} fill="none" stroke="rgba(255,255,255,0.10)" strokeWidth="1.5" />
      </g>
    </svg>
  );
}
