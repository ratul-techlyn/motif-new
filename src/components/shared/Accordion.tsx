"use client"
import { cn } from "@/lib/utils";
import React, { useState, useRef, } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";

export type TAccordionItem = {
    title: string;
    description: {
        title?: string;
        text?: string;
        list?: {
            icon: React.JSX.Element;
            text: string;
        }[];
    }[];
};

type AccordionProps = {
    items: TAccordionItem[];
    animationDuration?: number; // Duration of the animation in milliseconds
    easingCurve?: string; // Custom easing curve for the animation
    titleClass?: string;
};

const Accordion: React.FC<AccordionProps> = ({
    items,
    animationDuration = 500,
    easingCurve = "cubic-bezier(0.4, 0, 0.2, 1)",
    titleClass,
}) => {
    const [activeStates, setActiveStates] = useState<boolean[]>(Array(items.length).fill(false));
    const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

    // Dynamically calculate the height for smooth collapse animation
    const getContentHeight = (index: number) => {
        if (contentRefs.current[index]) {
            return contentRefs.current[index]?.scrollHeight;
        }
        return 0;
    };

    const toggleActive = (index: number) => {
        setActiveStates((prevStates) =>
            prevStates.map((state, i) => (i === index ? !state : state))
        );
    };

    return (
        <ul>
            {items.map((item, idx) => (
                <li key={idx} className="overflow-hidden">
                    <div className="grid grid-cols-[1fr_50px] gap-1 lg:text-[calc(100vw/60)] text-sm font-semibold text-typo-primary lg:py-6 py-4" onClick={() => toggleActive(idx)}>
                        <h2 className={["leading-tight", titleClass].join(" ")}>{item.title}</h2>
                        <div
                            
                            className="cursor-pointer flex lg:justify-center justify-end items-center"
                        >
                            {activeStates[idx] ? <FiMinus className='lg:text-[24px] text-lg' /> : <FiPlus className='lg:text-[24px] text-lg' />}
                        </div>
                    </div>

                    <div
                        className={`border-b-[.5px] border-gray-800 transition-all duration-[${animationDuration}ms]`}
                        style={{
                            height: activeStates[idx] ? `${getContentHeight(idx)}px` : "0",
                            overflow: "hidden",
                            transition: `height ${animationDuration}ms ${easingCurve}`,
                        }}
                    >
                        <div
                             ref={(el: HTMLDivElement | null) => { contentRefs.current[idx] = el; }}
                            className={cn("lg:py-8 py-4",{
                                "border-y-[.5px] border-gray-800 leading-[23px]": activeStates[idx]
                            })}
                        >
                            {
                                item.description.map((el,idx)=>{
                                    if (el.title) {
                                        return <p className="font-normal mt-1 text-responsive-para md:text-responsive-para  " key={idx}>{el.title}</p>
                                    }
                                    if (el.text) {
                                        return <p className="font-normal text-responsive-para md:text-responsive-para" key={idx}>
                                        {el.text}
                                    </p>
                                    }
                                    if (el.list) {
                                        return <ul className="mt-4 text-responsive-para md:text-responsive-para" key={idx}>
                                            {
                                                el.list.map((listEl,listIdx)=><li className="flex " key={listIdx}><span>{listEl.icon}</span> {listEl.text} </li>)
                                            }
                                        </ul>
                                    }
                                })
                            }

                        </div>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default Accordion;
