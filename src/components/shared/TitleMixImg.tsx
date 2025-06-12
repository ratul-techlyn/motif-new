"use client";
import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import gsap from "gsap";

export type TTitleData = (string | { imageSrc: string; altText?: string })

export type TitleMixImgProps = {
  data: TTitleData[][];
  classNameLine?: string;
  classNameText?: string;
  classNameWrap?: string;
  titleDelay?: number;
  imageDelay?: number;
};

const TitleMixImg: React.FC<TitleMixImgProps> = ({ data,classNameLine,classNameText ,classNameWrap, titleDelay = 0, imageDelay = 0}) => {
  const refBox = useRef<HTMLDivElement>(null);


  useEffect(() => {
      if(refBox.current){
        const lines = refBox.current.querySelectorAll(".mix-title-element-text");
        const images = refBox.current.querySelectorAll(".mix-title-element-image");
        const titleTimeline = gsap.timeline();
        titleTimeline.fromTo(lines,
          { y: 200, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            delay: titleDelay,
            duration: 1.5,
            ease: "power3.out",
          }
        )
        .fromTo(images,
          { width: 0, opacity: 0 },
          {
            width: 100,
            opacity: 1,
            delay: imageDelay,
            duration: 1,
            stagger: 0.3,
            ease: "power3.out",
          }
        );
      }
  }, [titleDelay, imageDelay]);

  return (
    <div
      ref={refBox}
      className={['3xl:max-w-[1440px]'," w-full uppercase text-home_hero_title_sm md:text-home_hero_title_md xl:text-home_hero_title_lg font-clash font-semibold text-typo-primary transform translate-x-0 translate-y-0 opacity-100 ",classNameWrap].join(" ")}
    >
      <h1>
      {data.map((row, rowIndex) => (
        <span
          key={rowIndex}
          className={["flex flex-wrap  items-center gap-x-0 gap-y-2 md:gap-x-2 md:gap-y-0 leading-[1.1] tracking-[1.5px]",classNameLine].join(" ")}
        >
          {row.map((item, itemIndex) =>
            typeof item === "string" ? (
              <span
                key={itemIndex}
                className={[
                  '3xl:text-[64px]',
                  cn("relative visible inline-block", {
                  " text-justify": rowIndex !== data.length - 1,
                }),
                "overflow-hidden flex font-clash font-semibold uppercase leading-[1.2] [word-spacing:0.1em]", classNameText
              ].join(" ")}
              >
                <span className="mix-title-element-text">{item}</span>
              </span>
            ) : (
              <span
                key={itemIndex}
                className="mix-title-element-image relative mx-2 visible inline-block rounded-full w-[20vw] md:w-[7vw] max-w-[40px] md:max-w-[100px] 3xl:max-w-[200px] h-[20px]  md:h-[3vw] 3xl:max-h-[70px] bg-cover bg-center bg-no-repeat"
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


  // return (
  //   <>
  //     <div className=" uppercase text-[calc(100vw/32)] font-clash font-semibold text-typo-primary">
  //       {data.map((row, rowIndex) => (
  //         <div
  //           key={rowIndex}
  //           className="flex flex-wrap items-center justify-between gap-x-2"
  //         >
  //           {row.map((item, itemIndex) =>
  //             typeof item === "string" ? (
  //               <span key={itemIndex}>{item}</span>
  //             ) : (
  //               <div
  //                 key={itemIndex}
  //                 className="relative w-20 md:w-[134px] h-7 md:h-[57px] rounded-full overflow-hidden"
  //               >
  //                 <Image
  //                   className="absolute top-1/2 left-1/2 w-auto h-auto object-cover transform -translate-x-1/2 -translate-y-1/2 object-center"
  //                   layout="responsive"
  //                   src={item.imageSrc}
  //                   alt={item.altText || ""}
  //                   width={100}
  //                   height={60}
  //                 />
  //               </div>
  //             )
  //           )}
  //         </div>
  //       ))}
  //     </div>

  //     {/* <div className="uppercase text-[calc(100vw/32)] font-clash font-semibold text-typo-primary">
  //       {data.map((row, rowIndex) => (
  //         <div
  //           key={rowIndex}
  //           className="flex flex-wrap items-center justify-betweenX gap-x-2"
  //         >
  //           {row.map((item, itemIndex) =>
  //             typeof item === "string" ? (
  //               <span key={itemIndex}>{item}</span>
  //             ) : (
  //               <div
  //                 key={itemIndex}
  //                 className="relative w-20 md:w-[134px] h-7 md:h-[57px] rounded-full overflow-hidden"
  //               >
  //                 <Image
  //                   className="absolute top-1/2 left-1/2 w-auto h-auto object-cover transform -translate-x-1/2 -translate-y-1/2 object-center"
  //                   layout="responsive"
  //                   src={item.imageSrc}
  //                   alt={item.altText || ""}
  //                   width={100}
  //                   height={60}
  //                 />
  //               </div>
  //             )
  //           )}
  //         </div>
  //       ))}
  //     </div> */}
  //   </>
  // );
};

export default TitleMixImg;
