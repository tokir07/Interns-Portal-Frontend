import type { HTMLAttributes } from 'react';
import { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import { shadows } from '../../theme/shadows';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, hoverEffect = false, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'bg-white rounded-2xl border border-gray-100',
          hoverEffect && 'transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(0,0,0,0.12)]',
          className
        )}
        style={{ boxShadow: shadows.card }}
        {...props}
      >
        {children}
      </div>
    );
  }
);
Card.displayName = 'Card';
