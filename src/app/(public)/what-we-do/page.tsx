'use client';
import React from 'react';
import BannerWhat from './~com/Banner';
import MotifVideShow from './~com/MotifVideShow';
import Perspective from './~com/Perspective';
import Brands from '@/components/cards/Brands';
import TwoColCard from '@/components/cards/TwoColCard';
import MarqueeNavigation from '@/components/marquee-navigation';
import { useResponsiveSize } from '@/hooks/useResponsiveSize';

const partnerData = {
    title: "Partnerships",
    description: "Brand success isn't easy so we partnered up with best in classes to change the brand experience, connecting with people and culture.",
}


const WhatWeDo = () => {
    const iconSize = useResponsiveSize();

    return (
        <div>
            <section className='hero pt-[5%]' >
            <BannerWhat />
            </section>
            <MotifVideShow />
            <Perspective />
            <section className='layout_normal my-36 w-[90%] md:w-[90%] lg:w-[70%]' >
                <TwoColCard description={partnerData.description} title={partnerData.title} />
            </section>
            <Brands />
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

export default WhatWeDo;