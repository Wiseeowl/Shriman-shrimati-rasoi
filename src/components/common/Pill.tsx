import type { ReactNode } from 'react';
import { cn } from './LiquidGlassPanel';

interface PillProps {
  children: ReactNode;
  className?: string;
  variant?: 'glass' | 'solid' | 'outline';
  active?: boolean;
}

export default function Pill({ children, className, variant = 'glass', active = false }: PillProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium transition-colors cursor-default',
        {
          'liquid-glass text-white': variant === 'glass' && !active,
          'liquid-glass-strong text-white font-semibold': variant === 'glass' && active,
          'bg-gray-100 text-gray-700': variant === 'solid' && !active,
          'bg-brand-orange text-white': variant === 'solid' && active,
          'border border-gray-300 text-gray-600': variant === 'outline' && !active,
          'border border-brand-orange text-brand-orange bg-brand-orange/5': variant === 'outline' && active,
        },
        className
      )}
    >
      {children}
    </span>
  );
}
