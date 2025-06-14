import React from "react";
import TextAnimation from "../ui/textAnimation";

type Tprops = {
  title: string;
  description: string;
};
const TwoColCard = ({ description, title }: Tprops) => {
  return (
    <div className="flex flex-col md:flex-row gap-4">
      <div className="w-full md:w-2/5">
        <h2 className="text-section_subtitle_sm md:text-section_subtitle_md lg:text-section_subtitle_lg 2xl:text-section_subtitle_2xl font-semibold font-helvetica text-typo-primary uppercase">
          <TextAnimation type="fadeUp" splitType="words" animationOn="words">
            {title}
          </TextAnimation>
        </h2>
      </div>
      <div className="w-full md:w-3/5 px-2">
        <p className="text-large_para_sm md:text-large_para_md lg:text-large_para_lg 2xl:text-large_para_2xl leading-[1.2] font-normal text-typo-mute_deep">
          <TextAnimation type="scrub" splitType="words" animationOn="words">
            {description}
          </TextAnimation>
        </p>
      </div>
    </div>
  );
};

export default TwoColCard;
