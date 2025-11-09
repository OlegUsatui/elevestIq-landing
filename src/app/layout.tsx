import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { Manrope } from 'next/font/google'
import '../styles/global.scss'

export const metadata: Metadata = {
  title: 'ElevestIQ',
  description: 'ElevestIQ landing',
}

const manrope = Manrope({
  subsets: ['latin', 'cyrillic'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-manrope',
})

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${manrope.className} ${manrope.variable}`}>
    <body>{children}</body>
    </html>
  )
}
