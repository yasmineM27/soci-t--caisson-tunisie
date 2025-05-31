import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { VideoShowcase } from "@/components/video-showcase"

export const metadata: Metadata = {
  title: "Vidéos explicatives | Société Caisson Tunisie",
  description:
    "Découvrez nos vidéos explicatives sur l'installation et l'utilisation de nos produits en polystyrène expansé.",
}

// Sample videos data
const videos = [
  {
    id: 1,
    title: "Présentation de notre usine",
    thumbnail: "/placeholder.svg?height=200&width=350",
    url: "#",
  },
]

// Group videos by category
const videoCategories = [
  {
    title: "Informations générales",
    videos: videos.slice(4, 6),
  },
]

export default function VideosPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <Button variant="ghost" size="sm" asChild className="mb-4">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour à l'accueil
          </Link>
        </Button>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Vidéos explicatives</h1>
        <p className="text-lg text-muted-foreground max-w-3xl">
          Découvrez nos vidéos explicatives pour mieux comprendre l'installation et l'utilisation de nos produits en
          polystyrène expansé.
        </p>
      </div>

      {videoCategories.map((category, index) => (
        <section key={index} className="mb-12">
          <h2 className="text-2xl font-bold mb-6">{category.title}</h2>
          <VideoShowcase videos={category.videos} />
        </section>
      ))}
    </div>
  )
}
