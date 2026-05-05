import Link from 'next/link';
import { cn } from '@/lib/cn';

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="Strategile Company — pagina inicial"
      className={cn(
        'group inline-flex items-baseline gap-1 font-display text-h3 leading-none tracking-tight text-bone-50',
        className,
      )}
    >
      <span className="font-medium">Strategile</span>
      <span className="text-gold-300 transition-transform duration-300 ease-apple group-hover:translate-x-0.5">
        .
      </span>
    </Link>
  );
}
