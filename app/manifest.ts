import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Société Caisson Tunisie - Spécialiste Polystyrène Expansé',
    short_name: 'SCT Tunisie',
    description: 'Fabricant tunisien de coffrets tunnel, panneaux isolants et caissons d\'emballage en polystyrène expansé (EPS). Devis gratuit.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#1e40af',
    orientation: 'portrait-primary',
    categories: ['business', 'productivity', 'shopping'],
    lang: 'fr',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable'
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable'
      },
      {
        src: '/apple-icon',
        sizes: '180x180',
        type: 'image/png'
      }
    ],
    screenshots: [
      {
        src: '/stc/interface.jpeg',
        sizes: '1280x720',
        type: 'image/jpeg',
        form_factor: 'wide'
      }
    ]
  }
}
