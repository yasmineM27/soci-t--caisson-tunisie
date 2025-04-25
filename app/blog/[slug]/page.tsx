import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Calendar, Clock, Facebook, Linkedin, Twitter, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

// Données d'exemple pour les articles de blog
const blogPosts = [
  {
    id: 1,
    title: "Les avantages de l'isolation en polystyrène expansé",
    excerpt:
      "Découvrez pourquoi le polystyrène expansé est l'un des meilleurs matériaux d'isolation pour votre maison.",
    content: `
      <p>Le polystyrène expansé (EPS) est un matériau d'isolation thermique très efficace qui offre de nombreux avantages pour les constructions résidentielles et commerciales. Dans cet article, nous explorons les principales raisons pour lesquelles l'EPS est devenu un choix privilégié pour l'isolation des bâtiments.</p>
      
      <h2>Une excellente isolation thermique</h2>
      <p>Le polystyrène expansé possède une conductivité thermique très faible, ce qui en fait un excellent isolant. Sa structure cellulaire fermée emprisonne l'air, créant ainsi une barrière efficace contre les transferts de chaleur. Cette propriété permet de maintenir une température intérieure stable, réduisant considérablement les besoins en chauffage en hiver et en climatisation en été.</p>
      
      <h2>Légèreté et facilité d'installation</h2>
      <p>L'EPS est un matériau extrêmement léger, ce qui facilite sa manipulation et son installation. Cette légèreté permet également de réduire les charges sur la structure du bâtiment, tout en simplifiant le transport et la manutention sur le chantier. Les panneaux de polystyrène expansé peuvent être facilement découpés et ajustés selon les besoins spécifiques de chaque projet.</p>
      
      <h2>Résistance à l'humidité</h2>
      <p>Contrairement à certains matériaux isolants, le polystyrène expansé présente une excellente résistance à l'humidité. Sa structure cellulaire fermée empêche l'absorption d'eau, ce qui préserve ses propriétés isolantes même dans des environnements humides. Cette caractéristique est particulièrement importante pour les applications dans les sous-sols, les toitures et les murs extérieurs.</p>
      
      <h2>Durabilité et longévité</h2>
      <p>L'EPS est un matériau très stable qui conserve ses propriétés isolantes pendant toute la durée de vie du bâtiment. Il ne se tasse pas avec le temps et résiste bien au vieillissement. De plus, il est insensible aux moisissures et aux bactéries, ce qui contribue à maintenir un environnement intérieur sain.</p>
      
      <h2>Rapport qualité-prix avantageux</h2>
      <p>Le polystyrène expansé offre un excellent rapport qualité-prix. Son coût d'achat est relativement modéré par rapport à d'autres matériaux isolants, et les économies d'énergie qu'il permet de réaliser sur le long terme en font un investissement rentable. De plus, sa facilité d'installation permet de réduire les coûts de main-d'œuvre.</p>
      
      <h2>Polyvalence des applications</h2>
      <p>L'EPS peut être utilisé dans de nombreuses applications : isolation des murs, des toitures, des planchers, des fondations, etc. Il est également employé pour la fabrication de coffrets tunnel pour volets roulants, offrant ainsi une solution complète pour l'isolation des ouvertures. Cette polyvalence en fait un matériau de choix pour les projets de construction et de rénovation.</p>
      
      <h2>Impact environnemental</h2>
      <p>Bien que le polystyrène expansé soit un dérivé du pétrole, son utilisation contribue à réduire l'empreinte carbone des bâtiments en diminuant significativement leur consommation énergétique. De plus, l'EPS est 100% recyclable, ce qui permet de limiter son impact environnemental en fin de vie.</p>
      
      <h2>Conclusion</h2>
      <p>Le polystyrène expansé présente de nombreux avantages qui en font un matériau d'isolation de premier choix pour les constructions modernes. Sa performance thermique, sa légèreté, sa résistance à l'humidité et sa durabilité, combinées à un coût abordable, expliquent sa popularité croissante dans le secteur du bâtiment. Chez Société Caisson Tunisie, nous proposons une gamme complète de produits en polystyrène expansé pour répondre à tous vos besoins d'isolation.</p>
    `,
    image: "/placeholder.svg?height=600&width=1200",
    author: "Ahmed Benali",
    date: "2023-05-15",
    readTime: "5 min",
    slug: "avantages-isolation-polystyrene-expanse",
    category: "isolation",
    relatedPosts: [3, 6],
  },
  {
    id: 2,
    title: "Comment choisir le bon Coffret volet roulant",
    excerpt: "Guide complet pour sélectionner le coffret tunnel adapté à vos besoins et à votre type de construction.",
    content: `
      <p>Le choix d'un Coffret volet roulant dépend de plusieurs facteurs importants. Dans cet article, nous vous guidons à travers les critères essentiels à prendre en compte pour sélectionner le modèle le plus adapté à votre projet.</p>
      
      <h2>Comprendre le rôle du coffret tunnel</h2>
      <p>Avant de faire votre choix, il est important de comprendre la fonction du coffret tunnel. Ce composant, généralement fabriqué en polystyrène expansé (EPS), est installé au-dessus de la fenêtre ou de la porte-fenêtre et sert à loger le mécanisme du volet roulant. Il joue également un rôle crucial dans l'isolation thermique et acoustique de l'ouverture.</p>
      
      <h2>Les dimensions de l'ouverture</h2>
      <p>La première étape consiste à déterminer les dimensions exactes de l'ouverture où sera installé le coffret tunnel. La largeur de l'ouverture déterminera la longueur du coffret, tandis que la hauteur influencera le diamètre de l'enroulement du volet et donc la taille du caisson. Pour les grandes ouvertures, il faudra opter pour des coffrets de plus grande dimension afin d'accueillir des volets plus larges.</p>
      
      <h2>Le type de pose</h2>
      <p>Il existe différents types de pose pour les coffrets tunnel :</p>
      <ul>
        <li>Pose en applique : le coffret est fixé sur la façade extérieure</li>
        <li>Pose en tunnel : le coffret est intégré dans l'épaisseur du mur</li>
        <li>Pose en rénovation : le coffret est installé sur une fenêtre existante</li>
      </ul>
      <p>Le choix du type de pose dépendra de la configuration de votre bâtiment et du type de travaux que vous réalisez (construction neuve ou rénovation).</p>
      
      <h2>Les performances thermiques</h2>
      <p>Le coffret tunnel est un point sensible en termes d'isolation thermique. Il est donc essentiel de choisir un modèle offrant de bonnes performances thermiques, avec une faible conductivité (valeur lambda). Les coffrets en polystyrène expansé de haute densité offrent généralement une excellente isolation thermique, contribuant à réduire les déperditions de chaleur et à améliorer l'efficacité énergétique du bâtiment.</p>
      
      <h2>L'isolation acoustique</h2>
      <p>Si votre habitation se trouve dans un environnement bruyant, l'isolation acoustique du coffret tunnel devient un critère important. Certains modèles sont spécifiquement conçus pour offrir une meilleure atténuation des bruits extérieurs, grâce à une densité plus élevée du polystyrène ou à des composants supplémentaires.</p>
      
      <h2>La compatibilité avec le volet roulant</h2>
      <p>Assurez-vous que le coffret tunnel choisi est compatible avec le type de volet roulant que vous souhaitez installer. Différents systèmes de volets (manuel, électrique, solaire) peuvent nécessiter des configurations spécifiques du coffret. De même, le matériau des lames du volet (PVC, aluminium, etc.) influencera la taille du caisson nécessaire pour l'enroulement.</p>
      
      <h2>La facilité d'installation et d'entretien</h2>
      <p>Optez pour un coffret tunnel facile à installer et à entretenir. Les modèles avec trappe de visite accessible depuis l'intérieur facilitent la maintenance du mécanisme du volet sans nécessiter d'intervention extérieure. Cette caractéristique est particulièrement importante pour les installations en hauteur ou difficiles d'accès.</p>
      
      <h2>L'esthétique</h2>
      <p>L'aspect visuel du coffret tunnel peut avoir un impact significatif sur l'esthétique de votre façade. Certains modèles sont conçus pour être discrets ou peuvent être enduits pour s'intégrer harmonieusement à la façade. D'autres peuvent être habillés avec différents matériaux pour créer un effet décoratif.</p>
      
      <h2>Le budget</h2>
      <p>Enfin, le coût est un facteur déterminant dans le choix d'un coffret tunnel. Les prix varient en fonction des dimensions, des performances thermiques et acoustiques, et des options supplémentaires. Il est recommandé de comparer plusieurs offres et de considérer le rapport qualité-prix plutôt que de se focaliser uniquement sur le coût initial.</p>
      
      <h2>Conclusion</h2>
      <p>Le choix d'un Coffret volet roulant doit être fait avec soin, en tenant compte de nombreux facteurs techniques et esthétiques. Chez Société Caisson Tunisie, nous proposons une gamme complète de coffrets tunnel en polystyrène expansé, adaptés à différents types de constructions et d'exigences. N'hésitez pas à consulter nos experts pour vous guider dans votre choix et vous assurer d'une installation optimale.</p>
    `,
    image: "/stc/coff.jpeg",
    author: "Sami Meddeb",
    date: "2023-06-02",
    readTime: "8 min",
    slug: "choisir-coffret-tunnel-volet-roulant",
    category: "produits",
    relatedPosts: [1, 3],
  },
  // Autres articles...
]

export async function generateMetadata({ params }) {
  const post = blogPosts.find((p) => p.slug === params.slug)

  if (!post) {
    return {
      title: "Article non trouvé - Société Caisson Tunisie",
      description: "L'article que vous recherchez n'existe pas.",
    }
  }

  return {
    title: `${post.title} - Blog Caisson Tunisie`,
    description: post.excerpt,
  }
}

export default function BlogPostPage({ params }) {
  const post = blogPosts.find((p) => p.slug === params.slug)

  if (!post) {
    return (
      <div className="container mx-auto px-6 py-12 lg:px-8 text-center">
        <h1 className="text-4xl font-bold mb-6">Article non trouvé</h1>
        <p className="mb-8">L'article que vous recherchez n'existe pas.</p>
        <Button asChild>
          <Link href="/blog">Retour au blog</Link>
        </Button>
      </div>
    )
  }

  // Récupérer les articles liés
  const relatedPosts = post.relatedPosts
    ? post.relatedPosts.map((id) => blogPosts.find((p) => p.id === id)).filter(Boolean)
    : []

  return (
    <div className="container mx-auto px-6 py-12 lg:px-8">
      <div className="mb-6">
        <Button variant="outline" asChild>
          <Link href="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" /> Retour au blog
          </Link>
        </Button>
      </div>

      <article className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>

          <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-6">
            <div className="flex items-center">
              <User className="h-4 w-4 mr-1" />
              {post.author}
            </div>
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              {new Date(post.date).toLocaleDateString("fr-FR")}
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              {post.readTime} de lecture
            </div>
          </div>
        </div>

        <div className="relative h-[400px] w-full mb-8 rounded-lg overflow-hidden">
          <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
        </div>

        <div className="prose max-w-none mb-12" dangerouslySetInnerHTML={{ __html: post.content }} />

        <div className="border-t border-b py-6 mb-12">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold mb-2">Partager cet article</h3>
              <div className="flex space-x-4">
                <Button variant="outline" size="icon">
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Linkedin className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Catégorie</h3>
              <Button variant="secondary" asChild>
                <Link href={`/blog?category=${post.category}`}>
                  {post.category.charAt(0).toUpperCase() + post.category.slice(1)}
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {relatedPosts.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Articles similaires</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Card key={relatedPost.id}>
                  <div className="relative h-48 w-full">
                    <Image
                      src={relatedPost.image || "/placeholder.svg"}
                      alt={relatedPost.title}
                      fill
                      className="object-cover rounded-t-lg"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="line-clamp-2">{relatedPost.title}</CardTitle>
                    <CardDescription className="line-clamp-2">{relatedPost.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild>
                      <Link href={`/blog/${relatedPost.slug}`}>Lire l'article</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </article>
    </div>
  )
}
