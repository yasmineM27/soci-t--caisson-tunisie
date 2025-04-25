"use client"

import { useState } from "react"
import { Edit, MoreHorizontal, Plus, Star, Trash } from "lucide-react"
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

// Sample testimonials data
const initialTestimonials = [
  {
    id: 1,
    author: "Ahmed B.",
    company: "Entreprise de Construction",
    content: "Les produits de Caisson Tunisie ont considérablement amélioré l'isolation thermique de nos bâtiments.",
    rating: 5,
    status: "published",
  },
  {
    id: 2,
    author: "Sami M.",
    company: "Société de Pêche",
    content:
      "Nous utilisons leurs Fish Box pour notre activité de pêche. La qualité est excellente et le service client est réactif.",
    rating: 5,
    status: "published",
  },
  {
    id: 3,
    author: "Leila K.",
    company: "Distributeur de Matériaux",
    content: "Partenaire fiable avec des produits de qualité supérieure. Nous recommandons vivement leurs services.",
    rating: 4,
    status: "published",
  },
  {
    id: 4,
    author: "Mohamed R.",
    company: "Entreprise de Rénovation",
    content: "Excellente qualité des panneaux isolants. Livraison rapide et service client impeccable.",
    rating: 5,
    status: "draft",
  },
]

export default function TestimonialsPage() {
  const { toast } = useToast()
  const [testimonials, setTestimonials] = useState(initialTestimonials)
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(null)
  const [formData, setFormData] = useState({
    author: "",
    company: "",
    content: "",
    rating: 5,
    status: "published",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleRatingChange = (rating) => {
    setFormData((prev) => ({ ...prev, rating }))
  }

  const handleDelete = (id) => {
    setTestimonials(testimonials.filter((testimonial) => testimonial.id !== id))
    toast({
      title: "Témoignage supprimé",
      description: "Le témoignage a été supprimé avec succès.",
    })
  }

  const handleStatusChange = (id) => {
    setTestimonials(
      testimonials.map((testimonial) =>
        testimonial.id === id
          ? {
              ...testimonial,
              status: testimonial.status === "published" ? "draft" : "published",
            }
          : testimonial,
      ),
    )
    toast({
      title: "Statut mis à jour",
      description: `Le témoignage est maintenant ${
        testimonials.find((t) => t.id === id).status === "published" ? "masqué" : "publié"
      }.`,
    })
  }

  const handleAddTestimonial = () => {
    const newTestimonial = {
      id: testimonials.length + 1,
      ...formData,
    }
    setTestimonials([...testimonials, newTestimonial])
    setFormData({
      author: "",
      company: "",
      content: "",
      rating: 5,
      status: "published",
    })
    setIsAddDialogOpen(false)
    toast({
      title: "Témoignage ajouté",
      description: "Le témoignage a été ajouté avec succès.",
    })
  }

  const handleEditClick = (testimonial) => {
    setCurrentTestimonial(testimonial)
    setFormData({
      author: testimonial.author,
      company: testimonial.company,
      content: testimonial.content,
      rating: testimonial.rating,
      status: testimonial.status,
    })
    setIsEditDialogOpen(true)
  }

  const handleEditTestimonial = () => {
    setTestimonials(
      testimonials.map((testimonial) =>
        testimonial.id === currentTestimonial.id ? { ...testimonial, ...formData } : testimonial,
      ),
    )
    setIsEditDialogOpen(false)
    toast({
      title: "Témoignage mis à jour",
      description: "Le témoignage a été mis à jour avec succès.",
    })
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Gestion des témoignages</h1>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" /> Ajouter un témoignage
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Ajouter un témoignage</DialogTitle>
              <DialogDescription>Ajoutez un nouveau témoignage client à afficher sur le site.</DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="author">Nom de l'auteur</Label>
                <Input
                  id="author"
                  name="author"
                  value={formData.author}
                  onChange={handleChange}
                  placeholder="Nom de l'auteur"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">Entreprise</Label>
                <Input
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Nom de l'entreprise"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="content">Témoignage</Label>
                <Textarea
                  id="content"
                  name="content"
                  value={formData.content}
                  onChange={handleChange}
                  placeholder="Contenu du témoignage"
                  rows={4}
                />
              </div>
              <div className="space-y-2">
                <Label>Note</Label>
                <div className="flex items-center space-x-1">
                  {[1, 2, 3, 4, 5].map((rating) => (
                    <button
                      key={rating}
                      type="button"
                      onClick={() => handleRatingChange(rating)}
                      className="focus:outline-none"
                    >
                      <Star
                        className={`h-6 w-6 ${
                          rating <= formData.rating ? "text-yellow-500 fill-yellow-500" : "text-muted-foreground"
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                Annuler
              </Button>
              <Button onClick={handleAddTestimonial}>Ajouter</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Liste des témoignages</CardTitle>
          <CardDescription>Gérez les témoignages clients affichés sur le site.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Auteur</TableHead>
                <TableHead>Entreprise</TableHead>
                <TableHead>Témoignage</TableHead>
                <TableHead>Note</TableHead>
                <TableHead>Statut</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {testimonials.map((testimonial) => (
                <TableRow key={testimonial.id}>
                  <TableCell className="font-medium">{testimonial.author}</TableCell>
                  <TableCell>{testimonial.company}</TableCell>
                  <TableCell className="max-w-xs truncate">{testimonial.content}</TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-muted-foreground"
                          }`}
                        />
                      ))}
                    </div>
                  </TableCell>
                  <TableCell>
                    <span
                      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        testimonial.status === "published"
                          ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                          : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
                      }`}
                    >
                      {testimonial.status === "published" ? "Publié" : "Brouillon"}
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
                        <DropdownMenuItem onClick={() => handleEditClick(testimonial)}>
                          <Edit className="mr-2 h-4 w-4" /> Modifier
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleStatusChange(testimonial.id)}>
                          {testimonial.status === "published" ? "Masquer" : "Publier"}
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          className="text-red-600 focus:text-red-600"
                          onClick={() => handleDelete(testimonial.id)}
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
            <DialogTitle>Modifier le témoignage</DialogTitle>
            <DialogDescription>Modifiez les informations du témoignage.</DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="edit-author">Nom de l'auteur</Label>
              <Input
                id="edit-author"
                name="author"
                value={formData.author}
                onChange={handleChange}
                placeholder="Nom de l'auteur"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="edit-company">Entreprise</Label>
              <Input
                id="edit-company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Nom de l'entreprise"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="edit-content">Témoignage</Label>
              <Textarea
                id="edit-content"
                name="content"
                value={formData.content}
                onChange={handleChange}
                placeholder="Contenu du témoignage"
                rows={4}
              />
            </div>
            <div className="space-y-2">
              <Label>Note</Label>
              <div className="flex items-center space-x-1">
                {[1, 2, 3, 4, 5].map((rating) => (
                  <button
                    key={rating}
                    type="button"
                    onClick={() => handleRatingChange(rating)}
                    className="focus:outline-none"
                  >
                    <Star
                      className={`h-6 w-6 ${
                        rating <= formData.rating ? "text-yellow-500 fill-yellow-500" : "text-muted-foreground"
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>
              Annuler
            </Button>
            <Button onClick={handleEditTestimonial}>Enregistrer</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
