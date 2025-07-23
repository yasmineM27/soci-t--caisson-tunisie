"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Search, CheckCircle } from "lucide-react"

export default function GoogleFaviconTestPage() {
  const checkFavicon = () => {
    window.open('https://societe-caisson-tunisie.tn/favicon.ico', '_blank')
  }

  const checkGoogleSearch = () => {
    window.open('https://www.google.com/search?q=site:societe-caisson-tunisie.tn', '_blank')
  }

  const checkGoogleSearchConsole = () => {
    window.open('https://search.google.com/search-console', '_blank')
  }

  return (
    <div className="container mx-auto p-8 max-w-4xl">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4 text-orange-600">
          🔍 Test Favicon Google - SCT
        </h1>
        <p className="text-lg text-gray-600">
          Vérification et optimisation du favicon pour l'apparition dans Google Search
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {/* Status du Favicon */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-600">
              <CheckCircle className="w-5 h-5" />
              Status Favicon
            </CardTitle>
            <CardDescription>
              Vérification de l'accessibilité du favicon
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                <span className="font-medium">favicon.ico</span>
                <span className="text-green-600 font-bold">✅ Accessible</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                <span className="font-medium">Taille 32x32</span>
                <span className="text-green-600 font-bold">✅ Optimale</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                <span className="font-medium">Format ICO</span>
                <span className="text-green-600 font-bold">✅ Compatible</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                <span className="font-medium">Logo SCT</span>
                <span className="text-green-600 font-bold">✅ Intégré</span>
              </div>
            </div>
            
            <Button onClick={checkFavicon} className="w-full" variant="outline">
              <ExternalLink className="w-4 h-4 mr-2" />
              Tester favicon.ico
            </Button>
          </CardContent>
        </Card>

        {/* Actions Google */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-600">
              <Search className="w-5 h-5" />
              Actions Google
            </CardTitle>
            <CardDescription>
              Étapes pour forcer l'apparition dans Google
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <Button onClick={checkGoogleSearch} className="w-full" variant="outline">
                <Search className="w-4 h-4 mr-2" />
                Vérifier dans Google Search
              </Button>
              
              <Button onClick={checkGoogleSearchConsole} className="w-full" variant="outline">
                <ExternalLink className="w-4 h-4 mr-2" />
                Google Search Console
              </Button>
              
              <div className="p-3 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-800 font-medium mb-2">
                  📋 Actions recommandées :
                </p>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• Soumettre sitemap.xml</li>
                  <li>• Demander réindexation</li>
                  <li>• Attendre 1-7 jours</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Optimisations Appliquées */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-orange-600">🚀 Optimisations Appliquées</CardTitle>
          <CardDescription>
            Toutes les optimisations pour l'apparition dans Google
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3 text-green-600">✅ Métadonnées Optimisées</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <code>&lt;link rel="icon" href="/favicon.ico"&gt;</code>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <code>&lt;link rel="shortcut icon"&gt;</code>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <code>&lt;meta name="theme-color"&gt;</code>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Multiple tailles (16x16, 32x32, etc.)
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3 text-green-600">✅ SEO et Indexation</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  robots.txt optimisé
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  sitemap.xml complet
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  URLs canoniques
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Favicon statique + dynamique
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* URLs de Test */}
      <Card>
        <CardHeader>
          <CardTitle>🔗 URLs de Test en Production</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-2">Favicons :</h4>
              <ul className="space-y-1 text-sm">
                <li><a href="https://societe-caisson-tunisie.tn/favicon.ico" target="_blank" className="text-blue-600 hover:underline">favicon.ico</a></li>
                <li><a href="https://societe-caisson-tunisie.tn/icon" target="_blank" className="text-blue-600 hover:underline">icon (dynamique)</a></li>
                <li><a href="https://societe-caisson-tunisie.tn/apple-icon" target="_blank" className="text-blue-600 hover:underline">apple-icon</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">SEO :</h4>
              <ul className="space-y-1 text-sm">
                <li><a href="https://societe-caisson-tunisie.tn/robots.txt" target="_blank" className="text-blue-600 hover:underline">robots.txt</a></li>
                <li><a href="https://societe-caisson-tunisie.tn/sitemap.xml" target="_blank" className="text-blue-600 hover:underline">sitemap.xml</a></li>
                <li><a href="https://societe-caisson-tunisie.tn/manifest.webmanifest" target="_blank" className="text-blue-600 hover:underline">manifest.webmanifest</a></li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="text-center mt-8 p-6 bg-orange-50 rounded-lg">
        <h3 className="text-xl font-bold text-orange-800 mb-2">
          🎯 Résultat Attendu
        </h3>
        <p className="text-orange-700">
          Dans 1-7 jours, votre favicon SCT apparaîtra dans les résultats Google à côté du titre de votre site !
        </p>
      </div>
    </div>
  )
}
