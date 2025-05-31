"use client"

import { Badge } from "@/components/ui/badge"

import type React from "react"

import { useState } from "react"
import { Star, ThumbsUp, Flag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"

// Sample reviews data
const sampleReviews = [
  {
    id: 1,
    author: "Ahmed B.",
    avatar: "/placeholder.svg?height=40&width=40",
    date: "2023-05-15",
    rating: 5,
    title: "Excellent produit, très satisfait",
    content:
      "J'ai installé ces coffrets tunnel dans ma nouvelle maison et je suis très satisfait du résultat. L'isolation thermique est excellente et l'installation a été très facile. Je recommande vivement ce produit.",
    helpful: 12,
    verified: true,
  },
  {
    id: 2,
    author: "Sami M.",
    avatar: "/placeholder.svg?height=40&width=40",
    date: "2023-04-22",
    rating: 4,
    title: "Bon rapport qualité-prix",
    content:
      "Produit de bonne qualité avec un excellent rapport qualité-prix. L'installation a été un peu plus complexe que prévu, mais le résultat final est très satisfaisant. Je retire une étoile uniquement pour les instructions qui pourraient être plus claires.",
    helpful: 8,
    verified: true,
  },
  {
    id: 3,
    author: "Leila K.",
    avatar: "/placeholder.svg?height=40&width=40",
    date: "2023-03-10",
    rating: 5,
    title: "Parfait pour ma rénovation",
    content:
      "J'ai utilisé ces coffrets tunnel pour la rénovation de mon appartement et je suis très satisfaite. L'isolation thermique est remarquable et on sent vraiment la différence en termes de confort. Le produit est léger et facile à manipuler.",
    helpful: 15,
    verified: true,
  },
  {
    id: 4,
    author: "Mohamed R.",
    avatar: "/placeholder.svg?height=40&width=40",
    date: "2023-02-18",
    rating: 3,
    title: "Correct mais livraison lente",
    content:
      "Le produit en lui-même est correct et remplit sa fonction. Cependant, la livraison a pris beaucoup plus de temps que prévu, ce qui a retardé mon chantier. C'est dommage car le produit est de qualité.",
    helpful: 5,
    verified: true,
  },
]

// Rating distribution
const ratingDistribution = {
  5: 65,
  4: 20,
  3: 10,
  2: 3,
  1: 2,
}

export function ProductReviews({ productId }: { productId: number }) {
  const [reviews] = useState(sampleReviews)
  const [isWritingReview, setIsWritingReview] = useState(false)
  const [reviewForm, setReviewForm] = useState({
    rating: 5,
    title: "",
    content: "",
  })
  const { toast } = useToast()

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast({
      title: "Avis envoyé",
      description: "Merci pour votre avis ! Il sera publié après modération.",
    })
    setIsWritingReview(false)
    setReviewForm({
      rating: 5,
      title: "",
      content: "",
    })
  }

  const handleHelpful = (reviewId: number) => {
    toast({
      title: "Merci pour votre retour",
      description: "Votre vote a été pris en compte.",
    })
  }

  const handleReport = (reviewId: number) => {
    toast({
      title: "Signalement envoyé",
      description: "Merci de nous avoir signalé ce commentaire.",
    })
  }

  return (
    <div>
      <div className="grid md:grid-cols-3 gap-8 mb-8">
        <div className="md:col-span-1">
          <div className="bg-muted/30 p-6 rounded-lg">
            <div className="text-center mb-4">
              <div className="text-5xl font-bold mb-2">
                {Object.entries(ratingDistribution)
                  .reduce((acc, [rating, percentage]) => acc + Number(rating) * (percentage / 100), 0)
                  .toFixed(1)}
              </div>
              <div className="flex justify-center mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`h-5 w-5 ${
                      star <=
                      Object.entries(ratingDistribution).reduce(
                        (acc, [rating, percentage]) => acc + Number(rating) * (percentage / 100),
                        0,
                      )
                        ? "text-yellow-500 fill-yellow-500"
                        : "text-muted-foreground"
                    }`}
                  />
                ))}
              </div>
              <div className="text-sm text-muted-foreground">Basé sur {reviews.length} avis</div>
            </div>

            <div className="space-y-2">
              {Object.entries(ratingDistribution)
                .sort((a, b) => Number(b[0]) - Number(a[0]))
                .map(([rating, percentage]) => (
                  <div key={rating} className="flex items-center gap-2">
                    <div className="w-8 text-right">{rating}</div>
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    <Progress value={percentage} className="h-2" />
                    <div className="w-8 text-left text-sm">{percentage}%</div>
                  </div>
                ))}
            </div>

            <div className="mt-6">
              <Dialog open={isWritingReview} onOpenChange={setIsWritingReview}>
                <DialogTrigger asChild>
                  <Button className="w-full">Écrire un avis</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[500px]">
                  <DialogHeader>
                    <DialogTitle>Partagez votre expérience</DialogTitle>
                  </DialogHeader>
                  <form onSubmit={handleReviewSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="rating">Note</Label>
                      <div className="flex gap-1 mt-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            type="button"
                            onClick={() => setReviewForm({ ...reviewForm, rating: star })}
                            className="focus:outline-none"
                          >
                            <Star
                              className={`h-6 w-6 ${
                                star <= reviewForm.rating ? "text-yellow-500 fill-yellow-500" : "text-muted-foreground"
                              }`}
                            />
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="title">Titre</Label>
                      <Input
                        id="title"
                        value={reviewForm.title}
                        onChange={(e) => setReviewForm({ ...reviewForm, title: e.target.value })}
                        placeholder="Résumez votre expérience"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="content">Votre avis</Label>
                      <Textarea
                        id="content"
                        value={reviewForm.content}
                        onChange={(e) => setReviewForm({ ...reviewForm, content: e.target.value })}
                        placeholder="Partagez votre expérience avec ce produit"
                        rows={5}
                        required
                      />
                    </div>
                    <div className="flex justify-end gap-2">
                      <Button type="button" variant="outline" onClick={() => setIsWritingReview(false)}>
                        Annuler
                      </Button>
                      <Button type="submit">Soumettre</Button>
                    </div>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>

        <div className="md:col-span-2">
          <div className="space-y-6">
            {reviews.map((review) => (
              <div key={review.id} className="border-b pb-6 last:border-0">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center">
                    <Avatar className="h-10 w-10 mr-3">
                      <AvatarImage src={review.avatar || "/placeholder.svg"} alt={review.author} />
                      <AvatarFallback>{review.author.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">{review.author}</div>
                      <div className="text-sm text-muted-foreground">
                        {new Date(review.date).toLocaleDateString("fr-FR", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </div>
                    </div>
                  </div>
                  {review.verified && (
                    <Badge variant="outline" className="text-green-600 border-green-600">
                      Achat vérifié
                    </Badge>
                  )}
                </div>
                <div className="flex mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`h-4 w-4 ${
                        star <= review.rating ? "text-yellow-500 fill-yellow-500" : "text-muted-foreground"
                      }`}
                    />
                  ))}
                </div>
                <h4 className="font-bold mb-2">{review.title}</h4>
                <p className="mb-4">{review.content}</p>
                <div className="flex items-center gap-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-muted-foreground"
                    onClick={() => handleHelpful(review.id)}
                  >
                    <ThumbsUp className="h-4 w-4 mr-1" />
                    Utile ({review.helpful})
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-muted-foreground"
                    onClick={() => handleReport(review.id)}
                  >
                    <Flag className="h-4 w-4 mr-1" />
                    Signaler
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
