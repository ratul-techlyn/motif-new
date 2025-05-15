"use client";
import TitleImgBanner from "@/components/shared/TitleImgBanner";
import VideoPlayer from "@/components/shared/VideoPlayer";
import Brands from "../../../components/cards/Brands";
import RecommandationMpr from "./~com/RecommandationMpr";
import ShortSection from "./~com/ShortSection";

import dynamic from "next/dynamic";
// import WhyChooseCart from "@/app/(public)/why-motif/~comp/WhyChooseCart";
import React from "react";
import MarqueeNavigation from "@/components/marquee-navigation";
import { useResponsiveSize } from "@/hooks/useResponsiveSize";

import SwiperMarquee from "@/components/cards/SwiperMarquee";
const NewCurv = dynamic(() => import("./~com/NewCurv"), { ssr: false });
const CurveChartAnimation = dynamic(() => import("./~com/CurveChartAnimation"), { ssr: false });

const mainBanner = {
  lines: [
    ["WANNA", " KNOW", " HOW", "WE BRING",

      { imageSrc: "/assets/process/process.png", altText: "brand image" },
      "GROWTH", "FOR", "BRANDS ?",
    ],
  ],
  description: [
    "Not an agency but as an incubator we build, grow and scale Direct to consumer lifestyle, fashion and beauty brands with the right strategies & powerful creatives.",
  ],
};

const cards = [
  {
    title:"Beginners friendly",
    description:"Jump right in! Our resources cater to all skill levels, ensuring a smooth learning curve for newcomers.",
  },
  {
    title:"Beginners friendly",
    description:"Jump right in! Our resources cater to all skill levels, ensuring a smooth learning curve for newcomers.",
  },
  {
    title:"Beginners friendly",
    description:"Jump right in! Our resources cater to all skill levels, ensuring a smooth learning curve for newcomers.",
  },
  {
    title:"Beginners friendly",
    description:"Jump right in! Our resources cater to all skill levels, ensuring a smooth learning curve for newcomers.",
  },
]


const MotifProcessPage = () => {
    const iconSize = useResponsiveSize()

  return (
    <div>
      <section className="layout_normal lg:my-32 my-5 w-[90%] md:w-[90%] lg:w-[70%]">
        <TitleImgBanner
          lines={mainBanner.lines}
          description={mainBanner.description}
        />
      </section>

      <section className="lg:my-32 my-14">
        <VideoPlayer
          className=""
          url="https://player.vimeo.com/video/900891985"
          muted={true}
          autoplay={true}
          loop={true}
        />
      </section>
      <section className="layout_normal">
        <div className="flex flex-col lg:flex-row gap-x-5 my-20 md:my-40">
          <div className="w-full lg:w-[70%] ">
            <p className=" w-full text-large_para_sm md:text-large_para_md lg:text-large_para_lg 2xl:text-large_para_2xl leading-[1.5] font-semibold font-clash text-typo-primary">Growth is easy until you take it for granted.We help growing companies keep growing. </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8">
              <div >
                <p className="text-base md:text-lg font-medium font-clash">As companies approach the end of their growth cycle, they frequently encounter challenges related to slowing revenue gains, market saturation with established offerings, and intensified competition.</p>
              </div>
              <div>
                <p className="text-base md:text-lg font-medium font-clash">The Variable helps companies address these issues with a combination of strategic consulting, creativity and innovation. In short, we help companies extend their growth phase by leveraging difference to create meaningful customer value.</p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[30%]">
            <h2 className="font-helvetica text-right text-[calc(100vw/7)] md:text-[calc(100vw/10)] lg:text-[calc(100vw/22)] 2xl:text-[calc(100vw/40)] 3xl:text-[clamp(50px,2.5vw,60px)] font-medium">The</h2>
            <h2 className="font-helvetica text-right text-[calc(100vw/7)] md:text-[calc(100vw/10)] lg:text-[calc(100vw/22)] 2xl:text-[calc(100vw/40)] 3xl:text-[clamp(50px,2.5vw,60px)] font-medium leading-10">Complacency</h2>
            <h2 className="font-helvetica text-right text-[calc(100vw/7)] md:text-[calc(100vw/10)] lg:text-[calc(100vw/22)] 2xl:text-[calc(100vw/40)] 3xl:text-[clamp(50px,2.5vw,60px)] font-medium">Curve</h2>
          </div>
        </div>
        <NewCurv />
        {/* <Curve_chart /> */}
        <CurveChartAnimation />
      </section>
      <section className='pt-20 lg:pt-40 pb-20 '>

        <SwiperMarquee cards={cards} />
        {/* <WhyChooseCart /> */}
      </section>

      <ShortSection />
      <Brands />
      <section className="layout_normal py-28 w-[90%] md:w-[90%] lg:w-[70%]">
        <RecommandationMpr />
      </section>
      <MarqueeNavigation
        text="WHAT WE DO"
        href="/what-we-do"
        position="top"
        speed={60}
        iconClass="text-[#ED5F09]"
        iconSize={iconSize}
      />
    </div>
  );
};

export default MotifProcessPage;
