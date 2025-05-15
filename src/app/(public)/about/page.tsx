'use client';
import AccordianSection from "@/components/cards/AccordianSection";
import Slide_Branding from "@/components/lib_comp/Slide_Branding";
import TitleImgBanner from "@/components/shared/TitleImgBanner";
import VideoPlayer from "@/components/shared/VideoPlayer";
import React from "react";
import RecommandationsAbout from "./~com/RecommandationsAbout";
import ImageSlider from "@/app/(public)/about/~com/ImageSlider";
import Quote from "@/components/shared/Recommandations/Quote";
import MarqueeNavigation from "@/components/marquee-navigation";
import { useResponsiveSize } from "@/hooks/useResponsiveSize";
import SwiperMarquee from "@/components/cards/SwiperMarquee";

const mainBanner = {
    lines: [
        ["BUILDING", " & GROWING", " BRANDS", "WITH", " MOTIF®", "SINCE 2015",
            { imageSrc: "/assets/home/hero/hero3.webp", altText: "brand image" },
        ],
    ],
    description: [
        "Motif® is an incubator company which started as an agency growing Luxury Lifestyle, Fashion & Beauty brands across the world by connecting them with end users with better marketing, branding & exceptional customer experience.",
    ],
};
const sliderList = [
    {
        url: "/assets/about/slide/about_slide_1.jpg",
    },
    {
        url: "/assets/about/slide/about_slide_2.jpg",
    },
    {
        url: "/assets/about/slide/about_slide_3.jpg",
    },
    {
        url: "/assets/about/slide/about_slide_4.jpg",
    },
    {
        url: "/assets/about/slide/about_slide_5.webp",
    },
];
const adSlider = [
    "CONNECTING", "BRAND",
    "WITH",
    "PEOPLE",
    "WITH",
    "STRATEGY",
    "EXPERIENCE",
    "VALUE",
    "WITH",
    "STRATEGY",
    "EXPERIENCE",
    "VALUE",
];
const faq_section = {
    description: ["The only team of", "experts you need on", "your side."],
    accordionList: [
        {
            title: "Drive Hyper Growth",
            description: [
                {
                    text: "We’re here to bust myths about eCommerce growth, break all norms and notions about the luxury, lifestyle and fashion industry with a data-backed, research-driven approach and push-back approach that is different from what you see in other agencies. Our focus is to not just help you set up a store online. We want your brand to make an impactful impression on its audience and we go all out for you!",
                },
            ],
        },
        {
            title: "Human First Approach",
            description: [
                {
                    text: "To boost conversions, we approach strategy & implementation in a human first, user-centric manner – your customers deserve to be spoiled with mesmerizing experiences and highly-functional, yet flawlessly simple solutions. As a growth-driven team we strategize, create, innovate and market your business solely based on concrete data. Cause we hate assumptions. And we make you skip the guesswork too!",
                },
            ],
        },
        {
            title: "Branding X Marketing",
            description: [
                {
                    text: "We know how frustrating it is when your branding and marketing strategy are not synced. It’s even worse when your website doesn’t reflect what you stand for! Luckily, we have spent over a decade developing a methodology to scale online businesses the right way, prioritizing both at the same time.",
                },
            ],
        },
        {
            title: "Passion Driven",
            description: [
                {
                    text: "We’re not here to tell you we’re the best. What we are, is PASSIONATE. The Motif team is a bunch of passionate folks who want to make an impact in the eCommerce industry by working with your brand. Our passion-driven approach to eCommerce is what sets us apart. We go all the way to ensure your brand stands out and becomes the next benchmark for others to follow!",
                },
                {
                    text: "We don’t do cliches and we don’t let you become one.",
                },
            ],
        },
        {
            title: "Good Isn't Enough",
            description: [
                {
                    text: "The Motif team exudes confidence in their pursuit of greatness. With unwavering dedication to excellence, mediocrity and good enough simply does not make the cut. The team is determined to push boundaries and achieve remarkable outcomes. The Motif team understands that nothing short of excellence will suffice, and nothing can stop them from achieving extraordinary success.",
                },
            ],
        },
        {
            title: "Believe In Long Term",
            description: [
                {
                    text: "DTC, Brands & eCommerce are constantly evolving, but we embrace and rise to the challenge of adapting to new trends and technology. Our team passionately learns and innovates to optimize, build and execute new things for the end users so that our partner brands can grow constantly. Our deep understanding of the industry luxury lifestyle, fashion and beauty industries guarantees that your brand will be at the forefront, receiving unrivaled levels of service continuously refined to meet and exceed current trends. We are excited to show you how partnering with Motif could crucially impacts the success of your business. Here we are looking for long term partnership cause we can understand the importance and value of real partnerships.",
                },
            ],
        },
    ],
};

const cards = [
    {
      title:"Beginners friendly",
      description:"Jump right in! Our resources cater to all skill levels, ensuring a smooth learning curve for newcomers.",
    },
    {
      title:"Beginners friendly",
      description:"Jump right in! Our resources cater to all skill levels, ensuring a smooth learning curve for newcomers.",
    },
    {
      title:"Beginners friendly",
      description:"Jump right in! Our resources cater to all skill levels, ensuring a smooth learning curve for newcomers.",
    },
    {
      title:"Beginners friendly",
      description:"Jump right in! Our resources cater to all skill levels, ensuring a smooth learning curve for newcomers.",
    },
  ]



const AboutPage = () => {
    const iconSize = useResponsiveSize();
    return (
        <div >
            <section className="layout_normal py-28 lg:py-40 px-4 lg:px-0 w-[90%] md:w-[90%] lg:w-[70%]">
                <TitleImgBanner
                    lines={mainBanner.lines}
                    description={mainBanner.description}
                />
            </section>

            <section className=" w-full lg:max-w-[70%] mx-auto px-4 lg:px-0 ">
                <VideoPlayer
                    className=""
                    url="https://player.vimeo.com/video/1005542873"
                    muted={true}
                    autoplay={true}
                    loop={true}
                />
            </section>


            <section className="layout_normal px-4 lg:px-0 py-10 md:py-16 lg:py-28 w-[90%] md:w-[90%] lg:w-[70%]">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-4 gap-y-8">
                    <div>
                        <h3 className="font-helvetica font-semibold text-section_subtitle_sm md:text-section_subtitle_md lg:text-section_subtitle_lg 2xl:text-section_subtitle_2xl leading-[1.2] text-typo-primary">
                            ABOUT MOTIF®
                        </h3>
                    </div>
                    <div>
                        <h3 className="text-section_heading_sm md:text-section_heading_md lg:text-section_heading_lg 2xl:text-section_heading_2xl 3xl:text-[clamp(50px,2.5vw,60px)] leading-[1.1] font-semibold font-clash text-white">
                            Making the Motif® waves of excellence since 2015
                        </h3>

                        <p className="text-base md:text-lg leading-[1.5] lg:leading-[1.5] font-medium mt-4">
                            Motif® is more than a name; it represents our belief that every
                            brand should have a unique motif. We craft bold motifs that connect
                            our partners with people and culture. We don’t just see our partners
                            as clients; we see them as true partners. Our team includes
                            eCommerce strategists, branding experts, storytellers, designers,
                            and brand marketers. Our focus is on helping brands grow
                            purposefully with a motif behind it.
                        </p>

                    </div>
                </div>
            </section>

            <section className="py-40">
                <ImageSlider sliderList={sliderList} />
            </section>

            <section className="layout_normal px-4 lg:px-0 py-40 w-[90%] md:w-[90%] lg:w-[70%]">
                <h3 className="text-left text-[2.4em] lg:text-[calc(100vw/20)] 3xl:text-[clamp(100px,5vw,105px)] leading-[1.2] font-semibold text-white">
                    THE FOUNDING STORY OF MOTIF®

                </h3>

            </section>
            <section className="layout_normal px-4 lg:px-0 py-10 md:py-16 lg:py-28 w-[90%] md:w-[90%] lg:w-[70%]">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 lg:mt-40">
                    <div>
                        <h3 className="font-helvetica font-semibold text-section_subtitle_sm md:text-section_subtitle_md lg:text-section_subtitle_lg 2xl:text-section_subtitle_2xl leading-[1.2] text-typo-primary">
                            FUELING THE FLAME
                        </h3>
                    </div>
                    <div>
                        <h3 className="text-section_heading_sm md:text-section_heading_md lg:text-section_heading_lg 2xl:text-section_heading_2xl 3xl:text-[clamp(45px,2.5vw,53px)] leading-[1.1] font-semibold font-clash text-white">
                            A gusty story of $100 bill and a daring vision.
                        </h3>


                        <p className="text-base md:text-lg leading-[1.5] lg:leading-[1.5] font-medium mt-4">
                            In 2015, Ash Ome, a fearless dream-chaser, founded MOTIF® with
                            boundless enthusiasm and unstoppable spirit. With little agency
                            know-how, he transformed a cramped, 4 X 6 garage-like nook into
                            his vibrant creative oasis. His aspiration? To curate over 30
                            remarkable brands, but he knew that meant collaborating with
                            visionary founders and sharing their entrepreneurial voyage.{" "}
                        </p>
                        <p className="text-base md:text-lg leading-[1.5] lg:leading-[1.5] font-medium mt-4">
                            People called him too bold, too young, and unapologetically
                            ambitious, Ash clung to his dreams. Cause Ash had little something
                            we call Vision. Now, after eight adventurous years, the
                            entrepreneurial fire still blazes brightly at MOTIF®, illuminating
                            paths for others to chase their passions and rewrite their
                            destinies with it&#39;s incubator program.
                        </p>

                    </div>
                </div>
            </section>

            <section className="py-32 lg:py-40 ">
                <VideoPlayer
                    className=""
                    url="https://player.vimeo.com/video/900891985"
                    muted={true}
                    autoplay={true}
                    loop={true}
                />
            </section>
            <section className="layout_normal ">
                <div className="w-full md:max-w-[70%] mx-auto p-[5%] tracking-[1px]">
                    <Quote />
                </div>
            </section>
            <section className="py-10">
                <Slide_Branding slides={adSlider} />
            </section>

            <section className="layout_normal py-32 lg:py-40 w-[90%] md:w-[90%] lg:w-[70%]">
                <AccordianSection
                    description={faq_section.description}
                    title="WHAT & WHY"
                    accordionList={faq_section.accordionList}
                />
            </section>

            <SwiperMarquee cards={cards} />


            <section className="layout_normal py-32 lg:py-40 w-[90%] md:w-[90%] lg:w-[70%]">
                <RecommandationsAbout />
            </section>
            <MarqueeNavigation
                text="WHAT WE DO"
                href="/what-we-do"
                position="top"
                speed={5}
                iconClass="text-[#ED5F09]"
                iconSize={iconSize}
            />
        </div>
    );
};

export default AboutPage;
