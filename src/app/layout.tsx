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
  title: 'Cindy Tao | Software Engineer',
  description:
    'Xinyue (Cindy) Tao is a computer science and statistics student at the University of Toronto working on systems, performance, and full-stack engineering. Sixteen months building event-driven pipelines, APIs, and internal tooling at a regulated fintech.',
  openGraph: {
    title: 'Cindy Tao | Software Engineer',
    description:
      'Software engineer in Toronto working on systems, performance, and full-stack engineering. Graduating May 2027.',
    type: 'website'
  }
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
