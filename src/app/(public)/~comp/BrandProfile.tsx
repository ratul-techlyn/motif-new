"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const brands = [
  {
    id: "00-1",
    img: "/assets/home/brand_profile/brand_profile1.png",
    name: "lace",
    category: "Strategy, Marketing & CX",
  },
  {
    id: "00-2",
    img: "/assets/home/brand_profile/brand_profile2.png",
    name: "lnko",
    category: "CX, Strategy",
  },
  {
    id: "00-3",
    img: "/assets/home/brand_profile/brand_profile3.png",
    name: "maybell",
    category: "Branding & Marketing",
  },
  {
    id: "00-4",
    img: "/assets/home/brand_profile/brand_profile4.png",
    name: "tenshoppe",
    category: "Strategy, Design & CX",
  },
  {
    id: "00-5",
    img: "/assets/home/brand_profile/brand_profile5.png",
    name: "tenshoppe",
    category: "Strategy, Design & CX",
  },
];

const BrandProfile = () => {
  const [isWindow, setIsWindow] = useState(false);
  const [slideOffset, setSlideOffset] = useState(0);

  const brandSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (brandSectionRef.current) {
      const crads = brandSectionRef.current.querySelectorAll(".brand-card");
      const cardNames = brandSectionRef.current.querySelectorAll(".barnd_card_name");
      const cardCategories = brandSectionRef.current.querySelectorAll(".barnd_card_category");
      const cardIds = brandSectionRef.current.querySelectorAll(".barnd_card_id");
      const cardImages = brandSectionRef.current.querySelectorAll(".brand-card-img");
      const brandTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: brandSectionRef.current,
          start: "top center+=200",
          toggleActions: "play reverse play reverse",
        },
      });

      brandTimeline.from(crads, {
        opacity: 0,
        x: "100vw",
        rotate: (index) => index % 2 === 0 ? -45 : 45,
        duration: 3,
        delay: (index) => index * 0.01,
        ease: "power2.inOut",
      }).from(cardImages, {
        borderRadius: "17%",
        duration: 1,
        ease: "power2.inOut",
      }, "-=0.5").from(cardNames, {
        opacity: 0,
        duration: 1,
        ease: "power2.inOut",
      }).from(cardCategories, {
        opacity: 0,
        duration: 1,
        ease: "power2.inOut",
      }, "<").from(cardIds, {
        opacity: 0,
        duration: 1,
        ease: "power2.inOut",
      }, "<");
    }
  }, [brandSectionRef.current, isWindow]);

  useEffect(() => {
    const calculateOffset = () => {
      const viewportWidth = window.innerWidth;

      let layoutWidth = viewportWidth;

      if (viewportWidth >= 1024) {
        layoutWidth = Math.min(viewportWidth * 0.7, 1536); // lg:w-[70%]
      } else {
        layoutWidth = viewportWidth * 0.9; // w-[90%] for md and below
      }

      const offset = (viewportWidth - layoutWidth) / 2;
      setSlideOffset(offset);
    };

    calculateOffset();
    window.addEventListener("resize", calculateOffset);
    setIsWindow(true);
    return () => window.removeEventListener("resize", calculateOffset);
  }, []);

  if (!isWindow) {
    return <div className="mt-20 mx-auto px-3 min-h-[435.75px]"></div>;
  }

  return (
    <section
      ref={brandSectionRef}
      className="mt-20 mx-auto px-3 min-h-[435.75px]"
    >
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={10}
        pagination={false}
        scrollbar={{
          el: ".swiper-scrollbar",
          draggable: true,
          dragSize: 100,
        }}
        // freeMode={{
        //     enabled: true,
        //     sticky: false,
        //     momentumBounce: false,
        // }}
        loop={false}
        slidesOffsetBefore={slideOffset}
        modules={[FreeMode]}
        className="mySwiper flex flex-nowrap gap-2 text-typo-primary"
        onSlideChange={() => {
          console.log("slide changed");
        }}
      >
        {brands.map((item) => (
          <SwiperSlide className="!w-auto !mr-4" key={item.id}>
            <div className="flex gap-0 brand-card">
              <div>
                <div className="w-auto md:w-auto h-[18rem] lg:h-auto lg:w-[22vw] hover:rounded-[17%] overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.165, 0.84, 0.44, 1)]">
                  <Image
                    className="h-full w-auto brand-card-img"
                    src={item.img}
                    objectFit="contain"
                    width={800}
                    height={500}
                    alt=""
                  />
                </div>
                <div>
                  <h2 className="barnd_card_name uppercase font-clash text-[clamp(20px,calc(100vw/10),1.6rem)] font-semibold mt-[.8vw] mb-[15px] md:mb-[.2vw] leading-[1.3]">
                    {item.name}
                  </h2>
                  <p className="barnd_card_category font-helvetica text-[15px] font-medium text-typo-primary">
                    {item.category}
                  </p>
                </div>
              </div>
              <div
                className="barnd_card_id rotate-180 text-end"
                style={{ writingMode: "vertical-rl" }}
              >
                {item.id}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default BrandProfile;
