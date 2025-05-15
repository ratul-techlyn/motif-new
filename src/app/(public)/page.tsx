"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Hero from "./~comp/Hero";
import AsSeenOn from "./~comp/AsSeenOn";
import BrandProfile from "./~comp/BrandProfile";
import TheCommitment from "./~comp/TheCommitment";
import WorkMerger from "./~comp/WorkMerger";
import Driving from "./~comp/Driving";
import TheApproach from "./~comp/TheApproach";
import CaseStudiesCarousel from "./~comp/CaseStudiesCarousel";
import BlogCarousel from "@/components/blog-carousel";
import MarqueeNavigation from "@/components/marquee-navigation";
import { useResponsiveSize } from "@/hooks/useResponsiveSize";
import Recommandations from "./~comp/Recommandations";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const iconSize = useResponsiveSize();

  useEffect(() => {}, []);

  return (
    <>
      <Hero />

      <AsSeenOn />

      <BrandProfile />

      <TheCommitment />

      <WorkMerger />

      <TheApproach />

      <Driving />

      <CaseStudiesCarousel />

      <Recommandations />

      <BlogCarousel title="Latest Articles" postsPerPage={5} />

      <MarqueeNavigation
        text="WHAT WE DO"
        href="/what-we-do"
        position="top"
        speed={20}
        iconClass="text-[#ED5F09]"
        iconSize={iconSize}
      />
    </>
  );
}
