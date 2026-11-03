import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import { cn } from '../../lib/utils';

type BaseProps = {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  children: ReactNode;
  className?: string;
};

type ButtonAsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsLink = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
    download?: boolean | string;
    target?: string;
    rel?: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

export const Button = ({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  leftIcon,
  rightIcon,
  children,
  className,
  ...props
}: ButtonProps) => {
  const sizeClasses = {
    sm: 'px-3.5 py-1.5 text-xs font-semibold rounded-lg gap-1.5',
    md: 'px-5 py-2.5 text-sm font-semibold rounded-xl gap-2',
    lg: 'px-6 py-3.5 text-base font-semibold rounded-xl gap-2.5',
  };

  const variantClasses = {
    primary:
      'bg-gradient-to-r from-[#721C35] via-[#8C2342] to-[#481426] dark:from-[#F28C28] dark:via-[#E06D28] dark:to-[#A83250] hover:from-[#8C2342] hover:via-[#721C35] hover:to-[#5E1A30] dark:hover:from-[#FF9D32] dark:hover:via-[#F28C28] dark:hover:to-[#BD3D5E] text-white shadow-md shadow-[#721C35]/20 dark:shadow-orange-950/40 hover:shadow-[#721C35]/30 dark:hover:shadow-[#F28C28]/25 border border-[#721C35]/30 dark:border-[#F28C28]/40 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]',
    secondary:
      'bg-[#FFFFFF] dark:bg-[#17151B] text-[#29231F] dark:text-slate-200 hover:text-[#481426] dark:hover:text-white hover:bg-[#FAF6EE] dark:hover:bg-[#221C28] border border-[#E2D7C5] dark:border-white/[0.08] hover:border-[#721C35]/40 dark:hover:border-[#A83250]/50 shadow-sm dark:shadow-none hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]',
    outline:
      'bg-transparent text-[#721C35] dark:text-slate-200 hover:text-[#481426] dark:hover:text-white border border-[#721C35]/35 dark:border-white/[0.12] hover:border-[#721C35] dark:hover:border-[#F28C28]/60 hover:bg-[#721C35]/8 dark:hover:bg-[#F28C28]/10 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]',
    ghost:
      'bg-transparent text-[#5C524A] dark:text-slate-400 hover:text-[#29231F] dark:hover:text-white hover:bg-[#29231F]/5 dark:hover:bg-white/5 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]',
  };

  const baseClasses = cn(
    'inline-flex items-center justify-center transition-all duration-200 cursor-pointer select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#721C35] dark:focus-visible:ring-[#F28C28] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F8F4ED] dark:focus-visible:ring-offset-[#0B0B10] disabled:opacity-60 disabled:cursor-not-allowed disabled:pointer-events-none',
    sizeClasses[size],
    variantClasses[variant],
    className
  );

  if ('href' in props && props.href) {
    const { href, download, target, rel, ...rest } = props as ButtonAsLink;
    return (
      <a
        href={href}
        download={download}
        target={target}
        rel={rel || (target === '_blank' ? 'noopener noreferrer' : undefined)}
        className={baseClasses}
        {...rest}
      >
        {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : leftIcon}
        <span>{children}</span>
        {rightIcon}
      </a>
    );
  }

  const { type = 'button', disabled, onClick, ...buttonProps } = props as ButtonAsButton;

  return (
    <motion.button
      type={type}
      disabled={disabled || isLoading}
      onClick={onClick}
      whileTap={{ scale: 0.98 }}
      className={baseClasses}
      {...(buttonProps as Record<string, unknown>)}
    >
      {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : leftIcon}
      <span>{children}</span>
      {rightIcon}
    </motion.button>
  );
};
