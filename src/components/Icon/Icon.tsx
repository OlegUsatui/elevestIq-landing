type Props = {
  name: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  ariaLabel?: string;
};

export default function Icon({ name, className, ariaLabel }: Props) {
  const a11y = ariaLabel ? { role: 'img', 'aria-label': ariaLabel } : { 'aria-hidden': true };
  return (
    <svg width={32} height={32} className={['icon', className || ''].join(' ').trim()} {...a11y}>
      <use href={`/icons/sprite.svg#${name}`} />
    </svg>
  );
}
