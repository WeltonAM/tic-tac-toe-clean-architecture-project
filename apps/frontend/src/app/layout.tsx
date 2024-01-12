import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import './globals.css'
import { GameProvider } from '@/contexts/GameContext'

const outfit = Outfit({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tic-tac-toe Clear Architecture',
  description: 'Hands-on modeling domain in tic-tac-toe project',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`
          ${outfit.className}
      `}>
        <GameProvider>
          {children}
        </GameProvider>
      </body>
    </html>
  )
}
