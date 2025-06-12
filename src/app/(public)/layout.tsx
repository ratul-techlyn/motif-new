"use client";

import TopBar from "@/components/shared/Navbar/TopBar";
import Footer from "@/components/shared/footer/Footer";
import type React from "react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

type TProps = {
  children: React.ReactNode;
};

const GroupLayout = ({ children }: TProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: scrollContainerRef.current,
      smooth: 1,
      effects: true,
    });

    // Example scroll-triggered animation
    const sections =
      scrollContainerRef.current?.querySelectorAll("section") || [];
    sections.forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "top 50%",
            scrub: true,
          },
        }
      );
    });

    return () => {
      smoother.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="bg-primary w-full min-h-screen text-typo-mute font-Clash">
      <div id="smooth-wrapper bg-primary">
        <div ref={scrollContainerRef} className="bg-primary">
          <TopBar />

          <div className="">{children}</div>

          <Footer />
        </div>
      </div>
    </div>
  );
};

export default GroupLayout;
