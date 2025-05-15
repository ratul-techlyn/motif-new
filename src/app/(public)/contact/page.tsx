import React from 'react';
import StrategyVideo from "@/app/(public)/contact/~comp/StrategyVideo";
import ContactInfo from "@/app/(public)/contact/~comp/ContactInfo";
import TextMarquee from "@/app/(public)/contact/~comp/TextMarquee";
import Location from "@/app/(public)/contact/~comp/Location";
import WeAreMotif from "@/app/(public)/contact/~comp/WeAreMotif";
import RecommandationContact from './~comp/RecommandationContact';







const Contact = () => {
    return (
        <>
        <StrategyVideo/>
        <ContactInfo/>
        <WeAreMotif/>
        <Location/>
        <RecommandationContact/>
        <TextMarquee/>
        </>
    );
};

export default Contact;