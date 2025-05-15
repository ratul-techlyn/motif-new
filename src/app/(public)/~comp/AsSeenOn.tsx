"use client"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import Marquee from "react-fast-marquee"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const brands = [
  { img: "/assets/home/brand/brand1.png" },
  { img: "/assets/home/brand/brand2.png" },
  { img: "/assets/home/brand/brand3.png" },
  { img: "/assets/home/brand/brand4.png" },
  { img: "/assets/home/brand/brand5.png" },
  { img: "/assets/home/brand/brand6.png" },
  { img: "/assets/home/brand/brand7.png" },
  { img: "/assets/home/brand/brand8.png" },
]

const AsSeenOn = () => {
  const [direction, setDirection] = useState<"left" | "right">("left")
  const onFinish = () => {
    setDirection(direction === "left" ? "right" : "left")
  }

  const marqueeRef = useRef<HTMLDivElement>(null);
  const marqueeContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {

    if (marqueeRef.current && marqueeContainer.current) {
      gsap.to(marqueeContainer.current, {
        scrollTrigger: {
          trigger: marqueeContainer.current,
          start: "top center",
          end: "bottom center",
          onUpdate: (self) => {
            // Check scroll direction
            if (self.direction > 0) {
              gsap.fromTo(
                marqueeContainer.current,
                {
                  opacity: 0,
                  duration: 0.5,
                  ease: "power3.out",
                },
                {
                  opacity: 1,
                  duration: 0.5,
                  ease: "power3.out",
                }
              );
              setDirection("right");
            } else {
              gsap.fromTo(
                marqueeContainer.current,
                {
                  opacity: 0,
                  duration: 0.5,
                  ease: "power3.out",
                },
                {
                  opacity: 1,
                  duration: 0.5,
                  ease: "power3.out",
                }
              );
              setDirection("left");
            }
          },
        },
      });
    }
  }, []);
  
  return (
    <section ref={marqueeRef} className="layout_normal relative border-y border-[#2F2F2F] mt-5 md:mt-[6%] py-8 w-[90%] md:w-[90%] lg:w-[70%] md:px-0">
      <div className="absolute -top-[2.2vw] md:-top-[1vw] lg:-top-[calc(100vw/150)] left-0 px-3 w-fit pr-4 md:pr-12 font-helvetica uppercase font-bold text-section_title_sm md:text-section_title_md lg:text-section_title_lg 2xl:text-section_title_2xl text-typo-primary bg-primary">
        AS SEEN ON
      </div>
      <div ref={marqueeContainer} className="relative overflow-hidden min-h-[64px]">
        <Marquee
          gradient={false}
          speed={120}
          direction={direction}
          className="w-full overflow-y-hidden h-[4rem]"
          onFinish={onFinish}
        >
          {brands.map((brand, index) => (
            <span
              key={index}
              className="flex items-center w-[30vw] md:w-[calc(100vw/7)] lg:w-[calc(100vw/9)] text-white font-bold mx-6"
            >
              <Image src={brand.img || "/placeholder.svg"} width={130} height={60} alt="" />
            </span>
          ))}
        </Marquee>

        {/* Left gradient overlay */}
        <div
          className="absolute left-0 top-0 h-full w-[150px] pointer-events-none z-10"
          style={{
            background: "linear-gradient(to right, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%)",
          }}
        />

        {/* Right gradient overlay */}
        <div
          className="absolute right-0 top-0 h-full w-[150px] pointer-events-none z-10"
          style={{
            background: "linear-gradient(to left, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%)",
          }}
        />
      </div>
    </section>
  )
}

export default AsSeenOn;

