"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

// Type pour l'utilisateur
interface User {
  id?: string
  name?: string
  email?: string
}

// Type pour le contexte d'authentification
interface AuthContextType {
  user: User | null
  loading: boolean
  isAuthenticated: boolean
  login: (email: string, password: string) => Promise<boolean>
  logout: () => void
}

// Création du contexte avec une valeur par défaut
const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  isAuthenticated: false,
  login: async () => false,
  logout: () => {},
})

interface AuthProviderProps {
  children: ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  // Vérifier si l'utilisateur est déjà connecté au chargement
  useEffect(() => {
    const checkAuth = async () => {
      try {
        // Simuler la vérification d'authentification
        const storedUser = localStorage.getItem("user")
        if (storedUser) {
          setUser(JSON.parse(storedUser))
        }
      } catch (error) {
        console.error("Erreur lors de la vérification de l'authentification:", error)
      } finally {
        setLoading(false)
      }
    }

    checkAuth()
  }, [])

  // Fonction de connexion
  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      setLoading(true)

      // Simuler une API de connexion
      // Dans une application réelle, vous feriez un appel API ici
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Pour la démo, on accepte admin@caissontunisie.tn / admin123
      if (email === "admin@caissontunisie.tn" && password === "admin123") {
        const userData = {
          id: "1",
          name: "Administrateur",
          email: email,
        }

        setUser(userData)
        localStorage.setItem("user", JSON.stringify(userData))
        return true
      }

      return false
    } catch (error) {
      console.error("Erreur de connexion:", error)
      return false
    } finally {
      setLoading(false)
    }
  }

  // Fonction de déconnexion
  const logout = () => {
    setUser(null)
    localStorage.removeItem("user")
  }

  // Valeur du contexte
  const value = {
    user,
    loading,
    isAuthenticated: !!user,
    login,
    logout,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

// Hook personnalisé pour utiliser le contexte d'authentification
export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth doit être utilisé à l'intérieur d'un AuthProvider")
  }
  return context
}
