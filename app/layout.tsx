import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import Navbar from '@/components/Navbar'
import Footer from '@/components/component/Landing/Footer'
import { SessionProvider } from 'next-auth/react'

export const metadata: Metadata = {
  title: 'Codefront',
  description: 'Created with ❤️',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className='bg-black'>
        <SessionProvider>
        <ThemeProvider>
          <Navbar />
          {children}
          
        </ThemeProvider> 
        </SessionProvider>
           
        </body>
    </html>
  )
}
