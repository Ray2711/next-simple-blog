import './globals.css'
import type { Metadata } from 'next'
import Navbar from './components/Navbar'
import pb from "./lib/pocketbase.js"

export const metadata: Metadata = {
  title: "Nurique's Blog",
  description: 'Best BLOG EVAAAAAR!',
}
console.log(pb.authStore.isValid.toString())

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="w-5/6 md:w-4/5 m-auto xl:w-3/4 h-screen">
        <Navbar></Navbar>
        {children}</div></body>
    </html>
  )
}
