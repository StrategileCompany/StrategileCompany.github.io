import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Off-black quente (base)
        ink: {
          950: '#0A0A0A',
          900: '#101010',
          800: '#161616',
          700: '#1F1F1E',
          600: '#2A2A28',
          500: '#3A3A37',
          400: '#5C5C57',
          300: '#85857E',
          200: '#B0AFA6',
          100: '#D6D5CB',
        },
        // Off-white quente (texto sobre dark)
        bone: {
          50: '#FAF7F0',
          100: '#F5F0E8',
          200: '#EFE8DC',
          300: '#E0D7C5',
        },
        // Acento dourado discreto (uso restrito: links, badges, micro-detalhes)
        gold: {
          50: '#F7F0DF',
          100: '#EBDDB8',
          200: '#DCC58D',
          300: '#C9A96B',
          400: '#B8945A',
          500: '#9C7C45',
          600: '#7C6234',
        },
      },
      fontFamily: {
        display: ['var(--font-fraunces)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      fontSize: {
        // Escala editorial. Display sizes para H1/hero.
        'micro': ['0.6875rem', { lineHeight: '1', letterSpacing: '0.08em' }],
        'eyebrow': ['0.75rem', { lineHeight: '1', letterSpacing: '0.16em' }],
        'caption': ['0.8125rem', { lineHeight: '1.4' }],
        'body-sm': ['0.9375rem', { lineHeight: '1.6' }],
        'body': ['1.0625rem', { lineHeight: '1.6' }],
        'body-lg': ['1.1875rem', { lineHeight: '1.55' }],
        'h3': ['clamp(1.5rem, 2.4vw, 1.875rem)', { lineHeight: '1.15', letterSpacing: '-0.015em' }],
        'h2': ['clamp(2rem, 4vw, 3rem)', { lineHeight: '1.05', letterSpacing: '-0.025em' }],
        'h1': ['clamp(2.75rem, 6vw, 4.5rem)', { lineHeight: '1', letterSpacing: '-0.035em' }],
        'display': ['clamp(3.5rem, 9vw, 8rem)', { lineHeight: '0.95', letterSpacing: '-0.045em' }],
        'hero': ['clamp(4rem, 12vw, 11rem)', { lineHeight: '0.92', letterSpacing: '-0.05em' }],
      },
      spacing: {
        '4.5': '1.125rem',
        '13': '3.25rem',
        '15': '3.75rem',
        '17': '4.25rem',
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
        '38': '9.5rem',
      },
      maxWidth: {
        'reading': '38rem',
        'editorial': '72rem',
        'wide': '88rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
        'shimmer': 'shimmer 2s linear infinite',
        'breathing': 'breathing 4s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(8px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        breathing: {
          '0%, 100%': { opacity: '0.85' },
          '50%': { opacity: '1' },
        },
      },
      transitionTimingFunction: {
        'apple': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        'editorial': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
};

export default config;
