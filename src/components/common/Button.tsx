import type { ButtonHTMLAttributes } from 'react';
import { forwardRef } from 'react';
import { cn } from './LiquidGlassPanel'; // Reusing cn utility

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'glass' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-brand-gold focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
          {
            'bg-gradient-to-r from-brand-orange/80 to-brand-gold/80 backdrop-blur-md border border-white/60 text-white shadow-[0_8px_32px_rgba(248,143,34,0.3),inset_0_2px_4px_rgba(255,255,255,0.8)] hover:from-brand-orange hover:to-brand-gold': variant === 'primary',
            'bg-white/20 backdrop-blur-md border border-white/50 text-white shadow-[0_8px_32px_rgba(0,0,0,0.1),inset_0_2px_4px_rgba(255,255,255,0.6)] hover:bg-white/30': variant === 'glass',
            'border border-white/60 backdrop-blur-sm bg-brand-orange/10 text-brand-orange shadow-[0_4px_16px_rgba(248,143,34,0.1),inset_0_1px_2px_rgba(255,255,255,0.6)] hover:bg-brand-orange/20': variant === 'outline',
            'px-4 py-2 text-sm': size === 'sm',
            'px-6 py-2.5 text-base': size === 'md',
            'px-8 py-3.5 text-lg': size === 'lg',
          },
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export default Button;
