"use client";
import BlurredCard from "@/components/cards/BlurredCard";
import TextAnimation from "@/components/ui/textAnimation";
import { cn } from "@/lib/utils";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const data = [
  {
    id: 1,
    amount: 3.8,
    unit: "%",
    currency: "",
    title: "average conversion rate",
  },
  {
    id: 2,
    amount: 83,
    unit: "+",
    currency: "",
    title: "brands helped",
  },
  {
    id: 3,
    amount: 977,
    unit: "+",
    currency: "$",
    title: "total partner gmv",
  },
  {
    id: 4,
    amount: 93,
    unit: "%",
    currency: "",
    title: "average growth",
  },
];

const Driving = () => {
  const cardContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardContainerRef.current) {
      const cards = cardContainerRef.current.querySelectorAll(".card");
      const ammounts = cardContainerRef.current.querySelectorAll(".ammount");

      if (cards) {
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: cardContainerRef.current,
            start: "top center",
            end: "top top-=200",
            scrub: true,
            toggleActions: "play reverse play reverse",
          },
        });

        timeline.from(cards, {
          y: 100,
          x: (index) => (index % 2 === 0 ? -500 : 500),
          rotate: (index) => (index % 2 === 0 ? -45 : 45),
          duration: 1,
          stagger: 0.2,
          ease: "power1.inOut",
        });

        // timeline.eventCallback("onUpdate", (self) => {
        //   console.log(self);
        //   gsap.from(ammounts, {
        //     textContent: 0,
        //     opacity: 0,
        //     duration: 1,
        //     stagger: 0.2,
        //     ease: "power3.out",
        //     snap: { textContent: 0.1 },
        //   });
        // });
      }
    }
  }, []);

  return (
    <section
      ref={cardContainerRef}
      className="layout_normal w-full overflow-hidden"
    >
      <div className="mt-40 mx-auto md:mt-60 w-[90%] md:w-[90%] lg:w-[70%]">
        <div className="mt-28 text-typo-primary">
          <div className="w-full md:w-[60%] lg:w-[50%] xl:w-[40%]">
            <h2 className="capitalize text-section_heading_sm md:text-section_heading_md lg:text-section_heading_lg 2xl:text-section_heading_2xl 3xl:text-[clamp(50px,2.5vw,60px)] font-semibold font-clash leading-[1.2em] ">
              <TextAnimation
                type="fadeUp"
                splitType="lines, words"
                animationOn="words"
                linesClass="overflow-hidden"
                stagger={0}
                duration={1.5}
              >
                Driving growth <br />
                through ambition <br />
                and dedication
              </TextAnimation>
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-[20px] md:gap-y-0 gap-x-[20px] text-typo-primary mt-20">
          {data.map((el, idx) => (
            <div className="card" key={el.id}>
              <BlurredCard
                className={cn(" aspect-[660/309]", {
                  "md:mb-6": idx % 2 === 0,
                  "md:mt-[-20px]": idx > 1,
                  "md:mt-[2.5rem]": idx === 1,
                  "md:mt-[1.2rem]": idx === 3,
                })}
              >
                <article
                  className={cn(
                    "flex flex-col justify-center p-10 w-full h-full Xpy-10 Xmd:py-28 rounded-2xl",
                    {}
                  )}
                >
                  <div>
                    <span className="text-[calc(100vw/6)] md:text-[5.3vw] 3xl:text-[clamp(100px,5.vw,110px)] font-medium font-clash leading-none">
                      {el.currency}
                      <span className="ammount">{el.amount}</span>
                      {el.unit}
                    </span>
                  </div>
                  <h3 className="font-helvetica text-[calc(100vw/32)] md:text-[1.2vw] font-semibold uppercase">
                    {el.title}
                  </h3>
                </article>
              </BlurredCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Driving;
