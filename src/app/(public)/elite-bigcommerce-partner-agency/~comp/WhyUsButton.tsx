import React from 'react';
import {Button} from "@/components/ui/button";
import {MdOutlineArrowOutward} from "react-icons/md";

const WhyUsButton = () => {
    return (
        <div className="grid grid-cols-2">
            <div></div>
            <div className="flex items-center justify-center">
                <Button
                    className="w-auto mt-20 mx-auto px-10 py-3 h-10 text-[15px] [&_svg]:size-6"
                    variant={"outline_motif"}
                >
                    Why us?
                    <MdOutlineArrowOutward
                        className=" text-red-600 text-3xl"
                        size={30}
                    />
                </Button>
            </div>
        </div>

    );
};

export default WhyUsButton;