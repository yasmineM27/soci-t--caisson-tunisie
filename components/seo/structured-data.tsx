"use client"

import { useEffect, useState } from "react"

interface StructuredDataProps {
  type: "Product" | "Article" | "FAQPage" | "Organization" | "LocalBusiness" | "BreadcrumbList" | string
  data: Record<string, any>
}

interface ProductData {
  id: number
  name: string
  description: string
  price: number
  originalPrice?: number
  currency: string
  images: string[]
  inStock: boolean
  reviews: {
    average: number
    count: number
  }
  category: string
  brand?: string
  sku?: string
  gtin?: string
  mpn?: string
  warranty?: string
  leadTime?: string
}

interface ProductStructuredDataProps {
  product: ProductData
  baseUrl?: string
}

export function StructuredData({ type, data }: StructuredDataProps) {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return null
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": type,
    ...data,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  )
}

interface FAQItem {
  question: string
  answer: string
}

interface FAQStructuredDataProps {
  faqs: FAQItem[]
}

interface BreadcrumbItem {
  name: string
  url: string
}

interface BreadcrumbStructuredDataProps {
  items: BreadcrumbItem[]
  baseUrl?: string
}

interface OrganizationStructuredDataProps {
  baseUrl?: string
}

export function ProductStructuredData({ product, baseUrl = "https://societe-caisson-tunisie.tn" }: ProductStructuredDataProps) {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return null
  }

  const productUrl = `${baseUrl}/produits/${product.name.toLowerCase().replace(/\s+/g, '-')}`

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: product.images.map(img => img.startsWith('http') ? img : `${baseUrl}${img}`),
    brand: {
      "@type": "Brand",
      name: product.brand || "Société Caisson Tunisie"
    },
    category: product.category,
    sku: product.sku || `SCT-${product.id}`,
    gtin: product.gtin,
    mpn: product.mpn || `SCT-${product.id}`,
    url: productUrl,
    offers: {
      "@type": "Offer",
      url: productUrl,
      priceCurrency: product.currency,
      // Si le prix est 0, on indique que c'est sur demande
      ...(product.price > 0 ? {
        price: product.price.toString(),
        priceValidUntil: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
      } : {
        priceSpecification: {
          "@type": "PriceSpecification",
          price: "0",
          priceCurrency: product.currency,
          valueAddedTaxIncluded: false,
          description: "Prix sur demande - Contactez-nous pour un devis personnalisé"
        }
      }),
      availability: product.inStock ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
      seller: {
        "@type": "Organization",
        name: "Société Caisson Tunisie",
        url: baseUrl
      },
      deliveryLeadTime: product.leadTime ? {
        "@type": "QuantitativeValue",
        value: product.leadTime
      } : undefined,
      warranty: product.warranty ? {
        "@type": "WarrantyPromise",
        durationOfWarranty: {
          "@type": "QuantitativeValue",
          value: product.warranty
        }
      } : undefined
    },
    aggregateRating: product.reviews.count > 0 ? {
      "@type": "AggregateRating",
      ratingValue: product.reviews.average.toString(),
      reviewCount: product.reviews.count.toString(),
      bestRating: "5",
      worstRating: "1"
    } : undefined,
    manufacturer: {
      "@type": "Organization",
      name: "Société Caisson Tunisie",
      url: baseUrl
    }
  }

  // Nettoyer les propriétés undefined
  const cleanStructuredData = JSON.parse(JSON.stringify(structuredData))

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(cleanStructuredData),
      }}
    />
  )
}

export function FAQStructuredData({ faqs }: FAQStructuredDataProps) {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient || !faqs || faqs.length === 0) {
    return null
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(faq => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  )
}

export function BreadcrumbStructuredData({ items, baseUrl = "https://societe-caisson-tunisie.tn" }: BreadcrumbStructuredDataProps) {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient || !items || items.length === 0) {
    return null
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${baseUrl}${item.url}`
    }))
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  )
}

export function OrganizationStructuredData({ baseUrl = "https://societe-caisson-tunisie.tn" }: OrganizationStructuredDataProps) {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return null
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Société Caisson Tunisie",
    alternateName: "SCT",
    url: baseUrl,
    logo: `${baseUrl}/stc/logo.png`,
    description: "Spécialiste en fabrication de produits en polystyrène expansé (EPS) depuis 2020. Coffrets tunnel, panneaux isolants, Fish Box et solutions sur mesure.",
    foundingDate: "2020",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Zone industrielle-Technopole",
      addressLocality: "Monastir",
      postalCode: "5036",
      addressCountry: "TN"
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+216 93 642 505",
      contactType: "customer service",
      email: "Caissontunisie20@gmail.com",
      availableLanguage: ["French", "Arabic"]
    },
    sameAs: [
      "https://www.facebook.com/profile.php?id=61566954398857",
      "https://www.linkedin.com/in/ste-caisson-tunisie-b89763201/"
    ],
    areaServed: {
      "@type": "Country",
      name: "Tunisia"
    },
    knowsAbout: [
      "Polystyrène expansé",
      "Isolation thermique",
      "Coffrets tunnel",
      "Panneaux isolants",
      "Fish Box",
      "Construction",
      "Emballage isotherme"
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  )
}
