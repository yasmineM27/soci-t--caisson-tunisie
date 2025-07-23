import { ImageResponse } from 'next/og'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const size = {
  width: 180,
  height: 180,
}
export const contentType = 'image/png'

// Image generation
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 48,
          background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          borderRadius: '20px',
          fontWeight: 'bold',
          boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ fontSize: '42px', marginBottom: '-8px', letterSpacing: '2px' }}>SCT</div>
          <div style={{ fontSize: '14px', opacity: 0.9, letterSpacing: '1px' }}>TUNISIE</div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
