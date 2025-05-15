import Image from 'next/image';
import React from 'react';
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
  ]

const Brands = () => {
    return (
        <>
          <div className='layout_normal w-[90%] md:w-[90%] lg:w-[70%]'>
            <section className="my-24 md:my-48">
              <ul className="grid grid-cols-2 lg:grid-cols-[repeat(5,minmax(150px,1fr))]  gap-x-4 gap-y-8 md:gap-y-32">
                {
                  partners.map((brand,idx) =><li key={idx}>
                    <div className='w-[65%]'>
                      <Image className="object-contain "  src={brand} alt="" width={400} height={250} />
                    </div>
                  </li>)
                }
              </ul>
            </section>
          </div>
        </>
    );
};

export default Brands;