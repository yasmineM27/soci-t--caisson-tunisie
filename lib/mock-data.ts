// Données statiques pour simuler les données qui viendraient normalement d'un backend

// Types
export interface Product {
    id: string
    name: string
    slug: string
    description: string
    longDescription?: string
    images: string[]
    inStock: boolean
    features: string[]
    specifications?: Record<string, string>
    category: Category
    tags: Tag[]
    avgRating?: number
    reviewCount?: number
  }
  
  export interface Category {
    id: string
    name: string
    slug: string
    description?: string
  }
  
  export interface Tag {
    id: string
    name: string
  }
  
  export interface Review {
    id: string
    rating: number
    title?: string
    content?: string
    user: {
      id: string
      name: string
    }
    createdAt: string
  }
  
  export interface Project {
    id: string
    name: string
    slug: string
    description: string
    fullDescription?: string
    images: string[]
    category: "RESIDENTIAL" | "COMMERCIAL" | "INDUSTRIAL"
    location: string
    year: string
    client: string
    products: string[]
  }
  
  export interface BlogPost {
    id: string
    title: string
    slug: string
    excerpt: string
    content: string
    image?: string
    author: string
    category: "ISOLATION" | "PRODUCTS" | "INNOVATION" | "ADVICE"
    tags: string[]
    published: boolean
    createdAt: string
  }
  
  export interface Testimonial {
    id: number
    author: string
    avatar?: string
    role?: string
    company?: string
    rating: number
    text: string
  }
  
  export interface Brochure {
    id: number
    title: string
    description: string
    thumbnail: string
    fileUrl: string
    fileSize: string
    previewImages?: string[]
  }
  
  // Données statiques
  export const categories: Category[] = [
    {
      id: "1",
      name: "Coffrets Tunnel",
      slug: "coffrets",
      description: "Coffrets tunnel pour volets roulants et autres applications",
    },
    {
      id: "2",
      name: "Panneaux Isolants",
      slug: "panneaux",
      description: "Panneaux isolants en polystyrène expansé pour l'isolation thermique",
    },
    {
      id: "3",
      name: "Fish Box",
      slug: "fishbox",
      description: "Caissons d'emballage isothermes pour le transport de produits frais",
    },
  ]
  
  export const tags: Tag[] = [
    { id: "1", name: "isolation" },
    { id: "2", name: "volet roulant" },
    { id: "3", name: "construction" },
    { id: "4", name: "rénovation" },
    { id: "5", name: "emballage" },
    { id: "6", name: "transport" },
    { id: "7", name: "froid" },
  ]
  
  export const products: Product[] = [
    {
      id: "1",
      name: "Coffret Tunnel pour Volet Roulant",
      slug: "coffret-tunnel-volet-roulant",
      description: "Solution légère et isolante pour l'installation de volets roulants.",
      longDescription: `
        <p>Le coffret tunnel pour volet roulant en polystyrène expansé (EPS) est une solution innovante qui combine légèreté et performance d'isolation thermique. Conçu pour faciliter l'installation des volets roulants, ce coffret tunnel offre une excellente isolation thermique et acoustique, contribuant ainsi à l'efficacité énergétique globale du bâtiment.</p>
        
        <p>Sa structure en polystyrène expansé garantit une durabilité exceptionnelle tout en étant facile à manipuler et à installer. Nos coffrets tunnel sont fabriqués avec des matériaux de haute qualité pour assurer une longévité maximale et une résistance optimale aux conditions climatiques.</p>
        
        <p>Disponible en différentes dimensions pour s'adapter à tous types d'ouvertures, notre coffret tunnel pour volet roulant est la solution idéale pour les constructions neuves comme pour les projets de rénovation.</p>
      `,
      images: ["/placeholder.svg?height=600&width=800"],
      inStock: true,
      features: [
        "Légèreté et facilité d'installation",
        "Excellente isolation thermique et acoustique",
        "Résistance à l'humidité",
        "Compatible avec la plupart des systèmes de volets roulants",
      ],
      specifications: {
        Matériau: "Polystyrène expansé (EPS)",
        Densité: "30 kg/m³",
        "Conductivité thermique": "0,035 W/mK",
        "Résistance à la compression": "200 kPa",
        "Classement au feu": "Euroclasse E",
        "Absorption d'eau": "< 3%",
      },
      category: categories[0],
      tags: [tags[0], tags[1], tags[2]],
      avgRating: 4.7,
      reviewCount: 12,
    },
    {
      id: "2",
      name: "Panneau Isolant EPS 100",
      slug: "panneau-isolant-eps-100",
      description: "Panneau isolant en polystyrène expansé pour l'isolation thermique des bâtiments.",
      longDescription: `
        <p>Le panneau isolant EPS 100 est fabriqué en polystyrène expansé de haute qualité, offrant une excellente isolation thermique pour les bâtiments résidentiels et commerciaux. Sa structure cellulaire fermée lui confère une résistance exceptionnelle à l'humidité et aux moisissures.</p>
        
        <p>Facile à manipuler et à installer, ce panneau isolant est idéal pour l'isolation des murs, des toits et des planchers. Sa légèreté facilite la mise en œuvre tout en garantissant une performance d'isolation optimale.</p>
        
        <p>Le panneau isolant EPS 100 contribue significativement à l'efficacité énergétique des bâtiments, réduisant les coûts de chauffage et de climatisation tout en améliorant le confort thermique intérieur.</p>
      `,
      images: ["/placeholder.svg?height=600&width=800"],
      inStock: true,
      features: [
        "Excellente isolation thermique",
        "Résistance à l'humidité",
        "Légèreté et facilité d'installation",
        "Durabilité et stabilité dimensionnelle",
      ],
      specifications: {
        Matériau: "Polystyrène expansé (EPS)",
        Densité: "20 kg/m³",
        "Conductivité thermique": "0,036 W/mK",
        "Résistance à la compression": "100 kPa",
        "Classement au feu": "Euroclasse E",
        "Dimensions standard": "1200 x 600 mm",
      },
      category: categories[1],
      tags: [tags[0], tags[2], tags[3]],
      avgRating: 4.5,
      reviewCount: 8,
    },
    {
      id: "3",
      name: "Fish Box Isotherme",
      slug: "fish-box-isotherme",
      description: "Caisson isotherme en polystyrène pour le transport et la conservation des produits frais.",
      longDescription: `
        <p>La Fish Box Isotherme est spécialement conçue pour le transport et la conservation des produits frais, notamment les produits de la mer. Fabriquée en polystyrène expansé de haute densité, elle offre une excellente isolation thermique pour maintenir la chaîne du froid.</p>
        
        <p>Sa structure robuste assure une protection optimale des produits pendant le transport, tandis que ses propriétés isolantes garantissent le maintien de la température intérieure, préservant ainsi la fraîcheur et la qualité des produits.</p>
        
        <p>Disponible en différentes tailles pour s'adapter à tous les besoins, la Fish Box Isotherme est la solution idéale pour les professionnels de l'industrie alimentaire, de la pêche et de la distribution.</p>
      `,
      images: ["/placeholder.svg?height=600&width=800"],
      inStock: true,
      features: [
        "Excellente isolation thermique",
        "Légèreté et robustesse",
        "Résistance à l'eau et à l'humidité",
        "Disponible en différentes tailles",
      ],
      specifications: {
        Matériau: "Polystyrène expansé haute densité",
        Densité: "40 kg/m³",
        "Conductivité thermique": "0,033 W/mK",
        "Résistance à la compression": "300 kPa",
        Capacité: "De 5 à 50 litres",
        "Épaisseur des parois": "30 mm",
      },
      category: categories[2],
      tags: [tags[4], tags[5], tags[6]],
      avgRating: 4.8,
      reviewCount: 15,
    },
  ]
  
  export const reviews: Record<string, Review[]> = {
    "1": [
      {
        id: "1",
        rating: 5,
        title: "Excellent produit",
        content: "Très satisfait de ce coffret tunnel. Installation facile et excellente isolation.",
        user: {
          id: "1",
          name: "Mohamed B.",
        },
        createdAt: "2023-05-15T10:30:00Z",
      },
      {
        id: "2",
        rating: 4,
        title: "Bon rapport qualité-prix",
        content: "Produit de bonne qualité, facile à installer. Je recommande.",
        user: {
          id: "2",
          name: "Sami T.",
        },
        createdAt: "2023-06-22T14:45:00Z",
      },
    ],
    "2": [
      {
        id: "3",
        rating: 5,
        title: "Isolation parfaite",
        content:
          "Ces panneaux ont considérablement amélioré l'isolation de ma maison. Faciles à installer et très efficaces.",
        user: {
          id: "3",
          name: "Nadia M.",
        },
        createdAt: "2023-04-10T09:15:00Z",
      },
    ],
    "3": [
      {
        id: "4",
        rating: 5,
        title: "Idéal pour le transport",
        content: "Parfait pour le transport de produits frais. Maintient bien la température et très résistant.",
        user: {
          id: "4",
          name: "Karim H.",
        },
        createdAt: "2023-07-05T16:20:00Z",
      },
    ],
  }
  
  export const projects: Project[] = [
    {
      id: "1",
      name: "Résidence Les Oliviers",
      slug: "residence-les-oliviers",
      description: "Isolation complète d'une résidence de 20 appartements à Tunis.",
      fullDescription: `
        <p>Le projet de la Résidence Les Oliviers consistait en l'isolation complète d'un ensemble résidentiel de 20 appartements situé à Tunis. L'objectif principal était d'améliorer l'efficacité énergétique du bâtiment tout en offrant un meilleur confort thermique aux résidents.</p>
        
        <p>Nous avons utilisé nos panneaux isolants EPS 100 pour l'isolation des murs extérieurs et des toitures, ainsi que nos coffrets tunnel pour l'installation des volets roulants sur toutes les ouvertures. Cette combinaison de produits a permis d'obtenir une isolation thermique optimale, réduisant significativement les déperditions de chaleur.</p>
        
        <p>Le projet a été réalisé en collaboration avec le cabinet d'architecture Habib & Associés et l'entreprise de construction Bâtir Plus. Les travaux ont été achevés dans les délais impartis, et les résultats en termes d'économies d'énergie ont dépassé les attentes du client.</p>
      `,
      images: ["/placeholder.svg?height=800&width=1200"],
      category: "RESIDENTIAL",
      location: "Tunis, Tunisie",
      year: "2022",
      client: "Groupe Immobilier Al Madina",
      products: ["Panneau Isolant EPS 100", "Coffret Tunnel pour Volet Roulant"],
    },
    {
      id: "2",
      name: "Centre Commercial Carthage",
      slug: "centre-commercial-carthage",
      description: "Fourniture et installation de panneaux isolants pour un centre commercial à Carthage.",
      fullDescription: `
        <p>Le projet du Centre Commercial Carthage impliquait la fourniture et l'installation de panneaux isolants pour l'ensemble du bâtiment. Ce centre commercial de 15 000 m² nécessitait une solution d'isolation performante pour réduire les coûts énergétiques tout en assurant un confort optimal pour les visiteurs.</p>
        
        <p>Nous avons fourni nos panneaux isolants EPS 150 pour l'isolation des murs extérieurs et des toitures. La haute résistance à la compression de ces panneaux les rendait particulièrement adaptés à ce type de bâtiment commercial à forte fréquentation.</p>
        
        <p>Le projet a été réalisé en collaboration avec le bureau d'études techniques Concept Engineering et l'entreprise de construction Maghreb Bâtiment. Les travaux ont été achevés avec deux semaines d'avance sur le planning initial, permettant une ouverture anticipée du centre commercial.</p>
      `,
      images: ["/placeholder.svg?height=800&width=1200"],
      category: "COMMERCIAL",
      location: "Carthage, Tunisie",
      year: "2021",
      client: "Carthage Holding",
      products: ["Panneau Isolant EPS 150"],
    },
    {
      id: "3",
      name: "Usine Agroalimentaire Sfax",
      slug: "usine-agroalimentaire-sfax",
      description: "Fourniture de Fish Box isothermes pour une usine de transformation de produits de la mer à Sfax.",
      fullDescription: `
        <p>Le projet de l'Usine Agroalimentaire de Sfax consistait en la fourniture de Fish Box isothermes pour une entreprise spécialisée dans la transformation et l'exportation de produits de la mer. L'objectif était de garantir le maintien de la chaîne du froid tout au long du processus de conditionnement et de transport des produits.</p>
        
        <p>Nous avons fourni plus de 5 000 Fish Box isothermes de différentes tailles, adaptées aux besoins spécifiques de l'entreprise. Ces caissons isothermes ont permis d'assurer une conservation optimale des produits frais, contribuant ainsi à maintenir leur qualité jusqu'à leur destination finale.</p>
        
        <p>Le projet a été réalisé en étroite collaboration avec le département logistique de l'entreprise, permettant d'optimiser les flux et les processus de conditionnement. La solution mise en place a contribué à réduire les pertes liées aux ruptures de la chaîne du froid et à améliorer la satisfaction des clients de l'entreprise.</p>
      `,
      images: ["/placeholder.svg?height=800&width=1200"],
      category: "INDUSTRIAL",
      location: "Sfax, Tunisie",
      year: "2023",
      client: "Mer & Saveurs SARL",
      products: ["Fish Box Isotherme"],
    },
  ]
  
  export const blogPosts: BlogPost[] = [
    {
      id: "1",
      title: "L'importance de l'isolation thermique dans les bâtiments modernes",
      slug: "importance-isolation-thermique-batiments-modernes",
      excerpt:
        "Découvrez pourquoi l'isolation thermique est essentielle pour les bâtiments d'aujourd'hui et comment elle contribue à l'efficacité énergétique.",
      content: `
        <h2>L'isolation thermique : un enjeu majeur pour les bâtiments modernes</h2>
        
        <p>Dans un contexte de transition énergétique et de lutte contre le changement climatique, l'isolation thermique des bâtiments est devenue un enjeu majeur. En Tunisie, où les températures peuvent être extrêmes tant en été qu'en hiver, une bonne isolation est essentielle pour garantir le confort des occupants tout en réduisant la consommation d'énergie.</p>
        
        <h3>Les avantages d'une bonne isolation thermique</h3>
        
        <p>Une isolation thermique performante présente de nombreux avantages :</p>
        
        <ul>
          <li>Réduction significative des factures d'énergie (jusqu'à 30% d'économies)</li>
          <li>Amélioration du confort thermique en toutes saisons</li>
          <li>Réduction de l'empreinte carbone du bâtiment</li>
          <li>Protection contre l'humidité et les moisissures</li>
          <li>Amélioration de l'isolation acoustique</li>
          <li>Valorisation du patrimoine immobilier</li>
        </ul>
        
        <h3>Les solutions d'isolation modernes</h3>
        
        <p>Aujourd'hui, de nombreuses solutions d'isolation sont disponibles sur le marché, chacune adaptée à des besoins spécifiques. Le polystyrène expansé (EPS) reste l'un des matériaux les plus utilisés en raison de son excellent rapport performance/prix, de sa durabilité et de sa facilité d'installation.</p>
        
        <p>Nos panneaux isolants en EPS offrent une solution complète pour l'isolation des murs, des toitures et des planchers. Leur structure cellulaire fermée garantit une performance d'isolation optimale tout en assurant une résistance à l'humidité et aux moisissures.</p>
        
        <h3>L'isolation thermique : un investissement rentable</h3>
        
        <p>Investir dans une bonne isolation thermique est rentable à long terme. Les économies réalisées sur les factures d'énergie permettent généralement d'amortir l'investissement initial en quelques années seulement. De plus, avec l'augmentation constante des prix de l'énergie, ces économies ne feront que s'accroître avec le temps.</p>
        
        <p>En conclusion, l'isolation thermique est un élément essentiel pour les bâtiments modernes, contribuant à la fois au confort des occupants, à la réduction des coûts énergétiques et à la protection de l'environnement. Investir dans une isolation de qualité, c'est investir dans l'avenir.</p>
      `,
      image: "/placeholder.svg?height=600&width=1200",
      author: "Dr. Ahmed Khelifi",
      category: "ISOLATION",
      tags: ["isolation", "efficacité énergétique", "économies d'énergie", "confort thermique"],
      published: true,
      createdAt: "2023-03-15T08:00:00Z",
    },
    {
      id: "2",
      title: "Les coffrets tunnel : une solution innovante pour les volets roulants",
      slug: "coffrets-tunnel-solution-innovante-volets-roulants",
      excerpt:
        "Découvrez les avantages des coffrets tunnel en polystyrène expansé pour l'installation des volets roulants.",
      content: `
        <h2>Les coffrets tunnel : révolutionner l'installation des volets roulants</h2>
        
        <p>L'installation de volets roulants a longtemps été un défi pour les professionnels du bâtiment, nécessitant des travaux complexes et coûteux. Avec l'avènement des coffrets tunnel en polystyrène expansé, cette installation est devenue beaucoup plus simple, rapide et efficace.</p>
        
        <h3>Qu'est-ce qu'un coffret tunnel ?</h3>
        
        <p>Un coffret tunnel est un élément préfabriqué en polystyrène expansé (EPS) qui s'intègre dans la maçonnerie au-dessus des ouvertures (fenêtres, portes-fenêtres) pour accueillir le mécanisme du volet roulant. Il combine à la fois les fonctions de coffre pour le volet roulant et de linteau pour supporter la charge au-dessus de l'ouverture.</p>
        
        <h3>Les avantages des coffrets tunnel</h3>
        
        <p>Les coffrets tunnel en EPS présentent de nombreux avantages par rapport aux solutions traditionnelles :</p>
        
        <ul>
          <li>Installation rapide et facile, réduisant considérablement le temps de pose</li>
          <li>Excellente isolation thermique, éliminant les ponts thermiques souvent présents avec les coffres traditionnels</li>
          <li>Bonne isolation acoustique, réduisant les nuisances sonores</li>
          <li>Légèreté facilitant la manipulation sur le chantier</li>
          <li>Compatibilité avec la plupart des systèmes de volets roulants du marché</li>
          <li>Solution économique à long terme grâce aux économies d'énergie réalisées</li>
        </ul>
        
        <h3>Une solution adaptée à tous les projets</h3>
        
        <p>Que ce soit pour des constructions neuves ou des projets de rénovation, les coffrets tunnel s'adaptent à tous les types de bâtiments et à toutes les configurations d'ouvertures. Disponibles en différentes dimensions, ils peuvent être facilement ajustés aux besoins spécifiques de chaque projet.</p>
        
        <p>Nos coffrets tunnel sont fabriqués avec des matériaux de haute qualité, garantissant leur durabilité et leur performance à long terme. Ils sont également résistants à l'humidité et aux moisissures, assurant ainsi une longévité optimale de l'installation.</p>
        
        <p>En conclusion, les coffrets tunnel représentent une solution innovante et performante pour l'installation des volets roulants, combinant facilité de mise en œuvre, performance d'isolation et durabilité. Une solution à considérer sérieusement pour tous vos projets de construction ou de rénovation.</p>
      `,
      image: "/placeholder.svg?height=600&width=1200",
      author: "Ing. Sami Trabelsi",
      category: "PRODUCTS",
      tags: ["coffret tunnel", "volet roulant", "isolation", "construction"],
      published: true,
      createdAt: "2023-05-22T10:30:00Z",
    },
  ]
  
  export const testimonials: Testimonial[] = [
    {
      id: 1,
      author: "Mohamed Ben Ali",
      role: "Directeur de projet",
      company: "Groupe Immobilier Al Madina",
      text:
        "Nous avons utilisé les panneaux isolants et les coffrets tunnel de Caisson Tunisie pour notre projet de résidence Les Oliviers. La qualité des produits et le professionnalisme de l'équipe ont largement contribué à la réussite de notre projet. Nous recommandons vivement leurs solutions.",
      rating: 5,
      avatar: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 2,
      author: "Nadia Mansour",
      role: "Architecte",
      company: "Cabinet Habib & Associés",
      text:
        "En tant qu'architecte, je recherche toujours des solutions innovantes et performantes pour mes projets. Les produits de Caisson Tunisie répondent parfaitement à ces critères, avec un excellent rapport qualité-prix et une facilité de mise en œuvre appréciable.",
      rating: 5,
      avatar: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 3,
      author: "Karim Hadjeri",
      role: "Responsable logistique",
      company: "Mer & Saveurs SARL",
      text:
        "Les Fish Box isothermes de Caisson Tunisie ont révolutionné notre chaîne logistique. Nous pouvons désormais garantir à nos clients une fraîcheur optimale de nos produits de la mer, même pour les livraisons les plus éloignées.",
      rating: 4,
      avatar: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 4,
      author: "Sami Trabelsi",
      role: "Entrepreneur",
      company: "Bâtir Plus",
      text:
        "Nous utilisons régulièrement les produits de Caisson Tunisie sur nos chantiers. La qualité est constante, les délais de livraison sont respectés et le service client est réactif. Une entreprise sur laquelle on peut compter.",
      rating: 5,
      avatar: "/placeholder.svg?height=200&width=200",
    },
  ]
  export const brochures: Brochure[] = [
    {
      id: 1,
      title: "Catalogue Coffrets Tunnel",
      description: "Découvrez notre gamme complète de coffrets tunnel pour volets roulants.",
      thumbnail: "/placeholder.svg?height=400&width=300",
      fileUrl: "/brochures/catalogue-coffrets-tunnel.pdf",
      fileSize: "2.1 MB",
      previewImages: [],
    },
    {
      id: 2,
      title: "Guide d'installation des panneaux isolants",
      description: "Toutes les étapes pour une installation réussie de nos panneaux isolants.",
      thumbnail: "/placeholder.svg?height=400&width=300",
      fileUrl: "/brochures/guide-installation-panneaux-isolants.pdf",
      fileSize: "1.8 MB",
      previewImages: [],
    },
    {
      id: 3,
      title: "Fiche technique Fish Box",
      description: "Caractéristiques techniques détaillées de nos caissons isothermes Fish Box.",
      thumbnail: "/placeholder.svg?height=400&width=300",
      fileUrl: "/brochures/fiche-technique-fish-box.pdf",
      fileSize: "2.5 MB",
      previewImages: [],
    },
    {
      id: 4,
      title: "Solutions d'isolation pour bâtiments résidentiels",
      description: "Guide complet des solutions d'isolation pour les projets résidentiels.",
      thumbnail: "/placeholder.svg?height=400&width=300",
      fileUrl: "/brochures/solutions-isolation-residentiels.pdf",
      fileSize: "3.0 MB",
      previewImages: [],
    },
  ]
  // Fonction utilitaire pour simuler un délai (pour les appels API simulés)
  export const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))
  
  // Fonction pour simuler un appel API
