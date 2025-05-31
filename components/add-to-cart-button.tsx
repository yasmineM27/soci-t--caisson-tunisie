"use client"

import { useState } from "react"
import { ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"

type AddToCartButtonProps = {
  productId: number
  productName: string
  productImage: string
}

export function AddToCartButton({ productId, productName, productImage }: AddToCartButtonProps) {
  const { toast } = useToast()
  const [isAdding, setIsAdding] = useState(false)

  const addToCart = () => {
    setIsAdding(true)

    // Récupérer le panier actuel du localStorage
    const currentCart = localStorage.getItem("cart")
    const cart = currentCart ? JSON.parse(currentCart) : []

    // Vérifier si le produit est déjà dans le panier
    const existingItemIndex = cart.findIndex((item) => item.id === productId)

    if (existingItemIndex !== -1) {
      // Si le produit existe déjà, augmenter la quantité
      cart[existingItemIndex].quantity += 1
    } else {
      // Sinon, ajouter le nouveau produit
      cart.push({
        id: productId,
        name: productName,
        quantity: 1,
        image: productImage,
      })
    }

    // Sauvegarder le panier mis à jour
    localStorage.setItem("cart", JSON.stringify(cart))

    // Afficher une notification
    toast({
      title: "Produit ajouté au panier",
      description: `${productName} a été ajouté à votre panier.`,
    })

    setIsAdding(false)
  }

  return (
    <Button onClick={addToCart} disabled={isAdding}>
      <ShoppingCart className="mr-2 h-4 w-4" />
      {isAdding ? "Ajout en cours..." : "Ajouter au panier"}
    </Button>
  )
}
