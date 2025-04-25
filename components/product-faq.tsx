"use client"

import type React from "react"

import { useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

interface FaqItem {
  question: string
  answer: string
}

interface ProductFaqProps {
  faqItems: FaqItem[]
}

export function ProductFaq({ faqItems }: ProductFaqProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [expandedItems, setExpandedItems] = useState<string[]>([])

  const filteredFaqItems = faqItems.filter(
    (item) =>
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // If there are matches, expand all matching items
    if (filteredFaqItems.length > 0) {
      setExpandedItems(filteredFaqItems.map((_, index) => `item-${index}`))
    }
  }

  return (
    <div>
      <form onSubmit={handleSearch} className="flex gap-2 mb-6">
        <Input
          type="text"
          placeholder="Rechercher dans les questions..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="flex-1"
        />
        <Button type="submit" variant="outline">
          <Search className="h-4 w-4 mr-2" />
          Rechercher
        </Button>
      </form>

      {filteredFaqItems.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-muted-foreground">Aucune question ne correspond à votre recherche.</p>
        </div>
      ) : (
        <Accordion type="multiple" value={expandedItems} onValueChange={setExpandedItems} className="w-full">
          {filteredFaqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      )}

      <div className="mt-8 p-4 bg-muted/50 rounded-lg">
        <p className="text-center text-muted-foreground">
          Vous ne trouvez pas la réponse à votre question ?{" "}
          <Button variant="link" asChild className="p-0 h-auto">
            <a href="/contact">Contactez-nous</a>
          </Button>
        </p>
      </div>
    </div>
  )
}
