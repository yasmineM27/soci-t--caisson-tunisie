import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart3, Package, ShoppingCart, Users } from "lucide-react"

export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Tableau de bord</h1>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Produits</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">+2 depuis le mois dernier</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Commandes</CardTitle>
            <ShoppingCart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">+5 depuis le mois dernier</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Utilisateurs</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">+1 depuis le mois dernier</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Visites</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,234</div>
            <p className="text-xs text-muted-foreground">+15% depuis le mois dernier</p>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8">
        <Tabs defaultValue="overview">
          <TabsList>
            <TabsTrigger value="overview">Aperçu</TabsTrigger>
            <TabsTrigger value="analytics">Analytiques</TabsTrigger>
            <TabsTrigger value="reports">Rapports</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Aperçu des performances</CardTitle>
                <CardDescription>Résumé des performances du site pour le mois en cours</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] flex items-center justify-center bg-muted rounded-md">
                  <p className="text-muted-foreground">Graphique des performances (à implémenter)</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="analytics" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Analytiques détaillées</CardTitle>
                <CardDescription>Analyse détaillée du trafic et des conversions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] flex items-center justify-center bg-muted rounded-md">
                  <p className="text-muted-foreground">Graphique d'analytiques (à implémenter)</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="reports" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Rapports</CardTitle>
                <CardDescription>Rapports générés pour la période sélectionnée</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] flex items-center justify-center bg-muted rounded-md">
                  <p className="text-muted-foreground">Rapports (à implémenter)</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Dernières commandes</CardTitle>
            <CardDescription>Les 5 dernières commandes reçues</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex items-center justify-between border-b pb-2">
                  <div>
                    <p className="font-medium">Commande #{1000 + i}</p>
                    <p className="text-sm text-muted-foreground">Client: Client {i}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{(Math.random() * 1000).toFixed(2)} DT</p>
                    <p className="text-sm text-muted-foreground">
                      Il y a {i} jour{i > 1 ? "s" : ""}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Produits populaires</CardTitle>
            <CardDescription>Les produits les plus demandés</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                "Coffret Tunnel pour Volet Roulant",
                "Panneau Isolant 3cm",
                "Fish Box Standard",
                "Panneau Isolant Sur Mesure",
                "Coffret Tunnel Grande Largeur",
              ].map((product, i) => (
                <div key={i} className="flex items-center justify-between border-b pb-2">
                  <p className="font-medium">{product}</p>
                  <p className="font-medium">{Math.floor(Math.random() * 50) + 10} ventes</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
