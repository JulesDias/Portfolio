"use client"

import type React from "react"
import { motion } from "framer-motion"
import Image from "next/image"

interface ScrollingCarouselProps {
  images: string[]
  speed?: number
}

const ScrollingCarousel: React.FC<ScrollingCarouselProps> = ({ images, speed = 200 }) => {
  return (
    <div className="overflow-hidden whitespace-nowrap">
      <motion.div
        className="inline-block"
        animate={{
          x: [0, -100 * images.length],
        }}
        transition={{
          x: {
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            duration: images.length * speed,
            ease: "linear",
          },
        }}
      >
        {images.concat(images).map((src, index) => (
          <div key={index} className="inline-block mx-2">
            <Image
              src={src || "/placeholder.svg"}
              alt={`Carousel image ${index + 1}`}
              width={300}
              height={200}
              className="w-[300px] h-[200px] object-cover rounded-lg"
            />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default ScrollingCarousel

