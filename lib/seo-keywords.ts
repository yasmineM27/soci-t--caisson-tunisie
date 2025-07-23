// Stratégie de mots-clés SEO pour Société Caisson Tunisie

export interface SEOKeywords {
  primary: string[]
  secondary: string[]
  longTail: string[]
  local: string[]
  competitors: string[]
}

export const globalKeywords: SEOKeywords = {
  primary: [
    "polystyrène expansé",
    "isolation thermique",
    "EPS",
    "coffret tunnel",
    "panneau isolant",
    "fish box",
    "caisson polystyrène"
  ],
  secondary: [
    "isolation phonique",
    "construction tunisie",
    "matériaux isolation",
    "emballage isotherme",
    "volet roulant",
    "bâtiment écologique",
    "économie énergie"
  ],
  longTail: [
    "coffret tunnel volet roulant tunisie",
    "panneau isolant polystyrène expansé prix",
    "fish box isotherme poisson tunisie",
    "isolation thermique maison tunisie",
    "société caisson tunisie devis",
    "polystyrène expansé fabricant tunisie",
    "isolation EPS construction neuve"
  ],
  local: [
    "tunisie",
    "monastir",
    "tunis",
    "sfax",
    "sousse",
    "bizerte",
    "nabeul",
    "kairouan"
  ],
  competitors: [
    "isolation tunisie",
    "polystyrène tunisie",
    "matériaux construction tunisie",
    "fabricant EPS",
    "coffret volet roulant"
  ]
}

export const productKeywords = {
  "coffret-tunnel-volet-roulant": {
    primary: [
      "coffret tunnel volet roulant",
      "caisson volet roulant",
      "coffret polystyrène volet",
      "tunnel volet roulant EPS"
    ],
    secondary: [
      "isolation volet roulant",
      "coffret tunnel isolation",
      "volet roulant thermique",
      "caisson isolation volet"
    ],
    longTail: [
      "coffret tunnel volet roulant polystyrène expansé",
      "prix coffret tunnel volet roulant tunisie",
      "installation coffret tunnel volet roulant",
      "coffret tunnel volet roulant sur mesure",
      "devis coffret tunnel volet roulant"
    ],
    searchIntent: [
      "acheter coffret tunnel volet roulant",
      "prix coffret tunnel",
      "installation coffret tunnel",
      "coffret tunnel dimensions",
      "coffret tunnel isolation thermique"
    ]
  },
  "panneau-isolant-2cm": {
    primary: [
      "panneau isolant 2cm",
      "plaque polystyrène 2cm",
      "isolation 2cm EPS",
      "panneau EPS 2cm"
    ],
    secondary: [
      "isolation mur 2cm",
      "panneau thermique 2cm",
      "plaque isolation 2cm",
      "EPS 2cm prix"
    ],
    longTail: [
      "panneau isolant polystyrène expansé 2cm prix",
      "plaque isolation thermique 2cm tunisie",
      "panneau EPS 2cm pour mur",
      "isolation polystyrène 2cm extérieur"
    ],
    searchIntent: [
      "acheter panneau isolant 2cm",
      "prix panneau EPS 2cm",
      "panneau isolation 2cm dimensions",
      "livraison panneau isolant tunisie"
    ]
  },
  "fish-box-5kg": {
    primary: [
      "fish box 5kg",
      "caisson poisson 5kg",
      "boite isotherme poisson",
      "emballage poisson 5kg"
    ],
    secondary: [
      "transport poisson frais",
      "caisson isotherme pêche",
      "boite polystyrène poisson",
      "emballage fruits mer"
    ],
    longTail: [
      "fish box polystyrène 5kg tunisie",
      "caisson transport poisson 5kg prix",
      "boite isotherme poisson frais 5kg",
      "emballage poisson export tunisie"
    ],
    searchIntent: [
      "acheter fish box 5kg",
      "prix caisson poisson 5kg",
      "fish box export poisson",
      "emballage isotherme pêche"
    ]
  }
}

export const seoTitles = {
  "coffret-tunnel-volet-roulant": [
    "Coffret Tunnel Volet Roulant - Prix et Devis | Société Caisson Tunisie",
    "Coffret Tunnel Polystyrène Expansé - Isolation Volet Roulant Tunisie",
    "Caisson Volet Roulant EPS - Fabricant Tunisien | SCT"
  ],
  "panneau-isolant-2cm": [
    "Panneau Isolant 2cm - Polystyrène Expansé Tunisie | Prix Devis",
    "Plaque Isolation Thermique 2cm - EPS Tunisie | Société Caisson",
    "Panneau EPS 2cm - Isolation Mur Toiture | Fabricant Tunisie"
  ],
  "fish-box-5kg": [
    "Fish Box 5kg - Caisson Isotherme Poisson Tunisie | Prix Devis",
    "Boite Isotherme Poisson 5kg - Transport Fruits de Mer | SCT",
    "Emballage Poisson Frais 5kg - Fish Box Polystyrène Tunisie"
  ]
}

export const seoDescriptions = {
  "coffret-tunnel-volet-roulant": [
    "Coffret tunnel volet roulant en polystyrène expansé haute densité. ✓ Isolation thermique optimale ✓ Installation facile ✓ Garantie 2 ans ✓ Devis gratuit Tunisie",
    "Caisson volet roulant EPS fabrication tunisienne. Isolation thermique et phonique performante. Livraison rapide, prix compétitif. Demandez votre devis gratuit.",
    "Coffret tunnel polystyrène pour volet roulant. Solution d'isolation thermique professionnelle. Conformité CE, fabricant tunisien, service client expert."
  ]
}

export function getProductSEOData(productSlug: string) {
  const keywords = productKeywords[productSlug as keyof typeof productKeywords]
  const titles = seoTitles[productSlug as keyof typeof seoTitles]
  const descriptions = seoDescriptions[productSlug as keyof typeof seoDescriptions]
  
  return {
    keywords: keywords || null,
    titles: titles || [],
    descriptions: descriptions || []
  }
}

export function generateKeywordsString(productSlug: string): string {
  const productKw = productKeywords[productSlug as keyof typeof productKeywords]
  if (!productKw) return globalKeywords.primary.join(", ")
  
  return [
    ...productKw.primary,
    ...productKw.secondary.slice(0, 3),
    ...globalKeywords.primary.slice(0, 5),
    ...globalKeywords.local.slice(0, 4)
  ].join(", ")
}
