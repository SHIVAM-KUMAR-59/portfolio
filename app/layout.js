import localFont from 'next/font/local'
import { K2D, Inter, Poppins } from 'next/font/google'
import './globals.css'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})

const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

const k2dFont = K2D({
  variable: '--font-k2d',
  weight: ['100', '300', '400', '500', '700'],
  subsets: ['latin'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['100', '300', '400', '500', '700'],
})

export const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['100', '300', '400', '500', '700'],
})

export const metadata = {
  title: "Shivam's Portfolio",
  description:
    'Welcome to my portfolio, built using Next.js, Framer Motion, and Tailwind',
  icons: {
    icon: { url: '/Logo.png', sizes: '128x128' },
    apple: { url: '/Logo.png', sizes: '128x128' },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{ scrollBehavior: 'smooth' }}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${k2dFont.variable} ${inter.variable} antialiased bg-black text-white`}
      >
        {children}
      </body>
    </html>
  )
}
