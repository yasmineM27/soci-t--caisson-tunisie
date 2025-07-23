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
import Head from 'next/head'
import CarouselSlogan from '@/components/CarouselSlogan';
import { useState} from "react"
import { OrganizationStructuredData } from "@/components/seo/structured-data"

import { GoogleReviews } from "@/components/google-reviews"
import { StatsSection } from "@/components/stats-section"
import { TestimonialsCarousel } from "@/components/testimonials-carousel"
import { Building, Wrench, Users, Award, Package } from "lucide-react"
import { testimonials } from "@/lib/mock-data"

const heroBackgroundImages = [
  "/stc/interface.jpeg",    // Première image
  "/stc/2.PNG",            // Deuxième image
  "/stc/4.jpg",            // Troisième image
  "/stc/5.jpeg"             // Quatrième image
];
/*const brochures: Brochure[] = [
  {
    id: 1,
    title: "Fiche Technique du Coffret Tunnel Volet Roulant",
    description: "Découvrez les spécifications complètes du Coffret Tunnel Volet Roulant.",
    thumbnail: "/2.png",
    fileUrl: "/docs/Fiche_Technique_Volet_Roulant_Coffret_Tunnel.pdf",
    fileSize: "2.5 MB",
  },
  {
    id: 2,
    title: "Fiche Technique  du polystyrène expansé.",
    description: "Caractéristiques détaillées du polystyrène expansé.",
    thumbnail: "/1.png",
    fileUrl: "/docs/Propriétés_du_polystyrène_expansé_SCT_SOCIETE_CAISSON_TUNISIE.pdf",
    fileSize: "3.1 MB",
    
  },
];*/
const slogans: string[] = [
  "Your solution for innovative construction",
  "Construire mieux, isoler plus, dépenser moins.",
  "Caisson Tunisie — L'isolation qui construit l'avenir.",
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
    name: "Coffret Tunnel Volet Roulant",
    description: "Coffret léger et isolant avec renforts métalliques pour volets roulants traditionnels et bloc-baie.",
    image: "/stc/coff.jpeg",
    slug: "coffret-tunnel-volet-roulant",
    features: [
      "Isolation thermique renforcée",
      "Légèreté et robustesse",
      "Renforts acier galvanisé",
      "Installation facile",
      "Compatible volets traditionnels et bloc-baie",],
  },
  {
    id: 2,
    name: "Panneau Isolant en Polystyrène",
    description: "Isolation thermique optimale pour murs, toitures et sols.",
    image: "/plaque_isolant_sur_mesure.jpg",
    slug: "panneau-isolant-2cm",
    features: ["Haute performance thermique", "Résistance à l'humidité", "Économie d'énergie", "Écologique"],
  },
  {
    id: 3,
    name: "Fish Box / Caisson d'Emballage",
    description: "Solution d'emballage isotherme pour le secteur agroalimentaire et la pêche.",
    image: "/fish1.jpg",
    slug: "fish-box-5kg",
    features: ["Conservation optimale", "Légèreté", "Résistance", "Personnalisable"],
  },
]

const projects = [
  {
    id: 1,
    title: "Installation de coffrets volets roulants",
    imageUrl: "projet1.jpg",
    link: "/projets/projet-1",
  },
  {
    id: 2,
    title: "Installation de coffrets volets roulants",
    imageUrl: "projet3.jpg",
    link: "/projets/projet-2",
  },
  {
    id: 3,
    title: "Installation des plaques isolants",
    imageUrl: "projet4.jpg",
    link: "/projets/projet-3",
  },
];

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
    id: 3,
    title: "Bienvenue chez nous!",
    thumbnail: "/propos.jpg",
    url: "/vd.mp4",
  },
]



export default function Home() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  })

  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1])
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1])

  return (
     <div className="flex flex-col min-h-screen">
      <Head>
        <meta name="google-site-verification" content="google2b9195924cad711b.html" />
      </Head>
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

   <CarouselSlogan />
{/* Testimonials Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4">Ce que disent nos clients</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Découvrez les témoignages de nos clients satisfaits.
            </p>
          </motion.div>
          <div className="max-w-3xl mx-auto">
            <TestimonialsCarousel testimonials={testimonials} />
          </div>
        </div>
      </section> {/* Testimonials Section <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4">Ce que disent nos clients</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Découvrez les témoignages de nos clients satisfaits.
            </p>
          </motion.div>
          <div className="max-w-3xl mx-auto">
            <TestimonialsCarousel testimonials={testimonials} />
          </div>
        </div>
      </section>*/}
 

      {/* Featured Products with 3D View Option 
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
      </section>*/}

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
                src="/societe1.jpg?height=800&width=600"
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
        <div className="container mx-auto px-7">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4">Bienvenue chez nous!</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Découvrez nos vidéos pour mieux comprendre nos produits 
            </p>
          </motion.div>

          <VideoShowcase videos={videos} />

          
        </div>
      </section>
    {/* Google Reviews Section 
    <GoogleReviews />*/}

     {/* Services Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Nos Services</h2>
            <p className="mt-4 text-lg">
              Nous offrons une gamme complète de services pour répondre à vos besoins en matière de produits en
              polystyrène expansé.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="mb-2 h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Truck className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Fabrication sur mesure</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Nous concevons et fabriquons des produits en polystyrène expansé selon vos spécifications précises.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="mb-2 h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Conseil technique</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Notre équipe d'experts vous accompagne dans le choix des solutions les plus adaptées à vos besoins.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="mb-2 h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Livraison rapide</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Nous assurons une livraison rapide et fiable de vos commandes partout en Tunisie.</p>
              </CardContent>
            </Card>
          </div>
          <div className="mt-12 text-center">
            <Button variant="outline" size="lg" asChild>
              <Link href="/services">
                En savoir plus sur nos services <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>


      {/* Projects Showcase */}
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
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="group"
        >
          <Link href={project.link}>
            <div className="relative h-64 rounded-lg overflow-hidden mb-4">
              <Image
                src={project.imageUrl}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <h3 className="text-white font-bold text-lg">{project.title}</h3>
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>

    <div className="text-center mt-10">
      <Button asChild>
        <Link href="#" className="group">
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
                <CardTitle>Chat avec Caisson Tunisie</CardTitle>
                <CardDescription>Discutez avec notre équipe pour toute question ou assistance</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Utilisez notre service de chat en direct pour obtenir des réponses rapides et personnalisées.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" onClick={() => setIsChatOpen(true)}>
                  Accéder au chat
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
                <div className="w-full">
                  <BookAppointmentButton variant="outline" className="w-full" />
                </div>
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

      {/* Organization Structured Data */}
      <OrganizationStructuredData baseUrl="https://societe-caisson-tunisie.tn" />
    </div>
  )
}
