import React from "react";
import Image from "next/image";

export interface TRecommendation {
  quote: string[];
  name: string;
  position: string;
  company: string;
}

interface RecommandationCardProps {
  recommendation: TRecommendation;
}

const RecommandationCard: React.FC<RecommandationCardProps> = ({
  recommendation,
}) => {
  return (
    <article className="grid grid-cols-1 md:grid-cols-[100px_1fr] gap-4 lg:mt-20 px-2">
      <div>
          <Image src={"/assets/recommendation/quoteIcon.png"} className="mx-0 md:mx-auto" width={50} height={25} alt="quat-icon"/>
      </div>
      <div>
        {/* Loop through each paragraph in the quote array */}
        {recommendation.quote.map((paragraph, index) => (
          <p
            key={index}
            className="quote-paragraph font-helvetica text-testimonial_sm md:text-testimonial_md lg:text-testimonial_lg 2xl:text-testimonial_2xl 3xl:text-[clamp(20px,1.7vw,35px)] font-medium leading-[1.2] text-typo-primary">
            {paragraph}
          </p>
        ))}
        <div className="quote-author mt-10 md:mt-15  text-[#7A7A7A] font-semibold">
          <p className="font-clash overflow-hidden text-[calc(100vw/30] md:text-[clamp(0.9rem,calc(100vw/95),1rem)]">{recommendation.name}</p>
          <p className="font-clash overflow-hidden text-[calc(100vw/30] md:text-[clamp(0.9rem,calc(100vw/95),1rem)]">{recommendation.position}</p>
          <p className="font-clash overflow-hidden text-[calc(100vw/30] md:text-[clamp(0.9rem,calc(100vw/95),1rem)]">{recommendation.company}</p>
        </div>
      </div>
    </article>
  );
};

export default RecommandationCard;
