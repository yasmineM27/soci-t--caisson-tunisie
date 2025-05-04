import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AuthProvider } from "@/lib/auth"
import { Toaster } from "@/components/ui/toaster"
import { GoogleAnalytics } from "@/components/analytics"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Société Caisson Tunisie - Spécialiste en produits polystyrène expansé",
  description:
    "Fabricant tunisien de coffrets tunnel pour volets roulants, panneaux isolants et caissons d'emballage en polystyrène expansé (EPS).",
  generator: 'v0.dev',
  metadataBase: new URL("https://societe-caisson-tunisie.vercel.app/")
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
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
