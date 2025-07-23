/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://societe-caisson-tunisie.tn',
    generateRobotsTxt: false, // Nous utilisons notre propre robots.txt dynamique
    exclude: ['/admin/*', '/panier', '/commande'],
    changefreq: 'weekly',
    priority: 0.7,
    sitemapSize: 5000,
  };
  