import { Heart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { PhotoGallery } from "@/components/photo-gallery"
import { BackgroundMusic } from "@/components/background-music"
import Typewriter from "@/components/Typewriter"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      <BackgroundMusic />
      
      {/* Header */}
      <header className="container mx-auto py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-pink-700">
            <Heart className="h-6 w-6 fill-pink-500 text-pink-500" />
            <span className="text-xl font-semibold">2025妈妈节</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="relative mx-auto max-w-3xl">
          <div className="absolute -left-12 -top-12 h-24 w-24 animate-float opacity-30 sm:h-32 sm:w-32">
            <img src="/images/flower1.png" alt="" className="h-full w-full object-contain" />
          </div>
          <div className="absolute -bottom-8 -right-8 h-20 w-20 animate-float-delayed opacity-30 sm:h-28 sm:w-28">
            <img src="/images/flower2.png" alt="" className="h-full w-full object-contain" />
          </div>

          <h1 className="mb-6 text-4xl font-bold text-pink-800 sm:text-5xl md:text-6xl flex justify-center">
            <Typewriter 
              text="阿妈，母亲节快乐！" 
              delay={150}
              keepCursorFlashing={true}
              className="inline-block ml-6"
            />
          </h1>
          <Button size="lg" className="bg-pink-600 hover:bg-pink-700">
            <Heart className="mr-2 h-5 w-5" />I Love You Mom
          </Button>
        </div>
      </section>

      {/* Photo Gallery */}
      <section id="gallery" className="container mx-auto px-4 py-16">
        <h2 className="mb-4 text-center text-3xl font-bold text-pink-800 sm:text-4xl">谢谢您，</h2>
        <PhotoGallery />
      </section>

      {/* Footer */}
      <footer className="bg-pink-100 py-6">
        <div className="container mx-auto px-4 text-center text-pink-700">
          <p>Made with ❤️ for the best mom in the world</p>
          <p className="mt-2 text-sm">Mother's Day 2025</p>
        </div>
      </footer>
    </div>
  )
}
