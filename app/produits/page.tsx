import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Sample product data
const products = [
  {
    id: 1,
    name: "Coffret Tunnel pour Volet Roulant",
    description: "Solution légère et isolante pour l'installation de volets roulants.",
    image: "/placeholder.svg?height=300&width=400",
    slug: "coffret-tunnel-volet-roulant",
    category: "coffrets",
  },
  {
    id: 2,
    name: "Coffret Tunnel Standard",
    description: "Coffret tunnel standard pour volets roulants de dimensions classiques.",
    image: "/placeholder.svg?height=300&width=400",
    slug: "coffret-tunnel-standard",
    category: "coffrets",
  },
  {
    id: 3,
    name: "Coffret Tunnel Grande Largeur",
    description: "Coffret tunnel adapté aux grandes ouvertures et baies vitrées.",
    image: "/placeholder.svg?height=300&width=400",
    slug: "coffret-tunnel-grande-largeur",
    category: "coffrets",
  },
  {
    id: 4,
    name: "Panneau Isolant 2cm",
    description: "Panneau isolant en polystyrène expansé d'épaisseur 2cm.",
    image: "/placeholder.svg?height=300&width=400",
    slug: "panneau-isolant-2cm",
    category: "panneaux",
  },
  {
    id: 5,
    name: "Panneau Isolant 3cm",
    description: "Panneau isolant en polystyrène expansé d'épaisseur 3cm.",
    image: "/placeholder.svg?height=300&width=400",
    slug: "panneau-isolant-3cm",
    category: "panneaux",
  },
  {
    id: 6,
    name: "Panneau Isolant Sur Mesure",
    description: "Panneau isolant en polystyrène expansé fabriqué selon vos spécifications.",
    image: "/placeholder.svg?height=300&width=400",
    slug: "panneau-isolant-sur-mesure",
    category: "panneaux",
  },
  {
    id: 7,
    name: "Fish Box Standard",
    description: "Caisson d'emballage isotherme pour produits de la pêche.",
    image: "/placeholder.svg?height=300&width=400",
    slug: "fish-box-standard",
    category: "fishbox",
  },
  {
    id: 8,
    name: "Fish Box Grande Capacité",
    description: "Caisson d'emballage isotherme grande capacité pour le transport de produits frais.",
    image: "/placeholder.svg?height=300&width=400",
    slug: "fish-box-grande-capacite",
    category: "fishbox",
  },
  {
    id: 9,
    name: "Caisson d'Emballage Personnalisé",
    description: "Caisson d'emballage en polystyrène expansé personnalisé selon vos besoins.",
    image: "/placeholder.svg?height=300&width=400",
    slug: "caisson-emballage-personnalise",
    category: "fishbox",
  },
]

export const metadata = {
  title: "Produits - Société Caisson Tunisie",
  description:
    "Découvrez notre gamme complète de produits en polystyrène expansé: coffrets tunnel pour volets roulants, panneaux isolants et caissons d'emballage.",
}

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-6 py-12 lg:px-8">
      <div className="mx-auto max-w-2xl text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">Nos Produits</h1>
        <p className="text-lg">
          Découvrez notre gamme complète de produits en polystyrène expansé, conçus pour répondre à vos besoins
          spécifiques.
        </p>
      </div>

      <Tabs defaultValue="all" className="mb-12">
        <TabsList className="grid w-full grid-cols-4 mb-8">
          <TabsTrigger value="all">Tous</TabsTrigger>
          <TabsTrigger value="coffrets">Coffrets Tunnel</TabsTrigger>
          <TabsTrigger value="panneaux">Panneaux Isolants</TabsTrigger>
          <TabsTrigger value="fishbox">Fish Box</TabsTrigger>
        </TabsList>
        <TabsContent value="all">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="coffrets">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products
              .filter((product) => product.category === "coffrets")
              .map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
          </div>
        </TabsContent>
        <TabsContent value="panneaux">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products
              .filter((product) => product.category === "panneaux")
              .map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
          </div>
        </TabsContent>
        <TabsContent value="fishbox">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products
              .filter((product) => product.category === "fishbox")
              .map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
          </div>
        </TabsContent>
      </Tabs>

      <div className="bg-muted rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Vous ne trouvez pas ce que vous cherchez ?</h2>
        <p className="mb-6">
          Nous proposons également des solutions sur mesure adaptées à vos besoins spécifiques. N'hésitez pas à nous
          contacter pour discuter de votre projet.
        </p>
        <Button asChild>
          <Link href="/contact">Demander un devis personnalisé</Link>
        </Button>
      </div>
    </div>
  )
}

function ProductCard({ product }) {
  return (
    <Card className="h-full flex flex-col">
      <div className="relative h-48 w-full">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          fill
          className="object-cover rounded-t-lg"
        />
      </div>
      <CardHeader>
        <CardTitle>{product.name}</CardTitle>
        <CardDescription>{product.description}</CardDescription>
      </CardHeader>
      <CardFooter className="mt-auto">
        <Button asChild>
          <Link href={`/produits/${product.slug}`}>Voir détails</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
