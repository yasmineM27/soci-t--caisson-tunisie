import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Données d'exemple pour les articles de blog
const blogPosts = [
  {
    id: 1,
    title: "Les avantages de l'isolation en polystyrène expansé",
    excerpt:
      "Découvrez pourquoi le polystyrène expansé est l'un des meilleurs matériaux d'isolation pour votre maison.",
    content:
      "Le polystyrène expansé (EPS) est un matériau d'isolation thermique très efficace qui offre de nombreux avantages...",
    image: "/placeholder.svg?height=400&width=600",
    author: "Ahmed Benali",
    date: "2023-05-15",
    readTime: "5 min",
    slug: "avantages-isolation-polystyrene-expanse",
    category: "isolation",
  },
  {
    id: 2,
    title: "Comment choisir le bon Coffret Tunnel Volet Roulant",
    excerpt: "Guide complet pour sélectionner le coffret tunnel adapté à vos besoins et à votre type de construction.",
    content: "Le choix d'un Coffret Tunnel Volet Roulant dépend de plusieurs facteurs importants...",
    image: "/stc/coff.jpeg",
    author: "Sami Meddeb",
    date: "2023-06-02",
    readTime: "8 min",
    slug: "choisir-coffret-tunnel-volet-roulant",
    category: "produits",
  },
  {
    id: 3,
    title: "L'importance de l'isolation thermique dans la construction moderne",
    excerpt: "Pourquoi l'isolation thermique est devenue un élément essentiel dans les constructions contemporaines.",
    content: "Dans un contexte de transition énergétique et de lutte contre le réchauffement climatique...",
    image: "/placeholder.svg?height=400&width=600",
    author: "Leila Karoui",
    date: "2023-06-10",
    readTime: "6 min",
    slug: "importance-isolation-thermique-construction-moderne",
    category: "isolation",
  },
  {
    id: 4,
    title: "Les Fish Box : une solution écologique pour le transport des produits frais",
    excerpt:
      "Comment les caissons en polystyrène expansé contribuent à la préservation des produits frais tout en respectant l'environnement.",
    content:
      "Le transport des produits frais, notamment les produits de la pêche, nécessite des solutions d'emballage adaptées...",
    image: "/placeholder.svg?height=400&width=600",
    author: "Mohamed Riahi",
    date: "2023-06-15",
    readTime: "7 min",
    slug: "fish-box-solution-ecologique-transport-produits-frais",
    category: "produits",
  },
  {
    id: 5,
    title: "Innovations dans l'industrie du polystyrène expansé",
    excerpt: "Les dernières avancées technologiques dans la fabrication et l'utilisation du polystyrène expansé.",
    content:
      "L'industrie du polystyrène expansé connaît une évolution constante avec l'émergence de nouvelles technologies...",
    image: "/placeholder.svg?height=400&width=600",
    author: "Fatma Belhadj",
    date: "2023-06-20",
    readTime: "9 min",
    slug: "innovations-industrie-polystyrene-expanse",
    category: "innovation",
  },
  {
    id: 6,
    title: "Comment réduire votre facture énergétique grâce à une bonne isolation",
    excerpt:
      "Conseils pratiques pour optimiser l'isolation de votre maison et réaliser des économies d'énergie significatives.",
    content:
      "La facture énergétique représente une part importante du budget des ménages. Une bonne isolation peut considérablement réduire cette dépense...",
    image: "/placeholder.svg?height=400&width=600",
    author: "Ahmed Benali",
    date: "2023-07-05",
    readTime: "10 min",
    slug: "reduire-facture-energetique-bonne-isolation",
    category: "conseils",
  },
]

export const metadata = {
  title: "Blog - Société Caisson Tunisie",
  description:
    "Découvrez nos articles sur l'isolation, les produits en polystyrène expansé et les dernières innovations dans le domaine.",
}

export default function BlogPage() {
  return (
    <div className="container mx-auto px-6 py-12 lg:px-8">
      <div className="mx-auto max-w-2xl text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">Notre Blog</h1>
        <p className="text-lg">
          Découvrez nos articles sur l'isolation, les produits en polystyrène expansé et les dernières innovations dans
          le domaine.
        </p>
      </div>

      <Tabs defaultValue="all" className="mb-12">
        <TabsList className="grid w-full grid-cols-5 mb-8">
          <TabsTrigger value="all">Tous</TabsTrigger>
          <TabsTrigger value="isolation">Isolation</TabsTrigger>
          <TabsTrigger value="produits">Produits</TabsTrigger>
          <TabsTrigger value="innovation">Innovation</TabsTrigger>
          <TabsTrigger value="conseils">Conseils</TabsTrigger>
        </TabsList>
        <TabsContent value="all">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <BlogPostCard key={post.id} post={post} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="isolation">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts
              .filter((post) => post.category === "isolation")
              .map((post) => (
                <BlogPostCard key={post.id} post={post} />
              ))}
          </div>
        </TabsContent>
        <TabsContent value="produits">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts
              .filter((post) => post.category === "produits")
              .map((post) => (
                <BlogPostCard key={post.id} post={post} />
              ))}
          </div>
        </TabsContent>
        <TabsContent value="innovation">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts
              .filter((post) => post.category === "innovation")
              .map((post) => (
                <BlogPostCard key={post.id} post={post} />
              ))}
          </div>
        </TabsContent>
        <TabsContent value="conseils">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts
              .filter((post) => post.category === "conseils")
              .map((post) => (
                <BlogPostCard key={post.id} post={post} />
              ))}
          </div>
        </TabsContent>
      </Tabs>

      <div className="bg-muted rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Abonnez-vous à notre newsletter</h2>
        <p className="mb-6">Recevez nos derniers articles et conseils directement dans votre boîte mail.</p>
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input type="email" placeholder="Votre adresse email" className="px-4 py-2 rounded-md border flex-1" />
          <Button>S'abonner</Button>
        </div>
      </div>
    </div>
  )
}

function BlogPostCard({ post }) {
  return (
    <Card className="h-full flex flex-col">
      <div className="relative h-48 w-full">
        <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover rounded-t-lg" />
      </div>
      <CardHeader>
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-1" />
            {new Date(post.date).toLocaleDateString("fr-FR")}
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            {post.readTime}
          </div>
        </div>
        <CardTitle className="line-clamp-2">{post.title}</CardTitle>
        <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center text-sm">
          <User className="h-4 w-4 mr-1" />
          <span>{post.author}</span>
        </div>
      </CardContent>
      <CardFooter className="mt-auto">
        <Button asChild>
          <Link href={`/blog/${post.slug}`}>Lire l'article</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
