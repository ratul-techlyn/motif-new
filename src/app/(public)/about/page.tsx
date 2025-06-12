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
            title: "Culture in Motion",
            description: [
                {
                    text: "At the core of every powerful brand is a deep understanding of culture. Brands that don’t just observe culture, they shape it. Culture isn’t just what people follow, it's what they live. Motif uncovers the hidden patterns, values, and aspirations that influence consumer behavior, allowing us to connect brands with people on a deeper level. This isn’t about trend-chasing it’s about shaping authentic stories that resonate far beyond the moment.",
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
            title: "Growth Beyond Boundaries",
            description: [
                {
                    text: "Growth is more than numbers. It’s finding new paths, redefining success, and taking risks that pay off. Motif’s approach weaves together data, creativity, and market understanding to drive impactful results. From brand positioning to full-scale market strategies, we ensure every move is purpose-driven, aligned with your vision, and designed for long-term success.",
                },
            ],
        },
        {
            title: "Arts X Data in Harmony ",
            description: [
                {
                    text: "At MOTIF®, the fusion of art and data drives brand growth. By blending strategic insights with creative expression, MOTIF® develops tailored Ad-Tech solutions that ensure each campaign resonates deeply. Data informs, but creativity connects—this approach builds lasting emotional connections while fueling brand performance. As Ogilvy puts it, data should never overshadow creativity. Instead, it should empower it. MOTIF® applies this philosophy by leveraging technology to enhance storytelling, creating experiences that are both meaningful and measurable.",
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
        
    ],
};

const cards = [
    {
      title:"Long Term Growth",
      description:"MOTIF® forms lasting partnerships, not transactional relationships. Focus is on building long-term brand value that continues to grow year after year.",
    },
    {
      title:"Human First Approach",
      description:"MOTIF® focuses on the emotional connection brands make with their audience, not just the numbers. Every decision is rooted in understanding human behavior.",
    },
    {
      title:"Creatives Drive Impacts",
      description:"Creativity drives everything. Data supports it. MOTIF® uses art and design to captivate audiences, elevating creativity with technology.",
    },
    {
      title:"Data Third Brand Lead",
      description:"Data serves as a support tool, not the driving force. MOTIF® focuses on building emotional connections first, using data to fine-tune strategies.",
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

                        <p className="text-base leading-[1.5] lg:leading-[1.5] mt-4">
                            Motif® is more than a name; it represents our belief that every
                            brand should have a unique motif. Motif® crafts bold, distinctive identities 
                            that connect brands with people and culture. 
                        </p>
                        <p className="text-base leading-[1.5] lg:leading-[1.5] mt-4">  
                            Partners aren’t seen as clients they’re treated as true partners. 
                            Behind the scenes is a team of artists, eCommerce strategists, branding experts, storytellers, designers, and marketers all focused on helping brands grow with purpose and clarity.
                        </p>
                         <p className="text-base leading-[1.5] lg:leading-[1.5] mt-4"> 
                            Motif® was never meant to be an agency. 
                            It started as one in 2015, but quickly realized that 
                            traditional agencies chase short-term wins and surface-level fixes.
                        </p>
                        <p className="text-base leading-[1.5] lg:leading-[1.5] mt-4">
                            So the model was scrapped, and an incubator was built instead one that grows brands through art, 
                            human behavior, and cultural connection, not through endless decks and empty metrics.
                        
                        </p>
                        

                    </div>
                </div>
            </section>

            <section className="py-40">
                <ImageSlider sliderList={sliderList} />
            </section>

            <section className="layout_normal px-4 lg:px-0 py-40 w-[90%] md:w-[50%] lg:w-[50%]">
                <h3 className="text-left text-[2.4em] lg:text-[calc(100vw/20)] 3xl:text-[clamp(100px,5vw,105px)] leading-[1.2] font-normal text-white">
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


                        <p className="text-base leading-[1.5] lg:leading-[1.5] mt-4">
                            In 2015, Ash Ome, a fearless dream-chaser, founded MOTIF® with
                            boundless enthusiasm and unstoppable spirit. With little agency
                            know-how, he transformed a cramped, 4 X 6 garage-like nook into
                            his vibrant creative oasis. His aspiration? To curate over 30
                            remarkable brands, but he knew that meant collaborating with
                            visionary founders and sharing their entrepreneurial voyage.{" "}
                        </p>
                        <p className="text-base leading-[1.5] lg:leading-[1.5] mt-4">
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
