import React from 'react';

const Apply = () => {
    return (
        <div className="flex flex-col md:flex-row border-1 md:border-0 md:border-y-1 border-gray-100">
            <div className="w-full md:w-1/2 border-e-0 md:border-e-1 p-4 md:p-20">
                <h1 className="text-2xl md:text-3xl text-white font-bold">Wanna join and <br/> take the <br/> challenge?</h1>
            </div>
            <div className="w-full md:w-1/2 p-4 md:p-16">
                <h2 className="text-lg text-white font-medium mt-5">Get in touch today and lets see if <br/> you&apos;re truly ready to join the force.</h2>
                <button className="rounded-full my-10  md:my-14 w-full md:w-28 text-white px-4 py-2.5  text-sm font-semibold  shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >Apply</button>
            </div>
        </div>
    );
};

export default Apply;