"use client"

import { useState } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { StructuredData } from "@/components/seo/structured-data"
import { handleContactForm } from "@/app/actions/email"

export default function ContactPage() {
  const searchParams = useSearchParams()
  const productParam = searchParams.get("product")

  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: productParam ? "Demande de devis" : "Question générale",
    message: productParam ? `Je souhaite obtenir un devis pour le produit: ${productParam}` : "",
    contactPreference: "email",
    product: productParam || "",
    newsletter: false,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleSelectChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleRadioChange = (value) => {
    setFormData((prev) => ({ ...prev, contactPreference: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Créer un objet FormData à partir du formulaire
      const formDataObj = new FormData()
      Object.entries(formData).forEach(([key, value]) => {
        formDataObj.append(key, value.toString())
      })

      // Appeler le Server Action
      const result = await handleContactForm(formDataObj)

      if (result.success) {
        toast({
          title: "Formulaire envoyé",
          description: "Nous vous contacterons dans les plus brefs délais.",
        })
        setIsSubmitted(true)
      } else {
        throw new Error("Échec de l'envoi du formulaire")
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi du formulaire:", error)
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors de l'envoi du formulaire. Veuillez réessayer.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const breadcrumbItems = [{ label: "Contact", href: "/contact", isCurrent: true }]

  if (isSubmitted) {
    return (
      <div className="container mx-auto px-6 py-12 lg:px-8">
        <Breadcrumbs items={breadcrumbItems} />

        <div className="mx-auto max-w-2xl text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">Contactez-nous</h1>
          <p className="text-lg">
            Nous sommes à votre disposition pour répondre à toutes vos questions et vous accompagner dans vos projets.
          </p>
        </div>

        <Card className="max-w-2xl mx-auto text-center p-8">
          <div className="flex flex-col items-center">
            <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Mail className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Message envoyé avec succès</h2>
            <p className="mb-6">
              Merci de nous avoir contactés. Notre équipe vous répondra dans les plus brefs délais.
            </p>
            <div className="flex gap-4">
              <Button variant="outline" asChild>
                <Link href="/">Retour à l'accueil</Link>
              </Button>
              <Button onClick={() => setIsSubmitted(false)}>Envoyer un autre message</Button>
            </div>
          </div>
        </Card>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-6 py-12 lg:px-8">
      <Breadcrumbs items={breadcrumbItems} />

      <div className="mx-auto max-w-2xl text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">Contactez-nous</h1>
        <p className="text-lg">
          Nous sommes à votre disposition pour répondre à toutes vos questions et vous accompagner dans vos projets.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Nom complet</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Votre nom"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="votre@email.com"
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="phone">Téléphone</Label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+216 XX XXX XXX"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">Société (optionnel)</Label>
                <Input
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Nom de votre société"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="subject">Sujet</Label>
              <Select value={formData.subject} onValueChange={(value) => handleSelectChange("subject", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionnez un sujet" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Question générale">Question générale</SelectItem>
                  <SelectItem value="Demande de devis">Demande de devis</SelectItem>
                  <SelectItem value="Support technique">Support technique</SelectItem>
                  <SelectItem value="Partenariat">Partenariat</SelectItem>
                  <SelectItem value="Autre">Autre</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {formData.subject === "Demande de devis" && (
              <div className="space-y-2">
                <Label htmlFor="product">Produit</Label>
                <Select value={formData.product} onValueChange={(value) => handleSelectChange("product", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionnez un produit" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="coffret-tunnel-volet-roulant">Coffret Tunnel Volet Roulant</SelectItem>
                    <SelectItem value="panneau-isolant-polystyrene">Panneau Isolant en Polystyrène</SelectItem>
                    <SelectItem value="fish-box-caisson-emballage">Fish Box / Caisson d'Emballage</SelectItem>
                    <SelectItem value="autre">Autre / Sur mesure</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Comment pouvons-nous vous aider ?"
                rows={6}
                required
              />
            </div>

            <div className="space-y-2">
              <Label>Comment préférez-vous être contacté ?</Label>
              <RadioGroup
                value={formData.contactPreference}
                onValueChange={handleRadioChange}
                className="flex flex-col space-y-1"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="email" id="contact-email" />
                  <Label htmlFor="contact-email">Email</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="phone" id="contact-phone" />
                  <Label htmlFor="contact-phone">Téléphone</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="newsletter"
                name="newsletter"
                checked={formData.newsletter}
                onChange={handleChange}
                className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
              />
              <Label htmlFor="newsletter" className="text-sm font-normal">
                Je souhaite m'abonner à la newsletter pour recevoir les dernières actualités et offres
              </Label>
            </div>

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
            </Button>
          </form>
        </div>

        <div>
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-6">Informations de contact</h2>

              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-primary mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Adresse</h3>
                    <p className="text-muted-foreground">
                      zone industrielle-Technopole 5036
                      <br />
                      Monastir, Tunisie
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-primary mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Téléphone</h3>
                    <p className="text-muted-foreground">+216 93 642 505</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-primary mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-muted-foreground">Caissontunisie20@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="font-semibold mb-2">Heures d'ouverture</h3>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>Lundi - Vendredi</div>
                  <div>8h00 - 17h00</div>
                  <div>Samedi</div>
                  <div>8h00 - 12h00</div>
                  <div>Dimanche</div>
                  <div>Fermé</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mt-6 h-64 rounded-lg overflow-hidden">
            <div className="w-full h-full bg-muted flex items-center justify-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3190.123456789012!2d10.7560129!3d35.7245437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13020d523c895777%3A0x46638e037bd253ea!2sSCT!5e0!3m2!1sen!2stn!4v1650000000000!5m2!1sen!2stn"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <StructuredData
        type="LocalBusiness"
        data={{
          name: "Société Caisson Tunisie",
          image: "https://caissontunisie.tn/logo.png",
          url: "https://caissontunisie.tn",
          telephone: "+216-XX-XXX-XXX",
          address: {
            streetAddress: "Zone Industrielle",
            addressLocality: "Tunis",
            postalCode: "1000",
          },
        }}
      />
    </div>
  )
}
