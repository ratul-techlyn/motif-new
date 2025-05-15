"use client";
import Image from "next/image";

import RecommandationWhatDo from "./RecommandationWhatDo";
import TitleMixImg from "@/components/shared/TitleMixImg";
import XCards from "./XCards";
import AccordianSection from "@/components/cards/AccordianSection";


const faq_section = {
  description:[
    "We might able to",
    "help you grow and",
    "scale if you're ...",
  ],
  accordianList: [
    {
      title: "DTC or Retail Brand",
      description: [
        {
          text: "Are A direct-to-consumer (DTC) or Retail Fashion, Lifestyle or Beauty brand selling products you care deeply about.",
        },
      ],
    },
    {
      title: "Pre-Launch",
      description: [
        {
          text: "Pre-launch with an ambitious mindset, having marketing-led growth strategy and are planning to scale rapidly post-launch.",
        },
      ],
    },
    {
      title: "Growing Fast",
      description: [
        {
          text: "Are growing fast and investing in growth after you’ve taken off— and you’re ready to replace your cookie cutter solutions with a more stable, scalable version to accelerate your growth.",
        },
      ],
    },
    {
      title: "Emerging",
      description: [
        {
          text: "Generate more than $4M in a year or, you've a budget or you’re investing more than $250k per year on marketing, paid media and business development and looking to grow with a rock solid strategy and implementation.",
        },
      ],
    },
    {
      title: "Advisable",
      description: [
        {
          text: "Take advice seriously, take actions on a timely manner, see us as a partner rather than an agency and thirsty enough for growth.​",
        },
      ],
    },
    {
      title: "Goal oriented",
      description: [
        {
          text: "Having clear goals & objectives but you don’t quite know where to start or how best to achieve them.",
        },
      ],
    },
  ]
}


const motto = [
  "WE AIM TO DRIVE",
  "GROWTH, MAKE IMPACT",
  "AND ELEVATE BRANDS",
]

const titleMixImgData = [
  ["Specialized", "in","growing","Luxury",
    "Lifestyle",
    { imageSrc: "/assets/what_we_do/specialize-1.webp", altText: "Hero 1" },
    "Fashion",
    { imageSrc: "/assets/what_we_do/specialize-2.jpg", altText: "Hero 1" },
    "And",
    "Beauty",
    { imageSrc: "/assets/what_we_do/specialize-3.jpg", altText: "Hero 1" },
    "Brands",
  ],
]


const Perspective = () => {
  return (
    <div className="layout_normal mt-[5em] w-[90%] md:w-[90%] lg:w-[70%]">
      <div className="flex flex-col md:flex-row justify-between flex-wrap md: flex-auto text-typo-primary">
        <div className="text-sm md:text-[1.15vw] font-medium">
          {
            motto.map(el=><p className=" text-persp_title_sm md:text-persp_title_md lg:text-persp_title_lg 2xl:text-persp_title_2xl font-semibold leading-[1.2em] font-helvetica text-typo-primary" key={el}>
            {el}
          </p>)
          }
        </div>
        <div className="text-[6vw] font-semibold text-right mt-16 md:mt-0">
          <p className="font-clash text-[2.6rem] md:text-[4rem] lg:text-[6vw] 3xl:text-[clamp(100px,6vw,135px)] leading-[1.2] [word-spacing: 0.1em] font-semibold text-typo-primary">WITH A</p>
          <p className="font-clash text-[2.6rem] md:text-[4rem] lg:text-[6vw] 3xl:text-[clamp(100px,6vw,135px)] leading-[1.2] [word-spacing: 0.1em] font-semibold text-typo-primary">
            DIFFERENT
          </p>
          <p className="font-clash text-[2.6rem] md:text-[4rem] lg:text-[6vw] 3xl:text-[clamp(100px,6vw,135px)] leading-[1.2] [word-spacing: 0.1em] font-semibold text-typo-primary">
            PERSPECTIVE +{" "}
          </p>
          <div className="flex items-center gap-4">
            <div className="relative w-[15vw] md:w-[12vw] h-[9vw] sm:h-[7.2vw] md:h-[6.5vw] 3xl:max-h-[clamp(100px,6.5vw,140px)] rounded-full overflow-hidden ml-auto">
              <Image
                className="absolute top-1/2 left-1/2 w-auto h-auto object-cover transform -translate-x-1/2 -translate-y-1/2 object-center"
                layout="responsive"
                src={
                  "/assets/what_we_do/demo-homepage-Portfolio-Gallery-Uncode-2022.webp"
                }
                alt=""
                width={100}
                height={60}
              />
            </div>
            <p className="font-clash text-[2.6rem] md:text-[4rem] lg:text-[6vw] 3xl:text-[clamp(100px,6vw,135px)] leading-[1.2] [word-spacing: 0.1em] font-semibold text-typo-primary">MOTIF®</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center gap-10 md:gap-16 lg:gap-20 w-fit mx-auto my-24 lg:my-40">
        <div>
          <Image
            src={"/assets/what_we_do/does/do-3.png"}
            width={100}
            height={80}
            alt=""
          />
        </div>
        <div>
          <Image
            src={"/assets/what_we_do/does/do-2.png"}
            width={100}
            height={80}
            alt=""
          />
        </div>
        <div>
          <Image
            src={"/assets/what_we_do/does/do-1.png"}
            width={100}
            height={80}
            alt=""
          />
        </div>
      </div>
      <XCards />
      <section className="layout_normal mt-20">

          <TitleMixImg classNameLine="w-fit mx-auto justify-center" classNameText="grow-0" classNameWrap="" data={titleMixImgData} />

      </section>
      <section className='layout_normal pt-20 lg:pt-40 pb-20'>
                <AccordianSection
                    description={faq_section.description}
                    title="COLLABORATION"
                    accordionList={faq_section.accordianList}
                />
            </section>
      {/* <section className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-24 md:mt-40">
        <div className=" font-clash text-[calc(100vw/52)] font-semibold leading-tight text-typo-primary">
          <h2 className="uppercase font-helvetica text-[1.59em] md:text-[calc(100vw/110)] font-semibold leading-[1]">
            COLLABORATION
          </h2>
          <div className="mt-[28px]">
            <p className="font-clash text-[3em] sm:text-[3em] md:text-[calc(100vw/52)] leading-none md:leading-[1.1] font-semibold  text-typo-primary">
              We might able to
            </p>
            <p className="font-clash text-[3em] sm:text-[3em] md:text-[calc(100vw/52)] leading-none md:leading-[1.1] font-semibold  text-typo-primary">
              help you grow and
            </p>
            <p className="font-clash text-[3em] sm:text-[3em] md:text-[calc(100vw/52)] leading-none md:leading-[1.1] font-semibold  text-typo-primary">
              scale if you&apos;re ...
            </p>
          </div>
        </div>
        <Accordion items={accordianList} titleClass="" />
      </section> */}
       <section className="layout_normal">
         <RecommandationWhatDo />
       </section>

    </div>
  );
};

export default Perspective;
