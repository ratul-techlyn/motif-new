"use client"
import React from "react";
import BusinessPageTemplate from "@/components/page_templates/BusinessPageTemplate";

const pageData = {
  heading: [
    [ "Cultivating hyper growth","for", "beauty", "brands",
      { imageSrc: "/assets/beauty/beautyTitleImage.jpg", altText: "Beauty image" },
    ],
  ],
  heading_description: [
    "Motif® is a global incubation company and a former branding agency helping beauty & cosmetics brands grow exponentially by connecting them with end users with better marketing, branding & exceptional customer experience.",
  ],
  ads: ["Advertising", "Strategy", "BRANDING", "MARKETING", "DESIGN", "CXO"],
  faq_description: [
    "A performance driven beauty",
    "marketing & branding agency,",
    "we're here to make sure you",
    "succeed on all fronts as a",
    "beauty brand.",
  ],
  faqs: [
    {
      title: "Commerce strategy for beauty brand",
      description: [
        {
          text: "An airtight Branding, Design & Advertising agency we know strategy is crucial to set your brand up for success. Our eCommerce experts work with you to understand your niche industry— from your target market and competitors, to your cosmetic and beauty brand's mission and objectives.",
        },
        {
          text: "We conduct a comprehensive brand audit to identify loopholes and opportunities to establish your branding, proposition and positioning. This research helps us understand your requirements, learn about consumer trends within the cosmetics and beauty industry, get insights on what works, and plan your next steps better.",
        },
      ],
    },
    {
      title: "Success focused branding",
      description: [
        {
          text: "Your positioning is a crucial part of what makes you stand out as a beauty or skin care or a cosmetic brand. The right branding can help you deliver a unique experience that customers can recognize instantly. We work with you to figure out who you are as a brand and how you need to present yourself to create a lasting impact.",
        },
        {
          text: "Our proven method has helped cosmetics brands like yours build a narrative around their brand, increasing their visibility and recall.",
        },
      ],
    },
    {
      title: "Beauty website CX, UX & Design",
      description: [
        {
          text: "As soon as your branding is in place, your store design becomes our first priority since this is the first touchpoint for any new store visitor. We ensure that your brand’s design and development is unique and responsive, helping you deliver a memorable shopping experience.",
        },
        {
          text: "We work with you to conceptualize your design, build wireframes, and collaborate on finalizing a winning cosmetic eCommerce website. Once approved, we then develop this store design, ensuring that it is mobile responsive and easy for shoppers to navigate through.",
        },
        {
          text:
            "– Brand-enhancing design exploration\n" +
            "\n" +
            "– Branded eCommerce\n" +
            "\n" +
            "– Creative direction\n" +
            "\n" +
            "– Customer Experience Strategy\n" +
            "\n" +
            "– Customer Experience Journey Mapping\n" +
            "\n" +
            "– Mobile-first responsive design\n" +
            "\n" +
            "– Concept and wireframes\n" +
            "\n" +
            "– Omnichannel style guides\n" +
            "\n" +
            "– Leading UX design\n",
        },
      ],
    },
    {
      title: "Brand marketing for beauty brands",
      description: [
        {
          text: "Once your storefront is set up, it’s time to ensure you start capturing sales. We work with you closely to set up a successful luxury brand marketing strategy, based on your brand’s target audience and using tried and tested marketing channels.",
        },
        {
          text: "Besides strategizing and implementing our thorough marketing plan, we also help you predict the revenue you could generate from different marketing channels. As full-stack marketing experts, we manage all your different channels— from social media to email marketing to paid efforts. ",
        },
        {
          text:
            "– Marketing Strategy & Implementation\n" +
            "\n" +
            "– Revenue forecasting by channel\n" +
            "\n" +
            "– Email Marketing & Flows\n" +
            "\n" +
            "– Social media Ad Management\n" +
            "\n" +
            "– Paid Search Management\n" +
            "\n" +
            "– Growth Marketing",
        },
      ],
    },
    {
      title: "Easy & flexible platform migration",
      description: [
        {
          text: "As a beauty marketing, design and branding agency, we are updated and experienced handling different platforms available for your luxury cosmetics and beauty brand. If you outgrow your current eCommerce platform, we're here to help you choose a better alternative and do your site migration for you. During migration, we ensure that all your data is in one place and ensure that you have all the resources you need to get started on the new platform.",
        },
        {
          text:
            "– Effortless data migration\n" +
            "\n" +
            "– Customized feature selection\n" +
            "\n" +
            "– Best practice SEO migration\n" +
            "\n" +
            "– Warehouse and ERP integration\n" +
            "\n" +
            "– Failsafe launch procedure",
        },
      ],
    },
    {
      title: "Customer experience optimization",
      description: [
        {
          text: "For almost every eCommerce brand, increasing their conversion rate is a high priority. We help you understand your revenue opportunities, new channels you can tap into, and ones that are performing poorly. Our data-driven approach helps us understand how you can maximize your conversions while keeping a lean spend.",
        },
        {
          text: "We help you tap into your analytics to understand how shoppers interact with your luxury fashion brand, audit your conversion funnel, personalize experiences on your eCommerce store, and even A/B test different strategies to ensure higher performance.",
        },
        {
          text:
            "– Customer Experience Strategy\n" +
            "\n" +
            "– Customer journey defination\n" +
            "\n" +
            "– Conversion Strategy\n" +
            "\n" +
            "– Defining Roadmap\n" +
            "\n" +
            "– Site Roadmap Management\n" +
            "\n" +
            "– Conversion Funnel Audit\n" +
            "\n" +
            "– User & Heatmap Testing\n" +
            "\n" +
            "– A/B Testing & Personalization\n" +
            "\n" +
            "– Ongoing Design & Development",
        },
      ],
    },
    {
      title: "On going analysis & optimization",
      description: [
        {
          text: "We don’t just set up our strategy and walk away. We are invested in the results you receive and how we can improve the existing strategy. We stay in touch with you and keep an eye on changing consumer trends within the cosmetics and beauty industry to optimize the work we've done.",
        },
        {
          text: "With our continuous hands-on analysis of every little market change, we work towards maximizing your ROI, helping you reach more audiences and converting them better.",
        },
      ],
    },
  ],
  recommendations: [
    {
      quote: [
        "My experience with previous agencies was frustrating. It is often difficult to gauge how much they care about the ultimate success of the company.Many agencies will have a set ad spend per month rather than working with your budget. MOTIF cares about my success.You often just pay an agency that then does their work, so you don’t necessarily feel like they care. MOTIF wants to be a partner. We still work with them, which is a testament to how they work with us.",
      ],
      name: "Jenny Wulace",
      position: "Founder",
      company: "LACE",
    },
    {
      quote: [
        "Working with this agency was a game-changer for our business. Their approach is refreshing and focused on our success.They truly go above and beyond to tailor solutions that fit our specific needs, and I felt like a priority every step of the way.I highly recommend them to anyone looking for an agency that genuinely cares about results and collaboration.",
      ],
      name: "John Doe",
      position: "CEO",
      company: "Tech Innovations",
    },
    {
      quote: [
        "I was initially skeptical about working with agencies, but this one completely changed my perspective. They delivered results quickly.What I appreciated most was their transparency and willingness to work with us to get the best outcome.I look forward to continuing our partnership and seeing even more success in the future.",
      ],
      name: "Alice Smith",
      position: "Marketing Director",
      company: "Creative Co.",
    },
    {
      quote: [
        "The team at this agency has been instrumental in our growth. Their dedication to excellence is unmatched.They provided us with creative solutions that helped us reach our business goals faster than expected.I&#39;m grateful for their efforts and would recommend them to anyone looking for high-quality, effective services.",
      ],
      name: "Michael Brown",
      position: "Founder",
      company: "Success Agency",
    },
  ]
};

const Beauty = () => {
  return (
    <BusinessPageTemplate
      mainBanner={{
        lines: pageData.heading,
        description: pageData.heading_description,
      }}
      faq_section={{
        description: pageData.faq_description,
        accordionList: pageData.faqs,
      }}
      slides={pageData.ads}
      bannerFullImg="/assets/pulseB2B/b2b-ecommerce-agency-motif.webp"
      recommandations={pageData.recommendations}
    />
  );
};

export default Beauty;
