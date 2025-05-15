"use client";
import React from 'react';
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';
const bannerImage="/assets/culture/culture-page-banner.webp";
const CultureBanner = () => {
    return (
        <div className='layout_normal mt-0 md:mt-40'>
            <div className="flex flex-col justify-center items-center gap-4">
                <Image src={bannerImage} width={1000} height={800} alt="culture banner" className="text-center"/>

            </div>

                {/* <p className="text-2xl md:text-5xl text-white text-center my-36 font-bold">MOTIF IS NOT OUR BRAND!!!! <br/>
                    IT IS NOT YOUR BRAND, EITHER!! <br/>
                    IT IS THE PROPERTY OF EVERY</p> */}

                    <div className="mx-auto max-w-[800px] mt-20 md:mt-60">
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed once, initially
                                'MOTIF IS NOT OUR BRAND!!!!',
                                1000,
                                'IT IS NOT YOUR BRAND, EITHER!!',
                                1000,
                                'IT IS THE PROPERTY OF EVERY',
                                1000,
                            ]}
                            speed={50}
                            // style={{ fontSize: '10em' }}
                            repeat={Infinity}
                            className='uppercase text-2xl md:text-5xl text-white font-bold pt-48 md:pt-72'
                            />
                    </div>

        </div>
    );
};

export default CultureBanner;