"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface DynamicHeroBackgroundProps {
  images: string[]
  mainImageDuration?: number
  otherImagesDuration?: number
  children?: React.ReactNode
  className?: string
  overlayOpacity?: number
}

export function DynamicHeroBackground({
  images,
  mainImageDuration = 15000, // 15 secondes pour l'image principale
  otherImagesDuration = 10000, // 10 secondes pour les autres images
  children,
  className,
  overlayOpacity = 0.5,
}: DynamicHeroBackgroundProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [nextImageIndex, setNextImageIndex] = useState(-1)
  const [transitioning, setTransitioning] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const transitionTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (images.length <= 1) return

    const startTransition = () => {
      // Déterminer l'index de la prochaine image
      const nextIndex = currentImageIndex === 0 ? 1 : (currentImageIndex + 1) % images.length

      setNextImageIndex(nextIndex)
      setTransitioning(true)

      // Après la transition, mettre à jour l'image courante
      transitionTimeoutRef.current = setTimeout(() => {
        setCurrentImageIndex(nextIndex)
        setNextImageIndex(-1)
        setTransitioning(false)

        // Planifier la prochaine transition
        timeoutRef.current = setTimeout(startTransition, nextIndex === 0 ? mainImageDuration : otherImagesDuration)
      }, 1500) // Durée de la transition
    }

    // Démarrer le cycle
    timeoutRef.current = setTimeout(startTransition, currentImageIndex === 0 ? mainImageDuration : otherImagesDuration)

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
      if (transitionTimeoutRef.current) clearTimeout(transitionTimeoutRef.current)
    }
  }, [images.length, currentImageIndex, mainImageDuration, otherImagesDuration])

  if (images.length === 0) return null

  return (
    <div className={cn("relative w-full h-full overflow-hidden", className)}>
      {/* Image courante */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={images[currentImageIndex] || "/placeholder.svg"}
          alt={`Background image ${currentImageIndex + 1}`}
          fill
          priority={currentImageIndex === 0}
          className="object-cover"
        />
      </div>

      {/* Image suivante (pour la transition) */}
      {transitioning && nextImageIndex !== -1 && (
        <div className="absolute inset-0 w-full h-full opacity-0 animate-fade-in">
          <Image
            src={images[nextImageIndex] || "/placeholder.svg"}
            alt={`Background image ${nextImageIndex + 1}`}
            fill
            className="object-cover"
          />
        </div>
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black z-20" style={{ opacity: overlayOpacity }} />

      {/* Contenu */}
      <div className="relative z-30 h-full w-full">{children}</div>
    </div>
  )
}
