"use client";
import React from "react";
import { cn } from "@/lib/utils";

type HomeTitleMixImgProps = {
  data: (string | { imageSrc: string; altText?: string })[][];
  classNameLine?: string;
  classNameText?: string;
  classNameWrap?: string;
};

const HomeTitleMixImg: React.FC<HomeTitleMixImgProps> = ({ data,classNameLine,classNameText ,classNameWrap}) => {


  return (
    <div
      className={[" w-full uppercase text-home_hero_title_sm md:text-home_hero_title_md xl:text-other_hero_title_lg font-clash font-semibold text-typo-primary transform translate-x-0 translate-y-0 opacity-100 ",classNameWrap].join(" ")}
    >
      <h1>
      {data.map((row, rowIndex) => (

        <span
          key={rowIndex}
          className={["flex flex-wrap  items-center gap-x-2 leading-[1.1] tracking-[1.5px]",classNameLine].join(" ")}
        >
          {row.map((item, itemIndex) =>
            typeof item === "string" ? (
              <span
                key={itemIndex}
                className={[
                  cn("relative visible inline-block", {
                  " text-justify": rowIndex !== data.length - 1,
                }),
                "font-clash font-semibold uppercase leading-[1.2] [word-spacing:0.1em]", classNameText
              ].join(" ")}
              >
                {item}
              </span>
            ) : (
              <span
                key={itemIndex}
                className="relative visible inline-block rounded-full w-[20vw] md:w-[7vw] h-[40px] md:h-[3vw] bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url(${item.imageSrc})`,
                  aspectRatio: "1 / 1",
                }}
              >
              </span>
            )
          )}
        </span>
      ))}
        </h1>
    </div>

  )


};

export default HomeTitleMixImg;
