import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';

type CommonProps = {
  variant?: 'primary' | 'outline' | 'accent';
  size?: 'md' | 'lg';
  className?: string;
  children: React.ReactNode;
};

type ButtonProps =
  | ({ as?: 'button' } & ButtonHTMLAttributes<HTMLButtonElement> & CommonProps)
  | ({ as: 'a' } & AnchorHTMLAttributes<HTMLAnchorElement> & CommonProps);

export default function Button(props: ButtonProps) {
  const { as = 'button', variant = 'primary', size = 'md', className, children, ...rest } = props;
  const classes = clsx('btn', `btn--${variant}`, `btn--${size}`, className);

  if (as === 'a') {
    const p = rest as AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <a {...p} className={classes}>
        {children}
      </a>
    );
  }

  const p = rest as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button {...p} className={classes}>
      {children}
    </button>
  );
}
