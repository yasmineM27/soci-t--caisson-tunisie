import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Données d'exemple pour les projets
const projects = [
  {
    id: 1,
    title: "Résidence Les Oliviers",
    description:
      "Fourniture et installation de coffrets tunnel pour volets roulants dans un complexe résidentiel de 50 appartements.",
    image: "/placeholder.svg?height=400&width=600",
    category: "residentiels",
    location: "Tunis",
    year: "2022",
    client: "Promoteur Immobilier XYZ",
    slug: "residence-les-oliviers",
  },
  {
    id: 2,
    title: "Hôtel Azur Palace",
    description:
      "Isolation thermique complète avec panneaux en polystyrène expansé pour un hôtel 5 étoiles en bord de mer.",
    image: "/placeholder.svg?height=400&width=600",
    category: "commerciaux",
    location: "Hammamet",
    year: "2023",
    client: "Groupe Hôtelier Azur",
    slug: "hotel-azur-palace",
  },
  {
    id: 3,
    title: "Usine de transformation alimentaire",
    description:
      "Fourniture de Fish Box pour le transport et le stockage de produits frais pour une usine de transformation de produits de la mer.",
    image: "/placeholder.svg?height=400&width=600",
    category: "industriels",
    location: "Bizerte",
    year: "2022",
    client: "Mer & Saveurs SARL",
    slug: "usine-transformation-alimentaire",
  },
  {
    id: 4,
    title: "Villa Jasmin",
    description:
      "Isolation complète d'une villa de luxe avec panneaux isolants sur mesure et coffrets tunnel pour volets roulants.",
    image: "/placeholder.svg?height=400&width=600",
    category: "residentiels",
    location: "Gammarth",
    year: "2023",
    client: "Particulier",
    slug: "villa-jasmin",
  },
  {
    id: 5,
    title: "Centre commercial Médina",
    description:
      "Fourniture et installation de panneaux isolants pour l'ensemble du centre commercial, incluant les boutiques et les espaces communs.",
    image: "/placeholder.svg?height=400&width=600",
    category: "commerciaux",
    location: "Sousse",
    year: "2022",
    client: "Groupe Médina Retail",
    slug: "centre-commercial-medina",
  },
  {
    id: 6,
    title: "Entrepôt frigorifique",
    description:
      "Isolation thermique haute performance pour un entrepôt frigorifique de stockage de produits alimentaires.",
    image: "/placeholder.svg?height=400&width=600",
    category: "industriels",
    location: "Sfax",
    year: "2023",
    client: "Frigo Express",
    slug: "entrepot-frigorifique",
  },
  {
    id: 7,
    title: "Résidence Étudiante Carthage",
    description:
      "Fourniture et installation de coffrets tunnel et panneaux isolants pour une résidence étudiante de 200 chambres.",
    image: "/placeholder.svg?height=400&width=600",
    category: "residentiels",
    location: "Carthage",
    year: "2022",
    client: "Université Privée de Carthage",
    slug: "residence-etudiante-carthage",
  },
  {
    id: 8,
    title: "Complexe sportif Olympic",
    description:
      "Isolation thermique et acoustique pour un complexe sportif comprenant une piscine olympique et plusieurs salles de sport.",
    image: "/placeholder.svg?height=400&width=600",
    category: "commerciaux",
    location: "Tunis",
    year: "2023",
    client: "Ministère de la Jeunesse et des Sports",
    slug: "complexe-sportif-olympic",
  },
  {
    id: 9,
    title: "Usine pharmaceutique",
    description:
      "Fourniture de panneaux isolants spéciaux pour une usine pharmaceutique nécessitant des conditions de température contrôlées.",
    image: "/placeholder.svg?height=400&width=600",
    category: "industriels",
    location: "Monastir",
    year: "2022",
    client: "Pharma Plus",
    slug: "usine-pharmaceutique",
  },
]

export const metadata = {
  title: "Projets réalisés - Société Caisson Tunisie",
  description:
    "Découvrez nos projets d'isolation et d'installation de produits en polystyrène expansé pour des clients résidentiels, commerciaux et industriels.",
}

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-6 py-12 lg:px-8">
      <div className="mx-auto max-w-2xl text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">Nos Projets Réalisés</h1>
        <p className="text-lg">
          Découvrez une sélection de nos projets d'isolation et d'installation de produits en polystyrène expansé pour
          divers clients.
        </p>
      </div>

      <Tabs defaultValue="all" className="mb-12">
        <TabsList className="grid w-full grid-cols-4 mb-8">
          <TabsTrigger value="all">Tous</TabsTrigger>
          <TabsTrigger value="residentiels">Résidentiels</TabsTrigger>
          <TabsTrigger value="commerciaux">Commerciaux</TabsTrigger>
          <TabsTrigger value="industriels">Industriels</TabsTrigger>
        </TabsList>
        <TabsContent value="all">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="residentiels">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects
              .filter((project) => project.category === "residentiels")
              .map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
          </div>
        </TabsContent>
        <TabsContent value="commerciaux">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects
              .filter((project) => project.category === "commerciaux")
              .map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
          </div>
        </TabsContent>
        <TabsContent value="industriels">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects
              .filter((project) => project.category === "industriels")
              .map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
          </div>
        </TabsContent>
      </Tabs>

      <div className="bg-muted rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Vous avez un projet similaire ?</h2>
        <p className="mb-6">
          Contactez-nous pour discuter de vos besoins en isolation et en produits en polystyrène expansé. Nous vous
          proposerons une solution adaptée à votre projet.
        </p>
        <Button asChild>
          <Link href="/contact">Demander un devis</Link>
        </Button>
      </div>
    </div>
  )
}

function ProjectCard({ project }) {
  return (
    <Card className="h-full flex flex-col">
      <div className="relative h-48 w-full">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-cover rounded-t-lg"
        />
      </div>
      <CardHeader>
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-muted-foreground">
            {project.location}, {project.year}
          </span>
          <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
            {project.category === "residentiels" && "Résidentiel"}
            {project.category === "commerciaux" && "Commercial"}
            {project.category === "industriels" && "Industriel"}
          </span>
        </div>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="text-sm">
          <p>
            <span className="font-medium">Client:</span> {project.client}
          </p>
        </div>
      </CardContent>
      <CardFooter className="mt-auto">
        <Button asChild>
          <Link href={`/projets/${project.slug}`}>Voir le projet</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
