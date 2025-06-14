"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FiMinus } from "react-icons/fi";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const data = [
  {
    XName: "ThrivePlan®",
    title: "The Growth Strategy",
    img: "/assets/what_we_do/Main-graphic-1x1-1.png",
    description:
      "Today, you are competing 24/7 for a digitally connected customer. We create strategies that empower you to beat competition, grow revenue, and win in the digital age.",
    packagePoints: [
      "Digital Strategy",
      "Omni-Channel Audits",
      "Planning, Forecasting & Benchmarking",
      "Growth Consultation",
      "Competitive Analysis",
      "Audience & Personas",
      "Social Media Strategy",
      "Email Marketing Strategy",
      "DTC & Retail Strategy",
    ],
  },
  {
    XName: "ImpactCX®",
    title: "The Experience Design",
    img: "/assets/what_we_do/Impact-cs-graphic-1x1-size.png",
    description:
      "We craft gold-standard websites, eCommerce, and mobile experiences that build brands and drive cross-channel business growth.",
    packagePoints: [
      "Creative Direction",
      "Experience Strategy",
      "Customer Journey Mapping",
      "Web Design & UX",
      "eCommerce",
      "Engineering",
      "Platform Implementation",
      "Full Stack Development",
      "Copy & Content",
      "Packaging Design",
    ],
  },
  {
    XName: "EngageMax®",
    title: "The Engagement Machine",
    img: "/assets/what_we_do/Engage-max-graphic-asset-1x1-size.png",
    description:
      "Integrated search, SEO, social, display, influencer, email, and CRO programs that drive awareness, traffic, and sales.",
    packagePoints: [
      "Marketing Strategy",
      "Campaign Development",
      "Creative Assets Production",
      "Programmatic Ads",
      "Search Engine Marketing",
      "Social Media Ads",
      "Display & Video Advertising",
      "Print & Billboards",
      "Email, SMS & CRM",
      "Influencer Marketing",
    ],
  },
  {
    XName: "BrandX®",
    title: "The Brand Transformation",
    img: "/assets/what_we_do/Main-graphic-1x1-1.png",
    description:
      "Evolving brands, modernizing visual identities, and creating communication strategies for the digital age.",
    packagePoints: [
      "Branding Strategy",
      "Brand Guideline",
      "Brand Positioning",
      "Brand Messaging",
      "Visual Identity",
      "Brand Architecture",
      "Brand Assets Production",
      "Brand Campaigns",
      "Creative & Art Direction",
    ],
  },
];

const XCards = () => {
  const refBox = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!refBox.current) return;
    const cards = refBox.current.querySelectorAll(".article_card");

    const totalHeight = Array.from(cards).reduce((acc: number, card: Element) => {
      return acc + (card as HTMLElement).clientHeight + 160;
    }, 0);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: refBox.current,
        start: "top top+=200",
        end: `+=${totalHeight}`,
        scrub: true,
        pin: true,
        toggleActions: "restart none none reset",
      },
    });

    timeline.from(
      cards,
      {
        top: (index) => `${cards[index]?.clientHeight * index + (index === 0 ? 0 : 160)}px`,
        duration: 1,
        stagger: 0.3,
        ease: "power3.out",
      }
    ).to(
      cards,
      {
        transform: (index) => {
          const minScale = 0.8;
          const maxScale = 1.0;
          const step = (maxScale - minScale) / (cards.length - 1);
          return `translateX(-50%) scaleX(${minScale + index * step})`;
        },
        duration: 1,
        delay: 0.3,
        stagger: 0.3,
        ease: "power3.out",
      },
      "<+0.4"
    );


    console.log(totalHeight);
    console.log(cards[0].clientHeight);
    console.log(cards.length);

  }, []);
  return (
    <section ref={refBox} className="w-full h-[80vh] relative flex items-center justify-center md:w-[80%] lg:w-[85%] mx-auto">
      {data.map((item, index) => (
        <article
          className={`w-full grid grid-cols-1 md:grid-cols-2 gap-4 article_card backdrop-blur-[6px] bg-[url("/assets/mask_bg/bg_mask.png")] p-5 rounded-2xl absolute left-[50%] translate-x-[-50%] z-10`}
          key={item.XName}
          style={{
            top: `${20 * index}px`,
          }}
        >
          <div className="order-2 md:order-none max-w-[500px] text-white">
            <h3 className="font-clash font-semibold text-section_subtitle_sm md:text-section_subtitle_md lg:text-section_subtitle_lg 2xl:text-section_subtitle_2xl leading-[1.2] text-typo-primary">
              {item.XName}
            </h3>
            <p className="text-white float_card_text_title_2xl float_card_text_title_lg float_card_text_title_sm  md:float_card_text_title_md font-clash font-semibold [letter-spacing: 1.2px] mt-2 ">
              {item.title}
            </p>
            <p className="text-white md:w-[22vw] float_card_text_desc_2xl float_card_text_desc_lg float_card_text_desc_sm  md:float_card_text_desc_md mt-4 font-helvetica  font-normal">
              {item.description}
            </p>
            <hr className="md:w-[22vw] border-b-2 border-mute mt-4 lg:mt-8 mb-12" />

            <ul>
              {item.packagePoints.map((el) => (
                <li
                  className="flex items-center gap-1 float_card_text_desc_2xl float_card_text_desc_lg float_card_text_desc_sm  md:float_card_text_desc_md font-medium"
                  key={el}
                >
                  <FiMinus size={20} />
                  {el}
                </li>
              ))}
            </ul>
          </div>
          <div className="order-1 md:order-none relative mx-auto md:mr-0">
            <Image
              className="object-fill block ml-auto w-[180px] md:w-full"
              src={item.img}
              width={380}
              height={900}
              alt=""
            />
          </div>
        </article>
      ))}
    </section>
  );
};

export default XCards;
