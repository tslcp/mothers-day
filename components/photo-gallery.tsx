"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { Button } from "@/components/ui/button"

// Sample gallery images - replace with your own photos of your mom
const galleryImages = [
  {
    src: "/placeholder.svg?height=600&width=800",
    alt: "Mom and me at the beach",
    caption: "Summer vacation 2023",
  },
  {
    src: "/placeholder.svg?height=600&width=800",
    alt: "Mom's birthday celebration",
    caption: "Your last birthday party",
  },
  {
    src: "/placeholder.svg?height=600&width=800",
    alt: "Family dinner",
    caption: "Christmas dinner",
  },
  {
    src: "/placeholder.svg?height=600&width=800",
    alt: "Mom gardening",
    caption: "In your favorite garden",
  },
  {
    src: "/placeholder.svg?height=600&width=800",
    alt: "Mom and dad anniversary",
    caption: "Your 25th anniversary",
  },
  {
    src: "/placeholder.svg?height=600&width=800",
    alt: "Mom cooking",
    caption: "Making your famous recipe",
  },
]

export function PhotoGallery() {
  const [currentImageIndex, setCurrentImageIndex] = useState<number | null>(null)

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index)
  }

  const closeLightbox = () => {
    setCurrentImageIndex(null)
  }

  const goToPrevious = () => {
    if (currentImageIndex === null) return
    setCurrentImageIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1))
  }

  const goToNext = () => {
    if (currentImageIndex === null) return
    setCurrentImageIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1))
  }

  return (
    <>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {galleryImages.map((image, index) => (
          <div
            key={index}
            className="group relative cursor-pointer overflow-hidden rounded-lg shadow-md transition-transform hover:scale-[1.02]"
            onClick={() => openLightbox(index)}
          >
            <div className="aspect-[4/3] w-full">
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                width={800}
                height={600}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent p-4 opacity-0 transition-opacity group-hover:opacity-100">
              <p className="text-white">{image.caption}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {currentImageIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90">
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-4 text-white hover:bg-white/20"
            onClick={closeLightbox}
          >
            <X className="h-6 w-6" />
            <span className="sr-only">Close</span>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
            onClick={goToPrevious}
          >
            <ChevronLeft className="h-8 w-8" />
            <span className="sr-only">Previous</span>
          </Button>

          <div className="max-h-[80vh] max-w-[90vw]">
            <Image
              src={galleryImages[currentImageIndex].src || "/placeholder.svg"}
              alt={galleryImages[currentImageIndex].alt}
              width={1200}
              height={900}
              className="max-h-[80vh] max-w-[90vw] object-contain"
            />
            <p className="mt-2 text-center text-white">{galleryImages[currentImageIndex].caption}</p>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
            onClick={goToNext}
          >
            <ChevronRight className="h-8 w-8" />
            <span className="sr-only">Next</span>
          </Button>
        </div>
      )}
    </>
  )
}
