"use client";
import React from 'react';
import { TypeAnimation } from 'react-type-animation';
// MUSA, BLADE, MOTIF, ROBERT
const WeAre = () => {
    return (
    <section className="layout_normal mt-10 md:mt-20 w-[90%] md:w-[90%] lg:w-[70%] grid grid-cols-1 md:grid-cols-2 gap-8 px-6 py-16 lg:grid-cols-2 gap-4 px-4 lg:px-0 py-28 md:py-36 mt-20 md:mt-28">
        <div className="layout_normal min-h-screen px-4 lg:px-0 py-20 md:py-52">
            <TypeAnimation
                sequence={[
                    // Same substring at the start will only be typed once, initially
                    'we are ANNA',
                    1000,
                    'we are MUSA',
                    1000,
                    'we are BLADE',
                    1000,
                    'we are MOTIF',
                    1000,
                    'we are ROBERT',
                    1000,
                ]}
                speed={50}
                // style={{ fontSize: '10em' }}
                repeat={Infinity}
                className='text_contact-title uppercase text-[35px] md:text-[35px] text-white font-bold pt-48 md:pt-72'
                />
        </div>

      <div className="flex flex-col lg:flex-row items-center py-16 px-6">
        
        <img src="/assets/about/slide/about_slide_2.jpg" width={450} height={300}  alt="Team" className="rounded-lg" />
        
      </div>

     

        
    </section>
    );
};

export default WeAre;