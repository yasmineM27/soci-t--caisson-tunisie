"use client"

import { useState } from "react"
import { Edit, MoreHorizontal, Plus, Trash } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

// Sample services data
const initialServices = [
  {
    id: 1,
    title: "Fabrication sur mesure",
    description: "Nous concevons et fabriquons des produits en polystyrène expansé selon vos spécifications précises.",
    icon: "Settings",
    status: "active",
  },
  {
    id: 2,
    title: "Conseil technique",
    description: "Notre équipe d'experts vous accompagne dans le choix des solutions les plus adaptées à vos besoins.",
    icon: "Users",
    status: "active",
  },
  {
    id: 3,
    title: "Livraison rapide",
    description: "Nous assurons une livraison rapide et fiable de vos commandes partout en Tunisie.",
    icon: "Truck",
    status: "active",
  },
  
]

// Available icons
const availableIcons = ["Settings", "Users", "Truck", "Wrench", "Shield", "CheckCircle", "Tool", "Zap"]

export default function ServicesPage() {
  const { toast } = useToast()
  const [services, setServices] = useState(initialServices)
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [currentService, setCurrentService] = useState(null)
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    icon: "Settings",
    status: "active",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleIconChange = (icon) => {
    setFormData((prev) => ({ ...prev, icon }))
  }

  const handleDelete = (id) => {
    setServices(services.filter((service) => service.id !== id))
    toast({
      title: "Service supprimé",
      description: "Le service a été supprimé avec succès.",
    })
  }

  const handleStatusChange = (id) => {
    setServices(
      services.map((service) =>
        service.id === id
          ? {
              ...service,
              status: service.status === "active" ? "inactive" : "active",
            }
          : service,
      ),
    )
    toast({
      title: "Statut mis à jour",
      description: `Le service est maintenant ${
        services.find((s) => s.id === id).status === "active" ? "inactif" : "actif"
      }.`,
    })
  }

  const handleAddService = () => {
    const newService = {
      id: services.length + 1,
      ...formData,
    }
    setServices([...services, newService])
    setFormData({
      title: "",
      description: "",
      icon: "Settings",
      status: "active",
    })
    setIsAddDialogOpen(false)
    toast({
      title: "Service ajouté",
      description: "Le service a été ajouté avec succès.",
    })
  }

  const handleEditClick = (service) => {
    setCurrentService(service)
    setFormData({
      title: service.title,
      description: service.description,
      icon: service.icon,
      status: service.status,
    })
    setIsEditDialogOpen(true)
  }

  const handleEditService = () => {
    setServices(services.map((service) => (service.id === currentService.id ? { ...service, ...formData } : service)))
    setIsEditDialogOpen(false)
    toast({
      title: "Service mis à jour",
      description: "Le service a été mis à jour avec succès.",
    })
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Gestion des services</h1>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" /> Ajouter un service
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Ajouter un service</DialogTitle>
              <DialogDescription>Ajoutez un nouveau service à afficher sur le site.</DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="title">Titre du service</Label>
                <Input
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Titre du service"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Description du service"
                  rows={4}
                />
              </div>
              <div className="space-y-2">
                <Label>Icône</Label>
                <div className="grid grid-cols-4 gap-2">
                  {availableIcons.map((icon) => (
                    <button
                      key={icon}
                      type="button"
                      onClick={() => handleIconChange(icon)}
                      className={`flex items-center justify-center p-2 rounded-md ${
                        formData.icon === icon ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80"
                      }`}
                    >
                      {icon}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                Annuler
              </Button>
              <Button onClick={handleAddService}>Ajouter</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Liste des services</CardTitle>
          <CardDescription>Gérez les services affichés sur le site.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Titre</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Icône</TableHead>
                <TableHead>Statut</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {services.map((service) => (
                <TableRow key={service.id}>
                  <TableCell className="font-medium">{service.title}</TableCell>
                  <TableCell className="max-w-xs truncate">{service.description}</TableCell>
                  <TableCell>{service.icon}</TableCell>
                  <TableCell>
                    <span
                      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        service.status === "active"
                          ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                          : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
                      }`}
                    >
                      {service.status === "active" ? "Actif" : "Inactif"}
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
                        <DropdownMenuItem onClick={() => handleEditClick(service)}>
                          <Edit className="mr-2 h-4 w-4" /> Modifier
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleStatusChange(service.id)}>
                          {service.status === "active" ? "Désactiver" : "Activer"}
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          className="text-red-600 focus:text-red-600"
                          onClick={() => handleDelete(service.id)}
                        >
                          <Trash className="mr-2 h-4 w-4" /> Supprimer
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Modifier le service</DialogTitle>
            <DialogDescription>Modifiez les informations du service.</DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="edit-title">Titre du service</Label>
              <Input
                id="edit-title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Titre du service"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="edit-description">Description</Label>
              <Textarea
                id="edit-description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Description du service"
                rows={4}
              />
            </div>
            <div className="space-y-2">
              <Label>Icône</Label>
              <div className="grid grid-cols-4 gap-2">
                {availableIcons.map((icon) => (
                  <button
                    key={icon}
                    type="button"
                    onClick={() => handleIconChange(icon)}
                    className={`flex items-center justify-center p-2 rounded-md ${
                      formData.icon === icon ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80"
                    }`}
                  >
                    {icon}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>
              Annuler
            </Button>
            <Button onClick={handleEditService}>Enregistrer</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
