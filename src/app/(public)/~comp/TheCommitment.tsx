import TextAnimation from "@/components/ui/textAnimation";
import Image from "next/image";
import React from "react";

const para = [
  "You’ve a great brand story and vision? Then you shouldn’t wait   anymore to let the world know. Your brand is a gem waiting to be polished.",
  "From pinpointing the perfect brand voice to crafting a dazzling eCommerce site, we’re here to ensure your Luxury Lifestyle, Fashion, or Beauty DTC Brand sparkles with success.",
  "Through data-driven finesse, powerful creatives and artistic brilliance, we create a masterpiece that’s uniquely yours.",
  "While you focus on delivering the best products and building strong customer relationships!",
];
const TheCommitment = () => {
  return (
    <>
      <section className="layout_normal  mt-64 w-[90%] md:w-[90%] lg:w-[70%] mx-auto px-2">
        <div className="grid grid-cols-1 gap-5">
          <div className="text-typo-primary w-full md:w-[60%] lg:w-[50%] xl:w-[40%]">
            <h5 className="font-helvetica uppercase font-bold text-section_title_sm md:text-section_title_md lg:text-section_title_lg 2xl:text-section_title_2xl mb-4">
              <TextAnimation
                type="fadeUp"
                splitType="words"
                animationOn="words"
              >
                The commitment
              </TextAnimation>
            </h5>
            <h2 className="capitalize overflow-hidden text-section_heading_sm md:text-section_heading_md lg:text-section_heading_lg 2xl:text-section_heading_2xl 3xl:text-[clamp(50px,2.5vw,62px)] font-semibold font-clash leading-[1.2em] ">
              <TextAnimation
                type="fadeUp"
                splitType="lines, words"
                animationOn="words"
                linesClass="overflow-hidden"
                stagger={0}
                duration={1.5}
              >
                Transforming your visions into iconic brand experiences
              </TextAnimation>
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-[33%_67%] gap-5 text-typo-primary items-start ">
          <div className="text-[1vw] space-y-6 text-typo-mute">
            <p className="mt-[6vh] text-responsive-para font-helvetica  font-semibold  animate-fade-in leading-[calc(100vw/22)] sm:leading-[calc(100vw/25)] md:leading-[calc(100vw/40)] lg:leading-[1.4]">
              <TextAnimation
                type="fadeUp"
                splitType="lines"
                animationOn="lines"
                linesClass="overflow-hidden"
              >
                Shine, Focus &amp; Connect
              </TextAnimation>
            </p>
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
                    className="mb-[10px] font-helvetica text-[calc(100vw/24)] sm:text-[calc(100vw/40)] md:text-[calc(100vw/40)] lg:text-[calc(100vw/64)] xl:text-[clamp(1rem,1vw,1.2rem)] font-normal leading-[calc(100vw/22)] sm:leading-[calc(100vw/25)] md:leading-[calc(100vw/40)] lg:leading-[1.4]"
                    key={idx}
                  >
                    <span>{el}</span>
                  </div>
                ))}
              </TextAnimation>
            </div>
          </div>
          <div className="">
            <div className="relative mt-[9vh] lg:mt-0 xl:mt-[6vh] mx-auto  overflow-hidden">
              <div className="relative w-[320px] h-[350px] sm:w-[400px] sm:h-[350px] md:w-[500px] md:h-[380px] mx-auto  overflow-hidden">
                <div className="absolute top-[44px] left-[100px]">
                  <div className="animate-spin_slow w-[90px]">
                    <Image
                      src={"/assets/home/Stamp_wht_we_do.webp"}
                      width={200}
                      height={200}
                      alt=""
                    />
                  </div>
                </div>
                <Image
                  src="/assets/home/shin_focus.png"
                  alt="Shin Focus"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* <div className="relative mt-[9vh] lg:mt-0 xl:mt-[6vh] w-[80vw] h-[80vw] md:w-[45vw] nd:h-[45vh] lg:w-[52vw] lg:h-[80vh] xl:w-[52vw] xl:h-[59vh] 3xh:max-h-[clamp(300px,59vh,590px)] mx-auto  overflow-hidden">
            <div className={`absolute z-10 top-[50%] left-[50%]
                translate-x-[-130%] translate-y-[-140%]
                sm:translate-x-[-10%] sm:translate-y-[40%]
                md:translate-x-[-150%] md:translate-y-[-150%]
                xl:translate-x-[-190%] xl:translate-y-[-200%]
                2xl:translate-x-[-230%] 2xl:translate-y-[45%]
                3xl:translate-x-[-220%] 3xl:translate-y-[-220%]
            `}>
              <div className="animate-spin_slow w-[90px]">
                <Image src={"/assets/home/Stamp_wht_we_do.webp"} width={200} height={200} alt="" />
              </div>
            </div>
            <div>
              <Image
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[100%] object-contain"
                src="/assets/home/shin_focus.png"
                width={800}
                height={800}
                alt=""
              />
            </div>
          </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default TheCommitment;
