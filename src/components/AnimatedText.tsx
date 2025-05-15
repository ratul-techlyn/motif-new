"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import gsap from "gsap"

interface AnimatedTextProps {
  words: string[]
  className?: string
  staticText?: string
  animationDuration?: number
  pauseDuration?: number
}

export default function AnimatedText({
  words,
  className = "",
  staticText = "WE ARE",
  animationDuration = 7000,
  pauseDuration = 1000,
}: AnimatedTextProps) {
  const [currentWord, setCurrentWord] = useState(0)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const changeWord = useCallback(
    (speed: number) => {
      if (intervalRef.current) clearInterval(intervalRef.current)
      intervalRef.current = setInterval(() => {
        setCurrentWord((prev) => (prev + 1) % words.length)
      }, speed)
    },
    [words.length],
  )

  useEffect(() => {
    const runCycle = async () => {
      changeWord(300) // Fast
      await new Promise((resolve) => setTimeout(resolve, 2000))
      changeWord(200) // Faster
      await new Promise((resolve) => setTimeout(resolve, 2000))
      changeWord(100) // Fastest
      await new Promise((resolve) => setTimeout(resolve, 2000))
      if (intervalRef.current) clearInterval(intervalRef.current)
      await new Promise((resolve) => setTimeout(resolve, pauseDuration))
    }

    runCycle()
    const cycleInterval = setInterval(runCycle, animationDuration)

    return () => {
      clearInterval(cycleInterval)
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [changeWord, animationDuration, pauseDuration])

  useEffect(() => {
    if (containerRef.current) {
      gsap.from(containerRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
      })
    }
  }, [])

  return (
    <div ref={containerRef} className={`font-clash ${className}`}>
      <h1 className="flex flex-col items-start">
        {/* CHANGE HERE: Adjust the static text styles */}
        <span className="text-animated_text_contact_2xl lg:text-animated_text_contact_lg md:text-animated_text_contact_md sm:text-animated_text_contact_sm font-semibold text-white font-clash mb-2">
          {staticText}
        </span>
        {/* CHANGE HERE: Adjust the container dimensions for different screen sizes */}
        <div className="h-[120px] sm:h-[140px] md:h-[160px] w-[300px] sm:w-[400px] md:w-[500px] relative overflow-hidden">
          <AnimatePresence mode="popLayout">
            <motion.span
              key={currentWord}
              className="absolute left-0 right-0 leading-none"
              style={{
                // CHANGE HERE: Adjust the font size and color of the animated text
                fontSize: "clamp(40px, 8vw, 60px)",
                color: "#ff6f00", // Orange color
              }}
              initial={{ clipPath: "inset(0 0 100% 0)", opacity: 0.5 }}
              animate={{ clipPath: "inset(0 0 0% 0)", opacity: 1 }}
              exit={{ clipPath: "inset(100% 0 0 0)", opacity: 0.5 }}
              transition={{ duration: 0.1, ease: "easeInOut" }}
            >
              {words[currentWord]}
            </motion.span>
          </AnimatePresence>
          {/* CHANGE HERE: Adjust the reflection position and dimensions */}
          <div className="absolute top-[55px] sm:top-[55px] md:top-[55px] left-0 right-0 overflow-hidden h-[60px] sm:h-[70px] md:h-[80px]">
            <motion.span
              key={`reflection-${currentWord}`}
              className="absolute left-0 right-0 leading-none"
              style={{
                // CHANGE HERE: Adjust the font size and color of the reflection text
                fontSize: "clamp(40px, 8vw, 60px)",
                color: "rgba(255, 165, 0, 0.1)", // Orangish reflection color
                transform: "scaleY(-1)",
                maskImage: "linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0))",
                WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0))",
              }}
              initial={{ clipPath: "inset(0 0 100% 0)" }}
              animate={{ clipPath: "inset(0 0 0% 0)" }}
              exit={{ clipPath: "inset(100% 0 0 0)" }}
              transition={{ duration: 0.1, ease: "easeInOut" }}
            >
              {words[currentWord]}
            </motion.span>
          </div>
        </div>
      </h1>
    </div>
  )
}

