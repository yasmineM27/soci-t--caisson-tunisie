"use client"

import { useState } from "react"
import Image from "next/image"
import { Play } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

interface Video {
  id: number
  title: string
  thumbnail: string
  url: string
}

interface VideoShowcaseProps {
  videos: Video[]
}

export function VideoShowcase({ videos }: VideoShowcaseProps) {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null)

  return (
    <>
      <div className="grid md:grid-cols-2 gap-6">
        {videos.map((video) => (
          <div
            key={video.id}
            className="relative rounded-lg overflow-hidden cursor-pointer group"
            onClick={() => setSelectedVideo(video)}
          >
            <div className="relative h-48 w-full">
              <Image
                src={video.thumbnail || "/placeholder.svg"}
                alt={video.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                <div className="h-14 w-14 rounded-full bg-primary/90 flex items-center justify-center">
                  <Play className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>
            <div className="p-3">
              <h3 className="font-medium">{video.title}</h3>
            </div>
          </div>
        ))}
      </div>

      <Dialog open={!!selectedVideo} onOpenChange={(open) => !open && setSelectedVideo(null)}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>{selectedVideo?.title}</DialogTitle>
          </DialogHeader>
          <div className="aspect-video w-full">
            {/* Placeholder for actual video player */}
            <div className="w-full h-full bg-muted flex items-center justify-center">
              <p className="text-muted-foreground">Vidéo: {selectedVideo?.title}</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
