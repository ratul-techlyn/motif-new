"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Controller } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

const items = [
  {
    keyword: "beauty",
    img: "/assets/home/hero/hero1.webp",
  },
  {
    keyword: "luxury",
    img: "/assets/home/hero/hero2.webp",
  },
  {
    keyword: "lifestyle",
    img: "/assets/home/hero/hero3.webp",
  },
  {
    keyword: "fashion",
    img: "/assets/home/hero/hero4.webp",
  },
];

const DynamicHeadline = () => {
  const [textSwiper, ] = useState(null);
  // const [imageSwiper, setImageSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);


  return (
    <div className="relative w-full max-w-4xl mx-auto text-center">
      <h1 className="text-4xl font-bold mb-4">
        Accelerating growth <span>of</span>
      </h1>

      <div className="relative">
        {/* Image Swiper */}
        <Swiper
          modules={[Autoplay, EffectFade, Controller]}
          spaceBetween={0}
          slidesPerView={1}
          effect="fade"
          loop={true}
          autoplay={{ delay: 3000 }}
          // onSwiper={setImageSwiper}
          onSlideChange={({ realIndex }) => setActiveIndex(realIndex)} // Use realIndex for proper indexing
          controller={{ control: textSwiper }}
          className="w-full"
        >
          {items.map((item, index) => (
            <SwiperSlide key={index}>
              <Image
                src={item.img}
                alt={`${item.keyword} image`}
                width={600}
                height={400}
                className="rounded-lg object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <span>{items[activeIndex].keyword}</span>


      </div>

      <span className="text-xl mt-4 block">brands</span>
    </div>
  );
};

export default DynamicHeadline;
