
import React from 'react';
import QuoteSvg from '../icons/QuoteSvg';

const QuoteData = {
    author:"A$H OME",
    description:"I believe that every brand should have a motif behind it that fuels them to grow and scale with purpose. Based on this belief, I started MOTIF® and till now, I am fueled by the same thing. A brand without a motif or purpose is just another business out there."
}

const Quote = () => {
    return (
        <div>
            <div>
                <QuoteSvg fill='#FF6F18' />
            </div>
            <blockquote>
                <p className='font-clash text-large_para_sm md:text-large_para_md lg:text-large_para_lg 2xl:text-large_para_2xl font-semibold leading-[1.2] text-typo-primary'>{QuoteData.description}</p>
                <p>{QuoteData.author}</p>
            </blockquote>
        </div>
    );
};

export default Quote;