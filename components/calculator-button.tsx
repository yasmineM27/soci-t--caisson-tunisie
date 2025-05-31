"use client"

import type React from "react"

import { useState } from "react"
import { Calculator, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { cn } from "@/lib/utils"

export function CalculatorButton({
  variant = "default",
  className,
}: { variant?: "default" | "outline"; className?: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Button
        size="icon"
        variant={variant}
        className={cn("rounded-full h-12 w-12 shadow-md", className)}
        onClick={() => setIsOpen(true)}
      >
        <Calculator className="h-5 w-5" />
        <span className="sr-only">Calculateur d'isolation</span>
      </Button>

      {isOpen && <CalculatorWindow onClose={() => setIsOpen(false)} />}
    </>
  )
}

function CalculatorWindow({ onClose }: { onClose: () => void }) {
  const [surface, setSurface] = useState("")
  const [thickness, setThickness] = useState("100")
  const [type, setType] = useState("mur")
  const [result, setResult] = useState<{ panels: number; totalArea: number } | null>(null)

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault()

    const surfaceValue = Number.parseFloat(surface)
    const thicknessValue = Number.parseInt(thickness)

    if (isNaN(surfaceValue) || surfaceValue <= 0) return

    // Calculate number of standard panels needed (assuming 1m² per panel)
    const panelsNeeded = Math.ceil(surfaceValue)

    // Calculate total area including waste
    const totalArea = panelsNeeded * 1.05 // 5% waste

    setResult({
      panels: panelsNeeded,
      totalArea: totalArea,
    })
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <Card className="w-full max-w-md mx-4">
        <CardHeader className="bg-primary text-primary-foreground py-3 px-4 flex flex-row justify-between items-center">
          <h3 className="font-medium">Calculateur d'isolation</h3>
          <Button variant="ghost" size="icon" onClick={onClose} className="h-8 w-8 text-primary-foreground">
            <X className="h-4 w-4" />
          </Button>
        </CardHeader>
        <CardContent className="p-4">
          <form onSubmit={handleCalculate} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="surface">Surface à isoler (m²)</Label>
              <Input
                id="surface"
                type="number"
                min="0.1"
                step="0.1"
                placeholder="Entrez la surface"
                value={surface}
                onChange={(e) => setSurface(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="type">Type de surface</Label>
              <RadioGroup value={type} onValueChange={setType} className="flex space-x-4">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="mur" id="mur" />
                  <Label htmlFor="mur">Mur</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="toit" id="toit" />
                  <Label htmlFor="toit">Toit</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="sol" id="sol" />
                  <Label htmlFor="sol">Sol</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label htmlFor="thickness">Épaisseur d'isolation</Label>
              <Select value={thickness} onValueChange={setThickness}>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionnez l'épaisseur" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="50">50 mm</SelectItem>
                  <SelectItem value="100">100 mm</SelectItem>
                  <SelectItem value="150">150 mm</SelectItem>
                  <SelectItem value="200">200 mm</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button type="submit" className="w-full">
              Calculer
            </Button>
          </form>

          {result && (
            <div className="mt-6 p-4 bg-muted rounded-lg">
              <h4 className="font-medium mb-2">Résultat du calcul :</h4>
              <p>
                Nombre de panneaux nécessaires : <strong>{result.panels}</strong>
              </p>
              <p>
                Surface totale avec marge : <strong>{result.totalArea.toFixed(2)} m²</strong>
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Épaisseur recommandée : <strong>{thickness} mm</strong>
              </p>
              <p className="text-sm text-muted-foreground">
                Type d'isolation : <strong>{type === "mur" ? "Mur" : type === "toit" ? "Toit" : "Sol"}</strong>
              </p>
            </div>
          )}
        </CardContent>
        <CardFooter className="bg-muted/50 p-4">
          <p className="text-sm text-muted-foreground">
            Ce calculateur fournit une estimation. Pour un devis précis, contactez-nous.
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}
