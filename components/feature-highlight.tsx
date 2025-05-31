"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

interface FeatureHighlightProps {
  icon: React.ReactNode
  title: string
  description: string
}

export function FeatureHighlight({ icon, title, description }: FeatureHighlightProps) {
  const featureRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in", "fade-in", "slide-in-from-bottom-4", "duration-700")
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 },
    )

    if (featureRef.current) {
      observer.observe(featureRef.current)
    }

    return () => {
      if (featureRef.current) {
        observer.unobserve(featureRef.current)
      }
    }
  }, [])

  return (
    <div
      ref={featureRef}
      className={cn(
        "p-6 rounded-lg bg-background shadow-sm border border-border",
        "hover:shadow-md hover:border-primary/20 transition-all duration-300",
        "opacity-0", // Initially hidden, will be shown by IntersectionObserver
      )}
    >
      <div className="mb-4 h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  )
}
