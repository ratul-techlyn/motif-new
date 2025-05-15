"use client"
import gsap from 'gsap';
import React, { useEffect } from 'react';

const list = [
    {
        title:"Yogamy",
        img:"/assets/about/slide/about_slide_1.jpg",
        new_customer:"From $0 to $1000000 in sales",
        ctr:"85% Increase in CTR",
        cpa:"36% Reduction in CPR",
    },
    {
        title:"Nostalgie",
        img:"/assets/about/slide/about_slide_2.jpg",
        new_customer:"From $0 to $1000000 in sales",
        ctr:"85% Increase in CTR",
        cpa:"36% Reduction in CPR",
    },
    {
        title:"Classic",
        img:"/assets/about/slide/about_slide_3.jpg",
        new_customer:"From $0 to $1000000 in sales",
        ctr:"85% Increase in CTR",
        cpa:"36% Reduction in CPR",
    },
    {
        title:"Card title",
        img:"/assets/about/slide/about_slide_4.jpg",
        new_customer:"From $0 to $1000000 in sales",
        ctr:"85% Increase in CTR",
        cpa:"36% Reduction in CPR",
    },
]

const Products = () => {
    useEffect(() => {
        // GSAP animation setup for each image container
        gsap.fromTo(
            '.image-container',
            {
                opacity: 0,
                scale: 1.2,
            },
            {
                opacity: 1,
                scale: 1,
                duration: 1,
                stagger: 0.2,
                ease: 'power3.out',
            }
        );
    }, []);

    return (
        <section>
            <div className="relative flex gap-8 w-fit mx-auto">
                <div className="absolute inset-0 bg-gradient-to-l from-[#000_0%] to-[transparent_30%] z-10"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-[#000_0%] to-[transparent_30%] z-10"></div>
                {list.map((item) => (
                    <article key={item.title}>
                        <div
                            className="flex items-end justify-center image-container w-96 h-96 rounded-lg bg-cover bg-center relative overflow-hidden"
                            style={{
                                backgroundImage: `url(${item.img})`,
                                backgroundPosition: 'center',
                            }}
                        >
                            <div className="relative z-20 p-4 flex items-center justify-center">
                                <div className=''>
                                    <h3 className="text-white text-xl font-semibold text-center">{item.title}</h3>
                                    <p className='text-center my-2.5 font-helvetica text-typo-primary font-semibold'>{item.new_customer}</p>
                                    <div className='flex justify-between gap-8'>
                                        <p className='font-helvetica text-typo-primary font-semibold'>{item.ctr}</p>
                                        <p className='font-helvetica text-typo-primary font-semibold'>{item.cpa}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default Products;