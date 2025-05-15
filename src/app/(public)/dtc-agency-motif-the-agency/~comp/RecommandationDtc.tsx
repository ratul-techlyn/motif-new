import React from 'react';
import Slider from "@/components/shared/Slider";
import RecommandationCard from "@/components/shared/Recommandations/RecommandationCard";
const recommendations = [
    {
        quote: [
            "My experience with previous agencies was frustrating. It is often difficult to gauge how much they care about the ultimate success of the company.",
            "Many agencies will have a set ad spend per month rather than working with your budget. MOTIF cares about my success.",
            "You often just pay an agency that then does their work, so you don’t necessarily feel like they care. MOTIF wants to be a partner. We still work with them, which is a testament to how they work with us."
        ],
        name: "Jenny Wulace",
        position: "Founder",
        company: "LACE"
    },
    {
        quote: [
            "Working with this agency was a game-changer for our business. Their approach is refreshing and focused on our success.",
            "They truly go above and beyond to tailor solutions that fit our specific needs, and I felt like a priority every step of the way.",
            "I highly recommend them to anyone looking for an agency that genuinely cares about results and collaboration."
        ],
        name: "John Doe",
        position: "CEO",
        company: "Tech Innovations"
    },
    {
        quote: [
            "I was initially skeptical about working with agencies, but this one completely changed my perspective. They delivered results quickly.",
            "What I appreciated most was their transparency and willingness to work with us to get the best outcome.",
            "I look forward to continuing our partnership and seeing even more success in the future."
        ],
        name: "Alice Smith",
        position: "Marketing Director",
        company: "Creative Co."
    },
    {
        quote: [
            "The team at this agency has been instrumental in our growth. Their dedication to excellence is unmatched.",
            "They provided us with creative solutions that helped us reach our business goals faster than expected.",
            "I’m grateful for their efforts and would recommend them to anyone looking for high-quality, effective services."
        ],
        name: "Michael Brown",
        position: "Founder",
        company: "Success Agency"
    }
];

const RecommandationDtc = () => {
    return (
        <div className='my-20 w-full'>
            <Slider
                navigationCustom={true}
                autoplay={false}
                slides={recommendations.map((el, idx) => <RecommandationCard
                    recommendation={el}
                    key={idx}
                />)}
            />
        </div>
    );
};

export default RecommandationDtc;