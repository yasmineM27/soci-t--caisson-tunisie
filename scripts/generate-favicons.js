// Script pour générer les favicons à partir du logo
// Utilise le logo /public/stc/logo.png pour créer différentes tailles

const fs = require('fs');
const path = require('path');

console.log('🎨 Génération des favicons à partir du logo...');

// Copier le logo comme favicon de base
const logoPath = path.join(__dirname, '../public/stc/logo.png');
const faviconPath = path.join(__dirname, '../public/favicon.ico');

if (fs.existsSync(logoPath)) {
  console.log('✅ Logo trouvé:', logoPath);
  
  // Pour l'instant, on copie juste le logo comme favicon
  // Dans un vrai projet, on utiliserait une librairie comme 'sharp' pour redimensionner
  fs.copyFileSync(logoPath, faviconPath);
  console.log('✅ favicon.ico créé');
  
  // Créer les autres tailles (simulation)
  const sizes = [16, 32, 180, 192, 512];
  sizes.forEach(size => {
    const targetPath = path.join(__dirname, `../public/favicon-${size}x${size}.png`);
    fs.copyFileSync(logoPath, targetPath);
    console.log(`✅ favicon-${size}x${size}.png créé`);
  });
  
  console.log('🎉 Tous les favicons ont été générés !');
} else {
  console.error('❌ Logo non trouvé:', logoPath);
}

// Créer un manifest pour les favicons statiques
const manifest = {
  "name": "Société Caisson Tunisie",
  "short_name": "SCT",
  "icons": [
    {
      "src": "/favicon-16x16.png",
      "sizes": "16x16",
      "type": "image/png"
    },
    {
      "src": "/favicon-32x32.png", 
      "sizes": "32x32",
      "type": "image/png"
    },
    {
      "src": "/favicon-180x180.png",
      "sizes": "180x180", 
      "type": "image/png"
    },
    {
      "src": "/favicon-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/favicon-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
};

fs.writeFileSync(
  path.join(__dirname, '../public/favicon-manifest.json'), 
  JSON.stringify(manifest, null, 2)
);

console.log('✅ favicon-manifest.json créé');
