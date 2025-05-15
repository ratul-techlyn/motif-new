import React from "react";
import Accordion, { TAccordionItem } from "../shared/Accordion";

interface CollaborationProps {
  title?: string;
  description: string[];
  accordionList: TAccordionItem[];
}

const AccordianSection: React.FC<CollaborationProps> = ({
  title,
  description,
  accordionList,
}) => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-[35%_55%] gap-4 md:gap-x-[10%] w-full mx-auto">
      <div className="self-start md:sticky md:top-20 text-left pl-0">
        {title && (
          <h5 className="uppercase font-helvetica text-section_title_sm md:text-section_title_md lg:text-section_title_lg 2xl:text-section_title_2xl font-semibold text-typo-primary mb-6">
            {title}
          </h5>
        )}

        {description.map((line, index) => (
          <h4
            key={index}
            className="font-clash text-lft_section_heading_sm md:text-lft_section_heading_md lg:text-lft_section_heading_lg 2xl:text-lft_section_heading_2xl font-semibold leading-tight text-typo-primary">
            {line}
          </h4>
        ))}
      </div>
      <div className="ml-auto mt-16 md:mt-0  md:pl-5 pr-3 flex justify-end">
        <section>
          <Accordion items={accordionList} titleClass="text-[calc(1.8vw)] font-clash" />
        </section>
      </div>
    </section>
  );
};

export default AccordianSection;
