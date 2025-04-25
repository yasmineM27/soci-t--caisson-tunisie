import Link from "next/link"
import Image from "next/image"
import { Check, Download, Share, Star, Truck, Shield, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { AddToCartButton } from "@/components/add-to-cart-button"
import { View3DButton } from "@/components/view-3d-button"
import { ProductReviews } from "@/components/product-reviews"
import { RelatedProducts } from "@/components/related-products"
import { ProductFaq } from "@/components/product-faq"
import { StructuredData } from "@/components/seo/structured-data"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"

// Sample product data - in a real app, this would come from a database
const products = [
  {
    id: 1,
    name: "Coffret volet roulant", 
    description: "Solution légère et isolante pour l'installation de volets roulants.",
    longDescription: `
      <p>Le Coffret volet roulant en polystyrène expansé (EPS) est une solution innovante qui combine légèreté et performance d'isolation thermique. Conçu pour faciliter l'installation des volets roulants, ce coffret tunnel offre une excellente isolation thermique et acoustique, contribuant ainsi à l'efficacité énergétique globale du bâtiment.</p>
      
      <p>Sa structure en polystyrène expansé garantit une durabilité exceptionnelle tout en étant facile à manipuler et à installer. Nos coffrets tunnel sont fabriqués avec des matériaux de haute qualité pour assurer une longévité maximale et une résistance optimale aux conditions climatiques.</p>
      
      <p>Disponible en différentes dimensions pour s'adapter à tous types d'ouvertures, notre Coffret volet roulant est la solution idéale pour les constructions neuves comme pour les projets de rénovation.</p>
    `,
    features: [
      "Légèreté et facilité d'installation",
      "Excellente isolation thermique et acoustique",
      "Résistance à l'humidité",
      "Compatible avec la plupart des systèmes de volets roulants",
      "Disponible en différentes dimensions",
      "Résistant aux UV et aux intempéries",
      "Traitement anti-moisissure",
      "Conforme aux normes de construction",
    ],
    specifications: [
      { name: "Matériau", value: "Polystyrène expansé (EPS)" },
      { name: "Densité", value: "30 kg/m³" },
      { name: "Conductivité thermique", value: "0,035 W/mK" },
      { name: "Résistance à la compression", value: "200 kPa" },
      { name: "Classement au feu", value: "Euroclasse E" },
      { name: "Absorption d'eau", value: "< 3%" },
      { name: "Dimensions disponibles", value: "Sur mesure selon vos besoins" },
      { name: "Épaisseur des parois", value: "20 mm à 50 mm" },
    ],
    benefits: [
      {
        title: "Économies d'énergie",
        description:
          "Réduit les déperditions thermiques et contribue à diminuer la consommation énergétique du bâtiment.",
        icon: "savings",
      },
      {
        title: "Installation rapide",
        description: "Sa légèreté et sa facilité de découpe permettent une installation rapide et précise.",
        icon: "installation",
      },
      {
        title: "Durabilité",
        description: "Matériau résistant qui conserve ses propriétés isolantes dans le temps.",
        icon: "durability",
      },
      {
        title: "Confort acoustique",
        description: "Contribue à l'isolation phonique de l'habitation en réduisant les bruits extérieurs.",
        icon: "acoustic",
      },
    ],
    applications: [
      "Maisons individuelles",
      "Immeubles résidentiels",
      "Bâtiments commerciaux",
      "Projets de rénovation",
      "Constructions neuves",
    ],
    installation: {
      steps: [
        "Préparer l'ouverture en vérifiant les dimensions",
        "Positionner le coffret tunnel au-dessus de l'ouverture",
        "Fixer le coffret selon les recommandations du fabricant",
        "Installer le mécanisme du volet roulant",
        "Réaliser les finitions (enduit, peinture, etc.)",
      ],
      videoUrl: "#",
    },
    images: [
      "/stc/coff.jpeg",
      "/stc/01.png",
      "/stc/coff.jpeg",
      "/stc/coff.jpeg",
      "/stc/coff.jpeg",
    ],
    inStock: true,
    leadTime: "2-3 semaines",
    minOrder: 1,
    certification: ["ISO 9001", "Marquage CE"],
    warranty: "5 ans",
    slug: "coffret-tunnel-volet-roulant",
    category: "coffrets",
    tags: ["isolation", "volet roulant", "construction", "rénovation"],
    relatedProducts: [2, 3, 4],
    reviews: {
      average: 4.7,
      count: 23,
    },
    faq: [
      {
        question: "Quelle est la différence entre un coffret tunnel standard et sur mesure ?",
        answer:
          "Un coffret tunnel standard est disponible en dimensions prédéfinies, tandis qu'un coffret sur mesure est fabriqué selon les dimensions spécifiques de votre projet. Pour des ouvertures non standard, nous recommandons les coffrets sur mesure pour une isolation optimale.",
      },
      {
        question: "Le coffret tunnel est-il compatible avec tous les types de volets roulants ?",
        answer:
          "Nos coffrets tunnel sont conçus pour être compatibles avec la plupart des systèmes de volets roulants disponibles sur le marché. Il est toutefois recommandé de vérifier les spécifications techniques de votre volet roulant avant l'achat.",
      },
      {
        question: "Quelle est la durée de vie d'un coffret tunnel en polystyrène expansé ?",
        answer:
          "Dans des conditions normales d'utilisation, nos coffrets tunnel en polystyrène expansé ont une durée de vie de plusieurs décennies. Ils conservent leurs propriétés isolantes dans le temps et résistent bien au vieillissement.",
      },
      {
        question: "Comment entretenir un coffret tunnel ?",
        answer:
          "Les coffrets tunnel en polystyrène expansé ne nécessitent pas d'entretien particulier. Il est simplement recommandé de vérifier périodiquement l'absence de fissures ou de dommages, notamment après des événements climatiques exceptionnels.",
      },
      {
        question: "Est-il possible d'installer un coffret tunnel sur une construction existante ?",
        answer:
          "Oui, nos coffrets tunnel peuvent être installés dans le cadre de projets de rénovation. L'installation nécessite toutefois une adaptation de l'ouverture existante, ce qui peut impliquer des travaux supplémentaires.",
      },
    ],
    downloads: [
      { name: "Fiche technique", url: "#", type: "pdf" },
      { name: "Guide d'installation", url: "#", type: "pdf" },
      { name: "Certificat de conformité", url: "#", type: "pdf" },
    ],
    projects: [
      {
        name: "Résidence Les Oliviers",
        description: "Installation de 50 coffrets tunnel pour un complexe résidentiel à Tunis",
        image: "/placeholder.svg?height=300&width=400",
        slug: "residence-les-oliviers",
      },
      {
        name: "Villa Jasmin",
        description: "Rénovation complète avec coffrets tunnel sur mesure",
        image: "/placeholder.svg?height=300&width=400",
        slug: "villa-jasmin",
      },
    ],
  },
  {
    id: "2",
      name: "Panneaux Isolants",
      slug: "panneau-isolant-polystyrene",
      description: "Panneaux isolants en polystyrène expansé pour l'isolation thermique",
    longDescription: `
      <p>Nos panneaux isolants en polystyrène expansé (EPS) offrent une solution d'isolation thermique exceptionnelle pour tous types de constructions. Fabriqués à partir de mousse EPS haute densité, ces panneaux présentent une structure à cellules fermées qui emprisonne l'air, garantissant ainsi une isolation optimale.</p>
      
      <p>Le polystyrène expansé utilisé dans nos panneaux est produit à partir de billes de polystyrène expansible contenant du pentane comme agent gonflant. Ce procédé de fabrication confère au matériau ses propriétés uniques de légèreté, de résistance thermique et d'intégrité structurelle.</p>
      
      <p>Idéal pour les nouvelles constructions comme pour les rénovations, nos panneaux EPS contribuent significativement à l'efficacité énergétique des bâtiments tout en étant faciles à manipuler et à installer.</p>
    `,
    features: [
      "Excellente isolation thermique (valeur R élevée)",
      "Légèreté facilitant la manipulation et l'installation",
      "Résistance à l'humidité et inertie chimique",
      "Structure à cellules fermées emprisonnant l'air",
      "Intégrité structurelle même à faible densité",
      "Absorption exceptionnelle des chocs",
      "Résistance à la compression adaptée aux applications de construction",
      "Disponible en différentes densités et épaisseurs",
    ],
    specifications: [
      { name: "Matériau", value: "Polystyrène expansé (EPS)" },
      { name: "Densité", value: "15-40 kg/m³ (selon application)" },
      { name: "Conductivité thermique (λ)", value: "0,030-0,038 W/mK" },
      { name: "Résistance à la compression", value: "100-400 kPa" },
      { name: "Absorption d'eau (par immersion)", value: "< 3% du volume" },
      { name: "Classement au feu", value: "Euroclasse E (standard) ou B (ignifugé)" },
      { name: "Dimensions standards", value: "1200 x 600 mm, 1250 x 600 mm" },
      { name: "Épaisseurs disponibles", value: "20 mm à 200 mm" },
    ],
    benefits: [
      {
        title: "Efficacité énergétique",
        description: "Réduit significativement les déperditions thermiques, diminuant les coûts de chauffage et climatisation.",
        icon: "energy",
      },
      {
        title: "Polyvalence",
        description: "Adapté aux murs, toitures, sols et sous-sols grâce à sa résistance à l'humidité.",
        icon: "versatility",
      },
      {
        title: "Durabilité",
        description: "Conserve ses propriétés isolantes dans le temps, résiste à la pourriture et aux moisissures.",
        icon: "durability",
      },
      {
        title: "Économique",
        description: "Solution d'isolation performante à un coût compétitif, réduisant les coûts de transport grâce à sa légèreté.",
        icon: "savings",
      },
    ],
    applications: [
      "Isolation des murs extérieurs (ITE)",
      "Isolation des toitures terrasses et inclinées",
      "Isolation des planchers et sous-sols",
      "Panneaux isolants structuraux (SIP)",
      "Coffrages isolants pour béton (ICF)",
      "Isolation phonique supplémentaire",
    ],
    installation: {
      steps: [
        "Préparer la surface (nettoyage, séchage)",
        "Découper les panneaux aux dimensions nécessaires",
        "Appliquer selon la technique choisie (collage, fixation mécanique)",
        "Jointoyer les panneaux avec du ruban adhésif spécial",
        "Réaliser les finitions (enduit, parement, etc.)",
      ],
      videoUrl: "#",
    },
    images: [
      "/stc/plaaaaa.png",
      "/stc/pp.JPG",
      "/stc/OIP.JPG",
      "/stc/OIP (1).JPG",
      "/stc/2.png"
    ],
    inStock: true,
    leadTime: "1-2 semaines",
    minOrder: 10, // en m²
    certification: ["ISO 9001", "Marquage CE", "Certification ACERMI"],
    warranty: "10 ans",
    slug: "panneau-isolant-polystyrene",
    category: "isolation",
    tags: ["isolation", "construction", "murs", "toiture", "energie"],
    relatedProducts: [1, 3, 5],
    reviews: {
      average: 4.8,
      count: 35,
    },
    faq: [
      {
        question: "Quelle est la différence entre les panneaux EPS standard et haute densité ?",
        answer: "Les panneaux haute densité offrent une meilleure résistance mécanique et une légère amélioration des performances thermiques, idéale pour les applications structurelles ou soumises à des charges. Les panneaux standard conviennent parfaitement aux applications d'isolation courantes.",
      },
      {
        question: "Les panneaux EPS sont-ils résistants à l'humidité ?",
        answer: "Oui, la structure à cellules fermées du polystyrène expansé limite fortement l'absorption d'eau (<3% du volume), ce qui en fait un excellent choix pour les applications en sous-sol ou en milieu humide.",
      },
      {
        question: "Peut-on utiliser ces panneaux pour l'isolation par l'extérieur ?",
        answer: "Absolument. Nos panneaux EPS sont particulièrement adaptés à l'isolation thermique par l'extérieur (ITE) grâce à leur légèreté, leur facilité de mise en œuvre et leurs excellentes performances thermiques.",
      },
      {
        question: "Quelle épaisseur choisir pour une isolation optimale ?",
        answer: "L'épaisseur dépend de la zone climatique et des performances recherchées. En Tunisie, nous recommandons généralement des épaisseurs entre 60mm et 100mm pour une isolation efficace des murs.",
      },
      {
        question: "Les panneaux EPS sont-ils recyclables ?",
        answer: "Oui, le polystyrène expansé est 100% recyclable. Société Caisson Tunisie participe activement à des programmes de collecte et recyclage des déchets EPS.",
      },
    ],
    downloads: [
      { name: "Fiche technique EPS", url: "#", type: "pdf" },
      { name: "Guide d'installation ITE", url: "#", type: "pdf" },
      { name: "Certificat ACERMI", url: "#", type: "pdf" },
    ],
    projects: [
      {
        name: "Résidence Les Palmiers",
        description: "Isolation thermique par l'extérieur avec panneaux EPS 80mm",
        image: "/projects/palmiers.jpg",
        slug: "residence-les-palmiers",
      },
      {
        name: "Complexe commercial Carthage",
        description: "Isolation toiture terrasse avec panneaux EPS haute densité",
        image: "/projects/carthage.jpg",
        slug: "complexe-carthage",
      },
    ],
    variants: [
      {
        name: "EPS Standard",
        description: "Pour isolation courante",
        density: "15-20 kg/m³"
      },
      {
        name: "EPS Haute Densité",
        description: "Pour applications structurelles",
        density: "30-40 kg/m³"
      },
      {
        name: "EPS Ignifuge",
        description: "Pour zones à réglementation incendie stricte",
        density: "20-25 kg/m³"
      }
    ]
  },
  // Autres produits...
]

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug)

  if (!product) {
    return {
      title: "Produit non trouvé - Société Caisson Tunisie",
      description: "Le produit que vous recherchez n'existe pas.",
    }
  }

  return {
    title: `${product.name} - Société Caisson Tunisie`,
    description: product.description,
    openGraph: {
      title: `${product.name} - Société Caisson Tunisie`,
      description: product.description,
      images: [
        {
          url: product.images[0],
          width: 800,
          height: 600,
          alt: product.name,
        },
      ],
    },
  }
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug)

  if (!product) {
    return (
      <div className="container mx-auto px-6 py-12 lg:px-8 text-center">
        <h1 className="text-4xl font-bold mb-6">Produit non trouvé</h1>
        <p className="mb-8">Le produit que vous recherchez n'existe pas.</p>
        <Button asChild>
          <Link href="/produits">Retour aux produits</Link>
        </Button>
      </div>
    )
  }

  // Breadcrumb items
  const breadcrumbItems = [
    { label: "Produits", href: "/produits", isCurrent: false },
    { label: product.name, href: `/produits/${product.slug}`, isCurrent: true },
  ]

  // Related products
  const relatedProductsData = product.relatedProducts
    ? product.relatedProducts.map((id) => products.find((p) => p.id === id)).filter(Boolean)
    : []

  return (
    <div className="container mx-auto px-6 py-8 lg:px-8">
    <Breadcrumbs items={breadcrumbItems} />
  
    <div className="grid lg:grid-cols-2 gap-12 mb-16">
      {/* Product Images */}
      <div>
        <div className="relative">
          <Tabs defaultValue="image-0" className="w-full">
            {/* Image principale */}
            <div className="relative aspect-square mb-6 overflow-hidden rounded-lg border bg-gray-60 max-w-[400px] mx-auto">
              {product.images.map((image, index) => (
                <TabsContent 
                  key={`content-${index}`} 
                  value={`image-${index}`} 
                  className="h-full w-full relative"
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${product.name} - Image ${index + 1}`}
                    fill
                    className="object-contain p-4" // Ajout de padding pour les images avec fond
                    priority={index === 0}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px" 
                  />
                </TabsContent>
              ))}
              <div className="absolute top-4 right-4 z-10">
                <View3DButton productId={product.id} />
              </div>
            </div>
  
            {/* Miniatures */}
            <TabsList className="grid grid-cols-5 gap-2 md:gap-3 w-full max-w-[500px] mx-auto">
              {product.images.map((image, index) => (
                <TabsTrigger 
                  key={`trigger-${index}`} 
                  value={`image-${index}`} 
                  className="p-0 h-full relative group"
                >
                  <div className="relative aspect-square w-full overflow-hidden rounded-md border-2 border-transparent group-data-[state=active]:border-primary transition-all">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${product.name} - Miniature ${index + 1}`}
                      fill
                      className="object-cover group-data-[state=active]:opacity-100 opacity-70 hover:opacity-100 transition-opacity"
                      sizes="100px"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
      </div>
        {/* Product Info */}
        <div>
          <div className="flex flex-col h-full">
            <div className="mb-6">
              {product.category && (
                <Link
                  href={`/produits?category=${product.category}`}
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  {product.category === "coffrets"
                    ? "Coffrets Tunnel"
                    : product.category === "panneaux"
                      ? "Panneaux Isolants"
                      : "Fish Box"}
                </Link>
              )}
              <h1 className="text-3xl font-bold mt-2 mb-2">{product.name}</h1>

              <div className="flex items-center gap-2 mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(product.reviews.average)
                          ? "text-yellow-500 fill-yellow-500"
                          : i < product.reviews.average
                            ? "text-yellow-500 fill-yellow-500/50"
                            : "text-muted-foreground"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  {product.reviews.average} ({product.reviews.count} avis)
                </span>
              </div>

              <p className="text-lg mb-6">{product.description}</p>

              

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                    <Truck className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Délai de livraison</p>
                    <p className="text-sm text-muted-foreground">{product.leadTime}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Garantie</p>
                    <p className="text-sm text-muted-foreground">{product.warranty}</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <AddToCartButton
                  productId={product.id}
                  productName={product.name}
                  productImage={product.images[0]}
                />
                <Button variant="outline" asChild className="flex-1">
                  <Link href={`/contact?product=${product.slug}`}>Demander un devis</Link>
                </Button>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {product.tags.map((tag, index) => (
                  <Badge key={index} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="flex items-center gap-4">
                <Button variant="ghost" size="icon">
                  <Share className="h-4 w-4" />
                  <span className="sr-only">Partager</span>
                </Button>
                {product.downloads && product.downloads.length > 0 && (
                  <div className="relative group">
                    <Button variant="ghost" className="flex items-center gap-2">
                      <Download className="h-4 w-4" />
                      <span>Téléchargements</span>
                    </Button>
                    <div className="absolute z-10 left-0 mt-2 w-64 rounded-md shadow-lg bg-background border border-border hidden group-hover:block">
                      <div className="py-1">
                        {product.downloads.map((download, index) => (
                          <a
                            key={index}
                            href={download.url}
                            className="block px-4 py-2 text-sm hover:bg-muted"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {download.name} ({download.type.toUpperCase()})
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Details Tabs */}
      <div className="mb-16">
        <Tabs defaultValue="description" className="w-full">
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-5 gap-2 mb-6">
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="specifications">Spécifications</TabsTrigger>
            <TabsTrigger value="benefits">Avantages</TabsTrigger>
            <TabsTrigger value="installation">Installation</TabsTrigger>
            <TabsTrigger value="faq">FAQ</TabsTrigger>
          </TabsList>
          <TabsContent value="description" className="space-y-8">
            <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: product.longDescription }} />
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4">Caractéristiques</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4">Applications</h3>
              <ul className="grid grid-cols-1 md:grid-cols-3 gap-2">
                {product.applications.map((application, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span>{application}</span>
                  </li>
                ))}
              </ul>
            </div>
            {product.certification && product.certification.length > 0 && (
              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4">Certifications</h3>
                <div className="flex flex-wrap gap-4">
                  {product.certification.map((cert, index) => (
                    <div key={index} className="flex items-center">
                      <Award className="h-5 w-5 text-primary mr-2" />
                      <span>{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </TabsContent>
          <TabsContent value="specifications" className="p-6 bg-muted/30 rounded-md mt-6">
            <h3 className="text-xl font-bold mb-4">Spécifications techniques</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
              {product.specifications.map((spec, index) => (
                <div key={index} className="flex justify-between border-b pb-2">
                  <div className="font-medium">{spec.name}</div>
                  <div>{spec.value}</div>
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="benefits" className="p-6 bg-muted/30 rounded-md mt-6">
            <h3 className="text-xl font-bold mb-6">Avantages du produit</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {product.benefits.map((benefit, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                        {benefit.icon === "savings" && <Truck className="h-6 w-6 text-primary" />}
                        {benefit.icon === "installation" && <Truck className="h-6 w-6 text-primary" />}
                        {benefit.icon === "durability" && <Shield className="h-6 w-6 text-primary" />}
                        {benefit.icon === "acoustic" && <Truck className="h-6 w-6 text-primary" />}
                      </div>
                      <div>
                        <h4 className="text-lg font-bold mb-2">{benefit.title}</h4>
                        <p className="text-muted-foreground">{benefit.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="installation" className="p-6 bg-muted/30 rounded-md mt-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Guide d'installation</h3>
                <ol className="space-y-4">
                  {product.installation.steps.map((step, index) => (
                    <li key={index} className="flex">
                      <div className="h-6 w-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center mr-3 flex-shrink-0">
                        {index + 1}
                      </div>
                      <p>{step}</p>
                    </li>
                  ))}
                </ol>
                <div className="mt-6">
                  <Button variant="outline" asChild>
                    <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <Download className="h-4 w-4" />
                      Télécharger le guide complet
                    </a>
                  </Button>
                </div>
              </div>
              <div>
                <div className="aspect-video w-full bg-muted rounded-lg overflow-hidden">
                  {/* Placeholder for video */}
                  <div className="w-full h-full flex items-center justify-center">
                    <p className="text-muted-foreground">Vidéo d'installation</p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="faq" className="p-6 bg-muted/30 rounded-md mt-6">
            <h3 className="text-xl font-bold mb-6">Questions fréquentes</h3>
            <ProductFaq faqItems={product.faq} />
          </TabsContent>
        </Tabs>
      </div>

      {/* Projects using this product */}
      {product.projects && product.projects.length > 0 && (
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Projets réalisés avec ce produit</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {product.projects.map((project, index) => (
              <Link key={index} href={`/projets/${project.slug}`} className="group">
                <div className="relative h-48 w-full rounded-lg overflow-hidden mb-3">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-bold text-lg group-hover:text-primary transition-colors">{project.name}</h3>
                <p className="text-muted-foreground">{project.description}</p>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Reviews */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Avis clients</h2>
        <ProductReviews productId={product.id} />
      </div>

      {/* Related Products */}
      {relatedProductsData.length > 0 && (
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Produits similaires</h2>
          <RelatedProducts products={relatedProductsData} />
        </div>
      )}

      {/* CTA Section */}
      <div className="bg-muted rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Besoin d'aide pour choisir ?</h2>
        <p className="mb-6 max-w-2xl mx-auto">
          Notre équipe d'experts est à votre disposition pour vous aider à choisir le produit le plus adapté à vos
          besoins. N'hésitez pas à nous contacter pour obtenir des conseils personnalisés.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild>
            <Link href="/contact">Nous contacter</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/produits">Voir tous les produits</Link>
          </Button>
        </div>
      </div>

      {/* Structured Data for SEO */}
      <StructuredData
        type="Product"
        data={{
          name: product.name,
          image: product.images[0],
          description: product.description,
        }}
      />
    </div>
  )
}
