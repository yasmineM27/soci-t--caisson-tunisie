"use client"

import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function TestFaviconPage() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">
        🎨 Test des Favicons - Société Caisson Tunisie
      </h1>
      
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        {/* Favicons dynamiques (app/) */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl text-blue-600">
              📱 Favicons Dynamiques (app/)
            </CardTitle>
            <CardDescription>
              Générés dynamiquement par Next.js avec ImageResponse
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="mb-2 p-4 bg-gray-100 rounded-lg">
                  <Image 
                    src="/icon" 
                    alt="Icon 32x32" 
                    width={32} 
                    height={32}
                    className="mx-auto"
                  />
                </div>
                <p className="text-sm font-medium">icon (32x32)</p>
                <p className="text-xs text-gray-500">/icon</p>
              </div>
              
              <div className="text-center">
                <div className="mb-2 p-4 bg-gray-100 rounded-lg">
                  <Image 
                    src="/apple-icon" 
                    alt="Apple Icon 180x180" 
                    width={64} 
                    height={64}
                    className="mx-auto"
                  />
                </div>
                <p className="text-sm font-medium">apple-icon (180x180)</p>
                <p className="text-xs text-gray-500">/apple-icon</p>
              </div>
              
              <div className="text-center">
                <div className="mb-2 p-4 bg-gray-100 rounded-lg">
                  <Image 
                    src="/icon-192" 
                    alt="Icon 192x192" 
                    width={64} 
                    height={64}
                    className="mx-auto"
                  />
                </div>
                <p className="text-sm font-medium">icon-192 (192x192)</p>
                <p className="text-xs text-gray-500">/icon-192</p>
              </div>
              
              <div className="text-center">
                <div className="mb-2 p-4 bg-gray-100 rounded-lg">
                  <Image 
                    src="/favicon-test" 
                    alt="Favicon Test avec logo" 
                    width={32} 
                    height={32}
                    className="mx-auto"
                  />
                </div>
                <p className="text-sm font-medium">favicon-test</p>
                <p className="text-xs text-gray-500">/favicon-test</p>
              </div>
            </div>
            
            <div className="mt-4 p-3 bg-blue-50 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">✅ Avantages :</h4>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• Génération dynamique</li>
                <li>• Personnalisation facile</li>
                <li>• Pas de fichiers statiques</li>
                <li>• Optimisation automatique</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Favicons statiques (public/) */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl text-orange-600">
              🖼️ Favicons Statiques (public/)
            </CardTitle>
            <CardDescription>
              Fichiers PNG statiques basés sur le logo réel
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="mb-2 p-4 bg-gray-100 rounded-lg">
                  <Image 
                    src="/favicon-32x32.png" 
                    alt="Favicon 32x32" 
                    width={32} 
                    height={32}
                    className="mx-auto"
                  />
                </div>
                <p className="text-sm font-medium">favicon-32x32.png</p>
                <p className="text-xs text-gray-500">32x32</p>
              </div>
              
              <div className="text-center">
                <div className="mb-2 p-4 bg-gray-100 rounded-lg">
                  <Image 
                    src="/favicon-180x180.png" 
                    alt="Favicon 180x180" 
                    width={64} 
                    height={64}
                    className="mx-auto"
                  />
                </div>
                <p className="text-sm font-medium">favicon-180x180.png</p>
                <p className="text-xs text-gray-500">180x180</p>
              </div>
              
              <div className="text-center">
                <div className="mb-2 p-4 bg-gray-100 rounded-lg">
                  <Image 
                    src="/favicon-192x192.png" 
                    alt="Favicon 192x192" 
                    width={64} 
                    height={64}
                    className="mx-auto"
                  />
                </div>
                <p className="text-sm font-medium">favicon-192x192.png</p>
                <p className="text-xs text-gray-500">192x192</p>
              </div>
              
              <div className="text-center">
                <div className="mb-2 p-4 bg-gray-100 rounded-lg">
                  <Image 
                    src="/stc/logo.png" 
                    alt="Logo original" 
                    width={64} 
                    height={64}
                    className="mx-auto"
                  />
                </div>
                <p className="text-sm font-medium">Logo original</p>
                <p className="text-xs text-gray-500">/stc/logo.png</p>
              </div>
            </div>
            
            <div className="mt-4 p-3 bg-orange-50 rounded-lg">
              <h4 className="font-semibold text-orange-800 mb-2">✅ Avantages :</h4>
              <ul className="text-sm text-orange-700 space-y-1">
                <li>• Logo réel utilisé</li>
                <li>• Compatibilité maximale</li>
                <li>• Chargement rapide</li>
                <li>• Contrôle total du design</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tests de liens */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">🔗 Tests de Liens Directs</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-2">Favicons Dynamiques :</h4>
              <ul className="space-y-1 text-sm">
                <li><a href="/icon" target="_blank" className="text-blue-600 hover:underline">/icon</a></li>
                <li><a href="/apple-icon" target="_blank" className="text-blue-600 hover:underline">/apple-icon</a></li>
                <li><a href="/icon-192" target="_blank" className="text-blue-600 hover:underline">/icon-192</a></li>
                <li><a href="/icon-512" target="_blank" className="text-blue-600 hover:underline">/icon-512</a></li>
                <li><a href="/favicon-test" target="_blank" className="text-blue-600 hover:underline">/favicon-test</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Favicons Statiques :</h4>
              <ul className="space-y-1 text-sm">
                <li><a href="/favicon.ico" target="_blank" className="text-orange-600 hover:underline">/favicon.ico</a></li>
                <li><a href="/favicon-32x32.png" target="_blank" className="text-orange-600 hover:underline">/favicon-32x32.png</a></li>
                <li><a href="/favicon-180x180.png" target="_blank" className="text-orange-600 hover:underline">/favicon-180x180.png</a></li>
                <li><a href="/favicon-192x192.png" target="_blank" className="text-orange-600 hover:underline">/favicon-192x192.png</a></li>
                <li><a href="/favicon-512x512.png" target="_blank" className="text-orange-600 hover:underline">/favicon-512x512.png</a></li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
