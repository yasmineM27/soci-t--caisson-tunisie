"use client"

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
  mainImageDuration = 3000, // Réduit pour test
  otherImagesDuration = 3000,
  children,
  className,
  overlayOpacity = 0.5,
}: DynamicHeroBackgroundProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [nextImageIndex, setNextImageIndex] = useState(-1)
  const timeoutRef = useRef<NodeJS.Timeout>()
  const transitionRef = useRef<NodeJS.Timeout>()

  useEffect(() => {
    if (images.length <= 1) return

    const cycleImages = () => {
      const nextIndex = (currentImageIndex + 1) % images.length
      setNextImageIndex(nextIndex)
      
      transitionRef.current = setTimeout(() => {
        setCurrentImageIndex(nextIndex)
        setNextImageIndex(-1)
        timeoutRef.current = setTimeout(cycleImages, nextIndex === 0 ? mainImageDuration : otherImagesDuration)
      }, 1000) // Durée de transition plus courte
    }

    timeoutRef.current = setTimeout(cycleImages, currentImageIndex === 0 ? mainImageDuration : otherImagesDuration)

    return () => {
      timeoutRef.current && clearTimeout(timeoutRef.current)
      transitionRef.current && clearTimeout(transitionRef.current)
    }
  }, [currentImageIndex, images.length])

  if (images.length === 0) return null

  return (
    <div className={cn("relative w-full h-full overflow-hidden", className)}>
      {/* Image principale */}
      <Image
        src={images[currentImageIndex]}
        alt={`Hero image ${currentImageIndex + 1}`}
        fill
        priority={currentImageIndex === 0}
        className="object-cover"
      />

      {/* Image de transition */}
      {nextImageIndex !== -1 && (
        <Image
          src={images[nextImageIndex]}
          alt={`Next hero image`}
          fill
          className="object-cover animate-fadeIn"
          style={{ animationDuration: '1s' }}
        />
      )}

      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black z-10" 
        style={{ opacity: overlayOpacity }} 
      />

      {/* Contenu */}
      <div className="relative z-20 h-full w-full">
        {children}
      </div>
    </div>
  )
}