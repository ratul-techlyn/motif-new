import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";

export interface TLineItem {
  text?: string;
  img?: string;
  alt?: string;
}

export interface TitleImgProps {
  lines: (string | { imageSrc: string; altText?: string })[][];
  description?: string[];
  titleDelay?: number;
  imageDelay?: number;
}

const TitleImgBanner = ({ lines, description, titleDelay = 0, imageDelay = 0 }: TitleImgProps) => {
  const refBox = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (refBox.current) {
      const lines = refBox.current.querySelectorAll(".mix-title-element-text");
      const images = refBox.current.querySelectorAll(
        ".mix-title-element-image"
      );
      const pera = refBox.current.querySelectorAll(".anm-hero-pera");
      const splitText = new SplitText(pera, { type: "words"});

      const titleTimeline = gsap.timeline();
      titleTimeline
        .fromTo(
          lines,
          { y: 200, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            delay: titleDelay,
            duration: 1,
            ease: "power3.out",
          }
        )
        .fromTo(
          images,
          { width: 0, opacity: 0 },
          {
            width: 100,
            opacity: 1,
            delay: imageDelay,
            duration: 0.5,
            ease: "power3.out",
          }
        )
        .fromTo(
          splitText.words,
          {
            y: 100,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            ease: "power3.out",
          }
        );
    }
  }, [titleDelay, imageDelay]);

  return (
    <div ref={refBox} className="w-full md:w-[75%]">
      <h1 className="text-other_hero_title_sm md:text-other_hero_title_md lg:text-other_hero_title_lg 2xl:text-other_hero_title_2xl font-clash font-semibold text-typo-primary">
        {lines.map((row, rowIndex) => (
          <span
            key={rowIndex}
            className="flex flex-wrap items-center gap-x-3 leading-[1.1] tracking-[1.5px] 3xl:text-[clamp(50px,2.9vw,64px)]"
          >
            {row.map((item, itemIndex) =>
              typeof item === "string" ? (
                <span
                  key={itemIndex}
                  className={[
                    cn("relative visible inline-block", {
                      " text-justify": rowIndex !== lines.length - 1,
                    }),
                    "flex overflow-hidden font-clash font-semibold uppercase leading-[1.2] [word-spacing:0.1em]",
                  ].join(" ")}
                >
                  <span className="mix-title-element-text">{item}</span>
                </span>
              ) : (
                <span
                  key={itemIndex}
                  className="mix-title-element-image relative visible inline-block rounded-full w-[20vw] md:w-[12vw] lg:w-[8vw] 2xl:w-[5vw] h-[40px] md:h-[4vw] lg:h-[3vw] 2xl:h-[2vw] bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `url(${item.imageSrc})`,
                    aspectRatio: "1 / 1",
                  }}
                ></span>
              )
            )}
          </span>
        ))}
      </h1>

      <div className={cn({ "mt-3": description?.length })}>
        {description &&
          description.map((el, idx) => (
            <p
              className={`flex overflow-hidden font-helvetica text-hero_subtitle_sm md:text-hero_subtitle_md lg:text-hero_subtitle_lg 2xl:text-hero_subtitle_2xl 3xl:text-[clamp(22px,1.47vw,30px)] font-normal leading-[1.4] md:leading-[1.2] lg:leading-[1] text-[#848484] inline ${
                idx !== 0 ? "ml-1" : ""
              }`}
              key={idx}
            >
              <span className="anm-hero-pera">{el}</span>
            </p>
          ))}
      </div>
    </div>
  );
};

export default TitleImgBanner;
