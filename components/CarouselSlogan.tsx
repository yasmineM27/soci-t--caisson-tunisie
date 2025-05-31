import React from 'react';

const slogans: string[] = [
  "Your solution for innovative construction",
  "Construire mieux, isoler plus, dépenser moins.",
  "Caisson Tunisie — L'isolation qui construit l'avenir.",
];

const CarouselSlogan: React.FC = () => {
  // Intercaler slogans avec la jolie étoile fine ✦
  const itemsWithSeparator = slogans.flatMap((text, index) =>
    index < slogans.length - 1 ? [text, '✦'] : [text]
  );

  return (
    <div
      style={{
        overflow: 'hidden',
        width: '100%',
        backgroundColor: 'rgb(243 113 33)',
        padding: '0.75rem 0',
      }}
    >
      <div
        className="scroll-container"
        style={{
          display: 'flex',
          alignItems: 'center',
          whiteSpace: 'nowrap',
        }}
      >
        <div className="scroll-content" style={{ display: 'flex' }}>
          {itemsWithSeparator.map((item, index) => (
            <div
              key={index}
              style={{
                padding: item === '✦' ? '0 0.8rem' : '0 1rem',
                whiteSpace: 'nowrap',
                fontWeight: item === '✦' ? 'normal' : 'bold',
                fontSize: item === '✦' ? '1.2rem' : '1.1rem',
                color: 'white',
                opacity: item === '✦' ? 0.7 : 1,
              }}
            >
              {item}
            </div>
          ))}
        </div>
        {/* 2e copie pour scroll infini fluide */}
        <div className="scroll-content" style={{ display: 'flex' }}>
          {itemsWithSeparator.map((item, index) => (
            <div
              key={`dup-${index}`}
              style={{
                padding: item === '✦' ? '0 0.8rem' : '0 1rem',
                whiteSpace: 'nowrap',
                fontWeight: item === '✦' ? 'normal' : 'bold',
                fontSize: item === '✦' ? '1.2rem' : '1.1rem',
                color: 'white',
                opacity: item === '✦' ? 0.7 : 1,
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
          .scroll-container {
            animation: scroll 30s linear infinite;
          }

          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>
    </div>
  );
};

export default CarouselSlogan;
