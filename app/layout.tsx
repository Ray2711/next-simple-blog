import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Nurique's Blog",
  description: 'Best BLOG EVAAAAAR!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-5/6 md:w-4/5 m-auto xl:w-3/4 h-screen">
        <Navbar></Navbar>
        
        {children}</div></body>
    </html>
  )
}
