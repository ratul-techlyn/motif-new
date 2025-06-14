'use client';

import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay, EffectFade } from 'swiper/modules';
import gsap from 'gsap';
import SplitText from 'gsap/SplitText';
import { usePathname } from 'next/navigation';

gsap.registerPlugin(SplitText);


interface SwiperComponentProps {
  slides: React.ReactNode[];
  autoplayDelay?: number;
  loop?: boolean;
  mousewheel?: boolean;
  keyboard?: boolean;
  navigation?: boolean;
  pagination?: boolean;
  navigationCustom?:boolean;
  autoplay?: boolean;
  fade?: boolean;
}

const Slider = ({
  slides,
  fade = false,
  autoplayDelay = 2500,
  loop = true,
  autoplay = true,
  mousewheel = true,
  keyboard = true,
  navigation = false,
  pagination = false,
  navigationCustom= false,
}: SwiperComponentProps) => {
  const swiperContainerRef = useRef<SwiperRef>(null);
  const path = usePathname();
  const [swiperInstance, setSwiperInstance] = React.useState<any>(null);

  const goToNext = () => {
    if (swiperContainerRef.current) {
      swiperContainerRef.current.swiper.slideNext();
    }
  };

  const goToPrev = () => {
    if (swiperContainerRef.current) {
      swiperContainerRef.current.swiper.slidePrev();
    }
  };

  useEffect(() => {
    if (!swiperInstance) return;
  
    const handleSlideChange = () => {
      const activeSlide = swiperInstance.slides[swiperInstance.activeIndex];
      const slideContent = activeSlide?.querySelector('.slide-content .quote-paragraph');
      const quoteAuthor = activeSlide?.querySelectorAll('.quote-author p');
  
      if (slideContent && quoteAuthor) {
        const splitContent = new SplitText(slideContent, { type: 'words, chars, lines', linesClass: 'overflow-hidden' });
        const splitAuthor = new SplitText(quoteAuthor, { type: 'lines' });

        gsap.from(splitContent.lines, {
          opacity: 0,
          x: 50,
          duration: 0.5,
          stagger: 0.1,
          ease: "power3.out"
        });
  
        gsap.from(splitAuthor.lines, {
          opacity: 0,
          x: 20,
          duration: 0.5,
          stagger: 0.1,
          ease: "power3.out"
        });
      }
    };
  
    swiperInstance.on('slideChangeTransitionStart', handleSlideChange);
  
    return () => {
      swiperInstance.off('slideChangeTransitionStart', handleSlideChange);
    };
  }, [swiperInstance, path]);

  return (
    <div className="relative layout_normal">
      <Swiper
        ref={swiperContainerRef}
        onSwiper={setSwiperInstance}
        key={path}
        cssMode={fade ? false : true}
        loop={loop}
        effect={fade ? 'fade' : "slide"}
        fadeEffect={{ crossFade: true }}
        autoplay={autoplay ? { delay: autoplayDelay, disableOnInteraction: false } : false}
        navigation={navigation}
        pagination={pagination}
        mousewheel={mousewheel}
        keyboard={keyboard}
        modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay, EffectFade]}
        className="mySwiper !py-8 w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="slide-content overflow-hidden">
              {slide}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

          {
            navigationCustom && <div className="absolute bottom-0 right-0 transform translate-y-1/2 z-10">
            <button
              className="lg:custom-prev-btn p-2 bg-black bg-opacity-50 text-white border-none cursor-pointer rounded-md hover:bg-opacity-80"
              onClick={goToPrev}
            >
              <span>
              <svg className='w-12 md:w-14 h-12 md:h-14' xmlns="http://www.w3.org/2000/svg"  viewBox="0 -960 960 960"  fill="#e8eaed"><path d="m266-466 234 234-20 20-268-268 268-268 20 20-234 234h482v28H266Z"/></svg>
                {/* {<HiArrowSmallLeft className='lg:text-[30px] text-lg text-gray-400' />} */}
              </span>
            </button>
            <button
              className="lg:custom-next-btn ml-1 md:ml-4 p-2 bg-black bg-opacity-50 text-white border-none cursor-pointer rounded-md hover:bg-opacity-80"
              onClick={goToNext}
            >
              <span>
              <svg className='w-12 md:w-14 h-12 md:h-14' xmlns="http://www.w3.org/2000/svg"  viewBox="0 -960 960 960"  fill="#e8eaed"><path d="M694-466H212v-28h482L460-728l20-20 268 268-268 268-20-20 234-234Z"/></svg>
                {/* <HiArrowSmallRight className='lg:text-[30px] text-lg text-gray-400' /> */}
              </span>
            </button>
          </div>
          }

    </div>
  );
};

export default Slider;
