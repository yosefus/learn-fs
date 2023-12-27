import type { Metadata } from 'next'
import { Assistant } from 'next/font/google'
import './globals.css'

const assistant = Assistant({ subsets: ['latin', 'hebrew'] })

export const metadata: Metadata = {
  title: 'learn Fs',
  description: 'learn full stack with workin',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="he" dir='rtl'>
      <body className={assistant.className}>{children}</body>
    </html>
  )
}
