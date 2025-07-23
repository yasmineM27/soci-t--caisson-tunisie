import type { NextRequest } from "next/server"

export function GET(request: NextRequest) {
  // Utiliser le domaine de production ou l'origine de la requête
  const baseUrl = process.env.NODE_ENV === 'production'
    ? 'https://societe-caisson-tunisie.tn'
    : request.nextUrl.origin

  const robotsTxt = `# www.robotstxt.org/

# Allow crawling of all content
User-agent: *
Allow: /

# Allow favicon and icons for better indexing
Allow: /favicon.ico
Allow: /icon
Allow: /apple-icon
Allow: /favicon-*.png

# Disallow admin pages
Disallow: /admin/
Disallow: /admin/*

# Disallow cart and checkout pages
Disallow: /panier
Disallow: /commande

# Sitemap
Sitemap: ${baseUrl}/sitemap.xml

# Favicon location for search engines
# Favicon: ${baseUrl}/favicon.ico`.trim()

  return new Response(robotsTxt, {
    headers: {
      "Content-Type": "text/plain",
    },
  })
}
