"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { motion, AnimatePresence } from "framer-motion"

interface Testimonial {
  id: number
  author: string
  avatar?: string
  role?: string
  company?: string
  rating: number
  text: string
}

interface TestimonialsCarouselProps {
  testimonials: Testimonial[]
  autoplay?: boolean
  interval?: number
}

export function TestimonialsCarousel({ testimonials, autoplay = true, interval = 5000 }: TestimonialsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (!autoplay || isPaused) return

    const timer = setInterval(() => {
      setDirection(1)
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, interval)

    return () => clearInterval(timer)
  }, [autoplay, interval, testimonials.length, isPaused])

  const handlePrev = () => {
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const handleNext = () => {
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  return (
    <div className="relative" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
      <div className="overflow-hidden">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="w-full"
          >
            <Card className="bg-muted/30 border-none shadow-sm">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <div className="flex-shrink-0">
                    <div className="relative h-20 w-20 rounded-full overflow-hidden border-4 border-primary/10">
                      <Image
                        src={testimonials[currentIndex].avatar || "/placeholder.svg?height=80&width=80"}
                        alt={testimonials[currentIndex].author}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex-grow text-center md:text-left">
                    <div className="flex justify-center md:justify-start mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < testimonials[currentIndex].rating
                              ? "text-yellow-500 fill-yellow-500"
                              : "text-muted-foreground"
                          }`}
                        />
                      ))}
                    </div>
                    <p className="italic mb-4">"{testimonials[currentIndex].text}"</p>
                    <div>
                      <p className="font-semibold">{testimonials[currentIndex].author}</p>
                      {(testimonials[currentIndex].role || testimonials[currentIndex].company) && (
                        <p className="text-sm text-muted-foreground">
                          {testimonials[currentIndex].role}
                          {testimonials[currentIndex].role && testimonials[currentIndex].company && " - "}
                          {testimonials[currentIndex].company}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center mt-4 gap-2">
        <Button variant="outline" size="icon" onClick={handlePrev} className="rounded-full h-8 w-8">
          <ChevronLeft className="h-4 w-4" />
        </Button>
        {testimonials.map((_, index) => (
          <Button
            key={index}
            variant="ghost"
            size="icon"
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1)
              setCurrentIndex(index)
            }}
            className={`rounded-full h-2 w-2 p-0 ${index === currentIndex ? "bg-primary" : "bg-muted-foreground/30"}`}
          >
            <span className="sr-only">Go to slide {index + 1}</span>
          </Button>
        ))}
        <Button variant="outline" size="icon" onClick={handleNext} className="rounded-full h-8 w-8">
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
