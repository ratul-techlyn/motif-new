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

const FashionBrands = () => {
    return (
        <>

            <section className="layout_normal grid grid-cols-1 gap-4 mt-40">
                <div>
                    <h2 className="text-sm md:text-base font-semibold font-clash text-typo-primary uppercase">Partnerships</h2>
                </div>
                <div className="mt-5">
                    <p className="para_md text-xl md:text-5xl font-medium"><span className="text-white">Brand success</span> isn&apos;t</p>
                    <p className="para_md text-xl md:text-5xl font-medium">easy so we partnered</p>
                    <p className="para_md text-xl md:text-5xl font-medium">up with best in classes.</p>
                </div>
            </section>
            <section>
                
            </section>

            <section className="layout_normal mt-40">
                <ul className="grid grid-cols-5 gap-x-4 gap-y-20">

                    {
                        partners.map((brand,idx) =><li key={idx}>
                            <Image className="object-contain" src={brand} alt="" width={180} height={80} />
                        </li>)
                    }
                </ul>
            </section>
        </>
    );
};

export default FashionBrands;