"use client"

import type React from "react"

import { useState } from "react"
import { MessageCircle, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

export function ChatButton({
  variant = "default",
  className,
}: { variant?: "default" | "outline"; className?: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Button
        size="icon"
        variant="secondary"
        className={cn("rounded-full h-12 w-12 shadow-md", className)}
        onClick={() => setIsOpen(true)}
      >
        <MessageCircle className="h-5 w-5" />
        <span className="sr-only">Ouvrir le chat</span>
      </Button>

      {isOpen && <ChatWindow onClose={() => setIsOpen(false)} />}
    </>
  )
}

function ChatWindow({ onClose }: { onClose: () => void }) {
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState([
    { id: 1, text: "Bonjour ! Comment puis-je vous aider aujourd'hui ?", isUser: false },
  ])

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (!message.trim()) return

    // Add user message
    const newMessages = [...messages, { id: Date.now(), text: message, isUser: true }]
    setMessages(newMessages)
    setMessage("")

    // Simulate response after a short delay
    setTimeout(() => {
      setMessages([
        ...newMessages,
        {
          id: Date.now() + 1,
          text: "Merci pour votre message. Un de nos conseillers vous répondra dans les plus brefs délais.",
          isUser: false,
        },
      ])
    }, 1000)
  }

  return (
    <div className="fixed bottom-20 right-6 z-50 w-80 md:w-96">
      <Card className="shadow-xl">
        <CardHeader className="bg-primary text-primary-foreground py-3 px-4 flex flex-row justify-between items-center">
          <h3 className="font-medium">Chat avec Caisson Tunisie</h3>
          <Button variant="ghost" size="icon" onClick={onClose} className="h-8 w-8 text-primary-foreground">
            <X className="h-4 w-4" />
          </Button>
        </CardHeader>
        <CardContent className="p-3 h-80 overflow-y-auto">
          <div className="space-y-3">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={cn(
                  "max-w-[80%] rounded-lg p-3",
                  msg.isUser ? "bg-primary text-primary-foreground ml-auto" : "bg-muted mr-auto",
                )}
              >
                {msg.text}
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter className="p-3 pt-0">
          <form onSubmit={handleSendMessage} className="flex w-full gap-2">
            <Input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tapez votre message..."
              className="flex-1"
            />
            <Button type="submit">Envoyer</Button>
          </form>
        </CardFooter>
      </Card>
    </div>
  )
}
