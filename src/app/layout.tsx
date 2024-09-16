import type { Metadata } from 'next'
import './globals.css'
import Providers from '@/components/Providers'
import Navbar from '@/components/navbar/Navbar'
import { Poppins } from 'next/font/google'
import { cn } from '@/lib/utils'
import Footer from '@/components/footer/Footer'

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export const metadata: Metadata = {
  title: "Cindy | Personal Portfolio",
  description: "Cindy Tao is a computer science student with a focus on software engineering, based in Toronto."
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={cn(
          'flex min-h-screen flex-col antialiased',
          poppins.variable
        )}
      >
        <Providers>
          <Navbar />
          <main className='grow'>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
