"use client"

import { useState } from "react"
import Link from "next/link"
import { Edit, MoreHorizontal, Plus, Trash } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useToast } from "@/hooks/use-toast"

// Sample product data
const initialProducts = [
  {
    id: 1,
    name: "Coffret Tunnel Volet Roulant",
    category: "coffrets",
    
    status: "active",
  },

  {
    id: 4,
    name: "Panneau Isolant 2cm",
    category: "panneaux",
    status: "active",
  },
  {
    id: 5,
    name: "Panneau Isolant 3cm",
    category: "panneaux",
    status: "active",
  },
  {
    id: 6,
    name: "Panneau Isolant Sur Mesure",
    category: "panneaux",
    status: "inactive",
  },
  {
    id: 7,
    name: "Fish Box Standard",
    category: "fishbox",
    status: "active",
  },
  {
    id: 8,
    name: "Fish Box Grande Capacité",
    category: "fishbox",
    status: "active",
  },
  {
    id: 9,
    name: "Caisson d'Emballage Personnalisé",
    category: "fishbox",
    status: "inactive",
  },
]

export default function ProductsPage() {
  const { toast } = useToast()
  const [products, setProducts] = useState(initialProducts)
  const [searchTerm, setSearchTerm] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [statusFilter, setStatusFilter] = useState("all")

  const handleDelete = (id) => {
    setProducts(products.filter((product) => product.id !== id))
    toast({
      title: "Produit supprimé",
      description: "Le produit a été supprimé avec succès.",
    })
  }

  const handleStatusChange = (id, newStatus) => {
    setProducts(products.map((product) => (product.id === id ? { ...product, status: newStatus } : product)))
    toast({
      title: "Statut mis à jour",
      description: `Le produit est maintenant ${newStatus === "active" ? "actif" : "inactif"}.`,
    })
  }

  // Filter products based on search term, category, and status
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = categoryFilter === "all" || product.category === categoryFilter
    const matchesStatus = statusFilter === "all" || product.status === statusFilter
    return matchesSearch && matchesCategory && matchesStatus
  })

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Gestion des produits</h1>
        <Button asChild>
          <Link href="/admin/produits/ajouter">
            <Plus className="mr-2 h-4 w-4" /> Ajouter un produit
          </Link>
        </Button>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Filtres</CardTitle>
          <CardDescription>Filtrer et rechercher des produits</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div>
              <Input
                placeholder="Rechercher un produit..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div>
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Catégorie" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Toutes les catégories</SelectItem>
                  <SelectItem value="coffrets">Coffrets Tunnel</SelectItem>
                  <SelectItem value="panneaux">Panneaux Isolants</SelectItem>
                  <SelectItem value="fishbox">Fish Box</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Statut" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tous les statuts</SelectItem>
                  <SelectItem value="active">Actif</SelectItem>
                  <SelectItem value="inactive">Inactif</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Liste des produits</CardTitle>
          <CardDescription>
            {filteredProducts.length} produit{filteredProducts.length > 1 ? "s" : ""} trouvé
            {filteredProducts.length > 1 ? "s" : ""}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Nom</TableHead>
                <TableHead>Catégorie</TableHead>
                <TableHead>Prix</TableHead>
                <TableHead>Statut</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredProducts.map((product) => (
                <TableRow key={product.id}>
                  <TableCell>{product.id}</TableCell>
                  <TableCell className="font-medium">{product.name}</TableCell>
                  <TableCell>
                    {product.category === "coffrets" && "Coffrets Tunnel"}
                    {product.category === "panneaux" && "Panneaux Isolants"}
                    {product.category === "fishbox" && "Fish Box"}
                    {product.category === "Polystyrène" && "polystyrène"}

                  </TableCell>
                  <TableCell>
                    <span
                      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        product.status === "active"
                          ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                          : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
                      }`}
                    >
                      {product.status === "active" ? "Actif" : "Inactif"}
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem asChild>
                          <Link href={`/admin/produits/modifier/${product.id}`}>
                            <Edit className="mr-2 h-4 w-4" /> Modifier
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() =>
                            handleStatusChange(product.id, product.status === "active" ? "inactive" : "active")
                          }
                        >
                          {product.status === "active" ? "Désactiver" : "Activer"}
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          className="text-red-600 focus:text-red-600"
                          onClick={() => handleDelete(product.id)}
                        >
                          <Trash className="mr-2 h-4 w-4" /> Supprimer
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
              {filteredProducts.length === 0 && (
                <TableRow>
                  <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">
                    Aucun produit trouvé
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
