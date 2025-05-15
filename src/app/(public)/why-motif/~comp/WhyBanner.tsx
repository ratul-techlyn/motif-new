import React from "react";
import TitleMixImg from "@/components/shared/TitleMixImg";
import TitleImgBanner from "@/components/shared/TitleImgBanner";

const titleMixImgData = [
  [
    "NOT",
    "JUST",
    "ANOTHER",
    "AGENCY.",
    "REAL",
    "GROWTH",
    "AGENT",
    { imageSrc: "/assets/why_motif/why_banner.jpg", altText: "brand image" },
  ],
];

const titleMixImgDataMobile = [
  [
    "NOT",
    "JUST",
    "ANOTHER",
    "AGENCY.",
    "REAL",
    "GROWTH",
    "AGENT",
    { imageSrc: "/assets/why_motif/why_banner.jpg", altText: "brand image" },
  ],
];

const description = [
  "To make you a successful brand we go beyond setting up your online & offline presence, we look into your branding, positioning, understanding your target market & create brand marketing strategies that are exclusive to your brand.",
];

const description_mobile = [
  "To make you a successful brand we go beyond setting up your online & offline presence, we look into your branding, positioning, understanding your target market & create brand marketing strategies that are exclusive to your brand.",
];

const WhyBanner = () => {
  return (
    <>
      {/* mobile  */}
      <section className="md:hidden layout_normal mt-10 md:mt-20">
        <div className="w-full md:w-[75%]">
          <div className="flex flex-wrap">
            <TitleMixImg classNameLine="w-fit" data={titleMixImgDataMobile} />
            <div className="mt-6 md:mt-8">
              {description_mobile.map((el, idx) => (
                <p
                  className="mt-1.5 font-helvetica text-hero_subtitle_sm md:text-hero_subtitle_md lg:text-hero_subtitle_lg 2xl:text-hero_subtitle_2xl font-normal leading-[1.4] md:leading-[1.2] lg:leading-[1] text-typo-mute"
                  key={idx}
                >
                  {el}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* WEB  */}
      <section className="hidden md:block layout_normal mt-10 md:mt-20 layout_normal mt-[11%] md:mt-[11%] px-2 w-[90%] md:w-[70%] lg:w-[70%]">
        <TitleImgBanner lines={titleMixImgData} description={description} />
      </section>
    </>
  );
};

export default WhyBanner;