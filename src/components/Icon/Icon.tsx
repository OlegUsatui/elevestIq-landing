type Props = {
  name: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  ariaLabel?: string;
};

export default function Icon({ name, size = 'md', className, ariaLabel }: Props) {
  const a11y = ariaLabel ? { role: 'img', 'aria-label': ariaLabel } : { 'aria-hidden': true };
  return (
    <svg className={['icon', `icon--${size}`, className || ''].join(' ').trim()} {...a11y}>
      <use href={`/icons/sprite.svg#${name}`} />
    </svg>
  );
}
