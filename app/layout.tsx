import './globals.css'
import type { Metadata } from 'next'
import Navbar from './components/Navbar'
import dynamic from 'next/dynamic';
const DynamicComponent = dynamic(() => import('./components/Navbar'), {
  ssr: false, // Set to false to disable server-side rendering. For some reason throws error NEXT_DYNAMIC_NO_SSR_CODE. idk how to fix it. it does not throw such error when running production build. idk man.
});
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
      <head>
      <link rel="icon" href="./favicon.ico" sizes="any" />
      </head>
      <body>
        <div className="w-5/6 md:w-4/5 m-auto xl:w-3/4 h-screen">
        <DynamicComponent></DynamicComponent>
        {children}</div></body>
    </html>
  )
}
