import Link from "next/link"
import { Heart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { PhotoGallery } from "@/components/photo-gallery"
import { ReasonsSection } from "@/components/reasons-section"
import { MessageForm } from "@/components/message-form"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      {/* Header */}
      <header className="container mx-auto py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-pink-700">
            <Heart className="h-6 w-6 fill-pink-500 text-pink-500" />
            <span className="text-xl font-semibold">Mom's Special Day</span>
          </div>
          <nav className="hidden space-x-4 sm:block">
            <Link href="#gallery" className="text-pink-700 hover:text-pink-500">
              Gallery
            </Link>
            <Link href="#reasons" className="text-pink-700 hover:text-pink-500">
              Reasons
            </Link>
            <Link href="#message" className="text-pink-700 hover:text-pink-500">
              Message
            </Link>
          </nav>
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

          <h1 className="mb-6 text-4xl font-bold text-pink-800 sm:text-5xl md:text-6xl">Happy Mother's Day, Mom!</h1>
          <p className="mb-8 text-lg text-pink-700 sm:text-xl">
            Thank you for your endless love, support, and everything you do for our family. This website is dedicated to
            celebrating you on this special day.
          </p>
          <Button size="lg" className="bg-pink-600 hover:bg-pink-700">
            <Heart className="mr-2 h-5 w-5" />I Love You Mom
          </Button>
        </div>
      </section>

      {/* Photo Gallery */}
      <section id="gallery" className="container mx-auto px-4 py-16">
        <h2 className="mb-12 text-center text-3xl font-bold text-pink-800 sm:text-4xl">Our Special Memories</h2>
        <PhotoGallery />
      </section>

      {/* Reasons Section */}
      <section id="reasons" className="bg-pink-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-pink-800 sm:text-4xl">Reasons Why You're Amazing</h2>
          <ReasonsSection />
        </div>
      </section>

      {/* Message Section */}
      <section id="message" className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-pink-800 sm:text-4xl">A Special Note For You</h2>
          <Card className="border-pink-200 bg-white/80 shadow-md">
            <CardContent className="p-6 sm:p-8">
              <p className="mb-6 italic text-pink-700">Dear Mom,</p>
              <p className="mb-4 text-gray-700">
                On this Mother's Day, I wanted to create something special just for you. You've always been there for me
                through thick and thin, offering your unconditional love and support.
              </p>
              <p className="mb-4 text-gray-700">
                Your strength, kindness, and wisdom continue to inspire me every day. Thank you for all the sacrifices
                you've made, the lessons you've taught me, and the love you've shown.
              </p>
              <p className="mb-6 text-gray-700">
                I'm so grateful to have you as my mother. I love you more than words can express.
              </p>
              <p className="text-right font-medium text-pink-700">
                With all my love,
                <br />
                [Your Name]
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-pink-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-pink-800 sm:text-4xl">Send Mom a Message</h2>
          <div className="mx-auto max-w-md">
            <MessageForm />
          </div>
        </div>
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
