"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";


interface SliderItem {
    url: string;
}

interface SliderComponentProps {
    sliderList: SliderItem[];
}

const ImageSlider: React.FC<SliderComponentProps> = ({ sliderList }) => {


    return (
        <section>
            <Swiper
                modules={[Autoplay,Pagination, Navigation]}
                spaceBetween={16}
                slidesPerView="auto"
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                }}
                speed={5000}
                loop={true}
                allowTouchMove={false}
            >
                {sliderList.map((item, idx) => (
                    <SwiperSlide key={idx} className="!w-auto">
                        <div className="rounded-lg overflow-hidden">
                            <Image
                                className="w-full h-auto"
                                src={item.url}
                                alt={`Slide ${idx + 1}`}
                                width={500}
                                height={500}
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default ImageSlider;
