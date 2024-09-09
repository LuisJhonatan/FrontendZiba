import { cva, VariantProps } from 'class-variance-authority';
import React from 'react';
import { cn } from '@/lib/utils';

const inputBaseStyles = cva(
  'border rounded px-1 py-1 w-full', {
  variants: {
    variant: {
      default: 'border-primary focus:ring-2 focus:ring-primary',
      error: 'border-error focus:ring-error',
      success: 'border-success focus:ring-success',
    },
    size: {
      sm: 'text-small py-small',
      md: 'text-base ',
      lg: 'text-large ',
    }
  },
  defaultVariants: {
    variant: 'default',
    size: 'md',
  },
});

// Definir el tipo de props para los componentes de input
type InputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> & VariantProps<typeof inputBaseStyles>;

export const TextInput: React.FC<InputProps> = ({ className, variant, size, ...props }) => (
  <input
    type="text"
    className={cn(inputBaseStyles({ variant, size }), className)}
    {...props}
  />
);

export const PasswordInput: React.FC<InputProps> = ({ className, variant, size, ...props }) => (
  <input
    type="password"
    className={cn(inputBaseStyles({ variant, size }), className)}
    {...props}
  />
);
