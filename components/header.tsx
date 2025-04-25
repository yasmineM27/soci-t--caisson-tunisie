"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Facebook, Instagram, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { CartIcon } from "@/components/cart-icon"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Accueil", href: "/" },
  { name: "Produits", href: "/produits" },
  { name: "À propos", href: "/a-propos" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
]

const socialLinks = [
  { name: "Facebook", href: "https://www.facebook.com/profile.php?id=61566954398857", icon: Facebook },
  { name: "Instagram", href: "https://instagram.com/caissontunisie", icon: Instagram },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/ste-caisson-tunisie-b89763201/", icon: Linkedin },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "bg-background border-b w-full z-50 transition-all duration-300",
        scrolled ? "fixed top-0 left-0 right-0 shadow-md" : "",
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
      <div className="flex lg:flex-1 items-center">
  <Link href="/" className="-m-1.5 p-1.5 flex items-center">
    <span className="sr-only">Société Caisson Tunisie</span>
    {/* Logo */}
    <div className="h-10 w-auto flex items-center">
      <img 
        src="/stc/logo.png" 
        alt="Logo Société Caisson Tunisie" 
        className="h-full w-auto" 
      />
    </div>
    {/* Texte avec police fine */}
    <div className="ml-3 hidden sm:block">
      <span className="text-primary font-light text-lg">Société Caisson Tunisie</span>
    </div>
  </Link>
</div>
        <div className="flex lg:hidden">
          <Button
            variant="ghost"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Ouvrir le menu principal</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </Button>
        </div>
        <div className="hidden lg:flex lg:gap-x-8 mr-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 hover:text-primary transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-4 items-center">
          
          <CartIcon />
          <ThemeToggle />
          <Button asChild>
            <Link href="/contact">Demander un devis</Link>
          </Button>
          <div className="flex space-x-2 mr-2">
            {socialLinks.map((item) => (
              <Button key={item.name} variant="ghost" size="icon" asChild className="h-8 w-8">
                <Link href={item.href} target="_blank" rel="noopener noreferrer">
                  <item.icon className="h-4 w-4" />
                  <span className="sr-only">{item.name}</span>
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`lg:hidden ${mobileMenuOpen ? "fixed inset-0 z-50" : "hidden"}`}>
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm" />
        <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-background px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Société Caisson Tunisie</span>
              <div className="h-10 w-auto flex items-center">
          <img 
            src="/stc/logo.png" 
            alt="Logo Société Caisson Tunisie" 
            className="h-full w-auto" 
          />
        </div>
            </Link>
            <Button variant="ghost" className="-m-2.5 rounded-md p-2.5" onClick={() => setMobileMenuOpen(false)}>
              <span className="sr-only">Fermer le menu</span>
              <X className="h-6 w-6" aria-hidden="true" />
            </Button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-accent"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex space-x-2">
                    {socialLinks.map((item) => (
                      <Button key={item.name} variant="ghost" size="icon" asChild className="h-8 w-8">
                        <Link href={item.href} target="_blank" rel="noopener noreferrer">
                          <item.icon className="h-4 w-4" />
                          <span className="sr-only">{item.name}</span>
                        </Link>
                      </Button>
                    ))}
                  </div>
                  <CartIcon />
                  <ThemeToggle />
                </div>
                <Button className="w-full" asChild>
                  <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                    Demander un devis
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
