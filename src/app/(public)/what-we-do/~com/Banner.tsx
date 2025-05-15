import React from "react";
import TitleMixImg from "@/components/shared/TitleMixImg";
import TitleImgBanner from "@/components/shared/TitleImgBanner";

const titleMixImgData = [
  ["RESHAPING", "BRAND", "GROWTH","WITH",
    "GENUINE",
    "MOTIF",
    { imageSrc: "/assets/what_we_do/whatdobanner.jpg", altText: "Hero 1" },
  ],
];
const titleMixImgDataMobile = [
  ["RESHAPING",
  "BRAND", "GROWTH",
  "WITH","GENUINE",
    "MOTIF",
    { imageSrc: "/assets/what_we_do/whatdobanner.jpg", altText: "Hero 1" },
  ],
];

const description = [
  "As an incubator company with agency experience, we're here to make sure you succeed on all fronts with data driven methodologies and people first approach.",
];
const description_mobile = [
  "As an incubator company with agency experience, we're here to make sure you succeed on all fronts with data driven methodologies and people first approach.",
];




const BannerWhat = () => {
  return (
    <>
    {/* mobile  */}
    <section className="block md:hidden layout_normal mt-10 md:mt-20">
      <div className="w-full md:w-[75%]  ">
        <div className="flex  flex-wrap">
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
    <section className="hidden md:block layout_normal mt-10 md:mt-20 layout_normal px-2 w-[90%] md:w-[90%] lg:w-[70%]">
          <TitleImgBanner lines={titleMixImgData} description={description} />
    </section>
    </>
    
  );
};

export default BannerWhat;
