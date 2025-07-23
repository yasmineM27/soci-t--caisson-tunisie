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

  // Copier le logo comme favicon.ico (Google préfère les fichiers statiques)
  fs.copyFileSync(logoPath, faviconPath);
  console.log('✅ favicon.ico créé (copie du logo)');

  // Créer les autres tailles
  const sizes = [16, 32, 180, 192, 512];
  sizes.forEach(size => {
    const targetPath = path.join(__dirname, `../public/favicon-${size}x${size}.png`);
    fs.copyFileSync(logoPath, targetPath);
    console.log(`✅ favicon-${size}x${size}.png créé`);
  });

  // Créer un favicon.ico optimisé pour Google
  const googleFaviconPath = path.join(__dirname, '../public/google-favicon.ico');
  fs.copyFileSync(logoPath, googleFaviconPath);
  console.log('✅ google-favicon.ico créé (optimisé pour Google)');

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
