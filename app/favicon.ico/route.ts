import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET() {
  // Créer une image PNG simple pour le favicon
  const imageResponse = new ImageResponse(
    (
      <div
        style={{
          fontSize: 24,
          background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          borderRadius: '4px',
          fontWeight: 'bold',
        }}
      >
        SCT
      </div>
    ),
    {
      width: 32,
      height: 32,
    }
  )

  // Convertir en buffer pour le favicon.ico
  const buffer = await imageResponse.arrayBuffer()

  return new Response(buffer, {
    headers: {
      'Content-Type': 'image/x-icon',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  })
}
