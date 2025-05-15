import React from "react";

const ShortSection = () => {
  return (
    <section className="layout_normal my-20 w-[90%] md:w-[90%] lg:w-[70%]">
      <div className="grid grid-cols-1 md:grid-cols-[40%_60%] gap-8">
        <div className="">
          <h2 className="text-section_subtitle_sm md:text-section_subtitle_md lg:text-section_subtitle_lg 2xl:text-section_subtitle_2xl font-semibold font-helvetica text-typo-primary uppercase">
          Partnerships
          </h2>
        </div>

        <div className="">
          <p className="text-base md:text-lg font-helvetica font-medium ">
          Brand success isn&apos;t easy so we partnered up with best in classes to change the brand experience, connecting with people and culture.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ShortSection;
