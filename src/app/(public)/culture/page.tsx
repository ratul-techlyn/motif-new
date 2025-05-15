import React from 'react';
import CultureTitle from "@/app/(public)/culture/~comp/CultureTitle";
import CultureBanner from "@/app/(public)/culture/~comp/CultureBanner";
import CultureOverview from "@/app/(public)/culture/~comp/CultureOverview";
import CultureIdea from "@/app/(public)/culture/~comp/CultureIdea";
import CultureExpectation from "@/app/(public)/culture/~comp/CultureExpectation";
import JoinOurTeam from "@/app/(public)/culture/~comp/JoinOurTeam";
import DraggableGallery from './~comp/DraggableImageGallery';

const Culture = () => {
    return (
        <div className="">
            <CultureTitle/>
            <DraggableGallery />
            <CultureBanner/>
            <CultureOverview/>
            <CultureIdea/>
            <CultureExpectation/>
            <JoinOurTeam/>
        </div>
    );
};

export default Culture;