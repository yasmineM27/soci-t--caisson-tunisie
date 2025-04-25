"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Trash2, ShoppingCart, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useToast } from "@/hooks/use-toast"

// Type pour les produits du panier
type CartItem = {
  id: number
  name: string
  quantity: number
  image: string
}

export default function CartPage() {
  const { toast } = useToast()
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [loading, setLoading] = useState(true)

  // Charger les éléments du panier depuis le localStorage
  useEffect(() => {
    const storedCart = localStorage.getItem("cart")
    if (storedCart) {
      setCartItems(JSON.parse(storedCart))
    }
    setLoading(false)
  }, [])

  // Mettre à jour le localStorage quand le panier change
  useEffect(() => {
    if (!loading) {
      localStorage.setItem("cart", JSON.stringify(cartItems))
    }
  }, [cartItems, loading])

  // Calculer le total du panier

  // Mettre à jour la quantité d'un produit
  const updateQuantity = (id: number, quantity: number) => {
    if (quantity < 1) return

    setCartItems((prevItems) => prevItems.map((item) => (item.id === id ? { ...item, quantity } : item)))
  }

  // Supprimer un produit du panier
  const removeItem = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id))
    toast({
      title: "Produit supprimé",
      description: "Le produit a été retiré de votre panier.",
    })
  }

  // Vider le panier
  const clearCart = () => {
    setCartItems([])
    toast({
      title: "Panier vidé",
      description: "Tous les produits ont été retirés de votre panier.",
    })
  }

  // Passer à la commande
  const checkout = () => {
    // Rediriger vers la page de commande
    window.location.href = "/commande"
  }

  if (loading) {
    return (
      <div className="container mx-auto px-6 py-12 lg:px-8 text-center">
        <p>Chargement du panier...</p>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-6 py-12 lg:px-8">
      <div className="flex items-center mb-6">
        <Button variant="outline" size="icon" asChild className="mr-4">
          <Link href="/produits">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <h1 className="text-3xl font-bold">Votre Panier</h1>
      </div>

      {cartItems.length === 0 ? (
        <Card className="text-center py-12">
          <CardContent>
            <div className="flex flex-col items-center justify-center">
              <ShoppingCart className="h-16 w-16 text-muted-foreground mb-4" />
              <h2 className="text-2xl font-semibold mb-2">Votre panier est vide</h2>
              <p className="text-muted-foreground mb-6">Vous n'avez pas encore ajouté de produits à votre panier.</p>
              <Button asChild>
                <Link href="/produits">Découvrir nos produits</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      ) : (
        <>
          <Card className="mb-8">
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">Produit</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead className="text-right">Prix</TableHead>
                    <TableHead className="text-center">Quantité</TableHead>
                    <TableHead className="text-right">Total</TableHead>
                    <TableHead className="w-[70px]"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {cartItems.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell>
                        <div className="relative h-16 w-16 rounded overflow-hidden">
                          <Image
                            src={item.image || "/placeholder.svg?height=64&width=64"}
                            alt={item.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="font-medium">{item.name}</div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center justify-center">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                          >
                            -
                          </Button>
                          <Input
                            type="number"
                            min="1"
                            value={item.quantity}
                            onChange={(e) => updateQuantity(item.id, Number.parseInt(e.target.value) || 1)}
                            className="h-8 w-16 mx-2 text-center"
                          />
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            +
                          </Button>
                        </div>
                      </TableCell>
                      <TableCell className="text-right font-medium">
                      </TableCell>
                      <TableCell>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-red-500 hover:text-red-700 hover:bg-red-100"
                          onClick={() => removeItem(item.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
            <CardFooter className="flex justify-between p-6 border-t">
              <Button variant="outline" onClick={clearCart}>
                Vider le panier
              </Button>
            
            </CardFooter>
          </Card>

          <div className="flex justify-between">
            <Button variant="outline" asChild>
              <Link href="/produits">Continuer mes achats</Link>
            </Button>
            <Button size="lg" onClick={checkout}>
              Passer la commande
            </Button>
          </div>
        </>
      )}
    </div>
  )
}
