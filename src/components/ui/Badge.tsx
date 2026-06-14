import type { HTMLAttributes } from 'react';
import { forwardRef } from 'react';
import { cn } from '../../utils/cn';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'success' | 'warning' | 'danger' | 'info' | 'default';
}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = 'default', children, ...props }, ref) => {
    
    const variants = {
      success: 'bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/20',
      warning: 'bg-[#F59E0B]/10 text-[#F59E0B] border border-[#F59E0B]/20',
      danger: 'bg-[#EF4444]/10 text-[#EF4444] border border-[#EF4444]/20',
      info: 'bg-[#1E6FD9]/10 text-[#1E6FD9] border border-[#1E6FD9]/20',
      default: 'bg-gray-100 text-gray-600 border border-gray-200',
    };

    return (
      <span
        ref={ref}
        className={cn(
          'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wider',
          variants[variant],
          className
        )}
        {...props}
      >
        {children}
      </span>
    );
  }
);
Badge.displayName = 'Badge';
