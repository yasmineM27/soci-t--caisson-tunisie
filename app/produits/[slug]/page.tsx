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

const products = [
  {
    id: 1,
    name: "Coffret Tunnel Volet Roulant",
    description: "Solution légère et isolante pour l'installation de volets roulants.",
    longDescription: `
      <p>Le Coffret Tunnel Volet Roulant en polystyrène expansé (EPS) haute densité, renforcé par des armatures métalliques galvanisées, offre une solution idéale combinant légèreté, robustesse et isolation thermique performante.</p>

      <p>Conçu pour une installation facile, il s'adapte aussi bien aux constructions neuves qu'aux rénovations. Ce coffret assure une excellente isolation thermique et acoustique tout en garantissant une longévité remarquable grâce à ses matériaux de haute qualité.</p>

      <p>Il est compatible avec la plupart des systèmes de volets roulants, traditionnels ou bloc-baie, et est fourni avec des accessoires tels que joues de fermeture et trappe de visite PVC pour une pose facilitée.</p>
    `,
    features: [
      "Légèreté et facilité d'installation",
      "Excellente isolation thermique et acoustique",
      "Résistance à l'humidité et aux intempéries",
      "Renforts en aluminium et treille soudé",
      "Compatible volets roulants traditionnels et bloc-baie",
      "Disponible en dimensions standards et sur mesure",
      "Résistant aux UV et moisissures",
      "Conforme aux normes CE et ISO 9001",
    ],
    specifications: [
      { name: "Matériau", value: "Polystyrène expansé (EPS) haute densité + renforts en aluminium et treille soudé" },
      { name: "Densité", value: "25-27 kg/m³" },
      { name: "Conductivité thermique", value: "0,035 W/m.K" },
      { name: "Résistance à la compression", value: "200 kPa" },
      { name: "Classement au feu", value: "Euroclasse E" },
      { name: "Absorption d'eau", value: "< 3%" },
      { name: "Dimensions standards", value: "6000 x 300 x 300 mm (L x H x P)" },
      { name: "Épaisseur des parois", value: "30 mm" },
      { name: "Isolation Thermique", value: "Coefficient R=3.5 W/(m²·K)" },
      { name: "Isolation Acoustique", value: "Atténuation =3.5 dB" },
    ],
    benefits: [
      { title: "Économies d'énergie", description: "Réduit les déperditions thermiques et diminue la consommation énergétique.", icon: "savings" },
      { title: "Installation rapide", description: "Léger et découpable facilement pour une pose rapide.", icon: "installation" },
      { title: "Durabilité", description: "Matériau résistant qui conserve ses propriétés isolantes dans le temps.", icon: "durability" },
      { title: "Confort acoustique", description: "Contribue à l'isolation phonique en réduisant les bruits extérieurs.", icon: "acoustic" },
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
        "Fixer le coffret avec les renforts selon les recommandations",
        "Installer le mécanisme du volet roulant",
        "Réaliser les finitions (enduit, peinture, etc.)",
      ],
      videoUrl: "#",
    },
    images: ["/stc/coff.jpeg", "/coffret3.png"],
    inStock: true,
    leadTime: "2-3 jours",
    minOrder: 1,
    certification: ["ISO 9001", "Marquage CE"],
    warranty: "2 ans",
    slug: "coffret-tunnel-volet-roulant",
    category: "coffrets",
    tags: ["isolation", "volet roulant", "construction", "rénovation"],
    relatedProducts: [2, 3, 4],
    reviews: { average: 4.7, count: 23 },
    faq: [
      {
        question: "Le coffret tunnel est-il compatible avec tous les types de volets roulants ?",
        answer: "Oui, il est compatible avec la plupart des volets roulants traditionnels et bloc-baie. Vérifiez toutefois les dimensions de votre volet.",
      },
      {
        question: "Quels accessoires sont fournis avec le coffret tunnel ?",
        answer: "Le coffret est livré avec renforts métalliques, joues de fermeture et trappe de visite en PVC.",
      },
    ],
    
    projects: [
      { name: "Résidence Les Oliviers", description: "Installation de 50 coffrets tunnel à Tunis", image: "/placeholder.svg?height=300&width=400", slug: "residence-les-oliviers" },
      { name: "Villa Jasmin", description: "Rénovation complète avec coffrets tunnel sur mesure", image: "/placeholder.svg?height=300&width=400", slug: "villa-jasmin" },
    ],
  },
  {
    id: 4,
    name: "Panneau Isolant 2cm",
    description: "Panneau isolant en polystyrène expansé d'épaisseur 2cm.",
    longDescription: `
      <p>Panneau isolant en polystyrène expansé d'épaisseur 2cm, idéal pour l'isolation thermique des murs, toitures et sols. Ce panneau offre une excellente résistance thermique et une grande légèreté, facilitant son installation.</p>
      <p>Il est adapté aux applications résidentielles et commerciales, garantissant une isolation durable et efficace.</p>
    `,
    features: [
      "Isolation thermique performante",
      "Léger et facile à manipuler",
      "Résistant à l'humidité",
      "Adapté aux applications résidentielles et commerciales",
    ],
    specifications: [
      { name: "Épaisseur", value: "2 cm" },
      { name: "Matériau", value: "Polystyrène expansé (EPS)" },
      { name: "Densité", value: "16 kg/m³(option de densité sur mesure)" },
      { name: "Conductivité thermique", value: "0,037 W/m.K" },
      { name: "Résistance à la compression", value: "100 kPa" },
      { name: "Classement au feu", value: "Euroclasse E" },
      { name: "Absorption d'eau", value: "< 5%" },
      { name: "Dimensions standards", value: "1000 x 1000 mm" },
    ],
    benefits: [
      { title: "Économies d'énergie", description: "Améliore l'efficacité énergétique des bâtiments.", icon: "savings" },
      { title: "Pose simple", description: "Facile à découper et à poser.", icon: "installation" },
      { title: "Durabilité", description: "Conserve ses performances dans le temps.", icon: "durability" },
    ],
    applications: [
      "Isolation de murs intérieurs et extérieurs",
      "Isolation de toitures",
      "Isolation de sols et planchers",
    ],
    installation: {
      steps: [
        "Préparer la surface (propre et sèche)",
        "Découper les panneaux aux dimensions souhaitées",
        "Coller ou fixer mécaniquement les panneaux",
        "Réaliser les finitions (enduit, bardage, etc.)",
      ],
      videoUrl: "#",
    },
    images: ["/plaque2cm.jpg"],
    inStock: true,
    leadTime: "1-2 jours",
    minOrder: 10,
    certification: ["ISO 9001", "Marquage CE"],
    warranty: "2 ans",
    slug: "panneau-isolant-2cm",
    category: "isolants",
    tags: ["isolation", "mur", "toiture", "sol"],
    relatedProducts: [1, 3, 5],
    reviews: { average: 4.6, count: 15 },
    faq: [
      {
        question: "Le panneau est-il adapté à l'isolation extérieure ?",
        answer: "Oui, il est utilisable en isolation thermique par l'extérieur (ITE) avec finition adaptée.",
      },
      {
        question: "Comment découper les panneaux ?",
        answer: "Utilisez un cutter ou une scie fine pour une coupe précise.",
      },
    ],
    
    projects: [
      { name: "Résidence Les Jasmins", description: "Isolation thermique extérieure des murs", image: "/placeholder.svg?height=300&width=400", slug: "residence-les-jasmins" },
      { name: "École Ibn Khaldoun", description: "Isolation des toitures plates", image: "/placeholder.svg?height=300&width=400", slug: "ecole-ibn-khaldoun" },
    ],
  },
  {
    id: 5,
    name: "Panneau Isolant 3cm",
    description: "Panneau isolant en polystyrène expansé d'épaisseur 3cm pour une isolation renforcée.",
    longDescription: `
      <p>Panneau isolant en polystyrène expansé d'épaisseur 3cm, offrant une isolation thermique supérieure pour les murs, toitures et sols. Ce panneau plus épais assure une meilleure performance thermique tout en conservant la légèreté caractéristique du polystyrène expansé.</p>
      <p>Idéal pour les projets nécessitant une isolation renforcée, il contribue significativement à l'efficacité énergétique des bâtiments résidentiels et commerciaux.</p>
    `,
    features: [
      "Isolation thermique renforcée",
      "Léger malgré son épaisseur accrue",
      "Excellente résistance à l'humidité",
      "Performance thermique supérieure",
      "Facile à découper et installer",
    ],
    specifications: [
      { name: "Épaisseur", value: "3 cm" },
      { name: "Matériau", value: "Polystyrène expansé (EPS)" },
      { name: "Densité", value: "16 kg/m³(option de densité sur mesure)" },
      { name: "Conductivité thermique", value: "0,037 W/m.K" },
      { name: "Résistance à la compression", value: "100 kPa" },
      { name: "Classement au feu", value: "Euroclasse E" },
      { name: "Absorption d'eau", value: "< 5%" },
      { name: "Dimensions standards", value: "1000 x 1000 mm" },
    ],
    benefits: [
      { title: "Économies d'énergie accrues", description: "Performance thermique supérieure pour une meilleure efficacité énergétique.", icon: "savings" },
      { title: "Installation simple", description: "Conserve la facilité de manipulation malgré l'épaisseur accrue.", icon: "installation" },
      { title: "Durabilité optimale", description: "Résistance et performance maintenues sur le long terme.", icon: "durability" },
      { title: "Confort thermique", description: "Améliore significativement le confort intérieur en toutes saisons.", icon: "comfort" },
    ],
    applications: [
      "Isolation renforcée de murs intérieurs et extérieurs",
      "Isolation performante de toitures",
      "Isolation thermique de sols et planchers",
      "Bâtiments à haute performance énergétique",
    ],
    installation: {
      steps: [
        "Préparer la surface (propre et sèche)",
        "Découper les panneaux aux dimensions souhaitées",
        "Coller ou fixer mécaniquement les panneaux",
        "Réaliser les finitions (enduit, bardage, etc.)",
      ],
      videoUrl: "#",
    },
    images: ["/pan1.jpg", "/pan2.webp","/pan3.jpg","/pan4.png","/pan5.png"],
    inStock: true,
    leadTime: "1-2 jours",
    minOrder: 10,
    certification: ["ISO 9001", "Marquage CE"],
    warranty: "2 ans",
    slug: "panneau-isolant-3cm",
    category: "panneaux",
    tags: ["isolation", "mur", "toiture", "sol", "performance énergétique"],
    relatedProducts: [1, 4, 6],
    reviews: { average: 4.8, count: 12 },
    faq: [
      {
        question: "Quelle est la différence de performance avec le panneau de 2cm ?",
        answer: "Le panneau de 3cm offre environ 50% de résistance thermique supplémentaire par rapport au modèle de 2cm, améliorant significativement l'isolation.",
      },
      {
        question: "Est-il compatible avec les systèmes d'isolation par l'extérieur ?",
        answer: "Oui, ce panneau est parfaitement adapté aux systèmes d'isolation thermique par l'extérieur (ITE) avec les finitions appropriées.",
      },
    ],
    
    projects: [
      { name: "Résidence Carthage", description: "Isolation thermique complète en rénovation", image: "/placeholder.svg?height=300&width=400", slug: "residence-carthage" },
      { name: "Centre commercial Azur", description: "Isolation des façades extérieures", image: "/placeholder.svg?height=300&width=400", slug: "centre-commercial-azur" },
    ],
  },
  {
    id: 6,
    name: "Panneau Isolant Sur Mesure",
    description: "Panneau isolant en polystyrène expansé fabriqué selon vos spécifications.",
    longDescription: `
      <p>Les panneaux isolants sur mesure en polystyrène expansé représentent la solution idéale pour les projets nécessitant des dimensions ou des caractéristiques spécifiques. Fabriqués selon vos exigences précises, ces panneaux s'adaptent parfaitement à toutes les configurations, même les plus complexes.</p>
      <p>Disponibles dans différentes épaisseurs (de 1cm à 20cm) et densités, ils peuvent être découpés avec précision pour s'ajuster à vos besoins particuliers. Cette flexibilité permet d'optimiser l'isolation thermique tout en minimisant les chutes et les pertes de matériaux.</p>
    `,
    features: [
      "Fabrication sur mesure selon vos spécifications",
      "Choix d'épaisseur de 1cm à 20cm",
      "Différentes densités disponibles",
      "Découpe précise aux dimensions requises",
      "Possibilité de formes complexes",
      "Optimisation des performances thermiques",
    ],
    specifications: [
      { name: "Épaisseur", value: "1cm à 20cm (selon spécifications)" },
      { name: "Matériau", value: "Polystyrène expansé (EPS)" },
      { name: "Densité", value: "15 à 30 kg/m³ (selon besoins)" },
      { name: "Conductivité thermique", value: "0,035 à 0,040 W/m.K (selon densité)" },
      { name: "Résistance à la compression", value: "70 à 250 kPa (selon densité)" },
      { name: "Classement au feu", value: "Euroclasse E (standard) ou B (ignifuge)" },
      { name: "Absorption d'eau", value: "< 5%" },
      { name: "Dimensions", value: "Sur mesure selon spécifications" },
    ],
    benefits: [
      { title: "Solution adaptée", description: "Parfaitement dimensionné pour votre projet spécifique.", icon: "custom" },
      { title: "Réduction des déchets", description: "Minimise les chutes et optimise l'utilisation des matériaux.", icon: "eco" },
      { title: "Performance optimisée", description: "Caractéristiques techniques adaptées à vos besoins précis.", icon: "performance" },
      { title: "Facilité d'installation", description: "S'intègre parfaitement aux configurations complexes.", icon: "installation" },
    ],
    applications: [
      "Projets d'isolation avec contraintes dimensionnelles",
      "Rénovations de bâtiments anciens",
      "Isolation de structures non standard",
      "Applications industrielles spécifiques",
      "Isolation de canalisations et équipements",
    ],
    installation: {
      steps: [
        "Fournir les spécifications précises (dimensions, épaisseur, densité)",
        "Validation du plan de découpe",
        "Fabrication sur mesure",
        "Installation selon les recommandations adaptées au projet",
      ],
      videoUrl: "#",
    },
    images: ["/plaque_isolant_sur_mesure.jpg"],
    inStock: false,
    leadTime: "2-4 jours",
    minOrder: 1,
    certification: ["ISO 9001", "Marquage CE"],
    warranty: "2 ans",
    slug: "panneau-isolant-sur-mesure",
    category: "panneaux",
    tags: ["isolation", "sur-mesure", "personnalisation", "projet spécifique"],
    relatedProducts: [4, 5, 11],
    reviews: { average: 4.9, count: 8 },
    faq: [
      {
        question: "Comment spécifier les dimensions dont j'ai besoin ?",
        answer: "Vous pouvez nous fournir un plan détaillé ou des mesures précises. Notre équipe technique peut également vous aider à déterminer les dimensions optimales pour votre projet.",
      },
      {
        question: "Quel est le délai de fabrication pour les panneaux sur mesure ?",
        answer: "Le délai standard est de 2 à 4 jours selon la complexité et le volume de la commande. Des délais express peuvent être proposés pour les projets urgents.",
      },
    ],
    
    projects: [
      { name: "Hôtel Médina", description: "Isolation acoustique et thermique sur mesure", image: "/placeholder.svg?height=300&width=400", slug: "hotel-medina" },
      { name: "Usine agroalimentaire Sfax", description: "Panneaux isolants pour chambres froides", image: "/placeholder.svg?height=300&width=400", slug: "usine-sfax" },
    ],
  },
  {
    id: 7,
    name: "Fish Box 5kg",
    description: "Fish Box 5kg - Caisson d'emballage isotherme pour produits de la pêche.",
    longDescription: `
      <p>La Fish Box 5kg est un caisson isotherme en polystyrène expansé spécialement conçu pour le transport et la conservation des produits de la pêche. Avec une capacité de 5kg, elle offre une solution idéale pour les petites quantités de produits frais.</p>
      <p>Sa conception assure une excellente isolation thermique, maintenant les produits à basse température pendant plusieurs heures. Légère mais robuste, elle protège efficacement le contenu pendant le transport tout en facilitant la manutention.</p>
    `,
    features: [
      "Capacité de 5kg de produits frais",
      "Excellente isolation thermique",
      "Légèreté pour une manipulation facile",
      "Résistance à l'humidité",
      "Empilable pour un stockage optimisé",
      "100% recyclable",
    ],
    specifications: [
      { name: "Capacité", value: "5 kg" },
      { name: "Matériau", value: "Polystyrène expansé (EPS) alimentaire" },
      { name: "Densité", value: "22 kg/m³" },
      { name: "Dimensions extérieures", value: "400 x 300 x 150 mm (L x l x H)" },
      { name: "Dimensions intérieures", value: "360 x 260 x 120 mm (L x l x H)" },
      { name: "Épaisseur des parois", value: "20 mm" },
      { name: "Poids à vide", value: "250 g" },
      { name: "Couleur", value: "Blanc" },
    ],
    benefits: [
      { title: "Conservation optimale", description: "Maintient la fraîcheur des produits pendant plusieurs heures.", icon: "fresh" },
      { title: "Facilité de transport", description: "Légère et ergonomique pour une manipulation sans effort.", icon: "transport" },
      { title: "Hygiène garantie", value: "Matériau alimentaire conforme aux normes sanitaires.", icon: "hygiene" },
      { title: "Écologique", description: "Entièrement recyclable pour un impact environnemental réduit.", icon: "eco" },
    ],
    applications: [
      "Transport de poissons et fruits de mer frais",
      "Vente directe de produits de la pêche",
      "Marchés et poissonneries",
      "Usage domestique pour pêcheurs amateurs",
    ],
    installation: {
      steps: [
        "Refroidir préalablement la caisse (recommandé)",
        "Placer éventuellement des pains de glace au fond",
        "Disposer les produits de la pêche",
        "Ajouter de la glace si nécessaire",
        "Fermer hermétiquement",
      ],
      videoUrl: "#",
    },
    images: ["/fish5kg.jpg"],
    inStock: true,
    leadTime: "Immédiat (stock) ou 1 jour",
    minOrder: 20,
    certification: ["Contact alimentaire", "Norme ISO 9001"],
    warranty: "Non applicable",
    slug: "fish-box-5kg",
    category: "fishbox",
    tags: ["pêche", "poisson", "transport", "isotherme", "frais"],
    relatedProducts: [8, 9, 10],
    reviews: { average: 4.5, count: 18 },
    faq: [
      {
        question: "Combien de temps les produits restent-ils frais dans la Fish Box ?",
        answer: "Avec des pains de glace appropriés, les produits peuvent rester à température optimale pendant 12 à 24 heures selon les conditions extérieures.",
      },
      {
        question: "Les Fish Box sont-elles réutilisables ?",
        answer: "Oui, elles peuvent être nettoyées et réutilisées plusieurs fois si elles sont manipulées avec soin.",
      },
    ],
    
    projects: [
      { name: "Coopérative de pêcheurs de Bizerte", description: "Fourniture de Fish Box pour la vente directe", image: "/placeholder.svg?height=300&width=400", slug: "cooperative-bizerte" },
    ],
  },
  {
    id: 8,
    name: "Fish Box 6kg",
    description: "Fish Box 6kg - Caisson d'emballage isotherme pour produits de la pêche.",
    longDescription: `
      <p>La Fish Box 6kg est un caisson isotherme en polystyrène expansé conçu pour le transport et la conservation des produits de la pêche. Avec une capacité légèrement supérieure à la version 5kg, elle offre un excellent compromis entre volume et maniabilité.</p>
      <p>Sa conception optimisée assure une isolation thermique performante, maintenant les produits frais pendant une durée prolongée. Robuste et légère, elle protège efficacement le contenu tout en facilitant la logistique et le transport.</p>
    `,
    features: [
      "Capacité de 6kg de produits frais",
      "Isolation thermique performante",
      "Conception légère et robuste",
      "Résistance à l'humidité et aux chocs",
      "Empilable pour un stockage et transport optimisés",
      "100% recyclable",
    ],
    specifications: [
      { name: "Capacité", value: "6 kg" },
      { name: "Matériau", value: "Polystyrène expansé (EPS) alimentaire" },
      { name: "Densité", value: "22 kg/m³" },
      { name: "Dimensions extérieures", value: "430 x 330 x 160 mm (L x l x H)" },
      { name: "Dimensions intérieures", value: "390 x 290 x 130 mm (L x l x H)" },
      { name: "Épaisseur des parois", value: "20 mm" },
      { name: "Poids à vide", value: "280 g" },
      { name: "Couleur", value: "Blanc" },
    ],
    benefits: [
      { title: "Fraîcheur prolongée", description: "Maintient la chaîne du froid pour une fraîcheur optimale.", icon: "fresh" },
      { title: "Logistique simplifiée", description: "Format standard adapté aux véhicules de livraison.", icon: "logistics" },
      { title: "Sécurité alimentaire", description: "Matériau conforme aux normes de contact alimentaire.", icon: "safety" },
      { title: "Solution économique", description: "Excellent rapport qualité-prix pour le transport de produits frais.", icon: "economy" },
    ],
    applications: [
      "Transport professionnel de produits de la pêche",
      "Distribution aux restaurants et détaillants",
      "Marchés de gros et de détail",
      "Expéditions de produits frais",
    ],
    installation: {
      steps: [
        "Pré-refroidir la caisse si possible",
        "Placer une couche de glace ou des pains de glace",
        "Disposer les produits de la pêche",
        "Compléter avec de la glace si nécessaire",
        "Fermer et sceller si besoin",
      ],
      videoUrl: "#",
    },
    images: ["/fish6kg.jpg"],
    inStock: true,
    leadTime: "Immédiat (stock) ou 1 jour",
    minOrder: 20,
    certification: ["Contact alimentaire", "Norme ISO 9001"],
    warranty: "Non applicable",
    slug: "fish-box-6kg",
    category: "fishbox",
    tags: ["pêche", "poisson", "transport", "isotherme", "frais"],
    relatedProducts: [7, 9, 10],
    reviews: { average: 4.6, count: 15 },
    faq: [
      {
        question: "Quelle est la différence principale avec la Fish Box 5kg ?",
        answer: "La Fish Box 6kg offre environ 20% de capacité supplémentaire tout en conservant un format compact, idéal pour les livraisons commerciales de taille moyenne.",
      },
      {
        question: "Peut-on personnaliser ces caisses avec un logo ?",
        answer: "Oui, pour les commandes en volume, nous proposons un service d'impression de logo sur les Fish Box.",
      },
    ],
    
    projects: [
      { name: "Réseau de poissonneries Méditerranée", description: "Fourniture de Fish Box pour la distribution quotidienne", image: "/placeholder.svg?height=300&width=400", slug: "reseau-poissonneries" },
    ],
  },
  {
    id: 9,
    name: "Fish Box 10kg",
    description: "Fish Box 10kg - Caisson d'emballage isotherme pour produits de la pêche.",
    longDescription: `
      <p>La Fish Box 10kg est un caisson isotherme en polystyrène expansé de capacité moyenne, idéal pour le transport et la conservation des produits de la pêche en quantité significative. Cette taille est particulièrement adaptée aux besoins professionnels et commerciaux.</p>
      <p>Offrant une excellente isolation thermique, elle maintient efficacement la chaîne du froid pendant le transport et le stockage. Sa conception robuste assure une protection optimale des produits tout en restant suffisamment légère pour une manipulation aisée.</p>
    `,
    features: [
      "Capacité de 10kg de produits frais",
      "Isolation thermique supérieure",
      "Structure renforcée pour une meilleure protection",
      "Excellente résistance à l'humidité",
      "Design empilable pour optimiser le stockage",
      "100% recyclable",
    ],
    specifications: [
      { name: "Capacité", value: "10 kg" },
      { name: "Matériau", value: "Polystyrène expansé (EPS) alimentaire" },
      { name: "Densité", value: "25 kg/m³" },
      { name: "Dimensions extérieures", value: "600 x 400 x 180 mm (L x l x H)" },
      { name: "Dimensions intérieures", value: "560 x 360 x 150 mm (L x l x H)" },
      { name: "Épaisseur des parois", value: "20 mm" },
      { name: "Poids à vide", value: "450 g" },
      { name: "Couleur", value: "Blanc" },
    ],
    benefits: [
      { title: "Conservation optimale", description: "Maintient la fraîcheur des produits pendant 24-36 heures avec glace appropriée.", icon: "fresh" },
      { title: "Usage professionnel", description: "Format adapté aux besoins des pêcheurs et distributeurs.", icon: "professional" },
      { title: "Polyvalence", description: "Convient à divers types de produits de la mer.", icon: "versatility" },
      { title: "Durabilité", description: "Construction robuste permettant plusieurs utilisations.", icon: "durability" },
    ],
    applications: [
      "Distribution commerciale de produits de la pêche",
      "Approvisionnement des restaurants et hôtels",
      "Transport entre sites de pêche et points de vente",
      "Stockage temporaire en chambre froide",
    ],
    installation: {
      steps: [
        "Pré-refroidir la caisse avant utilisation",
        "Disposer une couche de glace pilée au fond",
        "Arranger les produits de la pêche de façon optimale",
        "Ajouter de la glace entre et sur les produits",
        "Fermer et sécuriser pour le transport",
      ],
      videoUrl: "#",
    },
    images: ["/fish10kg.jpg"],
    inStock: true,
    leadTime: "1 jour",
    minOrder: 10,
    certification: ["Contact alimentaire", "Norme ISO 9001"],
    warranty: "Non applicable",
    slug: "fish-box-10kg",
    category: "fishbox",
    tags: ["pêche", "poisson", "transport", "isotherme", "frais", "commercial"],
    relatedProducts: [7, 8, 10],
    reviews: { average: 4.8, count: 22 },
    faq: [
      {
        question: "Cette taille est-elle adaptée pour l'expédition par transporteur ?",
        answer: "Oui, la Fish Box 10kg est dimensionnée pour s'intégrer parfaitement dans les circuits logistiques standards et peut être expédiée par la plupart des transporteurs.",
      },
      {
        question: "Quelle quantité de glace est recommandée pour cette taille de caisse ?",
        answer: "Pour une conservation optimale, nous recommandons environ 3-4kg de glace pilée ou 2-3 pains de glace de grande taille.",
      },
    ],
    
    projects: [
      { name: "Criée du Port de Sfax", description: "Fourniture de Fish Box pour les ventes aux enchères", image: "/placeholder.svg?height=300&width=400", slug: "criee-sfax" },
      { name: "Exportateur de produits marins", description: "Utilisation pour expéditions nationales", image: "/placeholder.svg?height=300&width=400", slug: "exportateur-produits-marins" },
    ],
  },
  {
    id: 10,
    name: "Fish Box 20kg (Grand Capacité)",
    description: "Fish Box 20kg - Caisson d'emballage isotherme grande capacité pour le transport de produits frais.",
    longDescription: `
      <p>La Fish Box 20kg est notre solution isotherme de grande capacité, spécialement conçue pour le transport et la conservation de volumes importants de produits de la pêche. Ce format professionnel répond aux besoins des pêcheurs commerciaux, grossistes et exportateurs.</p>
      <p>Fabriquée en polystyrène expansé haute densité, elle offre une isolation thermique exceptionnelle et une résistance mécanique renforcée. Sa conception optimisée permet de maintenir la chaîne du froid pendant une durée prolongée, garantissant la qualité et la fraîcheur des produits même lors de transports longue distance.</p>
    `,
    features: [
      "Grande capacité de 20kg de produits frais",
      "Isolation thermique professionnelle",
      "Structure ultra-renforcée pour résister aux manipulations intensives",
      "Parois épaisses pour une meilleure conservation du froid",
      "Design optimisé pour le transport logistique",
      "100% recyclable",
    ],
    specifications: [
      { name: "Capacité", value: "20 kg" },
      { name: "Matériau", value: "Polystyrène expansé (EPS) haute densité alimentaire" },
      { name: "Densité", value: "28 kg/m³" },
      { name: "Dimensions extérieures", value: "800 x 500 x 230 mm (L x l x H)" },
      { name: "Dimensions intérieures", value: "750 x 450 x 190 mm (L x l x H)" },
      { name: "Épaisseur des parois", value: "25 mm" },
      { name: "Poids à vide", value: "750 g" },
      { name: "Couleur", value: "Blanc" },
    ],
    benefits: [
      { title: "Logistique professionnelle", description: "Format adapté aux chaînes logistiques commerciales.", icon: "logistics" },
      { title: "Conservation longue durée", description: "Maintient la température jusqu'à 48h avec glace appropriée.", icon: "duration" },
      { title: "Économies d'échelle", description: "Réduit les coûts de transport par kg de produit.", icon: "savings" },
      { title: "Protection maximale", description: "Sécurise les produits de valeur pendant le transport.", icon: "protection" },
    ],
    applications: [
      "Transport maritime et terrestre de produits de la pêche",
      "Exportation de produits frais",
      "Approvisionnement de grandes surfaces et chaînes hôtelières",
      "Stockage temporaire en entrepôt frigorifique",
    ],
    installation: {
      steps: [
        "Pré-refroidir la caisse plusieurs heures avant utilisation",
        "Disposer une couche de glace conséquente au fond",
        "Arranger les produits en couches séparées par de la glace",
        "Compléter avec une couche supérieure de glace",
        "Fermer hermétiquement et sécuriser pour le transport",
      ],
      videoUrl: "#",
    },
    images: ["/fish20kg.jpg","/fish1.jpg",],
    inStock: true,
    leadTime: "1-2 jours",
    minOrder: 5,
    certification: ["Contact alimentaire", "Norme ISO 9001", "Certification export"],
    warranty: "Non applicable",
    slug: "fish-box-20kg",
    category: "fishbox",
    tags: ["pêche", "poisson", "transport", "isotherme", "frais", "export", "grande capacité"],
    relatedProducts: [7, 8, 9],
    reviews: { average: 4.9, count: 17 },
    faq: [
      {
        question: "Cette caisse est-elle adaptée à l'exportation internationale ?",
        answer: "Oui, la Fish Box 20kg est spécifiquement conçue pour répondre aux exigences des transports internationaux et maintenir la chaîne du froid sur de longues distances.",
      },
      {
        question: "Peut-on transporter d'autres produits que les produits de la mer ?",
        answer: "Absolument, cette caisse convient également au transport de viandes, produits laitiers et autres denrées périssables nécessitant une chaîne du froid.",
      },
    ],
    
    projects: [
      { name: "Groupement d'exportateurs tunisiens", description: "Fourniture de Fish Box pour l'export vers l'Europe", image: "/placeholder.svg?height=300&width=400", slug: "exportateurs-tunisiens" },
      { name: "Chaîne de restaurants de fruits de mer", description: "Approvisionnement quotidien en produits frais", image: "/placeholder.svg?height=300&width=400", slug: "restaurants-fruits-mer" },
    ],
  },
  {
    id: 11,
    name: "Polystyrène expansé ",
    description: "Polystyrène expansé  pour isolation thermique et emballage.",
    longDescription: `
      <p>Le polystyrène expansé (PSE)  est notre solution polyvalente pour diverses applications d'isolation et d'emballage. Ce matériau léger et économique offre un excellent rapport qualité-prix pour les usages courants.</p>
      <p>Composé à 98% d'air emprisonné dans une structure cellulaire fermée, il présente d'excellentes propriétés isolantes thermiques tout en étant facile à manipuler et à découper. Sa densité standard de 15-20 kg/m³ en fait un choix idéal pour les applications ne nécessitant pas de résistance mécanique exceptionnelle.</p>
    `,
    features: [
      "Excellente isolation thermique",
      "Légèreté et facilité de manipulation",
      "Résistance à l'humidité",
      "Facilement découpable et façonnable",
      "Économique et rentable",
      "100% recyclable",
    ],
    specifications: [
      { name: "Matériau", value: "Polystyrène expansé (EPS)" },
      { name: "Densité", value: "15-20 kg/m³" },
      { name: "Conductivité thermique", value: "0,038-0,040 W/m.K" },
      { name: "Résistance à la compression", value: "70-100 kPa" },
      { name: "Classement au feu", value: "Euroclasse E" },
      { name: "Absorption d'eau", value: "< 5%" },
      { name: "Formats disponibles", value: "Plaques, blocs, formes moulées" },
      { name: "Couleur", value: "Blanc" },
    ],
    benefits: [
      { title: "Polyvalence", description: "Adapté à de nombreuses applications courantes.", icon: "versatility" },
      { title: "Facilité d'utilisation", description: "Simple à découper et à installer sans équipement spécialisé.", icon: "ease" },
      { title: "Économique", description: "Excellent rapport performance/prix pour les applications standard.", icon: "economy" },
      { title: "Écologique", description: "Entièrement recyclable et nécessitant peu d'énergie pour sa production.", icon: "eco" },
    ],
    applications: [
      "Isolation thermique de base pour bâtiments",
      "Emballage de protection pour produits fragiles",
      "Calage et remplissage dans les colis",
      "Supports pour l'artisanat et les loisirs créatifs",
      "Base pour maquettes et modélisme",
    ],
    installation: {
      steps: [
        "Mesurer précisément les dimensions requises",
        "Découper à l'aide d'un cutter, fil chaud ou scie fine",
        "Installer selon les besoins spécifiques de l'application",
        "Fixer avec des adhésifs compatibles si nécessaire",
      ],
      videoUrl: "#",
    },
    images: ["/poly1.jpg","/poly3.webp"],
    inStock: true,
    leadTime: "Immédiat (stock) ou 1 jour",
    minOrder: 10,
    certification: ["ISO 9001", "Marquage CE"],
    warranty: "2 ans",
    slug: "polystyrene-expanse",
    category: "polystyrene",
    tags: ["isolation", "emballage", "protection", "légèreté"],
    relatedProducts: [4, 5, 12, 13],
    reviews: { average: 4.5, count: 25 },
    faq: [
      {
        question: "Quelle est la différence avec le polystyrène haute densité ?",
        answer: "Le polystyrène standard a une densité plus faible (15-20 kg/m³) que la version haute densité, ce qui le rend plus léger et plus économique, mais moins résistant mécaniquement.",
      },
      {
        question: "Comment découper proprement le polystyrène expansé ?",
        answer: "Pour une découpe nette, utilisez un cutter bien aiguisé, un fil chaud ou une scie à fine denture. Évitez les mouvements brusques pour ne pas fragmenter le matériau.",
      },
    ],
    
    projects: [
      { name: "Chantiers résidentiels Tunis", description: "Isolation thermique de base pour logements", image: "/placeholder.svg?height=300&width=400", slug: "chantiers-tunis" },
      { name: "Entreprise d'emballage Sousse", description: "Protection de produits électroniques", image: "/placeholder.svg?height=300&width=400", slug: "emballage-sousse" },
    ],
  },
  {
  id: 12,
  name: "Polystyrène brouillé",
  description: "Polystyrène brouillé pour applications structurelles.",
  longDescription: `
    <p>Le polystyrène brouillé est une solution robuste et polyvalente pour les applications nécessitant une résistance mécanique supérieure. Sa texture brouillée lui confère une meilleure homogénéité et un comportement mécanique optimisé.</p>
    <p>Composé de billes de polystyrène fusionnées de manière irrégulière, il présente de bonnes propriétés structurelles tout en conservant une légèreté appréciable pour diverses utilisations.</p>
  `,
  features: [
    "Bonne résistance mécanique",
    "Structure homogène et robuste",
    "Légèreté relative",
    "Facilité de découpe et façonnage",
    "Économique",
    "100% recyclable",
  ],
  specifications: [
    { name: "Matériau", value: "Polystyrène brouillé (EPS modifié)" },
    { name: "Densité", value: "20-30 kg/m³" },
    { name: "Conductivité thermique", value: "0,037-0,039 W/m.K" },
    { name: "Résistance à la compression", value: "100-150 kPa" },
    { name: "Classement au feu", value: "Euroclasse E" },
    { name: "Absorption d'eau", value: "< 4%" },
    { name: "Formats disponibles", value: "Plaques, blocs, éléments moulés" },
    { name: "Couleur", value: "Blanc-gris" },
  ],
  benefits: [
    { title: "Solidité", description: "Convient aux applications structurelles légères.", icon: "strength" },
    { title: "Facilité de pose", description: "Facile à manipuler, découper et fixer.", icon: "ease" },
    { title: "Économique", description: "Bon rapport qualité/prix pour des applications techniques.", icon: "economy" },
    { title: "Écologique", description: "Matériau recyclable.", icon: "eco" },
  ],
  applications: [
    "Isolation de murs et toitures avec contraintes mécaniques",
    "Emballages techniques et industriels",
    "Calage de pièces lourdes",
    "Support pour panneaux techniques ou décoratifs",
  ],
  installation: {
    steps: [
      "Mesurer les dimensions nécessaires",
      "Découper avec un cutter, fil chaud ou scie",
      "Installer selon les contraintes de l’application",
      "Fixer ou caler les éléments au besoin",
    ],
    videoUrl: "#",
  },
  images: ["/poly1.jpg", "/poly3.webp"],
  inStock: true,
  leadTime: "Sous 2 jours",
  minOrder: 10,
  certification: ["ISO 9001", "Marquage CE"],
  warranty: "2 ans",
    slug: "polystyrene-Brouillé",
  category: "polystyrene",
  tags: ["structurel", "isolation", "emballage", "protection"],
  relatedProducts: [11, 5, 13],
  reviews: { average: 4.4, count: 18 },
  faq: [
    {
      question: "Quelle différence avec le polystyrène expansé standard ?",
      answer: "Le polystyrène brouillé a une densité plus élevée et une structure plus homogène, ce qui lui confère une meilleure résistance mécanique pour des applications plus techniques.",
    },
    {
      question: "Comment découper proprement le polystyrène brouillé ?",
      answer: "Utilisez un cutter aiguisé, un fil chaud ou une scie fine. La structure est légèrement plus dense mais reste facile à découper proprement.",
    },
  ],
 
  projects: [
    { name: "Isolation industrielle Tunis", description: "Isolation de toitures techniques", image: "/placeholder.svg?height=300&width=400", slug: "isolation-tunis" },
    { name: "Entreprise de calage Sfax", description: "Emballages techniques de pièces lourdes", image: "/placeholder.svg?height=300&width=400", slug: "calage-sfax" },
  ],
},

  {
    id: 13,
    name: "Polystyrène Brouillé ",
    description: "Polystyrène Brouillé  pour isolation thermique et emballage.",
    longDescription: `
      <p>Le polystyrène Brouillé (PSE)  est notre solution polyvalente pour diverses applications d'isolation et d'emballage. Ce matériau léger et économique offre un excellent rapport qualité-prix pour les usages courants.</p>
      <p>Composé à 98% d'air emprisonné dans une structure cellulaire fermée, il présente d'excellentes propriétés isolantes thermiques tout en étant facile à manipuler et à découper. Sa densité standard de 15-20 kg/m³ en fait un choix idéal pour les applications ne nécessitant pas de résistance mécanique exceptionnelle.</p>
    `,
    features: [
      "Excellente isolation thermique",
      "Légèreté et facilité de manipulation",
      "Résistance à l'humidité",
      "Facilement découpable et façonnable",
      "Économique et rentable",
      "100% recyclable",
    ],
    specifications: [
      { name: "Matériau", value: "Polystyrène expansé (EPS)" },
      { name: "Densité", value: "15-20 kg/m³" },
      { name: "Conductivité thermique", value: "0,038-0,040 W/m.K" },
      { name: "Résistance à la compression", value: "70-100 kPa" },
      { name: "Classement au feu", value: "Euroclasse E" },
      { name: "Absorption d'eau", value: "< 5%" },
      { name: "Formats disponibles", value: "Plaques, blocs, formes moulées" },
      { name: "Couleur", value: "Blanc" },
    ],
    benefits: [
      { title: "Polyvalence", description: "Adapté à de nombreuses applications courantes.", icon: "versatility" },
      { title: "Facilité d'utilisation", description: "Simple à découper et à installer sans équipement spécialisé.", icon: "ease" },
      { title: "Économique", description: "Excellent rapport performance/prix pour les applications standard.", icon: "economy" },
      { title: "Écologique", description: "Entièrement recyclable et nécessitant peu d'énergie pour sa production.", icon: "eco" },
    ],
    applications: [
      "Isolation thermique de base pour bâtiments",
      "Emballage de protection pour produits fragiles",
      "Calage et remplissage dans les colis",
      "Supports pour l'artisanat et les loisirs créatifs",
      "Base pour maquettes et modélisme",
    ],
    installation: {
      steps: [
        "Mesurer précisément les dimensions requises",
        "Découper à l'aide d'un cutter, fil chaud ou scie fine",
        "Installer selon les besoins spécifiques de l'application",
        "Fixer avec des adhésifs compatibles si nécessaire",
      ],
      videoUrl: "#",
    },
    images: ["/epsBrouille.jpg"],
    inStock: true,
    leadTime: "Immédiat (stock) ou 1 jour",
    minOrder: 10,
    certification: ["ISO 9001", "Marquage CE"],
    warranty: "2 ans",
    slug: "polystyrene-brouille-2",
    category: "polystyrene",
    tags: ["isolation", "emballage", "protection", "légèreté"],
    relatedProducts: [4, 5, 12, 13],
    reviews: { average: 4.5, count: 25 },
    faq: [
      {
        question: "Quelle est la différence avec le polystyrène haute densité ?",
        answer: "Le polystyrène standard a une densité plus faible (15-20 kg/m³) que la version haute densité, ce qui le rend plus léger et plus économique, mais moins résistant mécaniquement.",
      },
      {
        question: "Comment découper proprement le polystyrène expansé ?",
        answer: "Pour une découpe nette, utilisez un cutter bien aiguisé, un fil chaud ou une scie à fine denture. Évitez les mouvements brusques pour ne pas fragmenter le matériau.",
      },
    ],
   
    projects: [
      { name: "Chantiers résidentiels Tunis", description: "Isolation thermique de base pour logements", image: "/placeholder.svg?height=300&width=400", slug: "chantiers-tunis" },
      { name: "Entreprise d'emballage Sousse", description: "Protection de produits électroniques", image: "/placeholder.svg?height=300&width=400", slug: "emballage-sousse" },
    ],
  },
  
];

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
          
          <TabsContent value="faq" className="p-6 bg-muted/30 rounded-md mt-6">
            <h3 className="text-xl font-bold mb-6">Questions fréquentes</h3>
            <ProductFaq faqItems={product.faq} />
          </TabsContent>
        </Tabs>
      </div>

      {/* Projects using this product 
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
      )}*/}

      {/* Reviews */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Avis clients</h2>
        <ProductReviews productId={product.id} />
      </div>

      
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
