import { ImageResponse } from 'next/og'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const size = {
  width: 512,
  height: 512,
}
export const contentType = 'image/png'

// Image generation
export default function Icon512() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 128,
          background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          borderRadius: '64px',
          fontWeight: 'bold',
          boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ 
            fontSize: '120px', 
            marginBottom: '-20px', 
            letterSpacing: '4px',
            textShadow: '0 4px 8px rgba(0,0,0,0.3)'
          }}>
            SCT
          </div>
          <div style={{ 
            fontSize: '36px', 
            opacity: 0.9, 
            letterSpacing: '2px',
            marginBottom: '8px'
          }}>
            TUNISIE
          </div>
          <div style={{ 
            fontSize: '24px', 
            opacity: 0.7,
            letterSpacing: '1px'
          }}>
            POLYSTYRÈNE EXPANSÉ
          </div>
          <div style={{ 
            fontSize: '18px', 
            opacity: 0.6,
            marginTop: '12px',
            letterSpacing: '1px'
          }}>
            ISOLATION • CONSTRUCTION
          </div>
        </div>
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported icons size metadata
      // config to also set the ImageResponse's width and height.
      ...size,
    }
  )
}
