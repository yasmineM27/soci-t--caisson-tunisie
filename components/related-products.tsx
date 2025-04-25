"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ArrowRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface Product {
  id: number
  name: string
  description: string
  images: string[]
  price: number
  currency: string
  slug: string
  reviews?: {
    average: number
    count: number
  }
}

interface RelatedProductsProps {
  products: Product[]
}

export function RelatedProducts({ products }: RelatedProductsProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const itemsPerPage = 3
  const totalPages = Math.ceil(products.length / itemsPerPage)

  const nextPage = () => {
    setCurrentIndex((prev) => (prev + itemsPerPage >= products.length ? 0 : prev + itemsPerPage))
  }

  const prevPage = () => {
    setCurrentIndex((prev) =>
      prev - itemsPerPage < 0 ? Math.max(0, products.length - itemsPerPage) : prev - itemsPerPage,
    )
  }

  const visibleProducts = products.slice(currentIndex, currentIndex + itemsPerPage)

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold">Produits similaires</h3>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={prevPage}
            disabled={products.length <= itemsPerPage}
            className={cn(products.length <= itemsPerPage && "opacity-50 cursor-not-allowed")}
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={nextPage}
            disabled={products.length <= itemsPerPage}
            className={cn(products.length <= itemsPerPage && "opacity-50 cursor-not-allowed")}
          >
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {visibleProducts.map((product) => (
          <Card key={product.id} className="h-full flex flex-col">
            <div className="relative h-48 w-full">
              <Image
                src={product.images[0] || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-cover rounded-t-lg"
              />
            </div>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">{product.name}</CardTitle>
              {product.reviews && (
                <div className="flex items-center gap-1">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-3 w-3 ${
                          i < Math.floor(product.reviews.average)
                            ? "text-yellow-500 fill-yellow-500"
                            : "text-muted-foreground"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground">({product.reviews.count})</span>
                </div>
              )}
            </CardHeader>
            <CardContent className="pb-2">
              <p className="text-sm text-muted-foreground line-clamp-2">{product.description}</p>
              <p className="font-bold mt-2">
                {product.price.toFixed(2)} {product.currency}
              </p>
            </CardContent>
            <CardFooter className="pt-0 mt-auto">
              <Button asChild className="w-full">
                <Link href={`/produits/${product.slug}`}>Voir détails</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
