import Image from "next/image"
import { CheckCircle, Users, Building, Award } from "lucide-react"

export const metadata = {
  title: "À propos - Société Caisson Tunisie",
  description:
    "Découvrez l'histoire, les valeurs et l'engagement de Société Caisson Tunisie, spécialiste en fabrication de produits en polystyrène expansé depuis 2020.",
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-6 py-12 lg:px-8">
      <div className="mx-auto max-w-2xl text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">À propos de nous</h1>
        <p className="text-lg">Découvrez l'histoire, les valeurs et l'engagement de Société Caisson Tunisie.</p>
      </div>

      {/* Company Overview */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div className="relative h-[400px] rounded-lg overflow-hidden">
          <Image
            src="/placeholder.svg?height=400&width=600"
            alt="Société Caisson Tunisie"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-6">Notre Histoire</h2>
          <p className="mb-4">
            Fondée en 2020, Société Caisson Tunisie est née de la vision d'entrepreneurs tunisiens passionnés par
            l'innovation dans le secteur de la construction et de l'isolation thermique.
          </p>
          <p className="mb-4">
            Face à une demande croissante de solutions d'isolation performantes et écologiques, nous avons décidé de
            nous spécialiser dans la fabrication de produits en polystyrène expansé (EPS), un matériau aux propriétés
            isolantes exceptionnelles.
          </p>
          <p>
            Depuis notre création, nous avons connu une croissance constante, devenant rapidement un acteur majeur dans
            notre secteur en Tunisie. Notre engagement envers la qualité et l'innovation nous a permis de gagner la
            confiance de nombreux clients dans les secteurs de la construction, de l'emballage et de l'agroalimentaire.
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="bg-muted rounded-lg p-8 mb-16">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Users className="mr-2 h-6 w-6 text-primary" />
              Notre Mission
            </h2>
            <p>
              Fournir des solutions en polystyrène expansé de haute qualité qui répondent aux besoins spécifiques de nos
              clients, tout en contribuant à l'efficacité énergétique des bâtiments et à la protection des produits
              sensibles lors du transport et du stockage.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Building className="mr-2 h-6 w-6 text-primary" />
              Notre Vision
            </h2>
            <p>
              Devenir le leader tunisien dans la fabrication de produits en polystyrène expansé, reconnu pour
              l'excellence de nos produits, notre innovation constante et notre engagement envers le développement
              durable.
            </p>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Nos Valeurs</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="mx-auto h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <CheckCircle className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Qualité</h3>
            <p>
              Nous nous engageons à maintenir les plus hauts standards de qualité dans tous nos produits et services, en
              utilisant des matériaux de premier choix et en appliquant des contrôles rigoureux à chaque étape de la
              production.
            </p>
          </div>
          <div className="text-center">
            <div className="mx-auto h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Award className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Innovation</h3>
            <p>
              Nous investissons continuellement dans la recherche et le développement pour améliorer nos produits et
              développer de nouvelles solutions qui répondent aux défis actuels et futurs de nos clients.
            </p>
          </div>
          <div className="text-center">
            <div className="mx-auto h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Satisfaction client</h3>
            <p>
              Nous plaçons nos clients au centre de toutes nos actions, en offrant un service personnalisé, réactif et
              professionnel qui dépasse leurs attentes et établit des relations durables basées sur la confiance.
            </p>
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Notre Équipe</h2>
        <p className="text-center max-w-3xl mx-auto mb-12">
          Notre équipe est composée de professionnels passionnés et expérimentés, dédiés à l'excellence et à
          l'innovation dans le domaine des produits en polystyrène expansé.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="text-center">
              <div className="relative h-64 w-64 mx-auto rounded-full overflow-hidden mb-4">
                <Image
                  src="/placeholder.svg?height=256&width=256"
                  alt={`Membre de l'équipe ${i}`}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">Nom du Membre {i}</h3>
              <p className="text-muted-foreground mb-2">Poste / Fonction</p>
              <p className="text-sm">Description brève du rôle et de l'expertise du membre de l'équipe.</p>
            </div>
          ))}
        </div>
      </div>

      {/* Facilities 
      <div>
        <h2 className="text-3xl font-bold text-center mb-8">Nos Installations</h2>
        <p className="text-center max-w-3xl mx-auto mb-12">
          Située dans la zone industrielle de Tunis, notre usine moderne est équipée des dernières technologies pour la
          fabrication de produits en polystyrène expansé de haute qualité.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt={`Installation ${i}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>*/}
    </div>
  )
}
