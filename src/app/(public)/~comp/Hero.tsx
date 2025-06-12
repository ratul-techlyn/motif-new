import TitleMixImg from "@/components/shared/TitleMixImg";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

gsap.registerPlugin(SplitText);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const titleMixImgData: any = [
  [
    // "Building", "best", "In ",
    "Building best In",
    { imageSrc: "/assets/home/hero/hero1.webp", altText: "Hero 1" },
    "the  world",
    "luxury",
    { imageSrc: "/assets/home/hero/hero2.webp", altText: "Hero 2" },
    "lifestyle, fashion ",
    { imageSrc: "/assets/home/hero/hero3.webp", altText: "Hero 3" },
    " & beauty, brands",
    { imageSrc: "/assets/home/hero/hero4.webp", altText: "Hero 4" },
  ],
];

const Hero = () => {
  const refBox = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (refBox.current) {
      const pera = refBox.current.querySelectorAll(".anm-hero-pera");
      const splitText = new SplitText(pera, { type: "words"});
      gsap.fromTo(
        splitText.words,
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          delay: 0.5,
          duration: 1,
          ease: "power3.out",
        }
      );
    }
  }, []);

  return (
    <section className="layout_normal mt-[11%] md:mt-[11%] px-2 w-[90%] md:w-[90%] lg:w-[70%]">
      <div className="w-full lg:w-full md:w-[80%]">
        <TitleMixImg
          data={titleMixImgData}
          classNameWrap="text-hero_title_sm w-[970px] md:w-[970px] md:text-hero_title_md xl:text-hero_title_lg"
        />
        <div ref={refBox} className="mt-8">
          <p className="anm-hero-pera overflow-hidden 2xl:max-w-[90%] lg:max-w-[90%] sm:max-w-full font-helvetica text-hero_subtitle_sm md:text-hero_subtitle_md lg:text-hero_subtitle_lg 2xl:text-hero_subtitle_2xl 3xl:text-[clamp(20px,30px,32px)]  md:w-[95%] font-medium text-typo-mute">
            Once an advertising and branding agency, now a global incubator that
            builds, grows, and scales luxury lifestyle, fashion, and beauty
            brands through innovative strategies, human first approaches,
            powerful creatives & crazy ideas.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
