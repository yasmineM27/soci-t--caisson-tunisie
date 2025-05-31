"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Lock, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import { useAuth } from "@/lib/auth"

export default function LoginPage() {
  const router = useRouter()
  const { toast } = useToast()
  const { login } = useAuth()
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const success = await login(formData.email, formData.password)

      if (success) {
        toast({
          title: "Connexion réussie",
          description: "Bienvenue dans l'espace administrateur.",
        })

        router.push("/admin/dashboard")
      } else {
        toast({
          title: "Erreur de connexion",
          description: "Email ou mot de passe incorrect.",
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Erreur de connexion",
        description: "Une erreur est survenue lors de la connexion.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted/40 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-2xl font-bold">Espace Administrateur</CardTitle>
          <CardDescription>Connectez-vous pour accéder à l'espace administrateur</CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="admin@caissontunisie.tn"
                  className="pl-10"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <p className="text-xs text-muted-foreground">Pour la démo, utilisez: admin@caissontunisie.tn</p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Mot de passe</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="••••••••"
                  className="pl-10"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <p className="text-xs text-muted-foreground">Pour la démo, utilisez: admin123</p>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col">
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Connexion en cours..." : "Se connecter"}
            </Button>
            <div className="mt-4 text-center text-sm">
              <Link href="/" className="text-primary hover:underline">
                Retour au site
              </Link>
            </div>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}
