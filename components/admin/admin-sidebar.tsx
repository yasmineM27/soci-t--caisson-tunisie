"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import {
  BarChart3,
  Box,
  FileText,
  Home,
  LogOut,
  MessageSquare,
  Package,
  Settings,
  ShoppingCart,
  Users,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { useAuth } from "@/lib/auth"

const navigation = [
  { name: "Dashboard", href: "/admin/dashboard", icon: BarChart3 },
  { name: "Produits", href: "/admin/produits", icon: Package },
  { name: "Services", href: "/admin/services", icon: FileText },
  { name: "Témoignages", href: "/admin/temoignages", icon: MessageSquare },
  { name: "Commandes", href: "/admin/commandes", icon: ShoppingCart },
  { name: "Utilisateurs", href: "/admin/utilisateurs", icon: Users },
  { name: "Paramètres", href: "/admin/parametres", icon: Settings },
]

export function AdminSidebar() {
  const pathname = usePathname()
  const router = useRouter()
  const { toast } = useToast()
  const { logout, user } = useAuth()
  const [isCollapsed, setIsCollapsed] = useState(false)

  const handleLogout = () => {
    logout()

    toast({
      title: "Déconnexion réussie",
      description: "Vous avez été déconnecté avec succès.",
    })

    router.push("/admin/login")
  }

  return (
    <div className={`bg-primary text-primary-foreground transition-all duration-300 ${isCollapsed ? "w-20" : "w-64"}`}>
      <div className="flex h-16 items-center justify-between px-4">
        <Link href="/admin/dashboard" className="flex items-center">
          {!isCollapsed && <span className="text-xl font-bold">Admin Panel</span>}
          {isCollapsed && <Box className="h-6 w-6" />}
        </Link>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="hover:bg-primary-foreground/10"
        >
          {isCollapsed ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-chevron-right"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-chevron-left"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          )}
        </Button>
      </div>

      {!isCollapsed && (
        <div className="px-4 py-2 mb-6">
          <div className="text-sm text-primary-foreground/70">Connecté en tant que</div>
          <div className="font-medium">{user?.name || "Administrateur"}</div>
          <div className="text-xs text-primary-foreground/70">{user?.email || "admin@caissontunisie.tn"}</div>
        </div>
      )}

      <div className="space-y-1 px-3 py-2">
        {navigation.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={`flex items-center rounded-md px-3 py-2 transition-colors ${
              pathname === item.href
                ? "bg-primary-foreground/20 text-primary-foreground"
                : "hover:bg-primary-foreground/10"
            }`}
          >
            <item.icon className="mr-3 h-5 w-5" />
            {!isCollapsed && <span>{item.name}</span>}
          </Link>
        ))}
      </div>
      <div className="absolute bottom-4 w-full px-3">
        <div className="space-y-1">
          <Link href="/" className="flex items-center rounded-md px-3 py-2 hover:bg-primary-foreground/10">
            <Home className="mr-3 h-5 w-5" />
            {!isCollapsed && <span>Voir le site</span>}
          </Link>
          <button
            onClick={handleLogout}
            className="flex w-full items-center rounded-md px-3 py-2 hover:bg-primary-foreground/10"
          >
            <LogOut className="mr-3 h-5 w-5" />
            {!isCollapsed && <span>Déconnexion</span>}
          </button>
        </div>
      </div>
    </div>
  )
}
