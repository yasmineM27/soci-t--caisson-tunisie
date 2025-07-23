import { ImageResponse } from 'next/og'

// Route segment config
export const runtime = 'edge'

// Image generation avec logo réel
export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'white',
          borderRadius: '6px',
          padding: '2px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        }}
      >
        {/* Utiliser l'image du logo */}
        <img
          src="https://societe-caisson-tunisie.tn/stc/logo.png"
          width="28"
          height="28"
          style={{
            objectFit: 'contain',
            borderRadius: '2px',
          }}
        />
      </div>
    ),
    {
      width: 32,
      height: 32,
    }
  )
}
