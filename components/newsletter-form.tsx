"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"

export function NewsletterForm() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    toast({
      title: "Inscription réussie !",
      description: "Vous êtes maintenant inscrit à notre newsletter.",
    })

    setEmail("")
    setIsLoading(false)
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
      <Input
        type="email"
        placeholder="Votre adresse email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="bg-primary-foreground text-primary"
      />
      <Button type="submit" variant="secondary" disabled={isLoading}>
        {isLoading ? "Inscription..." : "S'inscrire"}
      </Button>
    </form>
  )
}
