import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, SplitText);

const data = [
  {
    id: 1,
    title: "The Art of Targeting",
    description:
      "Our brand strategist and commerce experts join hands to make sure your products reach the right customers with the right messages.",
  },
  {
    id: 2,
    title: "The Craft of Discovery",
    description:
      "We sit with you to conduct in-depth market research to identify your ideal customers and opportunities for your brand to cut through the noise and stand out!",
  },
  {
    id: 3,
    title: "The Science of Data",
    description:
      "Implementing only the best of time-tested strategies while preserve the authenticity of your brand with solid data at its core, fueled by cutting-edge technology, reflecting the true essence of your story.",
  },
];

const WorkMerger = () => {
  const refText = useRef<HTMLHeadingElement>(null);
  const cardContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (refText.current) {
      const text = new SplitText(refText.current, {
        type: "chars, words, lines",
      });
      const card1 = cardContainer.current?.querySelector(".card-0");
      const card2 = cardContainer.current?.querySelector(".card-1");
      const card3 = cardContainer.current?.querySelector(".card-2");

      gsap.from(text.chars, {
        opacity: 0.3,
        duration: 1,
        stagger: 0.1,
        scrollTrigger: {
          trigger: refText.current,
          start: "top center-=200",
          scrub: true,
          pin: true,
        },
      });

      const cardTl = gsap.timeline({
        scrollTrigger: {
          trigger: cardContainer.current,
          start: "top center-=200",
          pin: true,
          scrub: true,
          toggleActions: "restart none none reset",
        },
      });

      if (card1 && card2 && card3) {
        const title1 = card1.querySelector("h2");
        const title2 = card2.querySelector("h2");
        const title3 = card3.querySelector("h2");
        const description1 = card1.querySelector("p");
        const description2 = card2.querySelector("p");
        const description3 = card3.querySelector("p");

        const titleSplit1 = new SplitText(title1, {
          type: "lines, words, chars",
        });

        const titleSplit2 = new SplitText(title2, {
          type: "lines, words, chars",
        });

        const titleSplit3 = new SplitText(title3, {
          type: "lines, words, chars",
        });

        const descriptionSplit1 = new SplitText(description1, {
          type: "lines, words, chars",
        });

        const descriptionSplit2 = new SplitText(description2, {
          type: "lines, words, chars",
        });

        const descriptionSplit3 = new SplitText(description3, {
          type: "lines, words, chars",
        });

        cardTl
          .from(titleSplit1.words, {
            y: 100,
            opacity: 0,
            duration: 0.5,
            stagger: 0.1,
          })
          .from(
            descriptionSplit1.lines,
            {
              x: 100,
              opacity: 0,
              duration: 0.5,
              stagger: 0.1,
            },
            "<"
          )
          .from(titleSplit2.words, {
            y: 100,
            opacity: 0,
            duration: 0.5,
            stagger: 0.1,
          })
          .from(
            descriptionSplit2.lines,
            {
              x: 100,
              opacity: 0,
              duration: 0.5,
              stagger: 0.1,
            },
            "<"
          )
          .from(titleSplit3.words, {
            y: 100,
            opacity: 0,
            duration: 0.5,
            stagger: 0.1,
          })
          .from(
            descriptionSplit3.lines,
            {
              x: 100,
              opacity: 0,
              duration: 0.5,
              stagger: 0.1,
            },
            "<"
          );
      }
    }
  }, []);

  return (
    <section className="layout_normal  w-[90%] md:w-[90%] lg:w-[70%]">
      <div className="text-typo-primary my-[60vh]">
        <h2
          ref={refText}
          className="text-[calc(100vw/17)] md:text-[clamp(1rem,calc(100vw/30),4rem)] font-[600] font-clash leading-[1.2em] [word-spacing:5px] w-[900px]"
        >
          Our Work Merges Dynamic Duos-brand X Product, Strategy X Design, Data
          Anallyst X Technologist To Grow Your Brand.
        </h2>
      </div>
      <div
        ref={cardContainer}
        className="grid gird-cols-1 md:grid-cols-3 gap-x-12 gap-y-4 mt-28 "
      >
        {data.map((el, index) => (
          <article key={el.id} className={`card-${index}`}>
            <div className="max-w-[400px]">
              <h2 className="overflow-hidden font-[600] font-clash text-cart_title_sm md:text-cart_title_md lg:text-cart_title_lg 2xl:text-cart_title_2xl 3xl:text-[clamp(20px,1.2vw,32px)] text-typo-primary">
                {el.title}
              </h2>
              <p className="mt-4 text-responsive-para font-normal font-helvetica">
                {el.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default WorkMerger;
