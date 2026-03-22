import type { Metadata } from "next"
import { Roboto } from "next/font/google"
import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"
import { SanityLive } from "@/sanity/lib/live"
import "./globals.scss"

config.autoAddCss = false

const roboto = Roboto({
  weight: ["300", "400"],
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Rick Segal",
  description: "Rick Segal — Senior Producer",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={roboto.className}>
      <body>
        {children}
        <SanityLive />
      </body>
    </html>
  )
}
