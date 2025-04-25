"use client"

import { useState } from "react"
import { Check, ChevronDown, Filter, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetFooter } from "@/components/ui/sheet"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

interface FilterOption {
  id: string
  label: string
  checked: boolean
}

interface FilterGroup {
  id: string
  name: string
  options: FilterOption[]
}

interface PriceRange {
  min: number
  max: number
}

interface ProductFiltersProps {
  onFilterChange: (filters: any) => void
}

export function ProductFilters({ onFilterChange }: ProductFiltersProps) {
  // Sample filter groups
  const [filterGroups, setFilterGroups] = useState<FilterGroup[]>([
    {
      id: "categories",
      name: "Catégories",
      options: [
        { id: "coffrets", label: "Coffrets Tunnel", checked: false },
        { id: "panneaux", label: "Panneaux Isolants", checked: false },
        { id: "fishbox", label: "Fish Box", checked: false },
      ],
    },
    {
      id: "applications",
      name: "Applications",
      options: [
        { id: "residential", label: "Résidentiel", checked: false },
        { id: "commercial", label: "Commercial", checked: false },
        { id: "industrial", label: "Industriel", checked: false },
      ],
    },
    {
      id: "thickness",
      name: "Épaisseur",
      options: [
        { id: "50mm", label: "50 mm", checked: false },
        { id: "100mm", label: "100 mm", checked: false },
        { id: "150mm", label: "150 mm", checked: false },
        { id: "200mm", label: "200 mm", checked: false },
      ],
    },
  ])

  const [priceRange, setPriceRange] = useState<PriceRange>({ min: 0, max: 500 })
  const [selectedPriceRange, setSelectedPriceRange] = useState<PriceRange>({ min: 0, max: 500 })
  const [sortOption, setSortOption] = useState("featured")

  const handleCheckboxChange = (groupId: string, optionId: string) => {
    const updatedGroups = filterGroups.map((group) => {
      if (group.id === groupId) {
        const updatedOptions = group.options.map((option) => {
          if (option.id === optionId) {
            return { ...option, checked: !option.checked }
          }
          return option
        })
        return { ...group, options: updatedOptions }
      }
      return group
    })

    setFilterGroups(updatedGroups)
    applyFilters(updatedGroups, selectedPriceRange, sortOption)
  }

  const handlePriceChange = (value: number[]) => {
    const newRange = { min: value[0], max: value[1] }
    setSelectedPriceRange(newRange)
  }

  const handleSortChange = (value: string) => {
    setSortOption(value)
    applyFilters(filterGroups, selectedPriceRange, value)
  }

  const applyFilters = (groups: FilterGroup[], price: PriceRange, sort: string) => {
    const activeFilters = {
      categories: groups
        .find((g) => g.id === "categories")
        ?.options.filter((o) => o.checked)
        .map((o) => o.id),
      applications: groups
        .find((g) => g.id === "applications")
        ?.options.filter((o) => o.checked)
        .map((o) => o.id),
      thickness: groups
        .find((g) => g.id === "thickness")
        ?.options.filter((o) => o.checked)
        .map((o) => o.id),
      price: price,
      sort: sort,
    }

    onFilterChange(activeFilters)
  }

  const clearAllFilters = () => {
    const clearedGroups = filterGroups.map((group) => ({
      ...group,
      options: group.options.map((option) => ({ ...option, checked: false })),
    }))
    setFilterGroups(clearedGroups)
    setSelectedPriceRange({ min: 0, max: 500 })
    setSortOption("featured")
    applyFilters(clearedGroups, { min: 0, max: 500 }, "featured")
  }

  const getActiveFiltersCount = () => {
    let count = 0
    filterGroups.forEach((group) => {
      group.options.forEach((option) => {
        if (option.checked) count++
      })
    })
    if (selectedPriceRange.min > 0 || selectedPriceRange.max < 500) count++
    return count
  }

  const activeFiltersCount = getActiveFiltersCount()

  return (
    <div className="flex flex-col md:flex-row gap-4 mb-8">
      {/* Mobile Filters */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" className="w-full">
              <Filter className="h-4 w-4 mr-2" />
              Filtres
              {activeFiltersCount > 0 && (
                <span className="ml-2 rounded-full bg-primary text-primary-foreground w-5 h-5 text-xs flex items-center justify-center">
                  {activeFiltersCount}
                </span>
              )}
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] sm:w-[400px]">
            <SheetHeader>
              <SheetTitle>Filtres</SheetTitle>
            </SheetHeader>
            <div className="py-4">
              <Accordion type="multiple" className="w-full" defaultValue={filterGroups.map((g) => g.id)}>
                {filterGroups.map((group) => (
                  <AccordionItem key={group.id} value={group.id}>
                    <AccordionTrigger>{group.name}</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2">
                        {group.options.map((option) => (
                          <div key={option.id} className="flex items-center space-x-2">
                            <Checkbox
                              id={`mobile-${group.id}-${option.id}`}
                              checked={option.checked}
                              onCheckedChange={() => handleCheckboxChange(group.id, option.id)}
                            />
                            <label
                              htmlFor={`mobile-${group.id}-${option.id}`}
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              {option.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
                <AccordionItem value="price">
                  <AccordionTrigger>Prix</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4">
                      <Slider
                        defaultValue={[priceRange.min, priceRange.max]}
                        max={500}
                        step={10}
                        onValueChange={handlePriceChange}
                      />
                      <div className="flex items-center justify-between">
                        <span>{selectedPriceRange.min} DT</span>
                        <span>{selectedPriceRange.max} DT</span>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            <SheetFooter>
              <Button variant="outline" onClick={clearAllFilters} className="w-full">
                Effacer les filtres
              </Button>
              <Button onClick={() => applyFilters(filterGroups, selectedPriceRange, sortOption)} className="w-full">
                Appliquer
              </Button>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Filters */}
      <div className="hidden md:flex md:flex-1 gap-4">
        {filterGroups.map((group) => (
          <DropdownMenu key={group.id}>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                {group.name}
                <ChevronDown className="ml-2 h-4 w-4" />
                {group.options.some((o) => o.checked) && (
                  <span className="ml-1 rounded-full bg-primary text-primary-foreground w-5 h-5 text-xs flex items-center justify-center">
                    {group.options.filter((o) => o.checked).length}
                  </span>
                )}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56">
              {group.options.map((option) => (
                <DropdownMenuItem
                  key={option.id}
                  onSelect={(e) => {
                    e.preventDefault()
                    handleCheckboxChange(group.id, option.id)
                  }}
                  className="flex items-center space-x-2"
                >
                  <div className="flex items-center space-x-2">
                    <div className="h-4 w-4 border rounded flex items-center justify-center">
                      {option.checked && <Check className="h-3 w-3" />}
                    </div>
                    <span>{option.label}</span>
                  </div>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        ))}

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              Prix
              <ChevronDown className="ml-2 h-4 w-4" />
              {(selectedPriceRange.min > 0 || selectedPriceRange.max < 500) && (
                <span className="ml-1 rounded-full bg-primary text-primary-foreground w-5 h-5 text-xs flex items-center justify-center">
                  1
                </span>
              )}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-56 p-4">
            <div className="space-y-4">
              <Slider
                defaultValue={[priceRange.min, priceRange.max]}
                max={500}
                step={10}
                onValueChange={handlePriceChange}
              />
              <div className="flex items-center justify-between">
                <span>{selectedPriceRange.min} DT</span>
                <span>{selectedPriceRange.max} DT</span>
              </div>
              <Button onClick={() => applyFilters(filterGroups, selectedPriceRange, sortOption)} className="w-full">
                Appliquer
              </Button>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Sort Options */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">
            Trier par
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onSelect={() => handleSortChange("featured")}>
            <Check className={`mr-2 h-4 w-4 ${sortOption === "featured" ? "opacity-100" : "opacity-0"}`} />
            Recommandés
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={() => handleSortChange("price-asc")}>
            <Check className={`mr-2 h-4 w-4 ${sortOption === "price-asc" ? "opacity-100" : "opacity-0"}`} />
            Prix croissant
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={() => handleSortChange("price-desc")}>
            <Check className={`mr-2 h-4 w-4 ${sortOption === "price-desc" ? "opacity-100" : "opacity-0"}`} />
            Prix décroissant
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={() => handleSortChange("newest")}>
            <Check className={`mr-2 h-4 w-4 ${sortOption === "newest" ? "opacity-100" : "opacity-0"}`} />
            Nouveautés
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Active Filters */}
      {activeFiltersCount > 0 && (
        <div className="flex items-center gap-2 ml-auto">
          <Button variant="ghost" size="sm" onClick={clearAllFilters} className="h-9">
            <X className="h-4 w-4 mr-1" />
            Effacer les filtres
          </Button>
        </div>
      )}
    </div>
  )
}
