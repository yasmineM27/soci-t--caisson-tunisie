"use client"
import { useState } from "react"
import Image from "next/image"
import { Download, FileText, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { motion } from "framer-motion"

interface Brochure {
  id: number
  title: string
  description: string
  thumbnail: string
  fileUrl: string
  fileSize: string
  previewImages?: string[]
}

interface BrochuresSectionProps {
  brochures: Brochure[]
}

export function BrochuresSection({ brochures }: BrochuresSectionProps) {
  const [selectedBrochure, setSelectedBrochure] = useState<Brochure | null>(null)

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4">Nos Brochures</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Téléchargez nos brochures pour découvrir en détail notre gamme de produits, leurs spécifications techniques
            et leurs applications.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {brochures.map((brochure) => (
            <motion.div key={brochure.id} variants={item}>
              <Card className="h-full flex flex-col group hover:shadow-lg transition-all duration-300">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={brochure.thumbnail || "/placeholder.svg"}
                    alt={brochure.title}
                    fill
                    className="object-cover rounded-t-lg transition-transform duration-500 group-hover:scale-110"
                  />
                  {brochure.previewImages && brochure.previewImages.length > 0 && (
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            variant="outline"
                            size="sm"
                            className="text-white border-white hover:bg-white/20"
                            onClick={() => setSelectedBrochure(brochure)}
                          >
                            <Eye className="mr-2 h-4 w-4" />
                            Aperçu
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl">
                          <DialogHeader>
                            <DialogTitle>{brochure.title}</DialogTitle>
                          </DialogHeader>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                            {brochure.previewImages?.map((img, index) => (
                              <div key={index} className="relative aspect-[3/4] w-full rounded-lg overflow-hidden">
                                <Image
                                  src={img || "/placeholder.svg"}
                                  alt={`${brochure.title} - page ${index + 1}`}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                            ))}
                          </div>
                          <div className="flex justify-center mt-4">
                            <Button asChild>
                              <a href={brochure.fileUrl} download target="_blank" rel="noopener noreferrer">
                                <Download className="mr-2 h-4 w-4" />
                                Télécharger la brochure complète
                              </a>
                            </Button>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  )}
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileText className="h-5 w-5 mr-2 text-primary" />
                    {brochure.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{brochure.description}</p>
                  <p className="text-sm mt-2">Taille du fichier: {brochure.fileSize}</p>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full group-hover:bg-primary/90 transition-colors">
                    <a href={brochure.fileUrl} download target="_blank" rel="noopener noreferrer">
                      <Download className="mr-2 h-4 w-4" />
                      Télécharger
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
