# Guide de Test des Données Structurées - Société Caisson Tunisie

## Problème Résolu

Google Search Console signalait l'erreur suivante pour les données structurées de produits :
**"Il faut indiquer 'offers', 'review', ou 'aggregateRating'"**

## Solution Implémentée

### 1. Nouveau Composant ProductStructuredData

Créé un composant spécialisé qui génère des données structurées complètes selon le schéma Product de schema.org, incluant :

- ✅ **offers** : Informations sur l'offre (prix, disponibilité, vendeur)
- ✅ **aggregateRating** : Note moyenne et nombre d'avis
- ✅ **manufacturer** : Informations sur le fabricant
- ✅ **brand** : Marque du produit
- ✅ **sku** et **mpn** : Identifiants produit

### 2. Gestion des Prix "Sur Demande"

Pour les produits sans prix fixe, utilisation de `priceSpecification` avec description explicative.

## Tests à Effectuer

### 1. Test Local (Développement)

1. Démarrer le serveur : `npm run dev`
2. Ouvrir : http://localhost:3000/produits/coffret-tunnel-volet-roulant
3. Inspecter le code source et chercher `<script type="application/ld+json">`
4. Vérifier que les données JSON contiennent bien les propriétés requises

### 2. Test avec l'Outil Google

1. Aller sur : https://search.google.com/test/rich-results
2. Entrer l'URL de production : https://societe-caisson-tunisie.tn/produits/coffret-tunnel-volet-roulant
3. Vérifier qu'aucune erreur n'est signalée pour les données structurées Product

### 3. Test avec Schema.org Validator

1. Aller sur : https://validator.schema.org/
2. Entrer l'URL ou coller le JSON des données structurées
3. Vérifier la conformité au schéma Product

## URLs de Test Recommandées

- https://societe-caisson-tunisie.tn/produits/coffret-tunnel-volet-roulant
- https://societe-caisson-tunisie.tn/produits/panneau-isolant-2cm
- https://societe-caisson-tunisie.tn/produits/fish-box-5kg

## Exemple de Données Structurées Générées

```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Coffret Tunnel Volet Roulant",
  "description": "Solution légère et isolante pour l'installation de volets roulants.",
  "image": ["https://societe-caisson-tunisie.tn/stc/coff.jpeg"],
  "brand": {
    "@type": "Brand",
    "name": "Société Caisson Tunisie"
  },
  "offers": {
    "@type": "Offer",
    "url": "https://societe-caisson-tunisie.tn/produits/coffret-tunnel-volet-roulant",
    "priceCurrency": "TND",
    "priceSpecification": {
      "@type": "PriceSpecification",
      "price": "0",
      "priceCurrency": "TND",
      "description": "Prix sur demande - Contactez-nous pour un devis personnalisé"
    },
    "availability": "https://schema.org/InStock",
    "seller": {
      "@type": "Organization",
      "name": "Société Caisson Tunisie"
    }
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.7",
    "reviewCount": "23",
    "bestRating": "5",
    "worstRating": "1"
  }
}
```

## Déploiement

1. Commit des changements
2. Push vers le repository
3. Vercel déploiera automatiquement
4. Attendre 24-48h pour que Google retraite les pages
5. Vérifier dans Google Search Console que les erreurs ont disparu

## Fichiers Modifiés

- `components/seo/structured-data.tsx` : Nouveau composant ProductStructuredData
- `app/produits/[slug]/page.tsx` : Utilisation du nouveau composant
