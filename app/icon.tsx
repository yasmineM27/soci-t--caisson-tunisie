import { ImageResponse } from 'next/og'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'

// Image generation
export default function Icon() {
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
        {/* Simuler le logo avec du texte stylisé */}
        <div
          style={{
            fontSize: 16,
            background: 'linear-gradient(135deg, #ce6801ff 0%, #ae5f19ff 100%)',
            width: '28px',
            height: '28px',
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
      </div>
    ),
    {
      ...size,
    }
  )
}
