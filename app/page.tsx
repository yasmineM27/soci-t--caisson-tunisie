"use client"
import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle, Shield, Star, Truck, Calendar, Calculator, Video, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { HeroParallax } from "@/components/hero-parallax"
import { ProductShowcase } from "@/components/product-showcase"
import { NewsletterForm } from "@/components/newsletter-form"
import { FeatureHighlight } from "@/components/feature-highlight"
import { VideoShowcase } from "@/components/video-showcase"
import { ChatButton } from "@/components/chat-button"
import { CalculatorButton } from "@/components/calculator-button"
import { BookAppointmentButton } from "@/components/book-appointment-button"
import { BrochuresSection } from "@/components/brochures-section"
import { motion, useScroll, useTransform } from "framer-motion"



import { GoogleReviews } from "@/components/google-reviews"
import { StatsSection } from "@/components/stats-section"
import { TestimonialsCarousel } from "@/components/testimonials-carousel"
import { Building, Wrench, Users, Award, Package } from "lucide-react"
import { testimonials, brochures } from "@/lib/mock-data"

const heroBackgroundImages = [
  "/stc/interface.jpeg",    // Première image
  "/stc/2.png",            // Deuxième image
  "/stc/4.jpg",            // Troisième image
  "/stc/5.jpeg"             // Quatrième image
];

// Données pour les statistiques
const stats = [
  {
    icon: <Building className="h-6 w-6" />,
    value: 3,
    label: "Années d'expérience",
    suffix: "+",
  },
  {
    icon: <Package className="h-6 w-6" />,
    value: 1000,
    label: "Produits livrés",
    suffix: "+",
  },
  {
    icon: <Users className="h-6 w-6" />,
    value: 200,
    label: "Clients satisfaits",
    suffix: "+",
  },
  {
    icon: <Award className="h-6 w-6" />,
    value: 98,
    label: "Taux de satisfaction",
    suffix: "%",
  },
]

// Sample product data
const featuredProducts = [
  {
    id: 1,
    name: "Coffret volet roulant",
    description: "Solution légère et isolante pour l'installation de volets roulants.",
    image: "/stc/coff.jpeg",
    slug: "coffret-tunnel-volet-roulant",
    features: ["Isolation thermique", "Légèreté", "Installation facile", "Durabilité"],
  },
  {
    id: 2,
    name: "Panneau Isolant en Polystyrène",
    description: "Isolation thermique optimale pour murs, toitures et sols.",
    image: "/stc/plaaaaa.png",
    slug: "panneau-isolant-polystyrene",
    features: ["Haute performance thermique", "Résistance à l'humidité", "Économie d'énergie", "Écologique"],
  },
  {
    id: 3,
    name: "Fish Box / Caisson d'Emballage",
    description: "Solution d'emballage isotherme pour le secteur agroalimentaire et la pêche.",
    image: "/placeholder.svg?height=300&width=400",
    slug: "fish-box-caisson-emballage",
    features: ["Conservation optimale", "Légèreté", "Résistance", "Personnalisable"],
  },
]


// Sample features
const features = [
  {
    icon: <Shield className="h-10 w-10 text-primary" />,
    title: "Qualité supérieure",
    description: "Nos produits sont fabriqués avec des matériaux de première qualité pour une durabilité maximale.",
  },
  {
    icon: <Truck className="h-10 w-10 text-primary" />,
    title: "Livraison rapide",
    description: "Nous assurons une livraison rapide et fiable partout en Tunisie.",
  },
  {
    icon: <CheckCircle className="h-10 w-10 text-primary" />,
    title: "Sur mesure",
    description: "Nous adaptons nos produits selon vos besoins spécifiques.",
  },
  {
    icon: <Star className="h-10 w-10 text-primary" />,
    title: "Service client",
    description: "Notre équipe est disponible pour vous accompagner à chaque étape de votre projet.",
  },
]

// Sample videos
const videos = [
  {
    id: 1,
    title: "Installation d'un coffret tunnel",
    thumbnail: "/placeholder.svg?height=200&width=350",
    url: "#",
  },
  {
    id: 2,
    title: "Pose de panneaux isolants",
    thumbnail: "/placeholder.svg?height=200&width=350",
    url: "#",
  },
]

export default function Home() {
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  })

  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1])
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1])

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Parallax Effect */}
      <HeroParallax
        title=" Société Caisson Tunisie "
        subtitle="Construire mieux, isoler plus, dépenser moins."
        ctaText="Découvrir nos produits"
        ctaLink="/produits"
        secondaryCtaText="Demander un devis"
        secondaryCtaLink="/contact"
        backgroundImages={heroBackgroundImages}
      />

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
        <ChatButton />
        <CalculatorButton />
        <BookAppointmentButton />
      </div>

     

  {/* Stats Section */}
  <StatsSection stats={stats} />
     
      {/* Brochures Section */}
      <BrochuresSection brochures={brochures} />


{/* Products Section */}
<section className="py-16" ref={targetRef}>
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-12" style={{ scale, opacity }}>
            <h2 className="text-3xl font-bold mb-4">Nos Produits</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Découvrez notre gamme de produits en polystyrène expansé, conçus pour répondre à vos besoins en isolation
              thermique et emballage.
            </p>
          </motion.div>
          <ProductShowcase products={featuredProducts} />
          <div className="text-center mt-10">
            <Button asChild>
              <Link href="/produits" className="group">
                Voir tous nos produits
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Products with 3D View Option */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-2">
              Nos produits
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Solutions de qualité supérieure</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Découvrez notre gamme de produits en polystyrène expansé, conçus pour répondre aux besoins spécifiques de
              nos clients.
            </p>
          </div>

          <ProductShowcase products={featuredProducts} />

          <div className="mt-12 text-center">
            <Button variant="outline" size="lg" asChild>
              <Link href="/produits">
                Voir tous nos produits <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section with Animation <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-2">
              Pourquoi nous choisir
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Nos avantages</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Chez Caisson Tunisie, nous nous engageons à fournir des produits et services de la plus haute qualité.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FeatureHighlight
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>*/}
      

      {/* About Section with Parallax */}
      <section className="py-16 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-2">
                À propos de nous
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Caisson Tunisie</h2>
              <p className="text-lg mb-4">
                Fondée en 2020, Société Caisson Tunisie s'est rapidement imposée comme un acteur majeur dans la
                fabrication de produits en polystyrène expansé (EPS) en Tunisie.
              </p>
              <p className="text-lg mb-6">
                Notre expertise technique et notre engagement envers la qualité nous permettent de fournir des solutions
                innovantes et durables pour les secteurs de la construction, de l'emballage et de l'agroalimentaire.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Équipements modernes et technologie de pointe</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Équipe qualifiée et expérimentée</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Respect des normes internationales</span>
                </li>
              </ul>
              <Button variant="default" asChild>
                <Link href="/a-propos">
                  En savoir plus <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Usine Caisson Tunisie"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Video Showcase Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4">Vidéos Explicatives</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Découvrez nos vidéos pour mieux comprendre nos produits et leur installation.
            </p>
          </motion.div>

          <VideoShowcase videos={videos} />

          <div className="mt-8 text-center">
            <Button variant="outline" asChild>
              <Link href="/videos">
                Voir toutes les vidéos <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    {/* Google Reviews Section */}
    <GoogleReviews />

    {/* Services Section */}
    <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4">Nos Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Nous proposons une gamme complète de services pour vous accompagner dans vos projets d'isolation et
              d'emballage.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureHighlight
              icon={<Building className="h-8 w-8 text-primary" />}
              title="Fabrication sur mesure"
              description="Nous fabriquons des produits en polystyrène expansé selon vos spécifications précises."
            />
            <FeatureHighlight
              icon={<Wrench className="h-8 w-8 text-primary" />}
              title="Installation"
              description="Notre équipe d'experts assure l'installation professionnelle de nos produits."
            />
            <FeatureHighlight
              icon={<Truck className="h-8 w-8 text-primary" />}
              title="Livraison rapide"
              description="Nous livrons vos commandes dans les meilleurs délais partout en Tunisie."
            />
            <FeatureHighlight
              icon={<Shield className="h-8 w-8 text-primary" />}
              title="Garantie qualité"
              description="Tous nos produits sont garantis et répondent aux normes de qualité les plus strictes."
            />
          </div>
          <div className="text-center mt-10">
            <Button asChild variant="outline">
              <Link href="/services" className="group">
                En savoir plus sur nos services
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4">Nos Réalisations</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Découvrez quelques-uns de nos projets récents et comment nos produits ont contribué à leur succès.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group"
              >
                <Link href={`/projets/projet-${i}`}>
                  <div className="relative h-64 rounded-lg overflow-hidden mb-4">
                    <Image
                      src={`/placeholder.svg?height=400&width=600&text=Projet+${i}`}
                      alt={`Projet ${i}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <h3 className="text-white font-bold text-lg">Projet {i}</h3>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button asChild>
              <Link href="/projets" className="group">
                Voir tous nos projets
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-2">
              Outils pratiques
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Ressources à votre disposition</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Utilisez nos outils pour faciliter votre projet et prendre des décisions éclairées.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-muted/50 hover:bg-muted transition-colors">
              <CardHeader>
                <div className="mb-2 h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Calculator className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Calculateur d'isolation</CardTitle>
                <CardDescription>Estimez vos besoins en isolation selon votre surface</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Notre calculateur vous aide à déterminer la quantité de matériau isolant nécessaire pour votre projet.
                </p>
              </CardContent>
              <CardFooter>
                <CalculatorButton variant="outline" className="w-full" />
              </CardFooter>
            </Card>

            <Card className="bg-muted/50 hover:bg-muted transition-colors">
              <CardHeader>
                <div className="mb-2 h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Video className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Vidéos d'installation</CardTitle>
                <CardDescription>Guides visuels pour l'installation de nos produits</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Consultez nos vidéos explicatives pour comprendre comment installer et utiliser nos produits.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" asChild className="w-full">
                  <Link href="/videos">Voir les vidéos</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="bg-muted/50 hover:bg-muted transition-colors">
              <CardHeader>
                <div className="mb-2 h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Réservation de rendez-vous</CardTitle>
                <CardDescription>Planifiez une consultation avec nos experts</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Prenez rendez-vous avec notre équipe pour discuter de votre projet et obtenir des conseils
                  personnalisés.
                </p>
              </CardContent>
              <CardFooter>
                <BookAppointmentButton variant="outline" className="w-full" />
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4">Restez informé</h2>
            <p className="max-w-2xl mx-auto">
              Abonnez-vous à notre newsletter pour recevoir nos dernières actualités et offres spéciales.
            </p>
          </motion.div>
          <NewsletterForm />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="outline" className="mb-2">
              Prêt à démarrer ?
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Collaborons ensemble</h2>
            <p className="text-lg mb-8">
              Contactez-nous dès aujourd'hui pour discuter de vos besoins en produits en polystyrène expansé et obtenir
              un devis personnalisé.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">Demander un devis</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/produits">Explorer nos produits</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
