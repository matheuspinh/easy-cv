import { ReactNode } from 'react'
import './globals.css'
import { Inter } from 'next/font/google'
import MenuBar from '@/components/MenuBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="fixed">
          <MenuBar />
        </header>
        <main className="flex h-screen w-screen items-center justify-center bg-gray-100 dark:bg-gray-800">
          <div>{children}</div>
        </main>
      </body>
    </html>
  )
}
