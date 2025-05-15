"use client"

import { useState, useEffect } from "react"

const ICON_SIZES = {
  default: 12, // Size for mobile devices (up to 639px)
  sm: 14, // Size for small devices (640px - 767px)
  md: 16, // Size for medium devices (768px - 1023px)
  lg: 80, // Size for large devices (1024px - 1279px)
  xl: 80, // Size for extra large devices (1280px and above)
  ['2xl']: 80,
}

export function useResponsiveSize() {
  const [size, setSize] = useState(ICON_SIZES.default)

  useEffect(() => {
    function updateSize() {
      if (window.innerWidth >= 1536) {
        setSize(ICON_SIZES['2xl'])
      }
      else if (window.innerWidth >= 1280) {
        setSize(ICON_SIZES.xl)
      } else if (window.innerWidth >= 1024) {
        setSize(ICON_SIZES.lg)
      } else if (window.innerWidth >= 768) {
        setSize(ICON_SIZES.md)
      } else if (window.innerWidth >= 640) {
        setSize(ICON_SIZES.sm)
      } else {
        setSize(ICON_SIZES.default)
      }
    }

    window.addEventListener("resize", updateSize)
    updateSize() // Call once to set initial size

    return () => window.removeEventListener("resize", updateSize)
  }, [])

  return size
}

