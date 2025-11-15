import Link from 'next/link';

export default function Logo({theme = 'light'}: {theme: 'light' | 'dark'}) {
  return (
    <Link href="/" className="logo">Elevest<span className={theme}>IQ</span></Link>
  )
}
