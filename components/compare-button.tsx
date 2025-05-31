"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { SplitSquareVertical, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import { cn } from "@/lib/utils"

interface CompareButtonProps {
  productId: number
  productName: string
  productImage: string
  className?: string
}

export function CompareButton({ productId, productName, productImage, className }: CompareButtonProps) {
  const [isInCompare, setIsInCompare] = useState(false)
  const [compareCount, setCompareCount] = useState(0)
  const [showPopup, setShowPopup] = useState(false)
  const { toast } = useToast()

  // Check if product is in compare list on mount
  useEffect(() => {
    const compareList = localStorage.getItem("compareList")
    if (compareList) {
      const parsedList = JSON.parse(compareList)
      setIsInCompare(parsedList.some((item) => item.id === productId))
      setCompareCount(parsedList.length)
    }
  }, [productId])

  const toggleCompare = () => {
    const compareList = localStorage.getItem("compareList")
    let newList = []

    if (compareList) {
      newList = JSON.parse(compareList)
      const existingIndex = newList.findIndex((item) => item.id === productId)

      if (existingIndex !== -1) {
        // Remove from compare
        newList.splice(existingIndex, 1)
        toast({
          title: "Produit retiré",
          description: `${productName} a été retiré de la comparaison.`,
        })
        setIsInCompare(false)
      } else {
        // Add to compare if less than 4 products
        if (newList.length < 4) {
          newList.push({
            id: productId,
            name: productName,
            image: productImage,
          })
          toast({
            title: "Produit ajouté",
            description: `${productName} a été ajouté à la comparaison.`,
          })
          setIsInCompare(true)
          setShowPopup(true)
          setTimeout(() => setShowPopup(false), 5000)
        } else {
          toast({
            title: "Limite atteinte",
            description: "Vous ne pouvez comparer que 4 produits à la fois.",
            variant: "destructive",
          })
        }
      }
    } else {
      // First product to compare
      newList = [
        {
          id: productId,
          name: productName,
          image: productImage,
        },
      ]
      toast({
        title: "Produit ajouté",
        description: `${productName} a été ajouté à la comparaison.`,
      })
      setIsInCompare(true)
      setShowPopup(true)
      setTimeout(() => setShowPopup(false), 5000)
    }

    localStorage.setItem("compareList", JSON.stringify(newList))
    setCompareCount(newList.length)
  }

  return (
    <>
      <Button
        variant="outline"
        size="sm"
        onClick={toggleCompare}
        className={cn("flex items-center gap-1", className, isInCompare && "border-primary text-primary")}
      >
        <SplitSquareVertical className="h-4 w-4" />
        <span>{isInCompare ? "Retirer" : "Comparer"}</span>
      </Button>

      {showPopup && (
        <div className="fixed bottom-4 right-4 z-50 w-80 bg-background border rounded-lg shadow-lg p-4">
          <div className="flex justify-between items-start mb-2">
            <h4 className="font-medium">Produit ajouté à la comparaison</h4>
            <Button variant="ghost" size="sm" className="h-6 w-6 p-0" onClick={() => setShowPopup(false)}>
              <X className="h-4 w-4" />
            </Button>
          </div>
          <p className="text-sm mb-4">
            Vous avez {compareCount} produit{compareCount > 1 ? "s" : ""} dans votre liste de comparaison.
          </p>
          <Button asChild className="w-full">
            <Link href="/produits/comparer">Comparer maintenant</Link>
          </Button>
        </div>
      )}
    </>
  )
}
