"use client"

import { useState } from "react"
import { CuboidIcon as Cube, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { cn } from "@/lib/utils"

export function View3DButton({
  productId,
  variant = "default",
  className,
}: { productId: number; variant?: "default" | "outline"; className?: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Button
        size="icon"
        variant="secondary"
        className={cn("rounded-full h-8 w-8 shadow-md", className)}
        onClick={(e) => {
          e.stopPropagation()
          setIsOpen(true)
        }}
      >
        <Cube className="h-4 w-4" />
        <span className="sr-only">Voir en 3D</span>
      </Button>

      {isOpen && <View3DWindow productId={productId} onClose={() => setIsOpen(false)} />}
    </>
  )
}

function View3DWindow({ productId, onClose }: { productId: number; onClose: () => void }) {
  // In a real implementation, you would load a 3D model based on the productId
  // For this example, we'll just show a placeholder

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <Card className="w-full max-w-3xl mx-4">
        <CardHeader className="bg-primary text-primary-foreground py-3 px-4 flex flex-row justify-between items-center">
          <h3 className="font-medium">Visualisation 3D du produit</h3>
          <Button variant="ghost" size="icon" onClick={onClose} className="h-8 w-8 text-primary-foreground">
            <X className="h-4 w-4" />
          </Button>
        </CardHeader>
        <CardContent className="p-0">
          <div className="aspect-video w-full bg-muted flex items-center justify-center">
            <div className="text-center p-8">
              <Cube className="h-16 w-16 mx-auto mb-4 text-primary/50" />
              <p className="text-muted-foreground">Visualiseur 3D pour le produit ID: {productId}</p>
              <p className="text-sm text-muted-foreground mt-2">
                (Dans une implémentation réelle, un modèle 3D interactif serait chargé ici)
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
