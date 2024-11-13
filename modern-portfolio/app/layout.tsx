import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from '@/components/Navbar'
import Favicon from '@/components/Favicon'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Saichandra Vallakatla - Portfolio',
  description: 'Personal portfolio of Saichandra Vallakatla, a software engineer specializing in full-stack development and cloud technologies.',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      new URL('/favicon.ico', 'https://example.com'),
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Favicon />
      </head>
      <body className={`${inter.className} bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-indigo-950 min-h-screen flex flex-col`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-grow container mx-auto px-4 py-8 overflow-x-hidden">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}