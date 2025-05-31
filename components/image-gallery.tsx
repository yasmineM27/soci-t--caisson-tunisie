"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

interface ImageGalleryProps {
  images: string[]
  alt?: string
}

export function ImageGallery({ images, alt = "Image" }: ImageGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [fullscreen, setFullscreen] = useState(false)
  const [zoomLevel, setZoomLevel] = useState(1)
  const [dragPosition, setDragPosition] = useState({ x: 0, y: 0 })

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const handleThumbnailClick = (index: number) => {
    setCurrentIndex(index)
  }

  const resetZoom = () => {
    setZoomLevel(1)
    setDragPosition({ x: 0, y: 0 })
  }

  const toggleFullscreen = () => {
    setFullscreen(!fullscreen)
    resetZoom()
  }

  return (
    <div className="w-full">
      <div className="relative aspect-video mb-4 overflow-hidden rounded-lg border">
        <Image
          src={images[currentIndex] || "/placeholder.svg"}
          alt={`${alt} - Image ${currentIndex + 1}`}
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center bg-black/20">
          <div className="flex items-center justify-between w-full px-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={prevImage}
              className="h-10 w-10 rounded-full bg-white/20 text-white backdrop-blur-sm hover:bg-white/40"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>

            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-10 w-10 rounded-full bg-white/20 text-white backdrop-blur-sm hover:bg-white/40"
                >
                  <ZoomIn className="h-6 w-6" />
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-screen-lg p-0 overflow-hidden">
                <div className="relative h-[80vh] w-full">
                  <motion.div
                    drag
                    dragConstraints={{ left: -200, right: 200, top: -200, bottom: 200 }}
                    style={{
                      scale: zoomLevel,
                      x: dragPosition.x,
                      y: dragPosition.y,
                    }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={images[currentIndex] || "/placeholder.svg"}
                      alt={`${alt} - Image ${currentIndex + 1}`}
                      fill
                      className="object-contain"
                    />
                  </motion.div>

                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 bg-black/50 rounded-full p-2 backdrop-blur-sm">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={prevImage}
                      className="h-8 w-8 rounded-full text-white hover:bg-white/20"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>

                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setZoomLevel(zoomLevel + 0.5)}
                      className="h-8 w-8 rounded-full text-white hover:bg-white/20"
                    >
                      <ZoomIn className="h-4 w-4" />
                    </Button>

                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={resetZoom}
                      className="h-8 w-8 rounded-full text-white hover:bg-white/20"
                    >
                      <X className="h-4 w-4" />
                    </Button>

                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={nextImage}
                      className="h-8 w-8 rounded-full text-white hover:bg-white/20"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>

            <Button
              variant="ghost"
              size="icon"
              onClick={nextImage}
              className="h-10 w-10 rounded-full bg-white/20 text-white backdrop-blur-sm hover:bg-white/40"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-5 gap-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => handleThumbnailClick(index)}
            className={cn(
              "relative aspect-video overflow-hidden rounded-md border transition-all",
              index === currentIndex ? "ring-2 ring-primary" : "opacity-70 hover:opacity-100",
            )}
          >
            <Image
              src={image || "/placeholder.svg"}
              alt={`${alt} - Thumbnail ${index + 1}`}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  )
}
