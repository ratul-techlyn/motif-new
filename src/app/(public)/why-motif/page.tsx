'use client';

import AccordianSection from '@/components/cards/AccordianSection';
import Image from 'next/image';
import React from 'react';
import BatmanRobin from "@/app/(public)/why-motif/~comp/BatmanRobin";
import WhyChoose from "@/app/(public)/why-motif/~comp/WhyChoose";
import RecommandationWhyMotif from './~comp/RecommandationWhyMotif';
import TitleImgBanner from "@/components/shared/TitleImgBanner";
import MarqueeNavigation from '@/components/marquee-navigation';
import { useResponsiveSize } from '@/hooks/useResponsiveSize';
const mainBanner = {
    lines: [
        ["NOT",
            "JUST",
            "ANOTHER",
            "AGENCY",
            "REAL", "GROWTH", "AGENT",
            { imageSrc: "/assets/why_motif/why_banner.jpg", altText: "why motify" },

        ],
    ],
    description: [
        "To make you a successful brand we go beyond setting up your online & offline presence, we look into your branding, positioning, understanding your target market & create brand marketing strategies that are exclusive to your brand.",
    ],
};

const canvaImgs = {
    image: '/assets/why_motif/canva/canva_img.png',
    displacementImage: '/assets/why_motif/canva/canva_bg.png',
}

const faq_section = {
    description: [
        "And everything in",
        "between to build",
        "and scale brands?",
    ],
    accordionList: [
        {
            title: "Cultural Discovery",
            description: [
                {
                    text: "We understand that brands must be deeply connected to human psychology and culture to create meaningful experiences. Our research explores the cultural forces shaping consumer behavior and use these insights to design brand experiences that resonate emotionally and authentically.",
                },
            ]
        },
        {
            title: "Brand Launches",
            description: [
                {
                    text: "We understand that launching a new brand can be overwhelming, and that's why we're here to guide you every step of the way. Our team of experts will work with you to develop a launch strategy that resonates with your target audience and drives results.",
                },
            ]
        },

        {
            title: "Channel Expansions",
            description: [
                {
                    text: "Expanding your reach is key to growing your business, and we can help you do just that. Our team can help you identify new channels and opportunities to reach your target audience and drive sustained growth for your business.",
                },
            ]
        },
        {
            title: "Impactful Advertising",
            description: [
                {
                    text: "Advertising should inspire action, but most importantly, it should spark human connection. At MOTIF®, we blend artistry with psychology, designing campaigns that transcend the ordinary. Our ads create emotional responses, driving engagement and conversion with a lasting impact. From the strategy to concept, from production to distribution we do it all to drive impactful message and growth for the brand.",
                },
            ]
        },
        {
            title: "Acquisition & Retention",
            description: [
                {
                    text: "At MOTIF, we know that acquiring new customers is just the first step - retaining them is what truly drives growth. We focus on developing strategies that not only attract new customers but also keep them coming back for more, to help your business achieve sustained growth.",
                },
            ]
        },
        {
            title: "CX Optimization",
            description: [
                {
                    text: "Every business wants to maximize their ROI, and we're here to help you do just that. We focus on customer experience optimization rather than only onsite conversion rate optimization so that we can truly help you identify areas of your marketing funnel that need improvement and develop strategies to increase your conversion rates and achieve maximum ROI.",
                },
            ]
        },
        {
            title: "Engaging Brand Experiences",
            description: [
                {
                    text: "Human connection is at the heart of every brand experience. At MOTIF®, we go beyond just design; we create holistic, emotionally charged experiences that reflect the soul of the brand. This approach deepens loyalty and turns customers into passionate advocates.",
                },
            ]
        },

         {
            title: "Drive Hyper Growth",
            description: [
                {
                    text: "Hyper growth isn’t just about scaling—it’s about scaling meaningfully. MOTIF® combines strategy, tech, and creativity to drive rapid yet sustainable growth, ensuring brands expand while staying true to their core essence.",
                },
            ]
        },

    ],
}


const WhyMotifPage = () => {
    const iconSize = useResponsiveSize();

    return (
        <div className="">
            <section className="layout_normal py-28 lg:py-40 px-4 lg:px-0 w-[90%] md:w-[90%] lg:w-[70%]">
                <TitleImgBanner
                    lines={mainBanner.lines}
                    description={mainBanner.description}
                />
            </section>

            <section className='layout_normal mt-20 '>
                <div className='w-fit mx-auto '>
                    <Image src={canvaImgs.image} width={800} height={500} alt='' />
                </div>
            </section>
            <section className='layout_normal pt-20 lg:pt-40 pb-20 w-[90%] md:w-[90%] lg:w-[70%]'>
                <AccordianSection
                    description={faq_section.description}
                    title="WHAT WE DO THE BEST"
                    accordionList={faq_section.accordionList}
                />
            </section>
            {/* TwoCol  */}
            <section className="layout_normal py-32 w-[90%] md:w-[90%] lg:w-[70%] md:py-48 bg-[#050505]">
                <BatmanRobin />
            </section>
            <WhyChoose />

            <RecommandationWhyMotif />
            <MarqueeNavigation
                text="WHAT WE DO"
                href="/what-we-do"
                position="top"
                speed={60}
                iconClass="text-[#ED5F09]"
                iconSize={iconSize}
            />
        </div>
    );
};

export default WhyMotifPage;