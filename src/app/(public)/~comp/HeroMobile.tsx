"use client";
import React from 'react';

// sample library: npm i react-text-transition
/*
const textImages = [
    {text:"Beauty", img:"/assets/home/hero/hero1.webp"},
    {text:"Lifestyle", img:"/assets/home/hero/hero2.webp"},
    {text:"luxury", img:"/assets/home/hero/hero3.webp"},
    {text:"fashion", img:"/assets/home/hero/hero4.webp"}
]
*/

const HeroMobile = () => {
    /*
    useEffect(() => {
        const textContainer = document.querySelector('.rolling-texts');
        const letters = textContainer.querySelectorAll('span');

        const updateOStretch = () => {
            const activeText = textContainer.querySelector('.active');
            const activeTextLength = activeText ? activeText.textContent.length : 0;
            const oElement = document.querySelector('.of-o');
            const stretchFactor = activeTextLength * 0.1;
            oElement.style.transform = `scaleX(${1 + stretchFactor})`;
        };

        setInterval(updateOStretch, 500);

        return () => clearInterval(updateOStretch);
    }, []);
    */

    return (
        <div>
            <p className='font-clash text-[clamp(1.6rem,3vw+2rem,2.3rem)] font-semibold uppercase leading-[1.2] text-typo-primary'>Accelerating</p>
            <p className='font-clash text-[clamp(1.6rem,3vw+2rem,2.3rem)] font-semibold uppercase leading-[1.2] text-typo-primary flex items-center'>
                Growth
                <span
                className="inline-block relative visible rounded-full w-[28vw] h-[10vw] bg-cover bg-center bg-no-repeat hero_ani_text"
                style={{
                //   backgroundImage: `url(${textImages[0].img})`,
                  aspectRatio: "1 / 1",
                  backgroundSize: "28vw",
                  margin: '0 0 1% 3%',
                }}
              >
              </span>

            </p>

                {/* only fix this keyword rolling animation and stretch of "O" */}

                <p className='font-clash text-[clamp(1.6rem,3vw+2rem,2.3rem)] font-semibold uppercase leading-[1.2] text-typo-primary'>
                <span className="rolling-text-container">
                    <span className="inner-circle-container">
                        <span className="inner-circle of-o">O</span>
                        <span className="circle" ></span>
                    </span>
                    <span className='roll_fixed_word'>F</span>
                    <span className="rolling-text-inner-container  h-[10vw]">
                        <span className="rolling-texts">
                            <span>FASHION</span>
                            <span>BEAUTY</span>
                            <span>LUXURY</span>
                            <span>LIFESTYLE</span>
                        </span>
                    </span>
                </span>
            </p>




            {/* <p className='font-clash text-[clamp(1.6rem,3vw+2rem,2.3rem)] font-semibold uppercase leading-[1.2] text-typo-primary'>
                <span className="rolling-text-container">
                    <span className="inner-circle-container">
                        <span className="inner-circle of-o">O</span>
                        <span className="circle" style={{ width: '20.0054vw' }}></span>
                    </span>
                    <span className='roll_fixed_word'>F</span>
                    <span className="rolling-text-inner-container">
                        <span className="rolling-texts">
                            <span className="active">FASHION</span>
                            <span>BEAUTY</span>
                            <span>LUXURY</span>
                            <span>LIFESTYLE</span>
                        </span>
                    </span>
                </span>
            </p> */}


            <p className='font-clash text-[clamp(1.6rem,3vw+2rem,2.3rem)] font-semibold uppercase leading-[1.2] text-typo-primary'>brands</p>
      </div>
    );
};

export default HeroMobile;