import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Kidverse - Safe Digital Experience for Kids',
  description: 'AI-powered kid-safe digital platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}