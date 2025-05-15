"use client"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useLenis } from "@/hooks/useLenis"
import { MotifIcon } from "@/components/motif-icon"

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

interface MarqueeNavigationProps {
  text?: string
  href?: string
  position?: "top" | "bottom"
  speed?: number
  iconClass?: string
  iconSize?: number
}

export default function MarqueeNavigation({
  text = "Default Text",
  href = "/",
  position = "top",
  speed = 20,
  iconClass = "text-[#ED5F09]",
  // iconSize = 24,
}: MarqueeNavigationProps) {
  const marqueeRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const lenis = useLenis()
  const textRef = useRef<HTMLSpanElement>(null)
  const [iconSize, setIconSize] = useState(24)

  useEffect(() => {
    if (typeof window === "undefined" || !marqueeRef.current || !contentRef.current || !text || !lenis) return

    const contentElement = contentRef.current
    const contentWidth = contentElement.offsetWidth

    // Kill previous animations and ScrollTriggers
    gsap.killTweensOf(contentElement)
    ScrollTrigger.getAll().forEach((t) => t.kill())

    // Create the auto-animation
    const autoAnimation = gsap.to(contentElement, {
      x: -contentWidth,
      duration: speed,
      ease: "none",
      repeat: -1,
      yoyo: true,
    })

    // Set up ScrollTrigger to change direction
    ScrollTrigger.create({
      trigger: document.body,
      start: "top top",
      end: "bottom bottom",
      onUpdate: () => {
        // Change direction based on scroll direction
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        if ((lenis as any).direction === -1) {
          // Scrolling up
          gsap.to(autoAnimation, { timeScale: -1, overwrite: true })
        } else {
          // Scrolling down
          gsap.to(autoAnimation, { timeScale: 1, overwrite: true })
        }
      },
    })

    return () => {
      autoAnimation.kill()
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [text, lenis, speed])

  useEffect(() => {
    if (textRef && textRef.current) {
      setIconSize(textRef.current.clientHeight - 20) // Set icon size to match text height
    }
  }, [text])

  // Create the content with icon
  const marqueeContent = (
    <span className="inline-flex items-center gap-2">
      <span className="uppercase font-clash-display">{text.toUpperCase()}</span>
      <span className="flex items-center mx-8">
        <MotifIcon className={iconClass} size={iconSize} />
      </span>
    </span>
  )

  // Repeat the content for seamless loop
  const repeatedContent = Array(3).fill(marqueeContent)

  if (!text) return null // Don't render anything if there's no text

  return (
    <div
      ref={marqueeRef}
      className={`relative w-full overflow-hidden bg-black py-8 ${position === "bottom" ? "mt-auto" : ""}`}
    >
      <div ref={contentRef} className="inline-block whitespace-nowrap">
        <Link
          href={href}
          className="inline-flex text-[8vw] leading-none tracking-tight text-white hover:text-white/90 transition-colors"
        >
          {repeatedContent.map((item, index) => (
            <span ref={textRef} key={index} className="inline-block">
              {item}
            </span>
          ))}
        </Link>
      </div>
    </div>
  )
}

