"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, X, Check, Minus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AddToCartButton } from "@/components/add-to-cart-button"
import { useToast } from "@/components/ui/use-toast"

// Sample product data for comparison
const productsData = [
  {
    id: 1,
    name: "Coffret volet roulant",
    description: "Solution légère et isolante pour l'installation de volets roulants.",
    image: "/stc/coff.jpeg",
    
    slug: "coffret-tunnel-volet-roulant",
    specifications: [
      { name: "Matériau", value: "Polystyrène expansé (EPS)" },
      { name: "Densité", value: "30 kg/m³" },
      { name: "Conductivité thermique", value: "0,035 W/mK" },
      { name: "Résistance à la compression", value: "200 kPa" },
      { name: "Classement au feu", value: "Euroclasse E" },
      { name: "Absorption d'eau", value: "< 3%" },
    ],
    features: ["Légèreté", "Isolation thermique", "Résistance à l'humidité", "Facilité d'installation"],
  },
  {
    id: 2,
    name: "Panneau Isolant en Polystyrène",
    description: "Isolation thermique optimale pour murs, toitures et sols.",
    image: "/stc/plaaaaa.png",
    slug: "panneau-isolant-polystyrene",
    specifications: [
      { name: "Matériau", value: "Polystyrène expansé (EPS)" },
      { name: "Densité", value: "25 kg/m³" },
      { name: "Conductivité thermique", value: "0,032 W/mK" },
      { name: "Résistance à la compression", value: "150 kPa" },
      { name: "Classement au feu", value: "Euroclasse E" },
      { name: "Absorption d'eau", value: "< 2%" },
    ],
    features: ["Haute performance thermique", "Légèreté", "Résistance à l'humidité", "Découpe facile"],
  },
  {
    id: 3,
    name: "Fish Box / Caisson d'Emballage",
    description: "Solution d'emballage isotherme pour le secteur agroalimentaire et la pêche.",
    image: "/placeholder.svg?height=200&width=200",
   
    
    slug: "fish-box-caisson-emballage",
    specifications: [
      { name: "Matériau", value: "Polystyrène expansé (EPS)" },
      { name: "Densité", value: "35 kg/m³" },
      { name: "Conductivité thermique", value: "0,038 W/mK" },
      { name: "Résistance à la compression", value: "250 kPa" },
      { name: "Classement au feu", value: "Euroclasse E" },
      { name: "Absorption d'eau", value: "< 1%" },
    ],
    features: ["Conservation optimale", "Légèreté", "Résistance aux chocs", "Étanchéité"],
  },
]

export default function CompareProductsPage() {
  const [compareList, setCompareList] = useState<any[]>([])
  const [products, setProducts] = useState<any[]>([])
  const { toast } = useToast()

  useEffect(() => {
    // Load compare list from localStorage
    const storedList = localStorage.getItem("compareList")
    if (storedList) {
      const parsedList = JSON.parse(storedList)
      setCompareList(parsedList)

      // Get full product data for each item in compare list
      const fullProducts = parsedList
        .map((item) => {
          const productData = productsData.find((p) => p.id === item.id)
          return productData || null
        })
        .filter(Boolean)

      setProducts(fullProducts)
    }
  }, [])

  const removeFromCompare = (productId: number) => {
    const updatedList = compareList.filter((item) => item.id !== productId)
    setCompareList(updatedList)
    localStorage.setItem("compareList", JSON.stringify(updatedList))

    const updatedProducts = products.filter((item) => item.id !== productId)
    setProducts(updatedProducts)

    toast({
      title: "Produit retiré",
      description: "Le produit a été retiré de la comparaison.",
    })
  }

  const clearCompare = () => {
    setCompareList([])
    setProducts([])
    localStorage.removeItem("compareList")

    toast({
      title: "Liste vidée",
      description: "Tous les produits ont été retirés de la comparaison.",
    })
  }

  // Get all unique specification names across all products
  const allSpecifications = Array.from(
    new Set(products.flatMap((product) => product.specifications.map((spec) => spec.name))),
  )

  // Get all unique feature names across all products
  const allFeatures = Array.from(new Set(products.flatMap((product) => product.features)))

  if (products.length === 0) {
    return (
      <div className="container mx-auto px-6 py-12 lg:px-8">
        <div className="mb-6">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/produits">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Retour aux produits
            </Link>
          </Button>
        </div>

        <div className="text-center py-16">
          <h1 className="text-3xl font-bold mb-4">Comparaison de produits</h1>
          <p className="text-muted-foreground mb-8">
            Vous n'avez pas encore ajouté de produits à comparer. Parcourez notre catalogue et ajoutez des produits à
            comparer.
          </p>
          <Button asChild>
            <Link href="/produits">Voir les produits</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-6 py-12 lg:px-8">
      <div className="mb-6 flex justify-between items-center">
        <Button variant="ghost" size="sm" asChild>
          <Link href="/produits">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour aux produits
          </Link>
        </Button>
        <Button variant="outline" size="sm" onClick={clearCompare}>
          Vider la liste
        </Button>
      </div>

      <h1 className="text-3xl font-bold mb-8">Comparaison de produits</h1>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="text-left p-4 bg-muted/50 w-1/4">Produit</th>
              {products.map((product) => (
                <th key={product.id} className="p-4 text-center">
                  <div className="relative">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute -top-2 -right-2"
                      onClick={() => removeFromCompare(product.id)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                    <div className="relative h-40 w-40 mx-auto mb-4">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <h3 className="font-bold text-lg mb-2">{product.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{product.description}</p>
              
                    <div className="flex flex-col gap-2">
                      <Button asChild size="sm">
                        <Link href={`/produits/${product.slug}`}>Voir détails</Link>
                      </Button>
                      <AddToCartButton
                        productId={product.id}
                        productName={product.name}
                        productImage={product.image}
                        size="sm"
                      />
                    </div>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={products.length + 1} className="p-4 bg-muted/30">
                <h3 className="font-bold">Spécifications</h3>
              </td>
            </tr>
            {allSpecifications.map((specName) => (
              <tr key={specName} className="border-b">
                <td className="p-4 font-medium">{specName}</td>
                {products.map((product) => {
                  const spec = product.specifications.find((s) => s.name === specName)
                  return (
                    <td key={`${product.id}-${specName}`} className="p-4 text-center">
                      {spec ? spec.value : <Minus className="h-4 w-4 mx-auto text-muted-foreground" />}
                    </td>
                  )
                })}
              </tr>
            ))}
            <tr>
              <td colSpan={products.length + 1} className="p-4 bg-muted/30">
                <h3 className="font-bold">Caractéristiques</h3>
              </td>
            </tr>
            {allFeatures.map((feature) => (
              <tr key={feature} className="border-b">
                <td className="p-4 font-medium">{feature}</td>
                {products.map((product) => (
                  <td key={`${product.id}-${feature}`} className="p-4 text-center">
                    {product.features.includes(feature) ? (
                      <Check className="h-5 w-5 mx-auto text-green-500" />
                    ) : (
                      <X className="h-5 w-5 mx-auto text-red-500" />
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-12 text-center">
        <p className="text-muted-foreground mb-4">
          Vous ne trouvez pas le produit que vous cherchez ? Parcourez notre catalogue complet.
        </p>
        <Button asChild>
          <Link href="/produits">Voir tous les produits</Link>
        </Button>
      </div>
    </div>
  )
}
