"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"

// Sample orders data
const initialOrders = [
  {
    id: 1001,
    client: "Ahmed Benali",
    email: "ahmed@example.com",
    phone: "+216 12 345 678",
    date: "2023-05-15",
    products: [
      { name: "Coffret volet roulant", quantity: 10 },
      { name: "Panneau Isolant 3cm", quantity: 20 },
    ],
    status: "completed",
  },
  {
    id: 1002,
    client: "Sami Meddeb",
    email: "sami@example.com",
    phone: "+216 23 456 789",
    date: "2023-06-02",
    products: [{ name: "Fish Box Standard", quantity: 50 }],
    status: "pending",
  },
  {
    id: 1003,
    client: "Leila Karoui",
    email: "leila@example.com",
    phone: "+216 34 567 890",
    date: "2023-06-10",
    products: [{ name: "Panneau Isolant Sur Mesure", quantity: 15 }],
    status: "processing",
  },
  {
    id: 1004,
    client: "Mohamed Riahi",
    email: "mohamed@example.com",
    phone: "+216 45 678 901",
    date: "2023-06-15",
    products: [
      { name: "Coffret Tunnel Grande Largeur", quantity: 8 },
      { name: "Panneau Isolant 2cm", quantity: 12 },
    ],
    status: "completed",
  },
  {
    id: 1005,
    client: "Fatma Belhadj",
    email: "fatma@example.com",
    phone: "+216 56 789 012",
    date: "2023-06-20",
    products: [{ name: "Fish Box Grande Capacité", quantity: 30 }],
    status: "cancelled",
  },
]

export default function OrdersPage() {
  const [orders, setOrders] = useState(initialOrders)
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [isViewDialogOpen, setIsViewDialogOpen] = useState(false)
  const [currentOrder, setCurrentOrder] = useState(null)
  
  const handleViewOrder = (order) => {
    setCurrentOrder(order)
    setIsViewDialogOpen(true)
  }
  
  const getStatusBadgeClass = (status) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      case "processing":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
      case "pending":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
      case "cancelled":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300"
    }
  }
  
  const getStatusLabel = (status) => {
    switch (status) {
      case "completed":
        return "Terminée"
      case "processing":
        return "En traitement"
      case "pending":
        return "En attente"
      case "cancelled":
        return "Annulée"
      default:
        return status
    }
  }
  
  // Filter orders based on search term and status
  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.id.toString().includes(searchTerm)
    const matchesStatus = statusFilter === "all" || order.status === statusFilter
    return matchesSearch && matchesStatus
  })


  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Gestion des commandes</h1>
  
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Filtres</CardTitle>
          <CardDescription>Filtrer et rechercher des commandes</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Rechercher par client ou numéro de commande..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Statut" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tous les statuts</SelectItem>
                  <SelectItem value="pending">En attente</SelectItem>
                  <SelectItem value="processing">En traitement</SelectItem>
                  <SelectItem value="completed">Terminée</SelectItem>
                  <SelectItem value="cancelled">Annulée</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>
  
      <Card>
        <CardHeader>
          <CardTitle>Liste des commandes</CardTitle>
          <CardDescription>
            {filteredOrders.length} commande{filteredOrders.length > 1 ? "s" : ""} trouvée{filteredOrders.length > 1 ? "s" : ""}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>N° Commande</TableHead>
                <TableHead>Client</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Produits</TableHead>
                <TableHead>Statut</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredOrders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="font-medium">#{order.id}</TableCell>
                  <TableCell>{order.client}</TableCell>
                  <TableCell>{new Date(order.date).toLocaleDateString("fr-FR")}</TableCell>
                  <TableCell>{order.products.join(", ")}</TableCell>
                  <TableCell>{order.status}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="outline" size="sm">
                      Détails
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )}