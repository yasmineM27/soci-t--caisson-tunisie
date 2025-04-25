"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useRouter, usePathname } from "next/navigation"
import { AdminSidebar } from "@/components/admin/admin-sidebar"
import { useAuth } from "@/lib/auth"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()
  const pathname = usePathname()
  const { user, loading, isAuthenticated } = useAuth()
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (isClient && !loading) {
      // Ne pas rediriger si on est déjà sur la page de login
      if (!isAuthenticated && pathname !== "/admin/login") {
        router.push("/admin/login")
      }
    }
  }, [isClient, loading, isAuthenticated, router, pathname])

  // Afficher la page de login directement si on y est déjà
  if (pathname === "/admin/login") {
    return children
  }

  // Afficher un écran de chargement pendant la vérification de l'authentification
  if (!isClient || loading || !isAuthenticated) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p>Chargement...</p>
      </div>
    )
  }

  // Afficher le layout admin si l'utilisateur est authentifié
  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      <div className="flex-1 p-8">{children}</div>
    </div>
  )
}
