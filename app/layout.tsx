import type { Metadata } from "next"
import { Inter, Space_Grotesk } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { AmbientBackground } from "@/components/shared/ambient-background"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
})

export const metadata: Metadata = {
  title: "BHM Studios",
  description:
    "BHM Studios is a founder-led software and digital product agency combining a central studio presence with immersive individual founder portfolios.",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/favicon.svg",
    apple: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased dark`}
    >
      <body className="relative min-h-svh overflow-x-hidden">
        <ThemeProvider>
          <AmbientBackground />
          <div className="relative z-10">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  )
}
