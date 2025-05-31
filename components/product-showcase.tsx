"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { View3DButton } from "@/components/view-3d-button"

interface Product {
  id: number
  name: string
  description: string
  image: string
  slug: string
  features: string[]
}

interface ProductShowcaseProps {
  products: Product[]
}

export function ProductShowcase({ products }: ProductShowcaseProps) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

function ProductCard({ product }: { product: Product }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Card
      className="h-full flex flex-col transition-all duration-300 hover:shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-56 w-full overflow-hidden rounded-t-lg">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          fill
          className={`object-cover transition-transform duration-500 ${isHovered ? "scale-110" : "scale-100"}`}
        />
        <div className="absolute top-3 right-3 z-10">
          <View3DButton productId={product.id} />
        </div>
      </div>
      <CardHeader>
        <CardTitle>{product.name}</CardTitle>
        <CardDescription>{product.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <ul className="space-y-1">
          {product.features.map((feature, index) => (
            <li key={index} className="flex items-start text-sm">
              <Check className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="pt-0">
        <Button asChild className="w-full">
          <Link href={`/produits/${product.slug}`}>
            Voir détails <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
