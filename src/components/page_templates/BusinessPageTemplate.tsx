import AccordianSection from '@/components/cards/AccordianSection';
import Slide_Branding from '@/components/lib_comp/Slide_Branding';
import {TAccordionItem} from '@/components/shared/Accordion';
import RecommandationCard, {TRecommendation} from '@/components/shared/Recommandations/RecommandationCard';
import TitleImgBanner, {TitleImgProps} from '@/components/shared/TitleImgBanner';
import {Button} from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';
import {MdOutlineArrowOutward} from 'react-icons/md';
import Slider from "@/components/shared/Slider";
import Brands from "@/components/cards/Brands";
import TwoColCard from '../cards/TwoColCard';


const partnerData = {
    title:"Partnerships",
    description:"Brand success isn't easy so we partnered up with best in classes to change the brand experience, connecting with people and culture.",
  }


type TProps = {
    mainBanner: TitleImgProps
    bannerFullImg: string;
    slides: string[],
    faq_section: {
        description: string[],
        accordionList: TAccordionItem[]
    },
    recommandations: TRecommendation[]
}

const BusinessPageTemplate = ({mainBanner, bannerFullImg, slides, faq_section, recommandations}: TProps) => {
    return (
        <div>
            <section className="layout_normal my-32 w-[90%] md:w-[90%] lg:w-[70%]">
                <TitleImgBanner lines={mainBanner.lines} description={mainBanner.description}/>
            </section>
            <section className="w-full">
                <div>
                    <Image
                        className="w-full"
                        src={bannerFullImg}
                        alt=""
                        width={1000}
                        height={1000}
                    />
                </div>
            </section>
            <section className="py-[120px]">
                <Slide_Branding slides={slides}/>
            </section>
            <section className="w-full pt-[75px] pb-[55px]w-[90%] md:w-[90%] lg:w-[70%] mx-auto ">
                <div className="layout_normal">
                    <AccordianSection
                        description={faq_section.description}
                        title=""
                        accordionList={faq_section.accordionList}
                    />
                </div>

                <div className="layout_normal grid grid-cols-2 justify-items-end w-[90%] md:w-[90%] lg:w-[70%] mx-auto">
                    <div></div>
                    <div className="flex items-center">
                        <Button
                            className="w-auto mt-20 mx-auto px-10 py-3 h-10 [&_svg]:size-6 rounded-full" variant={"outline"}>

                            Why us?
                            <MdOutlineArrowOutward
                                className=" text-red-600 text-3xl"
                                size={30}
                            />
                        </Button>
                    </div>
                </div>
            </section>
            <section
                className="layout_normal mt-40  w-[90%] md:w-[90%] lg:w-[70%]">
                <div className="w-[90%] md:w-[90%] lg:w-[70%]">
                    <p className="capitalize text-[calc(100vw/17)] md:text-[clamp(1rem,calc(100vw/30),4rem)] font-[600] font-clash leading-[1.2em] [word-spacing:5px]">
                        A Dedicated B2B Agency who merges — Brand X Product, Strategy X
                        Design, Data X Technology to grow your DTC brand.
                    </p>
                </div>
                <div></div>
            </section>
            <section className="py-28 w-[90%] md:w-[90%] lg:w-[70%] mx-auto">

                <Slider
                    navigationCustom={true}
                    autoplay={false}
                    slides={recommandations.map((el, idx) => <RecommandationCard
                        recommendation={el}
                        key={idx}
                    />)}
                />

            </section>
            <section className='layout_normal my-20 lg:my-40 w-[90%] md:w-[90%] lg:w-[70%]'>
                <TwoColCard description={partnerData.description} title={partnerData.title} />
            </section>
            <section>
                <Brands/>
            </section>
        </div>
    );
};

export default BusinessPageTemplate;
