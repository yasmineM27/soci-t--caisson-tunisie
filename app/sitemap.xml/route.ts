import type { NextRequest } from "next/server"

// Données pour le sitemap
const pages = [
  { url: "/", lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
  { url: "/produits", lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
  { url: "/a-propos", lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
  { url: "/services", lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
  { url: "/contact", lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
  { url: "/blog", lastModified: new Date(), changeFrequency: "daily", priority: 0.9 },
  { url: "/projets", lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
  { url: "/panier", lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
  { url: "/commande", lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
]

// Produits
const products = [
  { slug: "coffret-tunnel-volet-roulant", lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
  { slug: "panneau-isolant-polystyrene", lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
  { slug: "fish-box-caisson-emballage", lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
  // Ajoutez d'autres produits ici
]

// Articles de blog
const blogPosts = [
  { slug: "avantages-isolation-polystyrene-expanse", lastModified: new Date(), changeFrequency: "yearly", priority: 0.7 },
  { slug: "choisir-coffret-tunnel-volet-roulant", lastModified: new Date(), changeFrequency: "yearly", priority: 0.7 },
  { slug: "importance-isolation-thermique-construction-moderne", lastModified: new Date(), changeFrequency: "yearly", priority: 0.7 },
  { slug: "fish-box-solution-ecologique-transport-produits-frais", lastModified: new Date(), changeFrequency: "yearly", priority: 0.7 },
  { slug: "innovations-industrie-polystyrene-expanse", lastModified: new Date(), changeFrequency: "yearly", priority: 0.7 },
  { slug: "reduire-facture-energetique-bonne-isolation", lastModified: new Date(), changeFrequency: "yearly", priority: 0.7 },
  // Ajoutez d'autres articles de blog ici
]

// Projets
const projects = [
  { slug: "residence-les-oliviers", lastModified: new Date(), changeFrequency: "yearly", priority: 0.7 },
  { slug: "hotel-azur-palace", lastModified: new Date(), changeFrequency: "yearly", priority: 0.7 },
  { slug: "usine-transformation-alimentaire", lastModified: new Date(), changeFrequency: "yearly", priority: 0.7 },
  { slug: "villa-jasmin", lastModified: new Date(), changeFrequency: "yearly", priority: 0.7 },
  { slug: "centre-commercial-medina", lastModified: new Date(), changeFrequency: "yearly", priority: 0.7 },
  { slug: "entrepot-frigorifique", lastModified: new Date(), changeFrequency: "yearly", priority: 0.7 },
  // Ajoutez d'autres projets ici
]

export function GET(request: NextRequest) {
  const baseUrl = request.nextUrl.origin

  // Formater la date pour le sitemap
  const formatDate = (date: Date) => {
    return date.toISOString()
  }

  // Générer les entrées du sitemap pour les pages principales
  const pagesEntries = pages.map((page) => `
  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${formatDate(page.lastModified)}</lastmod>
    <changefreq>${page.changeFrequency}</changefreq>
    <priority>${page.priority}</priority>
  </url>`)

  // Générer les entrées du sitemap pour les produits
  const productsEntries = products.map((product) => `
  <url>
    <loc>${baseUrl}/produits/${product.slug}</loc>
    <lastmod>${formatDate(product.lastModified)}</lastmod>
    <changefreq>${product.changeFrequency}</changefreq>
    <priority>${product.priority}</priority>
  </url>`)

  // Générer les entrées du sitemap pour les articles de blog
  const blogEntries = blogPosts.map((post) => `
  <url>
    <loc>${baseUrl}/blog/${post.slug}</loc>
    <lastmod>${formatDate(post.lastModified)}</lastmod>
    <changefreq>${post.changeFrequency}</changefreq>
    <priority>${post.priority}</priority>
  </url>`)

  // Générer les entrées du sitemap pour les projets
  const projectsEntries = projects.map((project) => `
  <url>
    <loc>${baseUrl}/projets/${project.slug}</loc>
    <lastmod>${formatDate(project.lastModified)}</lastmod>
    <changefreq>${project.changeFrequency}</changefreq>
    <priority>${project.priority}</priority>
  </url>`)

  // Combiner toutes les entrées
  const allEntries = [...pagesEntries, ...productsEntries, ...blogEntries, ...projectsEntries].join("")

  // Générer le sitemap XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allEntries}
</urlset>`

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  })
}
