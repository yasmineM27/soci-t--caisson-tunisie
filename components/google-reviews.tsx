"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Star, ArrowLeft, ArrowRight, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

// Sample Google reviews data
const googleReviews = [
  {
    id: 1,
    author: "Ahmed Benali",
    avatar: "/placeholder.svg?height=50&width=50",
    rating: 5,
    text: "Excellent service et produits de qualité. J'ai commandé des coffrets tunnel pour ma nouvelle maison et je suis très satisfait du résultat. L'équipe est professionnelle et réactive.",
    date: "2023-06-15",
  },
  {
    id: 2,
    author: "Sami Meddeb",
    avatar: "/placeholder.svg?height=50&width=50",
    rating: 4,
    text: "Très bonne expérience avec Caisson Tunisie. Les produits sont de bonne qualité et le service client est excellent. Je recommande vivement cette entreprise.",
    date: "2023-05-22",
  },
  {
    id: 3,
    author: "Leila Karoui",
    avatar: "/placeholder.svg?height=50&width=50",
    rating: 5,
    text: "J'ai fait appel à Caisson Tunisie pour l'isolation de ma maison et je suis très satisfaite du résultat. Les panneaux isolants sont de très bonne qualité et l'installation a été parfaite.",
    date: "2023-04-10",
  },
  {
    id: 4,
    author: "Mohamed Riahi",
    avatar: "/placeholder.svg?height=50&width=50",
    rating: 5,
    text: "Service impeccable et produits de qualité supérieure. Je recommande vivement Caisson Tunisie pour tous vos besoins en isolation.",
    date: "2023-03-18",
  },
  {
    id: 5,
    author: "Fatma Belhadj",
    avatar: "/placeholder.svg?height=50&width=50",
    rating: 4,
    text: "Très satisfaite de ma commande. Les délais ont été respectés et les produits sont conformes à mes attentes. Je n'hésiterai pas à faire appel à eux pour mes futurs projets.",
    date: "2023-02-05",
  },
]

export function GoogleReviews() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleReviews, setVisibleReviews] = useState<typeof googleReviews>([])
  const reviewsPerPage = 3

  useEffect(() => {
    const endIndex = Math.min(currentIndex + reviewsPerPage, googleReviews.length)
    setVisibleReviews(googleReviews.slice(currentIndex, endIndex))
  }, [currentIndex])

  const nextReviews = () => {
    const newIndex = currentIndex + reviewsPerPage
    if (newIndex < googleReviews.length) {
      setCurrentIndex(newIndex)
    } else {
      setCurrentIndex(0)
    }
  }

  const prevReviews = () => {
    const newIndex = currentIndex - reviewsPerPage
    if (newIndex >= 0) {
      setCurrentIndex(newIndex)
    } else {
      setCurrentIndex(Math.max(0, googleReviews.length - reviewsPerPage))
    }
  }

  // Calculate average rating
  const averageRating = googleReviews.reduce((acc, review) => acc + review.rating, 0) / googleReviews.length

  return (
    <div className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div>
            <Badge variant="outline" className="mb-2">
              Avis clients
            </Badge>
            <h2 className="text-3xl font-bold mb-2">Ce que disent nos clients sur Google</h2>
            <div className="flex items-center gap-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`h-5 w-5 ${
                      star <= Math.round(averageRating) ? "text-yellow-500 fill-yellow-500" : "text-muted-foreground"
                    }`}
                  />
                ))}
              </div>
              <span className="font-medium">{averageRating.toFixed(1)}/5</span>
              <span className="text-muted-foreground">({googleReviews.length} avis)</span>
            </div>
          </div>
          <div className="flex gap-2 mt-4 md:mt-0">
            <Button variant="outline" size="icon" onClick={prevReviews}>
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={nextReviews}>
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {visibleReviews.map((review) => (
            <Card key={review.id} className={cn("h-full")}>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="relative h-10 w-10 rounded-full overflow-hidden mr-3">
                    <Image
                      src={review.avatar || "/placeholder.svg"}
                      alt={review.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-medium">{review.author}</div>
                    <div className="text-xs text-muted-foreground">
                      {new Date(review.date).toLocaleDateString("fr-FR", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </div>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`h-4 w-4 ${
                        star <= review.rating ? "text-yellow-500 fill-yellow-500" : "text-muted-foreground"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-sm line-clamp-4">{review.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Button variant="outline" asChild>
            <a
              href="https://www.google.com/maps/place/..."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              Voir tous les avis sur Google
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}
