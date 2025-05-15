import React from 'react';
import WhyChooseCart from "@/app/(public)/why-motif/~comp/WhyChooseCart";
import TwoColCard from '@/components/cards/TwoColCard';

const whyChooseData = {
    title:"Why Choose Us?",
    description:"Scaling your brand to success — here’s what we give, have, help with, and use to build, scale & grow a memorable brand"
}

const WhyChoose = () => {
    return (
        <div className="pi-20 md:pt-40 ">
            <div className='layout_normal w-[90%] md:w-[90%] lg:w-[70%]'>
                <TwoColCard title={whyChooseData.title} description={whyChooseData.description}/>

            </div>
            <div className="py-20">
                <WhyChooseCart/>
            </div>
        </div>
    );
};

export default WhyChoose;