import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Inter } from "next/font/google"

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
})

export const metadata: Metadata = {
  title: "Fragmentos de Amaranthine - Álbum Conceitual",
  description:
    "Um álbum-conceito inspirado na saga de Jack Moneiy. Entre ecos do sangue real e o destino das essências, nasce a trilha sonora de uma saga imortal.",
  keywords: "álbum conceitual, Jack Moneiy, Marcelo Santos Melo, prog grunge, power metal, Suno AI",
  authors: [{ name: "Marcelo Santos Melo" }],
  openGraph: {
    title: "Fragmentos de Amaranthine",
    description: "Um álbum-conceito inspirado na saga de Jack Moneiy",
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
    <html lang="pt-BR">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}
