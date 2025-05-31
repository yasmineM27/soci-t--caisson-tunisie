"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { useToast } from "@/components/ui/use-toast"

interface ProductConfiguratorProps {
  productId: number
  productName: string
}

export function ProductConfigurator({ productId, productName }: ProductConfiguratorProps) {
  const [config, setConfig] = useState({
    dimensions: {
      width: 100,
      height: 50,
      depth: 20,
    },
    material: "standard",
    density: "30",
    color: "white",
    quantity: 1,
  })

  const [activeTab, setActiveTab] = useState("dimensions")
  const { toast } = useToast()

  const updateConfig = (key: string, value: any) => {
    setConfig((prev) => {
      if (key.includes(".")) {
        const [parent, child] = key.split(".")
        return {
          ...prev,
          [parent]: {
            ...prev[parent],
            [child]: value,
          },
        }
      }
      return {
        ...prev,
        [key]: value,
      }
    })

  }

  const handleAddToCart = () => {
    toast({
      title: "Produit configuré ajouté au panier",
      description: `${productName} personnalisé a été ajouté à votre panier.`,
    })
  }

  const handleRequestQuote = () => {
    toast({
      title: "Demande de devis envoyée",
      description: "Nous vous contacterons bientôt avec un devis personnalisé.",
    })
  }

  return (
    <div className="bg-muted/30 rounded-lg p-6">
      <h3 className="text-xl font-bold mb-6">Configurez votre produit</h3>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid grid-cols-4 mb-6">
              <TabsTrigger value="dimensions">Dimensions</TabsTrigger>
              <TabsTrigger value="material">Matériau</TabsTrigger>
              <TabsTrigger value="options">Options</TabsTrigger>
              <TabsTrigger value="quantity">Quantité</TabsTrigger>
            </TabsList>

            <TabsContent value="dimensions" className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="width">Largeur (cm)</Label>
                <div className="flex items-center gap-4">
                  <Slider
                    id="width"
                    min={50}
                    max={300}
                    step={1}
                    value={[config.dimensions.width]}
                    onValueChange={(value) => updateConfig("dimensions.width", value[0])}
                    className="flex-1"
                  />
                  <Input
                    type="number"
                    value={config.dimensions.width}
                    onChange={(e) => updateConfig("dimensions.width", Number(e.target.value))}
                    className="w-20"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="height">Hauteur (cm)</Label>
                <div className="flex items-center gap-4">
                  <Slider
                    id="height"
                    min={20}
                    max={200}
                    step={1}
                    value={[config.dimensions.height]}
                    onValueChange={(value) => updateConfig("dimensions.height", value[0])}
                    className="flex-1"
                  />
                  <Input
                    type="number"
                    value={config.dimensions.height}
                    onChange={(e) => updateConfig("dimensions.height", Number(e.target.value))}
                    className="w-20"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="depth">Profondeur (cm)</Label>
                <div className="flex items-center gap-4">
                  <Slider
                    id="depth"
                    min={10}
                    max={100}
                    step={1}
                    value={[config.dimensions.depth]}
                    onValueChange={(value) => updateConfig("dimensions.depth", value[0])}
                    className="flex-1"
                  />
                  <Input
                    type="number"
                    value={config.dimensions.depth}
                    onChange={(e) => updateConfig("dimensions.depth", Number(e.target.value))}
                    className="w-20"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="material" className="space-y-4">
              <div className="space-y-2">
                <Label>Type de matériau</Label>
                <RadioGroup
                  value={config.material}
                  onValueChange={(value) => updateConfig("material", value)}
                  className="grid grid-cols-1 gap-2"
                >
                  <div className="flex items-center space-x-2 border rounded-md p-3">
                    <RadioGroupItem value="standard" id="material-standard" />
                    <Label htmlFor="material-standard" className="flex-1 cursor-pointer">
                      <div className="font-medium">Standard</div>
                      <div className="text-sm text-muted-foreground">
                        Polystyrène expansé standard pour une bonne isolation thermique
                      </div>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 border rounded-md p-3">
                    <RadioGroupItem value="premium" id="material-premium" />
                    <Label htmlFor="material-premium" className="flex-1 cursor-pointer">
                      <div className="font-medium">Premium</div>
                      <div className="text-sm text-muted-foreground">
                        Polystyrène expansé haute performance pour une isolation thermique supérieure
                      </div>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 border rounded-md p-3">
                    <RadioGroupItem value="eco" id="material-eco" />
                    <Label htmlFor="material-eco" className="flex-1 cursor-pointer">
                      <div className="font-medium">Éco-responsable</div>
                      <div className="text-sm text-muted-foreground">
                        Polystyrène expansé recyclé pour un impact environnemental réduit
                      </div>
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label htmlFor="density">Densité (kg/m³)</Label>
                <Select value={config.density} onValueChange={(value) => updateConfig("density", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionnez la densité" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="20">20 kg/m³ (Légère)</SelectItem>
                    <SelectItem value="30">30 kg/m³ (Standard)</SelectItem>
                    <SelectItem value="40">40 kg/m³ (Haute densité)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </TabsContent>

            <TabsContent value="options" className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="color">Couleur</Label>
                <Select value={config.color} onValueChange={(value) => updateConfig("color", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionnez la couleur" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="white">Blanc</SelectItem>
                    <SelectItem value="gray">Gris</SelectItem>
                    <SelectItem value="custom">Personnalisée</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </TabsContent>

            <TabsContent value="quantity" className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="quantity">Quantité</Label>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => updateConfig("quantity", Math.max(1, config.quantity - 1))}
                  >
                    -
                  </Button>
                  <Input
                    type="number"
                    min="1"
                    value={config.quantity}
                    onChange={(e) => updateConfig("quantity", Math.max(1, Number(e.target.value)))}
                    className="w-20 text-center"
                  />
                  <Button variant="outline" size="icon" onClick={() => updateConfig("quantity", config.quantity + 1)}>
                    +
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-8 p-4 bg-muted rounded-lg">
          
            <div className="flex gap-2">
              <Button onClick={handleAddToCart} className="flex-1">
                Ajouter au panier
              </Button>
              <Button variant="outline" onClick={handleRequestQuote} className="flex-1">
                Demander un devis
              </Button>
            </div>
          </div>
        </div>

        <div className="relative h-[400px] bg-muted rounded-lg overflow-hidden">
          {/* Placeholder for product visualization */}
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-muted-foreground">Visualisation du produit</p>
          </div>
        </div>
      </div>
    </div>
  )
}
