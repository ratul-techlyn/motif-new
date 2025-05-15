import React from 'react';
import {ChevronDownIcon} from "lucide-react";
import { FaArrowRightLong } from "react-icons/fa6";


const helps = [
    { id: 1, label: "Web Development" },
    { id: 2, label: "UI/UX Design" },
    { id: 3, label: "Digital Marketing" },
    { id: 4, label: "Mobile App Development" },
    { id: 5, label: "Branding & Strategy" },
    { id: 6, label: "E-commerce Solutions" },
    { id: 7, label: "Content Creation" },
];

const budgetOptions = [
    { id: 1, label: "Under $1,000" },
    { id: 2, label: "$1,000 - $5,000" },
    { id: 3, label: "$5,000 - $10,000" },
    { id: 4, label: "$10,000 - $25,000" },
    { id: 5, label: "$25,000 - $50,000" },
    { id: 6, label: "Over $50,000" },
];

const ContactFrom = () => {
    return (
        <div>
            <form>
                    <div className="grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                            <div className="mt-2">
                                <input
                                    id="first-name"
                                    name="first-name"
                                    type="text"
                                    placeholder="First Name"
                                    autoComplete="given-name"
                                    className="block w-full rounded-[5px] border-[1px] bg-transparent bg-none px-3 py-3 text-[rgb(51,51,51)] placeholder:text-[rgb(51,51,51)] border-[#4f4f4f69] outline-[#4f4f4f69] focus:outline-none focus:ring-0"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-3">
                            <div className="mt-2">
                                <input
                                    id="last-name"
                                    name="last-name"
                                    type="text"
                                    placeholder="Last Name"
                                    className="block w-full rounded-[5px] border-[1px] bg-transparent bg-none px-3 py-3 text-[rgb(51,51,51)] placeholder:text-[rgb(51,51,51)] border-[#4f4f4f69] outline-[#4f4f4f69] focus:outline-none focus:ring-0"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-3">
                            <div className="mt-2">
                                <input
                                    id="brand-name"
                                    name="brand-name"
                                    type="text"
                                    placeholder="Brand Name"
                                    className="block w-full rounded-[5px] border-[1px] bg-transparent bg-none px-3 py-3 text-[rgb(51,51,51)] placeholder:text-[rgb(51,51,51)] border-[#4f4f4f69] outline-[#4f4f4f69] focus:outline-none focus:ring-0"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-3">
                            <div className="mt-2">
                                <input
                                    id="website"
                                    name="website"
                                    type="text"
                                    placeholder="Website"
                                    className="block w-full rounded-[5px] border-[1px] bg-transparent bg-none px-3 py-3 text-[rgb(51,51,51)] placeholder:text-[rgb(51,51,51)] border-[#4f4f4f69] outline-[#4f4f4f69] focus:outline-none focus:ring-0"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-3">
                            <div className="mt-2">
                                <input
                                    id="phone"
                                    name="phone"
                                    type="text"
                                    placeholder="Phone Number"
                                    className="block w-full rounded-[5px] border-[1px] bg-transparent bg-none px-3 py-3 text-[rgb(51,51,51)] placeholder:text-[rgb(51,51,51)] border-[#4f4f4f69] outline-[#4f4f4f69] focus:outline-none focus:ring-0"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-3">
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="Email Address"
                                    className="block w-full rounded-[5px] border-[1px] bg-transparent bg-none px-3 py-3 text-[rgb(51,51,51)] placeholder:text-[rgb(51,51,51)] border-[#4f4f4f69] outline-[#4f4f4f69] focus:outline-none focus:ring-0"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <div className="mt-2 grid grid-cols-1">
                                <select
                                    id="help"
                                    name="help"
                                    className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-transparent py-3 pl-3 pr-8 text-base text-[rgb(51,51,51)] outline outline-1 -outline-offset-1 outline-none white/10 *:bg-gray-800 focus:outline focus:outline-none focus:-outline-offset-2 focus:outline-none sm:text-sm/6"
                                >
                                    <option  value="">Need Help With?</option>
                                    {helps.map((help) => (
                                        <option key={help.id} value={help.label}>
                                            {help.label}
                                        </option>
                                    ))}
                                </select>
                                <ChevronDownIcon
                                    aria-hidden="true"
                                    className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-[rgb(51,51,51)] sm:size-4"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-3">
                            <div className="mt-2 grid grid-cols-1">
                                <select
                                    id="budget"
                                    name="budget"
                                    className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-transparent py-3 pl-3 pr-8 text-base text-[rgb(51,51,51)] outline outline-1 -outline-offset-1 outline-white/10 *:bg-gray-800 focus:outline focus:outline-none focus:-outline-offset-2"
                                >
                                    <option value="">Your Budget</option>
                                    {budgetOptions.map((budget) => (
                                        <option key={budget.id} value={budget.label}>
                                            {budget.label}
                                        </option>
                                    ))}
                                </select>
                                <ChevronDownIcon
                                    aria-hidden="true"
                                    className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-400 sm:size-4"
                                />
                            </div>
                        </div>

                        <div className="col-span-full">

                            <div className="mt-2">
                    <textarea
                        id="about"
                        name="about"
                        rows={3}
                        placeholder="Anything If You Want To Know"
                        className="block w-full rounded-[5px] border-[1px] bg-transparent bg-none px-3 py-3 text-[rgb(51,51,51)] placeholder:text-[rgb(51,51,51)]  border-[#4f4f4f69] outline-[#4f4f4f69] focus:outline-none focus:ring-0"
                        defaultValue={''}
                    />
                            </div>
                        </div>
                    </div>
                    <div className="text-end mt-5">
                        {/* <button
                            type="submit"
                            className="rounded-full px-14 py-5 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                        >
                            Submit
                        </button> */}

                        <button className='flex justify-center items-center pl-4 pr-2 py-2 ml-auto rounded-l-md rounded-tr-md rounded-br-2xl text-white bg-gray-900'>
                            Send Email
                            <span className=' ml-4 px-3 py-3 rounded-l-md rounded-tr-md rounded-br-xl bg-gray-700 '>
                            <FaArrowRightLong color='#ff0000' />
                            </span>
                        </button>
                    </div>


            </form>
        </div>
    );
};

export default ContactFrom;