// Types
export interface Product {
    id: number
    name: string
    slug: string
    description: string
    longDescription?: string
    images: string[]
    features: string[]
    specifications?: Record<string, string>
    category: string
    categorySlug: string
    tags?: string[]
  }
  
  export interface Category {
    id: number
    name: string
    slug: string
    description: string
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
  
  export interface Testimonial {
    id: number
    author: string
    avatar?: string
    role?: string
    company?: string
    rating: number
    text: string
  }
  
  export interface Project {
    id: number
    title: string
    slug: string
    description: string
    fullDescription?: string
    images: string[]
    category: string
    location: string
    year: string
    client: string
    products: string[]
  }
  
  export interface BlogPost {
    id: number
    title: string
    slug: string
    excerpt: string
    content: string
    image: string
    author: string
    date: string
    readTime: string
    category: string
    tags?: string[]
  }
  
  export interface Video {
    id: number
    title: string
    thumbnail: string
    url: string
  }
  
  export interface Stat {
    icon: string
    value: number
    label: string
    prefix?: string
    suffix?: string
  }
  
  // Données statiques
  export const categories: Category[] = [
    {
      id: 1,
      name: "Coffrets Tunnel",
      slug: "coffrets-tunnel",
      description: "Coffrets tunnel pour volets roulants et autres applications",
    },
    {
      id: 2,
      name: "Panneaux Isolants",
      slug: "panneaux-isolants",
      description: "Panneaux isolants en polystyrène expansé pour l'isolation thermique",
    },
    {
      id: 3,
      name: "Fish Box",
      slug: "fish-box",
      description: "Caissons d'emballage isothermes pour le transport de produits frais",
    },
  ]
  
  export const products: Product[] = [
    {
      id: 1,
      name: "Coffret volet roulant",
      slug: "coffret-tunnel-volet-roulant",
      description: "Solution légère et isolante pour l'installation de volets roulants.",
      longDescription: `
        <p>Le Coffret volet roulant en polystyrène expansé (EPS) est une solution innovante qui combine légèreté et performance d'isolation thermique. Conçu pour faciliter l'installation des volets roulants, ce coffret tunnel offre une excellente isolation thermique et acoustique, contribuant ainsi à l'efficacité énergétique globale du bâtiment.</p>
        
        <p>Sa structure en polystyrène expansé garantit une durabilité exceptionnelle tout en étant facile à manipuler et à installer. Nos coffrets tunnel sont fabriqués avec des matériaux de haute qualité pour assurer une longévité maximale et une résistance optimale aux conditions climatiques.</p>
        
        <p>Disponible en différentes dimensions pour s'adapter à tous types d'ouvertures, notre Coffret volet roulant est la solution idéale pour les constructions neuves comme pour les projets de rénovation.</p>
      `,
      images: [
        "/stc/coff.jpeg",
        "/stc/01.png",
        "/placeholder.svg?height=600&width=800&text=Image+3",
        "/placeholder.svg?height=600&width=800&text=Image+4",
        "/placeholder.svg?height=600&width=800&text=Image+5",
      ],
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
      category: "Coffrets Tunnel",
      categorySlug: "coffrets-tunnel",
      tags: ["isolation", "volet roulant", "construction", "rénovation"],
    },
    {
      id: 2,
      name: "Panneau Isolant en Polystyrène",
      slug: "panneau-isolant-polystyrene",
      description: "Isolation thermique optimale pour murs, toitures et sols.",
      longDescription: `
        <p>Nos panneaux isolants en polystyrène expansé (EPS) offrent une solution d'isolation thermique performante pour tous types de bâtiments. Conçus pour réduire les déperditions de chaleur et améliorer l'efficacité énergétique, ces panneaux sont idéaux pour l'isolation des murs, des toitures et des sols.</p>
        
        <p>Légers et faciles à manipuler, nos panneaux isolants peuvent être découpés sur mesure pour s'adapter parfaitement à vos besoins spécifiques. Leur structure en polystyrène expansé assure une excellente résistance thermique tout en offrant une durabilité exceptionnelle.</p>
        
        <p>Disponibles en différentes épaisseurs et densités, nos panneaux isolants en polystyrène expansé sont adaptés aussi bien aux constructions neuves qu'aux projets de rénovation.</p>
      `,
      images: [
        "/stc/plaaaaa.png",
        "/stc/OIP.png",
        "/placeholder.svg?height=600&width=800&text=Image+3",
      ],
      features: [
        "Haute performance thermique",
        "Légèreté et facilité de manipulation",
        "Résistance à l'humidité",
        "Découpe facile et précise",
      ],
      specifications: {
        Matériau: "Polystyrène expansé (EPS)",
        Densité: "25 kg/m³",
        "Conductivité thermique": "0,032 W/mK",
        "Résistance à la compression": "150 kPa",
        "Classement au feu": "Euroclasse E",
        "Absorption d'eau": "< 2%",
      },
      category: "Panneaux Isolants",
      categorySlug: "panneaux-isolants",
      tags: ["isolation", "construction", "rénovation"],
    },
    {
      id: 3,
      name: "Fish Box / Caisson d'Emballage",
      slug: "fish-box-caisson-emballage",
      description: "Solution d'emballage isotherme pour le secteur agroalimentaire et la pêche.",
      longDescription: `
        <p>Nos Fish Box en polystyrène expansé (EPS) sont spécialement conçues pour le transport et la conservation des produits frais, notamment les produits de la mer. Ces caissons isothermes offrent une excellente protection thermique, garantissant le maintien de la chaîne du froid tout au long du transport.</p>
        
        <p>Légers mais robustes, nos Fish Box assurent une protection optimale contre les chocs et les variations de température. Leur conception étanche empêche les fuites de liquides, préservant ainsi la qualité des produits transportés.</p>
        
        <p>Disponibles en différentes tailles et formats, nos caissons d'emballage en polystyrène expansé sont adaptés aux besoins spécifiques du secteur agroalimentaire et de la pêche.</p>
      `,
      images: [
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800&text=Image+2",
        "/placeholder.svg?height=600&width=800&text=Image+3",
        "/placeholder.svg?height=600&width=800&text=Image+4",
      ],
      features: [
        "Conservation optimale des produits frais",
        "Légèreté pour faciliter le transport",
        "Résistance aux chocs",
        "Étanchéité garantie",
      ],
      specifications: {
        Matériau: "Polystyrène expansé (EPS)",
        Densité: "35 kg/m³",
        "Conductivité thermique": "0,038 W/mK",
        "Résistance à la compression": "250 kPa",
        "Classement au feu": "Euroclasse E",
        "Absorption d'eau": "< 1%",
      },
      category: "Fish Box",
      categorySlug: "fish-box",
      tags: ["emballage", "transport", "froid"],
    },
  ]
  
  export const brochures: Brochure[] = [
    {
      id: 1,
      title: "Catalogue Produits 2023",
      description: "Découvrez notre gamme complète de produits en polystyrène expansé pour l'isolation et l'emballage.",
      thumbnail: "/placeholder.svg?height=300&width=400",
      fileUrl: "/brochures/catalogue-produits-2023.pdf",
      fileSize: "3.2 MB",
      previewImages: [
        "/placeholder.svg?height=600&width=400&text=Page+1",
        "/placeholder.svg?height=600&width=400&text=Page+2",
        "/placeholder.svg?height=600&width=400&text=Page+3",
        "/placeholder.svg?height=600&width=400&text=Page+4",
      ],
    },
    {
      id: 2,
      title: "Guide Technique - Coffrets Tunnel",
      description: "Spécifications techniques et guide d'installation pour nos coffrets tunnel pour volets roulants.",
      thumbnail: "/placeholder.svg?height=300&width=400",
      fileUrl: "/brochures/guide-technique-coffrets-tunnel.pdf",
      fileSize: "2.5 MB",
      previewImages: [
        "/placeholder.svg?height=600&width=400&text=Page+1",
        "/placeholder.svg?height=600&width=400&text=Page+2",
      ],
    },
    {
      id: 3,
      title: "Fiche Produit - Panneaux Isolants",
      description: "Caractéristiques et applications de nos panneaux isolants en polystyrène expansé.",
      thumbnail: "/placeholder.svg?height=300&width=400",
      fileUrl: "/brochures/fiche-produit-panneaux-isolants.pdf",
      fileSize: "1.8 MB",
      previewImages: [
        "/placeholder.svg?height=600&width=400&text=Page+1",
        "/placeholder.svg?height=600&width=400&text=Page+2",
      ],
    },
  ]
  
  export const testimonials: Testimonial[] = [
    {
      id: 1,
      author: "Ahmed Benali",
      avatar: "/placeholder.svg?height=80&width=80",
      role: "Directeur",
      company: "Entreprise de Construction",
      rating: 5,
      text: "Excellent service et produits de qualité. J'ai demandé un devis pour des coffrets tunnel pour ma nouvelle construction et je suis très satisfait du résultat. L'équipe est professionnelle et réactive.",
    },
    {
      id: 2,
      author: "Sami Meddeb",
      avatar: "/placeholder.svg?height=80&width=80",
      role: "Architecte",
      company: "Cabinet d'Architecture",
      rating: 4,
      text: "Très bonne expérience avec Caisson Tunisie. Les produits sont de bonne qualité et le service de devis est rapide. Je recommande vivement cette entreprise pour vos projets d'isolation.",
    },
    {
      id: 3,
      author: "Leila Karoui",
      avatar: "/placeholder.svg?height=80&width=80",
      role: "Propriétaire",
      rating: 5,
      text: "J'ai fait appel à Caisson Tunisie pour l'isolation de ma maison et je suis très satisfaite du résultat. Les panneaux isolants sont de très bonne qualité et l'installation a été parfaite.",
    },
    {
      id: 4,
      author: "Mohamed Riahi",
      avatar: "/placeholder.svg?height=80&width=80",
      role: "Gérant",
      company: "Société de Pêche",
      rating: 5,
      text: "Les Fish Box que nous avons commandées sont parfaites pour le transport de nos produits. Elles maintiennent la fraîcheur et sont très résistantes. Un excellent produit !",
    },
    {
      id: 5,
      author: "Fatma Belhadj",
      avatar: "/placeholder.svg?height=80&width=80",
      role: "Directrice",
      company: "Entreprise de Rénovation",
      rating: 4,
      text: "Nous utilisons régulièrement les produits de Caisson Tunisie pour nos projets de rénovation. La qualité est toujours au rendez-vous et les délais de livraison sont respectés.",
    },
  ]
  
  export const projects: Project[] = [
    {
      id: 1,
      title: "Résidence Les Oliviers",
      slug: "residence-les-oliviers",
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
        "/placeholder.svg?height=600&width=800&text=Image+2",
        "/placeholder.svg?height=600&width=800&text=Image+3",
        "/placeholder.svg?height=600&width=800&text=Image+4",
      ],
      category: "residentiels",
      location: "Tunis",
      year: "2022",
      client: "Promoteur Immobilier XYZ",
      products: ["Coffrets tunnel pour volets roulants", "Panneaux isolants"],
    },
    {
      id: 2,
      title: "Hôtel Azur Palace",
      slug: "hotel-azur-palace",
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
        "/placeholder.svg?height=600&width=800&text=Image+2",
        "/placeholder.svg?height=600&width=800&text=Image+3",
        "/placeholder.svg?height=600&width=800&text=Image+4",
      ],
      category: "commerciaux",
      location: "Hammamet",
      year: "2023",
      client: "Groupe Hôtelier Azur",
      products: ["Panneaux isolants haute densité", "Coffrets tunnel"],
    },
    {
      id: 3,
      title: "Usine de transformation alimentaire",
      slug: "usine-transformation-alimentaire",
      description:
        "Fourniture de Fish Box pour le transport et le stockage de produits frais pour une usine de transformation de produits de la mer.",
      fullDescription: `
        <p>Cette usine de transformation de produits de la mer, située à Bizerte, est spécialisée dans la préparation et le conditionnement de produits frais destinés à l'exportation. L'entreprise traite quotidiennement d'importantes quantités de poissons et fruits de mer qui nécessitent un conditionnement adapté pour préserver leur fraîcheur.</p>
        
        <h2>Le défi</h2>
        <p>L'entreprise recherchait une solution d'emballage isotherme fiable pour le transport et le stockage temporaire de ses produits. Cette solution devait garantir le maintien de la chaîne du froid, être suffisamment robuste pour résister aux manipulations fréquentes, et respecter les normes d'hygiène strictes du secteur agroalimentaire.</p>
        
        <h2>Notre solution</h2>
        <p>Nous avons proposé nos Fish Box en polystyrène expansé, spécialement conçues pour le secteur de la pêche et de la transformation des produits de la mer. Ces caissons isothermes offrent :</p>
        <ul>
          <li>Une excellente isolation thermique pour maintenir la fraîcheur des produits</li>
          <li>Une résistance aux chocs et aux manipulations répétées</li>
          <li>Une étanchéité qui empêche les fuites de liquides</li>
          <li>Une conformité aux normes d'hygiène alimentaire</li>
          <li>Une légèreté qui facilite la manutention</li>
        </ul>
        
        <h2>Mise en œuvre</h2>
        <p>Nous avons fourni plusieurs milliers de Fish Box de différentes tailles, adaptées aux différents types de produits traités par l'usine. La livraison a été échelonnée selon les besoins de production de l'entreprise.</p>
        
        <p>Nous avons également formé le personnel de l'usine à l'utilisation optimale de nos caissons isothermes pour maximiser leur efficacité et leur durée de vie.</p>
        
        <h2>Résultats</h2>
        <p>L'utilisation de nos Fish Box a permis à l'entreprise d'améliorer significativement la conservation de ses produits durant le transport et le stockage temporaire. Les pertes dues à la rupture de la chaîne du froid ont été considérablement réduites, ce qui a eu un impact positif sur la rentabilité de l'entreprise.</p>
        
        <p>La qualité des produits livrés aux clients a également été améliorée, renforçant ainsi la réputation de l'entreprise sur le marché. Ce partenariat réussi se poursuit aujourd'hui avec des livraisons régulières de Fish Box pour répondre aux besoins continus de l'usine.</p>
      `,
      images: [
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800&text=Image+2",
        "/placeholder.svg?height=600&width=800&text=Image+3",
      ],
      category: "industriels",
      location: "Bizerte",
      year: "2022",
      client: "Mer & Saveurs SARL",
      products: ["Fish Box / Caissons d'emballage isothermes"],
    },
  ]
  
  export const videos: Video[] = [
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
    {
      id: 3,
      title: "Utilisation des Fish Box",
      thumbnail: "/placeholder.svg?height=200&width=350",
      url: "#",
    },
    {
      id: 4,
      title: "Avantages de l'isolation en polystyrène",
      thumbnail: "/placeholder.svg?height=200&width=350",
      url: "#",
    },
  ]
  
  export const stats = [
    {
      icon: "Building",
      value: 3,
      label: "Années d'expérience",
      suffix: "+",
    },
    {
      icon: "Package",
      value: 1000,
      label: "Produits livrés",
      suffix: "+",
    },
    {
      icon: "Users",
      value: 200,
      label: "Clients satisfaits",
      suffix: "+",
    },
    {
      icon: "Award",
      value: 98,
      label: "Taux de satisfaction",
      suffix: "%",
    },
  ]
  
  export const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Les avantages de l'isolation en polystyrène expansé",
      slug: "avantages-isolation-polystyrene-expanse",
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
      category: "isolation",
    },
    {
      id: 2,
      title: "Comment choisir le bon Coffret volet roulant",
      slug: "choisir-coffret-tunnel-volet-roulant",
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
      image: "/placeholder.svg?height=600&width=1200",
      author: "Sami Meddeb",
      date: "2023-06-02",
      readTime: "8 min",
      category: "produits",
    },
    {
      id: 3,
      title: "L'importance de l'isolation thermique dans la construction moderne",
      slug: "importance-isolation-thermique-construction-moderne",
      excerpt: "Pourquoi l'isolation thermique est devenue un élément essentiel dans les constructions contemporaines.",
      content: `
        <p>Dans un contexte de transition énergétique et de lutte contre le réchauffement climatique, l'isolation thermique est devenue un élément incontournable des constructions modernes. Cet article explore les raisons de cette importance croissante et les bénéfices d'une bonne isolation thermique.</p>
        
        <h2>Économies d'énergie et réduction des coûts</h2>
        <p>Une isolation thermique performante permet de réduire considérablement les besoins en chauffage en hiver et en climatisation en été. En limitant les échanges thermiques entre l'intérieur et l'extérieur du bâtiment, elle contribue à maintenir une température intérieure stable avec un minimum d'énergie. Cette réduction de la consommation énergétique se traduit directement par des économies sur les factures d'électricité, de gaz ou de fioul.</p>
        
        <h2>Confort thermique</h2>
        <p>Au-delà des économies financières, une bonne isolation thermique améliore significativement le confort des occupants. Elle élimine les sensations de parois froides en hiver et de surchauffe en été, créant un environnement intérieur agréable tout au long de l'année. Ce confort thermique est un élément essentiel du bien-être dans un logement ou un lieu de travail.</p>
        
        <h2>Impact environnemental</h2>
        <p>En réduisant la consommation d'énergie, l'isolation thermique contribue directement à la diminution des émissions de gaz à effet de serre. Dans un contexte de changement climatique, cette réduction de l'empreinte carbone des bâtiments est cruciale. Les constructions bien isolées participent ainsi à l'effort collectif de protection de l'environnement.</p>
        
        <h2>Valorisation du bien immobilier</h2>
        <p>Les bâtiments bien isolés sont de plus en plus valorisés sur le marché immobilier. Les acheteurs et locataires sont aujourd'hui sensibles à la performance énergétique des logements, qui est d'ailleurs évaluée et communiquée via le diagnostic de performance énergétique (DPE). Un bâtiment bien isolé bénéficie donc d'une meilleure valeur marchande et d'une attractivité accrue.</p>
        
        <h2>Réglementation thermique</h2>
        <p>Les réglementations thermiques sont de plus en plus exigeantes en matière d'isolation. Ces normes visent à réduire la consommation énergétique des bâtiments neufs et existants. Se conformer à ces réglementations n'est pas seulement une obligation légale, c'est aussi une garantie de performance et de durabilité pour le bâtiment.</p>
        
        <h2>Prévention des problèmes d'humidité</h2>
        <p>Une isolation thermique bien conçue, associée à une ventilation adéquate, permet de prévenir les problèmes d'humidité et de condensation dans les bâtiments. Elle évite la formation de ponts thermiques, ces points faibles de l'enveloppe du bâtiment où l'humidité peut se condenser et causer des dommages structurels ou favoriser le développement de moisissures.</p>
        
        <h2>Isolation acoustique</h2>
        <p>Outre ses performances thermiques, une bonne isolation contribue souvent à améliorer le confort acoustique. Les matériaux isolants comme le polystyrène expansé atténuent les bruits extérieurs, créant un environnement intérieur plus calme et plus agréable, particulièrement dans les zones urbaines ou à proximité d'infrastructures bruyantes.</p>
        
        <h2>Conclusion</h2>
        <p>L'isolation thermique est aujourd'hui un élément fondamental de la construction moderne, offrant de nombreux avantages en termes d'économies d'énergie, de confort, d'impact environnemental et de valeur immobilière. Investir dans une isolation de qualité est un choix judicieux qui se rentabilise rapidement et apporte des bénéfices durables. Chez Société Caisson Tunisie, nous proposons des solutions d'isolation en polystyrène expansé performantes et adaptées à tous types de projets de construction ou de rénovation.</p>
      `,
      image: "/placeholder.svg?height=600&width=1200",
      author: "Leila Karoui",
      date: "2023-06-10",
      readTime: "6 min",
      category: "isolation",
    },
  ]
  
  // Images pour le carrousel du hero
  export const heroBackgroundImages = [
    "/placeholder.svg?height=1080&width=1920",
    "/placeholder.svg?height=1080&width=1920&text=Image+2",
    "/placeholder.svg?height=1080&width=1920&text=Image+3",
    "/placeholder.svg?height=1080&width=1920&text=Image+4",
  ]
  