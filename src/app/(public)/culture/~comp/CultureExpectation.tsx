import React from 'react';
import Image from "next/image";

const CultureExpectation = () => {
    const benefits = [
        {
            id: 1,
            title: "World is Your Office",
            content: "Live anywhere and work from anywhere in the world as long as you can connect to us. Disclaimer: You must need internet, our postal service is terrible!!!!! Imperial level terrible!!!",
            icon: '/assets/culture/expectations/world.png'
        },
        {
            id: 2,
            title: "Inspirational Guide",
            content: "Get inspiration from a team of multitalented creative and insanely outgoing geeks who don’t always pretend to be smart. Because they are!!",
            icon: '/assets/culture/expectations/inspirational.png'
        },
        {
            id: 3,
            title: "Training Tools",
            content: "We have realistic expectations about human capabilities and we strongly believe in the process of training. It is our commitment to give you convertible on job training with some cool experts.",
            icon: '/assets/culture/expectations/training.png'
        },
        {
            id: 4,
            title: "Money",
            content: "And of course: MONEY. With competitive and generous pay, we will thank you for your efforts to be a part of something special. Motif!",
            icon: '/assets/culture/expectations/money.png'
        }
    ];

    return (
        <div className="layout_normal flex flex-col md:flex-row gap-5 py-20 md:py-32 mt-28 md:mt-60">
            <div className="w-full md:w-1/2 space-y-5v">
                <h1 className="text-section_subtitle_sm md:text-section_subtitle_md lg:text-section_subtitle_lg 2xl:text-section_subtitle_2xl leading-[1.2] text-white font-medium">EXPECTATIONS</h1>
                <h2 className="text-white text-section_heading_sm md:text-section_heading_md lg:text-section_heading_lg 2xl:text-section_heading_2xl font-semibold mt-20 leading-[1.2] ">WORLD IS YOUR <br/> OFFICE HERE&apos;S <br/> WHAT YOU CAN<br/> EXPECT</h2>
            </div>
            <div className="w-full md:w-1/2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 md:mb-20">
                    {benefits.map(benefit => (
                        <div key={benefit.id} className="flex flex-col gap-5 mt-8">
                            <div className="mb-8">
                                <Image src={benefit.icon} alt={benefit.title} width={80} height={80} />
                            </div>
                            <div>
                                <h3 className="text-white text-cart_title_sm md:text-cart_title_md lg:text-cart_title_lg 2xl:text-cart_title_2xl font-semibold mb-4">{benefit.title}</h3>
                                <p className="text-base md:text-lg text-[#848484]">{benefit.content}</p>
                            </div>
                        </div>
                    ))}

                </div>
             <p className="mt-5 md:mt-8 text-[#848484] font-semibold text-base md:text-lg">We&#39;re an equal opportunity employer. All candidates will be considered for work without consideration regarding race, colour, religion, sex, sexual orientation or disability status.</p>
            </div>

        </div>
    );
};

export default CultureExpectation;