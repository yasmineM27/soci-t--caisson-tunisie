"use client"

import type React from "react"

import { useState } from "react"
import { Calendar, Clock, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Calendar as CalendarComponent } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import { fr } from "date-fns/locale"
import { useToast } from "@/components/ui/use-toast"

export function BookAppointmentButton({
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
        <Calendar className="h-5 w-5" />
        <span className="sr-only">Réserver un rendez-vous</span>
      </Button>

      {isOpen && <AppointmentWindow onClose={() => setIsOpen(false)} />}
    </>
  )
}

function AppointmentWindow({ onClose }: { onClose: () => void }) {
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [time, setTime] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!date || !time) return

    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "Rendez-vous réservé !",
      description: `Votre rendez-vous est confirmé pour le ${format(date, "PPP", { locale: fr })} à ${time}.`,
    })

    setIsLoading(false)
    onClose()
  }

  const timeSlots = [
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
  ]

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <Card className="w-full max-w-sm mx-4">
  <CardHeader className="bg-primary text-primary-foreground py-2 px-3 flex flex-row justify-between items-center">
    <h3 className="font-medium text-sm">Réserver un rendez-vous</h3>
    <Button variant="ghost" size="icon" onClick={onClose} className="h-6 w-6 text-primary-foreground">
      <X className="h-3 w-3" />
    </Button>
  </CardHeader>

  <CardContent className="p-2">
    <form onSubmit={handleSubmit} className="space-y-2 text-sm">
      <div className="space-y-1">
        <Label htmlFor="name">Nom complet</Label>
        <Input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Votre nom"
          required
          className="h-8 text-sm"
        />
      </div>

      <div className="space-y-1">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Votre email"
          required
          className="h-8 text-sm"
        />
      </div>

      <div className="space-y-1">
        <Label htmlFor="phone">Téléphone</Label>
        <Input
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Votre numéro de téléphone"
          required
          className="h-8 text-sm"
        />
      </div>

      <div className="space-y-1">
        <Label>Date du rendez-vous</Label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              size="sm"
              className={cn("w-full justify-start text-left font-normal h-8 text-sm", !date && "text-muted-foreground")}
            >
              <Calendar className="mr-2 h-3 w-3" />
              {date ? format(date, "PPP", { locale: fr }) : <span>Sélectionnez une date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <CalendarComponent
              mode="single"
              selected={date}
              onSelect={setDate}
              initialFocus
              disabled={(date) => {
                const day = date.getDay()
                const isPastDate = date < new Date(new Date().setHours(0, 0, 0, 0))
                return day === 0 || day === 6 || isPastDate
              }}
            />
          </PopoverContent>
        </Popover>
      </div>

      <div className="space-y-1">
        <Label htmlFor="time">Heure du rendez-vous</Label>
        <Select value={time} onValueChange={setTime} required>
          <SelectTrigger id="time" className="w-full h-8 text-sm">
            <SelectValue placeholder="Sélectionnez une heure" />
          </SelectTrigger>
          <SelectContent>
            {timeSlots.map((slot) => (
              <SelectItem key={slot} value={slot} className="text-sm">
                {slot}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-1">
        <Label htmlFor="message">Message (optionnel)</Label>
        <Textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Précisez l'objet de votre rendez-vous"
          rows={2}
          className="text-sm"
        />
      </div>

      <Button type="submit" size="sm" className="w-full" disabled={isLoading}>
        {isLoading ? "Réservation en cours..." : "Réserver le rendez-vous"}
      </Button>
    </form>
  </CardContent>

  <CardFooter className="bg-muted/50 p-2 text-xs text-muted-foreground">
    Nos horaires d'ouverture : Lun-Ven, 9h-12h & 14h-17h
  </CardFooter>
</Card>

    </div>
  )
}
