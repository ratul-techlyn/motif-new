import TextAnimation from "@/components/ui/textAnimation";
import Image from "next/image";
import React from "react";

const para = [
  "We understand the restless nights and gnawing frustration when customer acquisition, retention, and brand differentiation seem like distant dreams!",
  "As an.incubator company, we help DTC & Retail Luxury Lifestyle, Fashion & Beauty brands overcome their challenges by developing targeted marketing strategies, creating unique brand identities, designing personalized experiences to retain customers, providing expert guidance on advertising & brand marketing (offline + digital), and promoting sustainable while ethical practices. Our solutions deliver tangible results and help our clients thrive in a competitive industry.",
  "MOTIF utilizes it’s years of Agency experience to build digitally native brands and flagships while helps them succeed in the Digital Era.",
];
const TheApproach = () => {
  return (
    <section className="layout_normal  mt-64 w-[90%] md:w-[90%] lg:w-[70%] mx-auto px-2">
      <div className="grid grid-cols-1 gap-5">
        <div className="text-typo-primary w-full md:w-[60%] lg:w-[50%] xl:w-[40%]">
          <h5 className="font-helvetica uppercase font-bold text-section_title_sm md:text-section_title_md lg:text-section_title_lg 2xl:text-section_title_2xl mb-4">
            <TextAnimation splitType="lines" animationOn="lines" type="fadeUp">
              The approach
            </TextAnimation>
          </h5>
          <h2 className="capitalize text-section_heading_sm md:text-section_heading_md lg:text-section_heading_lg 2xl:text-section_heading_2xl 3xl:text-[clamp(50px,2.5vw,68px)] font-semibold font-clash leading-[1.2em] ">
            <TextAnimation
              type="fadeUp"
              splitType="lines, words"
              animationOn="words"
              linesClass="overflow-hidden"
              duration={1.5}
              stagger={0}
            >
              where strategy <br /> meets creativity <br /> to drive impact
            </TextAnimation>
          </h2>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-[33%_67%] gap-5 text-typo-primary ">
        <div className="text-[1vw] space-y-6 text-typo-mute">
          <div className="space-y-4 md:space-y-6">
            <TextAnimation
              type="scrub"
              splitType="chars"
              animationOn="chars"
              duration={0.5}
              stagger={0.01}
            >
              {para.map((el, idx) => (
                <div
                  className="font-helvetica text-responsive-para font-normal leading-[calc(100vw/22)] sm:leading-[calc(100vw/25)] md:leading-[calc(100vw/40)] lg:leading-[1.4] mt-4"
                  key={idx}
                >
                  <span>{el}</span>
                </div>
              ))}
            </TextAnimation>
          </div>
        </div>
        <div className="">
          <div className="relative mt-[9vh] lg:mt-0  mx-auto  overflow-hidden">
            <div className="relative w-[320px] h-[350px] sm:w-[400px] sm:h-[350px] md:w-[500px] md:h-[380px] mx-auto  overflow-hidden">
              <div className="absolute z-[2] bottom-[6px] left-[122px] sm:bottom-[6px] sm:left-[166px] md:bottom-[6px] md:left-[220px]">
                <div className="animate-spin_slow w-[150px]">
                  <Image
                    src={"/assets/home/Stamp1.webp"}
                    width={200}
                    height={200}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <Image
              className="object-contain"
              src="/assets/home/what-we-do-word.png"
              fill
              alt=""
            />
          </div>

          {/* <div className="relative mt-[9vh] lg:mt-0 w-[80vw] h-[80vw] md:w-[45vw] nd:h-[45vh] lg:w-[60vw] lg:h-[80vh] xl:w-[60vw] xl:h-[60vh] mx-auto  overflow-hidden">
            <div className={`absolute z-10 top-[50%] left-[50%]
              translate-x-[-30%] translate-y-[2%]
              sm:translate-x-[-10%] sm:translate-y-[40%]
              md:translate-x-[-20%] md:translate-y-[20%]
              xl:translate-x-[-15%] xl:translate-y-[35%]
              2xl:translate-x-[-10%] 2xl:translate-y-[45%]
            `}>
              <div className="animate-spin_slow w-[150px]">
                <Image
                  src={"/assets/home/Stamp1.webp"}
                  width={200}
                  height={200}
                  alt=""
                />
              </div>
            </div>
            <Image
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[100%] object-contain"
              src="/assets/home/what-we-do-word.png"
              width={1000}
              height={1000}
              alt=""
            />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default TheApproach;
