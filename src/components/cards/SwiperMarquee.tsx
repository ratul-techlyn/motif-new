"use client";
import React, { useEffect, useState } from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/scrollbar';
import {FreeMode} from "swiper/modules";
import BlurredCard from "@/components/cards/BlurredCard";




type TProps = {
    cards: {
        title: string,
        description: string,
    }[]
}

const SwiperMarquee = ({cards}:TProps) => {
    const [isWindow, setIsWindow] = useState(false);
    const [slideOffset, setSlideOffset] = useState(0);


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
        setIsWindow(true)
        return () => window.removeEventListener("resize", calculateOffset);
    }, []);

    if (!isWindow) {
        return <></>
    }
    return (
        <div className="">
            <Swiper
                 slidesPerView={'auto'}
                spaceBetween={20}
                pagination={false}
                scrollbar={{
                    el: '.swiper-scrollbar',
                    draggable: true,
                    dragSize: 100,
                  }}
                freeMode={{
                    enabled: true,
                    sticky: false,
                    momentumBounce: false,
                }}
                slidesOffsetBefore={slideOffset}
                modules={[FreeMode]}
                className="mySwiper flex flex-nowrap gap-2 text-typo-primary"
            >
                {cards.map((item,idx) => (
                    <SwiperSlide key={idx} className='!w-auto !mr-0 max-w-[374px]'>
                        <div className='flex gap-0'>
                            <div className="mr-10">
                            <BlurredCard className="">
                                <article className='flex flex-col justify-end p-9 rounded-xl h-[40vh]' key={idx}>
                                    <h4 className='text-[1vw] sm:text-[2.2vw] md:text-[1.2vw] 3xl:text-[clamp(18px,1.2vw,24px)] font-semibold mb-4 text-typo-primary font-clash'>{item.title}</h4>
                                    <p className='text-typo-primary font-helvetica text-sm md:text-lg leading-[1.3em] font-normal mt-[6%]'>{item.description}</p>
                                </article>
                            </BlurredCard>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default SwiperMarquee;