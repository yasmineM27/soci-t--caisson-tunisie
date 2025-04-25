"use client"
import { useRef } from "react"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

import { DynamicHeroBackground } from "@/components/dynamic-hero-background"
import { motion, useScroll, useTransform } from "framer-motion"


interface HeroParallaxProps {
  title: string
  subtitle: string
  ctaText: string
  ctaLink: string
  secondaryCtaText?: string
  secondaryCtaLink?: string
  backgroundImages: string[]
}

export function HeroParallax({
  title,
  subtitle,
  ctaText,
  ctaLink,
  secondaryCtaText,
  secondaryCtaLink,
  backgroundImages,
}: HeroParallaxProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  // Diviser le titre en mots pour l'animation
  const titleWords = title.split(" ")

  return (
    <section ref={ref} className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Dynamic Rotation */}
      <DynamicHeroBackground images={backgroundImages}>
        {/* Content */}
        <motion.div
          className="container mx-auto px-6 text-center text-white flex items-center justify-center h-full"
          style={{ y, opacity }}
        >
          <div>
            <h1 className="mb-6 flex flex-wrap justify-center gap-x-4">
              {titleWords.map((word, index) => (
                <motion.span
                  key={index}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.2 * index,
                    ease: "easeOut",
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            <motion.p
              className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
            >
              {subtitle}
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7, ease: "easeOut" }}
            >
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white transition-all duration-300 hover:scale-105"
                asChild
              >
                <Link href={ctaLink}>{ctaText}</Link>
              </Button>
              {secondaryCtaText && secondaryCtaLink && (
    <Button
      size="lg"
      variant="outline"
      className="border-primary text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-105"
      asChild
    >
      <Link href={secondaryCtaLink}>{secondaryCtaText}</Link>  
    </Button>
  )}
            </motion.div>
          </div>
        </motion.div>
      </DynamicHeroBackground>
    </section>
  )
}
