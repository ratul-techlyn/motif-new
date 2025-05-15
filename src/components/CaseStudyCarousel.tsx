"use client"
import Image from "next/image"
import { useState, useEffect, useRef } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { FreeMode, Autoplay } from "swiper/modules"
import type { Swiper as SwiperType } from "swiper"
import "swiper/css"
import "swiper/css/free-mode"

const caseStudies = [
  {
    brand: "Fitify",
    mainStat: "$1.2M increase in annual revenue",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    metrics: [
      { value: "68%", label: "↑ Retention" },
      { value: "42%", label: "↓ Churn" },
    ],
  },
  // ... (add more case studies here)
]

const CaseStudiesCarousel = () => {
  const [isClient, setIsClient] = useState(false)
  const [scrollDirection, setScrollDirection] = useState<"left" | "right">("left")
  const swiperRef = useRef<SwiperType|null>(null)
  const lastScrollTop = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const st = window.pageYOffset || document.documentElement.scrollTop
      if (st > lastScrollTop.current) {
        setScrollDirection("left")
      } else if (st < lastScrollTop.current) {
        setScrollDirection("right")
      }
      lastScrollTop.current = st <= 0 ? 0 : st
    }

    window.addEventListener("scroll", handleScroll)
    setIsClient(true)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.autoplay.stop()
      swiperRef.current.autoplay.start()
      if (scrollDirection === "left") {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        swiperRef.current.changeDirection("ltr" as any)
      } else {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        swiperRef.current.changeDirection("rtl" as any)
      }
    }
  }, [scrollDirection])

  if (!isClient) {
    return null
  }

  return (
    <section className="relative w-full bg-black py-16">
      <div className="relative overflow-hidden max-w-[95%] mx-auto">
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper
          }}
          slidesPerView="auto"
          spaceBetween={40}
          freeMode={{
            enabled: true,
            sticky: false,
            momentumBounce: false,
          }}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            reverseDirection: scrollDirection === "right",
          }}
          speed={5000}
          loop={true}
          modules={[FreeMode, Autoplay]}
          className="mySwiper"
        >
          {caseStudies.map((study, index) => (
            <SwiperSlide key={index} className="!w-auto">
              <div className="relative w-[300px] h-[400px] rounded-[24px] overflow-hidden bg-gradient-to-b from-gray-800 to-gray-900">
                <div className="absolute inset-0">
                  <Image src={study.image || "/placeholder.svg"} alt={study.brand} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center text-center text-white p-6">
                  <h3 className="text-[28px] tracking-wide font-light mb-2">{study.brand}</h3>
                  <p className="text-[16px] font-light tracking-wide text-gray-200 mb-4">{study.mainStat}</p>
                  <div className="flex justify-center gap-3">
                    {study.metrics.map((metric, idx) => (
                      <div
                        key={idx}
                        className="px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-sm border border-white/10"
                      >
                        <span className="text-[14px] tracking-wide font-light whitespace-nowrap">
                          {metric.value} {metric.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default CaseStudiesCarousel

