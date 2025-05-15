import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "./BrandLogo";
import ContactSeal from "./ContactSeal";

const footers = [
  {
    name: "EXPLORE",
    className: "order-2 md:order-none",
    list: [
      {
        title: "WHAT WE DO",
        url: "/what-we-do",
      },
      {
        title: "HOW WE DO",
        url: "/the-motif-process",
      },
      {
        title: "WHY US",
        url: "/why-motif",
      },
      {
        title: "ABOUT",
        url: "/about",
      },
      {
        title: "PULSEB2B",
        url: "/pulse-b2b-commerce-agency",
      },
      {
        title: "CONTACT",
        url: "/contact",
      },
    ],
  },
  {
    name: "SPECIALIZED",
    className:"order-1 md:order-none",
    list: [
      {
        title: "LUXURY",
        url: "/luxury-lifestyle-advertising-branding-agency-nyc-la-sf",
      },
      {
        title: "FASHION",
        url: "/fashion-agency",
      },
      {
        title: "BEAUTY",
        url: "/beauty-brand-marketing-advertising-agency",
      },
      {
        title: "DTC",
        url: "/dtc-agency-motif-the-agency",
      },
      {
        title: "SHOPIFY PLUS",
        url: "/shopify-plus-partner-agency",
      },
      {
        title: "BIGCOMMERCE",
        url: "/elite-bigcommerce-partner-agency",
      },
    ],
  },
  {
    name: "REGIONS",
    className: "order-3 md:order-none",
    list: [
      {
        title: "LOS ANGELES — LA",
        url: "#", // URL not specified in the provided data
      },
      {
        title: "NEW YORK — NY",
        url: "#", // URL not specified in the provided data
      },
      {
        title: "SAN FRANCISCO — SF",
        url: "#", // URL not specified in the provided data
      },
      {
        title: "DUBAI — UAE",
        url: "#", // URL not specified in the provided data
      },
      {
        title: "DELHI — INDIA",
        url: "#", // URL not specified in the provided data
      },
    ],
  },
];

const motto = [
  "Connecting",
  "Brands with",
  "People and",
  "culture.",
]

const Footer = () => {
  return (
    <footer className="layout_normal pt-[8%] w-[90%] md:w-[90%] lg:w-[70%]">
      <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] ">

        <div className="order-1 lg:order-none flex flex-col justify-between w-fit">
          <div>
            {
              motto.map(el=><h2 className="capitalize font-semibold  font-clash text-[1.5em] md:text-[26px] leading-[1.1] text-typo-mute_deep" key={el}>
              {el}
            </h2>)
            }
          </div>
          <div>
            <Image
              className="lg:my-0 my-10 block mx-auto"
              src={"/assets/logo/MOTIF-Icon.webp"}
              alt=""
              width={60}
              height={80}
            />
          </div>
        </div>

        <div className="pb-[8%]">
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {footers.map((item) => (
              <li className={item.className} key={item.name}>
                <h4 className="text-[1rem] leading-[1]  font-clash font-[600] text-typo-primary">{item.name}</h4>
                <ul className="mt-4">
                  {item.list.map((navEl) => (
                    <li className="pt-[10px] text-[14px] leading-[1rem] font-helvetica font-normal" key={navEl.title}>
                      <Link className="text-[14px] leading-[1rem] font-helvetica font-normal" href={navEl.url}>{navEl.title}</Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>

      </div>
      <div >
        <div className="relative w-[152px] ml-auto">
          <div className="absolute top-0 left-0 w-full h-full">
            <Logo  />
          </div>
          <div className="animate-spin_slow">
            <ContactSeal  />
          </div>
        </div>
      </div>
      <div className="mt-[2%] pb-4 sm:flex justify-between">
        <div className="text-[11px] font-helvetica font-semibold text-[#4F4F4F]">MOTIF® Digital, INC 2015 - 2024 ©</div>
        <div className="text-[11px] font-helvetica font-semibold text-[#4F4F4F]">STRATEGY, COMMERCE, EXPERT™</div>
        <div className="text-[11px] font-helvetica font-semibold text-[#4F4F4F]">TERMS PRIVACY POLICY</div>
      </div>
    </footer>
  );
};

export default Footer;
