"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Heart } from "lucide-react"

import { cn } from "@/lib/utils"
import { Card, CardContent } from "@/components/ui/card"

// Sample reasons - customize these with your own reasons why your mom is amazing
const reasons = [
  "You always know how to make me smile",
  "Your cooking is the best in the world",
  "You taught me to be strong and independent",
  "Your hugs make everything better",
  "You're always there when I need advice",
  "You've supported all my dreams",
  "Your patience is incredible",
  "You show me what unconditional love means",
  "Your strength inspires me every day",
  "You've made our house a loving home",
  "You always put family first",
  "Your wisdom guides me through life",
]

export function ReasonsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {reasons.map((reason, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <Card
            className={cn(
              "h-full border-pink-200 transition-all duration-300",
              hoveredIndex === index ? "border-pink-400 shadow-lg" : "shadow-sm",
            )}
          >
            <CardContent className="flex h-full flex-col items-center justify-center p-6 text-center">
              <Heart
                className={cn(
                  "mb-4 h-8 w-8 transition-all duration-300",
                  hoveredIndex === index ? "fill-pink-500 text-pink-500 scale-125" : "fill-pink-200 text-pink-300",
                )}
              />
              <p className="text-gray-700">{reason}</p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}
