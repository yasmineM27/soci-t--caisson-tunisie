"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowLeft, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

// Type pour les produits du panier
type CartItem = {
  id: number
  name: string
  quantity: number
  image: string
}

export default function CheckoutPage() {
  const { toast } = useToast()
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [loading, setLoading] = useState(true)
  const [orderComplete, setOrderComplete] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    paymentMethod: "cash",
    notes: "",
  })

  // Charger les éléments du panier depuis le localStorage
  useEffect(() => {
    const storedCart = localStorage.getItem("cart")
    if (storedCart) {
      setCartItems(JSON.parse(storedCart))
    }
    setLoading(false)
  }, [])

  // Calculer le total du panier

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleRadioChange = (value) => {
    setFormData((prev) => ({ ...prev, paymentMethod: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simuler l'envoi de la commande
    setTimeout(() => {
      // Vider le panier
      localStorage.removeItem("cart")
      setCartItems([])

      // Afficher la confirmation
      setOrderComplete(true)
      setIsSubmitting(false)

      toast({
        title: "Commande envoyée",
        description: "Votre commande a été envoyée avec succès. Nous vous contacterons bientôt.",
      })
    }, 2000)
  }

  if (loading) {
    return (
      <div className="container mx-auto px-6 py-12 lg:px-8 text-center">
        <p>Chargement...</p>
      </div>
    )
  }

  if (cartItems.length === 0 && !orderComplete) {
    return (
      <div className="container mx-auto px-6 py-12 lg:px-8">
        <div className="flex items-center mb-6">
          <Button variant="outline" size="icon" asChild className="mr-4">
            <Link href="/produits">
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
          <h1 className="text-3xl font-bold">Commander</h1>
        </div>

        <Card className="text-center py-12">
          <CardContent>
            <div className="flex flex-col items-center justify-center">
              <h2 className="text-2xl font-semibold mb-2">Votre panier est vide</h2>
              <p className="text-muted-foreground mb-6">
                Vous devez ajouter des produits à votre panier avant de passer commande.
              </p>
              <Button asChild>
                <Link href="/produits">Découvrir nos produits</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (orderComplete) {
    return (
      <div className="container mx-auto px-6 py-12 lg:px-8">
        <Card className="text-center py-12 max-w-2xl mx-auto">
          <CardContent>
            <div className="flex flex-col items-center justify-center">
              <CheckCircle className="h-16 w-16 text-green-500 mb-4" />
              <h2 className="text-2xl font-semibold mb-2">Commande confirmée</h2>
              <p className="text-muted-foreground mb-6">
                Merci pour votre commande ! Nous vous avons envoyé un email de confirmation. Notre équipe vous
                contactera bientôt pour finaliser votre commande.
              </p>
              <Button asChild>
                <Link href="/">Retour à l'accueil</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-6 py-12 lg:px-8">
      <div className="flex items-center mb-6">
        <Button variant="outline" size="icon" asChild className="mr-4">
          <Link href="/panier">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <h1 className="text-3xl font-bold">Finaliser votre commande</h1>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <form onSubmit={handleSubmit}>
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Informations personnelles</CardTitle>
                <CardDescription>Veuillez fournir vos informations de contact.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">Prénom</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Nom</Label>
                    <Input id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Téléphone</Label>
                    <Input id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Adresse de livraison</CardTitle>
                <CardDescription>Veuillez fournir votre adresse de livraison.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="address">Adresse</Label>
                  <Input id="address" name="address" value={formData.address} onChange={handleChange} required />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="city">Ville</Label>
                    <Input id="city" name="city" value={formData.city} onChange={handleChange} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="postalCode">Code postal</Label>
                    <Input
                      id="postalCode"
                      name="postalCode"
                      value={formData.postalCode}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Mode de paiement</CardTitle>
                <CardDescription>Veuillez sélectionner votre mode de paiement préféré.</CardDescription>
              </CardHeader>
              <CardContent>
                <RadioGroup value={formData.paymentMethod} onValueChange={handleRadioChange} className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="cash" id="cash" />
                    <Label htmlFor="cash">Paiement à la livraison</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="bank" id="bank" />
                    <Label htmlFor="bank">Virement bancaire</Label>
                  </div>
                </RadioGroup>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Notes supplémentaires</CardTitle>
                <CardDescription>
                  Si vous avez des instructions spéciales pour votre commande, veuillez les indiquer ci-dessous.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea id="notes" name="notes" value={formData.notes} onChange={handleChange} rows={4} />
              </CardContent>
            </Card>

            <div className="flex justify-between">
              <Button variant="outline" asChild>
                <Link href="/panier">Retour au panier</Link>
              </Button>
              <Button type="submit" size="lg" disabled={isSubmitting}>
                {isSubmitting ? "Traitement en cours..." : "Confirmer la commande"}
              </Button>
            </div>
          </form>
        </div>

        <div>
          <Card className="sticky top-6">
            <CardHeader>
              <CardTitle>Résumé de la commande</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex justify-between pb-2 border-b">
                  <div>
                    <div className="font-medium">{item.name}</div>
                    <div className="text-sm text-muted-foreground">
                    </div>
                  </div>
              
                </div>
              ))}

              <div className="flex justify-between pt-2 font-bold">
                <div>Total</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
