import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Home, Search, ArrowLeft, Package, Phone } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <Card className="shadow-xl">
          <CardHeader className="text-center pb-2">
            <div className="mx-auto mb-4 w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
              <Search className="w-12 h-12 text-white" />
            </div>
            <CardTitle className="text-3xl font-bold text-gray-900 mb-2">
              Page non trouvée
            </CardTitle>
            <CardDescription className="text-lg text-gray-600">
              Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
            </CardDescription>
          </CardHeader>
          
          <CardContent className="pt-6">
            <div className="grid gap-4 md:grid-cols-2 mb-8">
              <Card className="border-l-4 border-l-blue-500">
                <CardContent className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <Package className="w-5 h-5 mr-2 text-blue-500" />
                    Nos Produits
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Découvrez notre gamme complète de produits en polystyrène expansé
                  </p>
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <Link href="/produits">
                      Voir les produits
                    </Link>
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="border-l-4 border-l-green-500">
                <CardContent className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <Phone className="w-5 h-5 mr-2 text-green-500" />
                    Besoin d'aide ?
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Notre équipe est là pour vous accompagner dans vos projets
                  </p>
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <Link href="/contact">
                      Nous contacter
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild className="flex items-center">
                <Link href="/">
                  <Home className="w-4 h-4 mr-2" />
                  Retour à l'accueil
                </Link>
              </Button>
              
              <Button asChild variant="outline" className="flex items-center">
                <Link href="javascript:history.back()">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Page précédente
                </Link>
              </Button>
            </div>
            
            <div className="mt-8 p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">Pages populaires :</h4>
              <div className="flex flex-wrap gap-2">
                <Link href="/produits/coffret-tunnel-volet-roulant" className="text-sm text-blue-600 hover:text-blue-800 underline">
                  Coffret Tunnel
                </Link>
                <span className="text-gray-400">•</span>
                <Link href="/produits/panneau-isolant-2cm" className="text-sm text-blue-600 hover:text-blue-800 underline">
                  Panneaux Isolants
                </Link>
                <span className="text-gray-400">•</span>
                <Link href="/produits/fish-box-5kg" className="text-sm text-blue-600 hover:text-blue-800 underline">
                  Fish Box
                </Link>
                <span className="text-gray-400">•</span>
                <Link href="/services" className="text-sm text-blue-600 hover:text-blue-800 underline">
                  Nos Services
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export const metadata = {
  title: "Page non trouvée - Société Caisson Tunisie",
  description: "La page que vous recherchez n'existe pas. Découvrez nos produits en polystyrène expansé ou contactez-nous pour plus d'informations.",
  robots: "noindex, nofollow"
}
