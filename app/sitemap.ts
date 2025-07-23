import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://societe-caisson-tunisie.tn'
  
  // Pages principales
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/produits`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ]

  // Pages produits
  const productRoutes = [
    'coffret-tunnel-volet-roulant',
    'panneau-isolant-2cm',
    'fish-box-5kg',
    'panneau-isolant-3cm',
    'panneau-isolant-4cm',
    'panneau-isolant-5cm',
  ].map(slug => ({
    url: `${baseUrl}/produits/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [...routes, ...productRoutes]
}
