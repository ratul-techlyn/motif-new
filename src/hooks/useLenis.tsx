"use client"

import type React from "react"
import type { LenisOptions } from "@studio-freight/lenis"

import { useContext, createContext, useState, useEffect } from "react"
import Lenis from "@studio-freight/lenis"

// Create a context for the Lenis instance
const LenisContext = createContext<Lenis | null>(null)

// Provider component
export const LenisProvider = ({ children }: { children: React.ReactNode }) => {
  const [lenis, setLenis] = useState<Lenis | null>(null)

  useEffect(() => {
    const lenisInstance = new Lenis({
      duration: 1.2,
      easing: (t:number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      // direction: "vertical",
      // gestureDirection: "vertical",
      // smooth: true,
      // mouseMultiplier: 1,
      // smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    }  satisfies LenisOptions)

    setLenis(lenisInstance)

    function raf(time: number) {
      lenisInstance.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    return () => {
      lenisInstance.destroy()
    }
  }, [])

  return <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>
}

// Hook to use the Lenis instance
export const useLenis = () => {
  const lenis = useContext(LenisContext)

  if (lenis === undefined) {
    throw new Error("useLenis must be used within a LenisProvider")
  }

  return lenis
}

