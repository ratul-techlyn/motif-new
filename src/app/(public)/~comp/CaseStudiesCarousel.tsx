"use client";
import Image from "next/image";
import { useState, useEffect, useRef, useCallback } from "react";
import Marquee from "react-fast-marquee";

interface CaseStudy {
  brand: string;
  mainStat: string;
  image: string;
  metrics: {
    value: string;
    label: string;
  }[];
}

const caseStudies: CaseStudy[] = [
  {
    brand: "Fitify",
    mainStat: "$1.2M increase in annual revenue",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    metrics: [
      { value: "68%", label: "↑ Retention" },
      { value: "42%", label: "↓ Churn" },
    ],
  },
  {
    brand: "Luxe Timepieces",
    mainStat: "147% increase in online sales",
    image:
      "https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    metrics: [
      { value: "85%", label: "↑ CTR" },
      { value: "53%", label: "↓ CPA" },
    ],
  },
  {
    brand: "EcoBeauty",
    mainStat: "234% growth in new customers",
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    metrics: [
      { value: "92%", label: "↑ Engagement" },
      { value: "76%", label: "↑ CLV" },
    ],
  },
];

const CaseStudiesCarousel = () => {
  const [direction, setDirection] = useState<"left" | "right">("left");
  const lastScrollTop = useRef(0);

  // ✅ Memoize function to prevent re-renders
  const handleScroll = useCallback(() => {
    const st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > lastScrollTop.current) {
      setDirection("left"); // Scrolling down → Marquee moves left
    } else if (st < lastScrollTop.current) {
      setDirection("right"); // Scrolling up → Marquee moves right
    }
    lastScrollTop.current = st <= 0 ? 0 : st; // Update last scroll position
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <section className="relative w-full bg-black py-16 my-40 ">
      <div className="relative overflow-hidden w-[90%] md:w-[90%] lg:w-[70%] mx-auto">
        <Marquee
          gradient={false}
          speed={50}
          direction={direction} 
          pauseOnHover
          loop={0}
          className="w-full overflow-hidden flex"
        >
          {caseStudies.concat(caseStudies).map((study, index) => (
            <div
              key={index}
              className="relative w-[300px] h-[400px] mx-2 rounded-[24px] overflow-hidden"
              style={{
                background:
                  "linear-gradient(180deg, rgba(32,32,32,1) 0%, rgba(20,20,20,1) 100%)",
                boxShadow:
                  "0 0 0 1px rgba(255,255,255,0.1), 0 4px 24px rgba(0,0,0,0.5)",
              }}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src={study.image || "/placeholder.svg"}
                  alt={study.brand}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center text-center text-white p-6">
                <h3 className="text-[28px] tracking-wide font-light">
                  {study.brand}
                </h3>
                <p className="text-[16px] font-light tracking-wide text-gray-200 mb-4">
                  {study.mainStat}
                </p>

                <div className="flex justify-center gap-3">
                  {study.metrics.map((metric, idx) => (
                    <div
                      key={idx}
                      className="px-3 py-1.5 rounded-full"
                      style={{
                        background: "rgba(0,0,0,0.4)",
                        backdropFilter: "blur(10px)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
                      }}
                    >
                      <span className="text-[14px] tracking-wide font-light whitespace-nowrap">
                        {metric.value} {metric.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </Marquee>

        {/* Left gradient overlay */}
        <div
          className="absolute left-0 top-0 h-full w-[100px] pointer-events-none z-10"
          style={{
            background:
              "linear-gradient(to right, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%)",
          }}
        />

        {/* Right gradient overlay */}
        <div
          className="absolute right-0 top-0 h-full w-[100px] pointer-events-none z-10"
          style={{
            background:
              "linear-gradient(to left, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%)",
          }}
        />
      </div>
    </section>
  );
};

export default CaseStudiesCarousel;
