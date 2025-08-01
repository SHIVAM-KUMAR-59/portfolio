import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Shivam Kumar - Full-Stack Developer",
  description:
    "Full-Stack Developer with 2+ years of experience in React/Next.js, Node.js, Java, GoLang and database technologies.",
  keywords: "Full-Stack Developer, React, Next.js, Node.js, TypeScript, JavaScript, Portfolio",
  authors: [{ name: "Shivam Kumar" }],
  openGraph: {
    title: "Shivam Kumar - Full-Stack Developer",
    description: "Full-Stack Developer with 2+ years of experience in web development",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}
