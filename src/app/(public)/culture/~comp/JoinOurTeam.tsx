import React from 'react';
import Image from "next/image";

const JoinOurTeam = () => {
    return (
        <div className="layout_normal grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16  p-4 my-28 md:my-60">
            <div className="flex justify-center items-center">
                <Image
                    src="/assets/culture/cultureCareearImage.jpg"
                    alt="team image"
                    width={600}
                    height={500}
                    className="w-full h-auto max-w-sm md:max-w-full"
                />
            </div>

            <div className="flex flex-col justify-center space-y-4 text-center md:text-left">
                <h3 className="text-lg md:text-2xl mb-4 font-semibold text-[848484]">Career</h3>
                <h2 className="text-cart_title_sm md:text-cart_title_md lg:text-cart_title_lg 2xl:text-cart_title_2xl font-bold text-white leading-[1.2]">
                    Join Our Team at Motif
                </h2>
                <p className="text-base md:text-lg text-[848484] ">
                    Whether you&apos;re a designer, developer, or strategist, if you have the
                    skills, passion, and drive to elevate our client businesses, we want to
                    hear from you.
                </p>
                <button className="rounded-full my-10  md:my-14 w-full md:w-32 text-white px-4 py-2.5  text-sm font-semibold shadow-sm ring-1 ring-inset ring-gray-300">Apply
                </button>
            </div>
        </div>

    );
};

export default JoinOurTeam;