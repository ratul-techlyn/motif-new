import React from 'react';
import { GoArrowUpRight } from "react-icons/go";
import Marquee from "react-fast-marquee";


const phrases = [
    "LET'S SCALE ",
    "LET'S CREATE SOMETHING REMARKABLE ",
    "LET'S UNLOCK GROWTH  ",
];

const TextMarquee = () => {
    return (
        <div className="py-2 md:py-14 h-60 mt-28">
            <Marquee gradient={false} speed={150} direction={"left"} className="w-full overflow-y-hidden">
                    {phrases.map((text, index) => (
                        <span
                            key={index}
                            className="flex font-clash items-center text-[56px] md:text-[45px] lg:text-[100px] text-white font-semibold mx-6"
                        >
                        {text}
                            <GoArrowUpRight className="ml-4 text-[56px] md:text-[45px] lg:text-[100px] text-orange-500"/>
                    </span>
                    ))}
            </Marquee>
        </div>
);
};

export default TextMarquee;