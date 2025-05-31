import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Calendar, MapPin, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Données d'exemple pour les projets
const projects = [
  {
    id: 1,
    title: "Résidence Les Oliviers",
    description:
      "Fourniture et installation de coffrets tunnel pour volets roulants dans un complexe résidentiel de 50 appartements.",
    fullDescription: `
      <p>La Résidence Les Oliviers est un complexe résidentiel moderne situé dans un quartier prisé de Tunis. Ce projet d'envergure comprend 50 appartements répartis sur 5 bâtiments, offrant un cadre de vie confortable et élégant aux résidents.</p>
      
      <h2>Le défi</h2>
      <p>Le promoteur immobilier souhaitait équiper l'ensemble des appartements de volets roulants pour améliorer le confort thermique et la sécurité des résidents. Il recherchait une solution qui permettrait une installation facile et rapide, tout en garantissant une excellente isolation thermique pour réduire les coûts énergétiques des futurs occupants.</p>
      
      <h2>Notre solution</h2>
      <p>Après une étude approfondie du projet, nous avons proposé nos coffrets tunnel en polystyrène expansé, spécialement conçus pour l'installation de volets roulants. Ces coffrets offrent plusieurs avantages :</p>
      <ul>
        <li>Une excellente isolation thermique, contribuant à l'efficacité énergétique globale du bâtiment</li>
        <li>Une légèreté qui facilite la manipulation et l'installation</li>
        <li>Une résistance à l'humidité et aux moisissures</li>
        <li>Une durabilité exceptionnelle, garantissant la longévité de l'installation</li>
      </ul>
      
      <h2>Mise en œuvre</h2>
      <p>Notre équipe a travaillé en étroite collaboration avec les architectes et les entrepreneurs pour assurer une intégration parfaite des coffrets tunnel dans la structure des bâtiments. Nous avons fourni des coffrets sur mesure, adaptés aux dimensions spécifiques de chaque ouverture.</p>
      
      <p>L'installation a été réalisée en plusieurs phases, suivant le calendrier de construction de la résidence. Nos techniciens ont supervisé l'installation pour garantir le respect des normes de qualité et la bonne mise en œuvre de nos produits.</p>
      
      <h2>Résultats</h2>
      <p>Le projet a été livré dans les délais impartis, avec une qualité d'exécution qui a pleinement satisfait notre client. Les coffrets tunnel ont permis une installation rapide et efficace des volets roulants, tout en assurant une excellente isolation thermique des appartements.</p>
      
      <p>Les premiers résidents ont particulièrement apprécié le confort thermique offert par cette solution, ainsi que la réduction significative des nuisances sonores extérieures. Le promoteur immobilier a également souligné l'impact positif de cette installation sur l'efficacité énergétique globale du bâtiment, un argument de vente important pour les appartements.</p>
    `,
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    category: "residentiels",
    location: "Tunis",
    year: "2022",
    client: "Promoteur Immobilier XYZ",
    products: ["Coffrets tunnel pour volets roulants", "Panneaux isolants"],
    slug: "residence-les-oliviers",
  },
  {
    id: 2,
    title: "Hôtel Azur Palace",
    description:
      "Isolation thermique complète avec panneaux en polystyrène expansé pour un hôtel 5 étoiles en bord de mer.",
    fullDescription: `
      <p>L'Hôtel Azur Palace est un établissement de luxe 5 étoiles situé en bord de mer à Hammamet. Ce complexe hôtelier comprend 120 chambres et suites, plusieurs restaurants, un spa, et diverses installations de loisirs.</p>
      
      <h2>Le défi</h2>
      <p>En raison de sa situation en bord de mer, l'hôtel est exposé à des conditions climatiques particulières : forte chaleur en été, humidité élevée et vents marins chargés de sel. Le propriétaire souhaitait optimiser l'isolation thermique du bâtiment pour réduire la consommation énergétique liée à la climatisation, tout en assurant un confort optimal aux clients.</p>
      
      <h2>Notre solution</h2>
      <p>Après une analyse approfondie des besoins spécifiques de ce projet, nous avons proposé une solution d'isolation thermique complète utilisant nos panneaux en polystyrène expansé de haute densité. Ces panneaux offrent :</p>
      <ul>
        <li>Une excellente résistance thermique, idéale pour les climats chauds</li>
        <li>Une bonne résistance à l'humidité et aux environnements salins</li>
        <li>Une durabilité exceptionnelle, même dans des conditions difficiles</li>
        <li>Un rapport qualité-prix optimal pour un projet de cette envergure</li>
      </ul>
      
      <h2>Mise en œuvre</h2>
      <p>Le projet a été réalisé en collaboration avec le cabinet d'architecture et l'entreprise de construction. Nous avons fourni des panneaux isolants pour l'ensemble des façades, des toitures et des planchers de l'hôtel.</p>
      
      <p>L'installation a été effectuée en respectant un planning strict pour ne pas retarder l'ouverture prévue de l'établissement. Nos équipes techniques ont assuré un suivi régulier du chantier pour garantir la qualité de l'installation.</p>
      
      <h2>Résultats</h2>
      <p>Depuis son ouverture, l'Hôtel Azur Palace a constaté une réduction significative de sa consommation énergétique liée à la climatisation, estimée à environ 30% par rapport aux prévisions initiales. Les clients apprécient particulièrement le confort thermique des chambres, même pendant les périodes de forte chaleur.</p>
      
      <p>La direction de l'hôtel a également noté une amélioration de l'isolation acoustique, un avantage supplémentaire qui contribue au confort des clients. Ce projet démontre l'efficacité de nos solutions d'isolation en polystyrène expansé pour les bâtiments commerciaux de grande envergure.</p>
    `,
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    category: "commerciaux",
    location: "Hammamet",
    year: "2023",
    client: "Groupe Hôtelier Azur",
    products: ["Panneaux isolants haute densité", "Coffrets tunnel"],
    slug: "hotel-azur-palace",
  },
  // Autres projets...
]

export async function generateMetadata({ params }) {
  const project = projects.find((p) => p.slug === params.slug)

  if (!project) {
    return {
      title: "Projet non trouvé - Société Caisson Tunisie",
      description: "Le projet que vous recherchez n'existe pas.",
    }
  }

  return {
    title: `${project.title} - Projets Caisson Tunisie`,
    description: project.description,
  }
}

export default function ProjectPage({ params }) {
  const project = projects.find((p) => p.slug === params.slug)

  if (!project) {
    return (
      <div className="container mx-auto px-6 py-12 lg:px-8 text-center">
        <h1 className="text-4xl font-bold mb-6">Projet non trouvé</h1>
        <p className="mb-8">Le projet que vous recherchez n'existe pas.</p>
        <Button asChild>
          <Link href="/projets">Retour aux projets</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-6 py-12 lg:px-8">
      <div className="mb-6">
        <Button variant="outline" asChild>
          <Link href="/projets">
            <ArrowLeft className="mr-2 h-4 w-4" /> Retour aux projets
          </Link>
        </Button>
      </div>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>

        <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-8">
          <div className="flex items-center">
            <User className="h-4 w-4 mr-1" />
            {project.client}
          </div>
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-1" />
            {project.location}
          </div>
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-1" />
            {project.year}
          </div>
          <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
            {project.category === "residentiels" && "Résidentiel"}
            {project.category === "commerciaux" && "Commercial"}
            {project.category === "industriels" && "Industriel"}
          </span>
        </div>

        <Tabs defaultValue="image-0" className="mb-12">
          <div className="relative aspect-video mb-4 overflow-hidden rounded-lg border">
            {project.images.map((image, index) => (
              <TabsContent key={`content-${index}`} value={`image-${index}`} className="h-full">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${project.title} - Image ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </TabsContent>
            ))}
          </div>
          <TabsList className="grid grid-cols-4 gap-4">
            {project.images.map((image, index) => (
              <TabsTrigger key={`trigger-${index}`} value={`image-${index}`} className="p-0">
                <div className="relative aspect-video w-full overflow-hidden rounded-md">
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${project.title} - Miniature ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Description du projet</h2>
          <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: project.fullDescription }} />
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Produits utilisés</h2>
          <ul className="list-disc list-inside space-y-2">
            {project.products.map((product, index) => (
              <li key={index}>{product}</li>
            ))}
          </ul>
        </div>

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
    </div>
  )
}
