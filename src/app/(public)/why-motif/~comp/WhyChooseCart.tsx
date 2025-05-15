"use client";
import React, { useEffect, useState } from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/scrollbar';
import {FreeMode} from "swiper/modules";
import {GoArrowUpRight} from "react-icons/go";
import Link from "next/link";
import BlurredCard from "@/components/cards/BlurredCard";

const chooseData = [
    {
        title: "We help you...",
        description:
            "To Achieve your goals with our expert guidance and helping you by",
        points: [
            "Mastering your positioning.",
            "Acquiring and retaining customers.",
            "Make you own your online presence.",
        ],
        id: "01",
    },
    {
        title: "We have...",
        description: "Everything you need to be successful in the industry such as",
        points: [
            "Tech Partners and high-profile creators.",
            "Years of experience with brands like yours.",
            "Tons of insights to draw from.",
        ],
        id: "02",
    },
    {
        title: "We use...",
        description:
            "Industry Expertise & straightforward insights to drive results.",
        points: [
            "First party data analytics.",
            "Knowledge of culture & where it's headed.",
            "Straightforward insights to drive results.",
        ],
        id: "03",
    },
    {
        title: "We give you...",
        description:
            "All the things combined power to elevate and upscale your brand such as",
        points: [
            "A strategy to launch.",
            "A playbook to grow.",
            "Resource to scale.",
        ],
        id: "04",
    },
    {
        title: "We give you...",
        description:
            "All the things combined power to elevate and upscale your brand such as",
        points: [
            "A strategy to launch.",
            "A playbook to grow.",
            "Resource to scale.",
        ],
        id: "04",
    },
    {
        title: "We give you...",
        description:
            "All the things combined power to elevate and upscale your brand such as",
        points: [
            "A strategy to launch.",
            "A playbook to grow.",
            "Resource to scale.",
        ],
        id: "04",
    },
];


const WhyChooseCart = () => {
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
                // freeMode={{
                //     enabled: true,
                //     sticky: false,
                //     momentumBounce: false,
                // }}
                loop={true}
                slidesOffsetBefore={slideOffset}
                modules={[FreeMode]}
                className="mySwiper flex flex-nowrap gap-2 text-typo-primary"
            >
                {chooseData.map((item,idx) => (
                    <SwiperSlide key={idx} className='!w-auto !mr-0 max-w-[374px]'>
                        <div className='flex gap-0'>
                            <div className="mr-10">
                                <BlurredCard className="">
                                    <div className="relative group p-4 rounded-lg overflow-hidden">
                                        <div className="relative z-10">
                                            <h3 className="text-[30px] font-semibold mb-4 text-typo-primary font-clash">
                                                {item.title}
                                            </h3>
                                            <span className="text-typo-primary font-helvetica text-[16px] leading-[1.3em] font-normal mt-[6%]">{item.description}</span>
                                            <ul className="space-y-2 my-10">
                                                {item.points.map((point, index) => (
                                                    <li key={index} className="flex items-start text-typo-primary font-helvetica text-[16px] leading-[1.3em] font-normal mt-[6%]">
                                                        <span className="mr-2">__</span>
                                                        {point}
                                                    </li>
                                                ))}
                                            </ul>
                                            <div className="flex justify-between py-5">
                                                <span className="text-2xl font-bold text-typo-primary">{item.id}</span>
                                                <Link href="/">
                                                    <GoArrowUpRight className="ml-4 text-3xl font-semibold text-typo-primary"/>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </BlurredCard>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default WhyChooseCart;