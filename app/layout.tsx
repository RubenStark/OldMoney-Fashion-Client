import { Urbanist } from 'next/font/google'

import '@/app/globals.css'

import { ClerkProvider } from '@clerk/nextjs'

const font = Urbanist({ subsets: ['latin'] })

export const metadata = {
  title: 'Store',
  description: 'Store - The place for all your purchases.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClerkProvider>
        {children}
        </ClerkProvider>
      </body>
    </html>
  )
}
