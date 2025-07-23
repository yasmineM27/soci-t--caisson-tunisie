import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AuthProvider } from "@/lib/auth"
import { Toaster } from "@/components/ui/toaster"


const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Société Caisson Tunisie - Spécialiste en produits polystyrène expansé",
  description:
    "Fabricant tunisien de coffrets tunnel pour volets roulants, panneaux isolants et caissons d'emballage en polystyrène expansé (EPS). Devis gratuit, livraison rapide en Tunisie.",
  generator: 'Next.js',
  metadataBase: new URL("https://societe-caisson-tunisie.tn"),
  keywords: [
    "polystyrène expansé tunisie",
    "isolation thermique tunisie",
    "coffret tunnel volet roulant",
    "panneau isolant EPS",
    "fish box isotherme",
    "société caisson tunisie",
    "fabricant polystyrène tunisie"
  ],
  authors: [{ name: "Société Caisson Tunisie" }],
  creator: "Société Caisson Tunisie",
  publisher: "Société Caisson Tunisie",
  robots: "index, follow",
  openGraph: {
    title: "Société Caisson Tunisie - Spécialiste Polystyrène Expansé",
    description: "Fabricant tunisien de produits en polystyrène expansé. Coffrets tunnel, panneaux isolants, Fish Box. Devis gratuit.",
    url: "https://societe-caisson-tunisie.tn",
    siteName: "Société Caisson Tunisie",
    images: [
      {
        url: "/stc/logo.png",
        width: 800,
        height: 600,
        alt: "Société Caisson Tunisie - Logo",
      },
    ],
    locale: "fr_TN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Société Caisson Tunisie - Polystyrène Expansé",
    description: "Fabricant tunisien de produits en polystyrène expansé. Devis gratuit.",
    images: ["/stc/logo.png"],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
      { url: '/favicon.ico', sizes: '16x16', type: 'image/x-icon' },
      { url: '/icon', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon', sizes: '180x180', type: 'image/png' },
      { url: '/favicon-180x180.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    other: [
      {
        rel: 'icon',
        url: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        rel: 'mask-icon',
        url: '/icon',
        color: '#ce6801',
      },
      {
        rel: 'icon',
        url: '/favicon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        rel: 'icon',
        url: '/favicon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  },
  manifest: '/manifest.json',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        {/* Favicon explicite pour Google */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
        {/* Meta pour forcer l'indexation du favicon */}
        <meta name="msapplication-TileColor" content="#ce6801" />
        <meta name="theme-color" content="#ce6801" />
      </head>
      <body className={inter.className}>
        {/* Remplacez GA-XXXXXXXXXX par votre ID de mesure Google Analytics */        /*<GoogleAnalytics measurementId="GA-XXXXXXXXXX" />*/
}
        <AuthProvider>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
            <div className="flex min-h-screen flex-col">
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
            <Toaster />
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
