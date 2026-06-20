import type { ReactNode } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Utility to merge tailwind classes safely
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface LiquidGlassPanelProps {
  children: ReactNode;
  className?: string;
  variant?: 'normal' | 'strong';
  as?: React.ElementType;
}

export default function LiquidGlassPanel({
  children,
  className,
  variant = 'normal',
  as: Component = 'div',
  ...props
}: LiquidGlassPanelProps & React.HTMLAttributes<HTMLElement>) {
  return (
    <Component
      className={cn(
        variant === 'strong' ? 'liquid-glass-strong' : 'liquid-glass',
        'rounded-2xl',
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
