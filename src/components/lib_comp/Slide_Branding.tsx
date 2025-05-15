"use client";
import React from "react";
import { MotifIcon } from "../motif-icon";
import { useResponsiveSize } from "@/hooks/useResponsiveSize";

type TProps = { slides: string[] };

const Slide_Branding = ({ slides }: TProps) => {
  const iconSize = useResponsiveSize()
  return (
    <>
      {/* Right Slide */}
      <div className="overflow-hidden">
        <div className="flex gap-x-4 animate-slide-right ">
          {[...slides,].map((el, idx) => (
            <h2
              className="flex items-center gap-x-4 font-clash font-semibold text-[30px] md:text-[45px] lg:text-[100px] uppercase text-typo-primary "
              key={idx}>
              {el}{" "}
              <span className="mx-6">
                <MotifIcon className={'text-[#ED5F09]'} size={iconSize} />
              </span>
            </h2>
          ))}
        </div>
      </div>

      {/* Left Slide */}
      <div className="overflow-hidden">
        <div className="flex gap-4 animate-slide-left">
          {[...slides,].map((el, idx) => (
            <h2
              className="flex items-center gap-4 font-clash font-semibold text-[30px] md:text-[45px] lg:text-[100px] uppercase text-typo-primary"
              key={idx}>
              {el}{" "}
              <span className="mx-6">
                <MotifIcon className={'text-[#ED5F09]'} size={iconSize} />
              </span>
            </h2>
          ))}
        </div>
      </div>
    </>
  );
};

export default Slide_Branding;
