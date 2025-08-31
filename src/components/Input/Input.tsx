import { InputHTMLAttributes } from 'react';
import clsx from 'clsx';

type Props = InputHTMLAttributes<HTMLInputElement> & { className?: string };

export default function Input({ className, ...rest }: Props) {
  return (
    <label className={clsx('field', className)}>
      <span className="visually-hidden">{rest.placeholder || 'Input'}</span>
      <span className="field__control">
        <input className="field__input" {...rest} />
      </span>
    </label>
  );
}
