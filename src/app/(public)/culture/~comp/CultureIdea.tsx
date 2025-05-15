import AccordianSection from '@/components/cards/AccordianSection';
import React from 'react';

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

const CultureIdea = () => {
    return (
        <section className="layout_normal mt-28 md:mt-60">
            <AccordianSection
            description={faq_section.description}
            title="WHAT & WHY"
            accordionList={faq_section.accordionList}
            />
        </section>
    );
};

export default CultureIdea;