import Image from "next/image";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const partners = [
  "/assets/what_we_do/partner/partner1.webp",
  "/assets/what_we_do/partner/partner2.webp",
  "/assets/what_we_do/partner/partner3.webp",
  "/assets/what_we_do/partner/partner4.webp",
  "/assets/what_we_do/partner/partner5.webp",
  "/assets/what_we_do/partner/partner6.webp",
  "/assets/what_we_do/partner/partner7.webp",
  "/assets/what_we_do/partner/partner8.webp",
  "/assets/what_we_do/partner/partner9.webp",
  "/assets/what_we_do/partner/partner10.webp",
  "/assets/what_we_do/partner/partner11.png",
  "/assets/what_we_do/partner/partner12.png",
  "/assets/what_we_do/partner/partner13.png",
  "/assets/what_we_do/partner/partner14.webp",
  "/assets/what_we_do/partner/partner15.webp",
];

const Brands = () => {
  const refBox = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    if (!refBox.current) return;

    const brands = refBox.current.querySelectorAll(".brand_box");

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: refBox.current,
        start: "top bottom",
        end: "bottom center",
        scrub: true,
        toggleActions: "restart none none reset",
      },
    });

    timeline.fromTo(
      brands,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <>
      <div className="layout_normal w-[90%] md:w-[90%] lg:w-[70%]">
        <section className="my-24 md:my-48">
          <ul ref={refBox} className="grid grid-cols-2 lg:grid-cols-[repeat(5,minmax(150px,1fr))]  gap-x-4 gap-y-8 md:gap-y-32">
            {partners.map((brand, idx) => (
              <li key={idx}>
                <div className="w-[65%] brand_box opacity-0">
                  <Image
                    className="object-contain "
                    src={brand}
                    alt=""
                    width={400}
                    height={250}
                  />
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
};

export default Brands;
