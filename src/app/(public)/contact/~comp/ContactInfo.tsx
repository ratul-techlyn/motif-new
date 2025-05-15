import React from 'react';
import ContactFrom from "@/app/(public)/contact/~comp/ContactFrom";
import SocialLinks from "@/components/shared/SocialLinks";

const ContactInfo = () => {
    return (
        <section className="layout_normal mt-10 md:mt-20 w-[90%] md:w-[90%] lg:w-[70%]">
        <div className="flex flex-col md:flex-row justify-between items-start mt-20 md:mt-20">
            <div className="w-full md:w-1/3 md:pr-4 mb-6 lg:mb-0  py-10 md:py-0">
                <p className="font-helvetica text-base md:text-lg">Business & Partnership</p>
                <p className="mb-6 fo font-helvetica  text-base md:text-lg font-normal text-white">business@wemotif.com</p>
                <p className="font-helvetica  text-base md:text-lg">Press inquiries</p>
                <p className="mb-6 font-helvetica text-base md:text-lg text-white">press@wemotif.com</p>
                <p className="font-helvetica  text-base md:text-lg">Everything else</p>
                <p className="mb-6 font-helvetica text-base md:text-lg text-white">hey@wemotif.com</p>
                <p className="font-helvetica text-base md:text-lg">+1 (415) 800 2326</p>
                <div className="mt-20">
                    <SocialLinks />
                </div>
            </div>

            <div className="w-full md:w-2/3 md:pl-4 hidden md:block">
                <ContactFrom />
            </div>
        </div>
    </section>
    );
};

export default ContactInfo;
