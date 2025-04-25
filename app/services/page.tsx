import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle, Settings, Truck, Users, Wrench } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata = {
  title: "Services - Société Caisson Tunisie",
  description:
    "Découvrez nos services de fabrication sur mesure, conseil technique et livraison pour tous vos besoins en produits en polystyrène expansé.",
}

const services = [
  {
    id: 1,
    title: "Fabrication sur mesure",
    description: "Nous concevons et fabriquons des produits en polystyrène expansé selon vos spécifications précises.",
    icon: Settings,
    details: [
      "Analyse de vos besoins spécifiques",
      "Conception adaptée à vos contraintes",
      "Fabrication avec des matériaux de qualité",
      "Contrôle qualité rigoureux",
      "Livraison dans les délais convenus",
    ],
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 2,
    title: "Conseil technique",
    description: "Notre équipe d'experts vous accompagne dans le choix des solutions les plus adaptées à vos besoins.",
    icon: Users,
    details: [
      "Évaluation de vos besoins en isolation",
      "Recommandations personnalisées",
      "Optimisation des performances thermiques",
      "Solutions adaptées à votre budget",
      "Suivi de projet",
    ],
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 3,
    title: "Livraison rapide",
    description: "Nous assurons une livraison rapide et fiable de vos commandes partout en Tunisie.",
    icon: Truck,
    details: [
      "Planification logistique optimisée",
      "Suivi en temps réel de votre commande",
      "Emballage sécurisé pour le transport",
      "Livraison à l'adresse de votre choix",
      "Service après-vente réactif",
    ],
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 4,
    title: "Installation",
    description:
      "Nous proposons des services d'installation professionnelle pour garantir les performances optimales de nos produits.",
    icon: Wrench,
    details: [
      "Équipe d'installateurs qualifiés",
      "Respect des normes et réglementations",
      "Installation rapide et soignée",
      "Minimisation des perturbations",
      "Vérification post-installation",
    ],
    image: "/placeholder.svg?height=400&width=600",
  },
]

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-6 py-12 lg:px-8">
      <div className="mx-auto max-w-2xl text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">Nos Services</h1>
        <p className="text-lg">
          Découvrez notre gamme complète de services pour répondre à tous vos besoins en produits en polystyrène
          expansé.
        </p>
      </div>

      {/* Services Overview */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {services.map((service) => (
          <Card key={service.id}>
            <CardHeader>
              <div className="mb-2 h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <service.icon className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>{service.title}</CardTitle>
              <CardDescription>{service.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {service.details.map((detail, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Service Process */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Notre Processus de Service</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            {
              step: 1,
              title: "Consultation",
              description: "Nous discutons de vos besoins spécifiques et de vos objectifs.",
            },
            {
              step: 2,
              title: "Proposition",
              description: "Nous élaborons une proposition détaillée adaptée à vos besoins et à votre budget.",
            },
            {
              step: 3,
              title: "Fabrication",
              description: "Nous fabriquons vos produits selon les spécifications convenues.",
            },
            {
              step: 4,
              title: "Livraison",
              description: "Nous livrons vos produits à l'adresse de votre choix dans les délais convenus.",
            },
          ].map((step) => (
            <div key={step.step} className="text-center">
              <div className="mx-auto h-16 w-16 rounded-full bg-primary flex items-center justify-center mb-4 text-primary-foreground font-bold text-xl">
                {step.step}
              </div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Service */}
      <div className="bg-muted rounded-lg p-8 mb-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-4">Service de fabrication sur mesure</h2>
            <p className="mb-4">
              Notre service de fabrication sur mesure est conçu pour répondre aux besoins spécifiques de chaque client.
              Que vous ayez besoin de coffrets tunnel pour volets roulants, de panneaux isolants ou de caissons
              d'emballage, nous pouvons fabriquer des produits en polystyrène expansé selon vos spécifications précises.
            </p>
            <p className="mb-6">
              Notre équipe d'experts travaille en étroite collaboration avec vous pour comprendre vos besoins et vous
              proposer les solutions les plus adaptées. Nous utilisons des matériaux de haute qualité et appliquons des
              contrôles rigoureux à chaque étape de la production pour garantir la qualité de nos produits.
            </p>
            <Button asChild>
              <Link href="/contact">
                Demander un devis <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="relative h-[300px] rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=300&width=500"
              alt="Service de fabrication sur mesure"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Ce que disent nos clients</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              content:
                "Le service de fabrication sur mesure de Caisson Tunisie a parfaitement répondu à nos besoins spécifiques. Leur équipe a été très professionnelle et réactive.",
              author: "Ahmed B.",
              company: "Entreprise de Construction",
            },
            {
              content:
                "Nous avons bénéficié du conseil technique de Caisson Tunisie pour notre projet d'isolation. Leurs recommandations nous ont permis de réaliser d'importantes économies d'énergie.",
              author: "Sami M.",
              company: "Promoteur Immobilier",
            },
            {
              content:
                "La livraison a été rapide et le service client exceptionnel. Les produits étaient exactement comme promis et de très haute qualité.",
              author: "Leila K.",
              company: "Société de Pêche",
            },
          ].map((testimonial, index) => (
            <Card key={index} className="bg-muted">
              <CardContent className="pt-6">
                <p className="italic mb-4">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-6">Prêt à collaborer avec nous ?</h2>
        <p className="max-w-2xl mx-auto mb-8">
          Contactez-nous dès aujourd'hui pour discuter de vos besoins en produits en polystyrène expansé et découvrir
          comment nos services peuvent vous aider.
        </p>
        <Button size="lg" asChild>
          <Link href="/contact">Demander un devis</Link>
        </Button>
      </div>
    </div>
  )
}
