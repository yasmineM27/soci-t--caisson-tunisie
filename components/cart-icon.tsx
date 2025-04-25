"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function CartIcon() {
  const [itemCount, setItemCount] = useState(0)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)

    // Fonction pour mettre à jour le compteur
    const updateCartCount = () => {
      const cart = localStorage.getItem("cart")
      if (cart) {
        const cartItems = JSON.parse(cart)
        const count = cartItems.reduce((total, item) => total + item.quantity, 0)
        setItemCount(count)
      } else {
        setItemCount(0)
      }
    }

    // Mettre à jour le compteur au chargement
    updateCartCount()

    // Écouter les changements dans le localStorage
    window.addEventListener("storage", updateCartCount)

    // Créer un intervalle pour vérifier régulièrement les changements
    const interval = setInterval(updateCartCount, 1000)

    return () => {
      window.removeEventListener("storage", updateCartCount)
      clearInterval(interval)
    }
  }, [])

  if (!isClient) {
    return null
  }

  return (
    <Button variant="ghost" size="icon" asChild className="relative">
      <Link href="/panier">
        <ShoppingCart className="h-5 w-5" />
        {itemCount > 0 && (
          <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs">
            {itemCount}
          </Badge>
        )}
        <span className="sr-only">Panier</span>
      </Link>
    </Button>
  )
}
