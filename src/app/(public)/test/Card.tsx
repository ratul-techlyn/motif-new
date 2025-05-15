import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Card = () => {
    const cardRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (cardRef.current) {
            const cards = cardRef.current.querySelectorAll<HTMLDivElement>(".j_card");
            if (cards.length > 0) {
                gsap.from(cards, {
                    opacity: 0,
                    stagger: 0.2,
                    duration: 0.6,
                    ease: "power3.out",
                });
            }
        }
    }, []);

    return (
        <section className="bg-gray-900 text-white p-5 overflow-hidden">
            <div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 content-start gap-6"
                ref={cardRef}
            >
                {[1, 2, 3].map((count) => (
                    <div
                        key={count}
                        className="group j_card w-[400px] h-[450px] relative rounded-2xl p-8 bg-cardBg bg-cover bg-no-repeat transition-transform transform duration-300"
                    >
                        {/* Background Shape */}
                        <div className="absolute inset-0 z-[-1] bg-hoverCardBg bg-cover bg-no-repeat opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="absolute w-full h-full bg-bottom bg-no-repeat transform translate bottom-0"></div>
                        </div>

                        <div className="card_content flex flex-col justify-between h-full">
                            {/* Top Content */}
                            <div className="top_content">
                                <span className="count_badge text-white font-medium text-sm border-l-2 border-r-2 border-white px-3">
                                    {`0${count}`}
                                </span>
                                <div className="text_content mt-6">
                                    <h2 className="title text-2xl font-semibold mb-3">
                                        Training Programs
                                    </h2>
                                    <p className="pera text-base">
                                        Leadership Training business mentorship and masterclasses
                                    </p>
                                </div>
                            </div>

                            {/* Bottom Content */}
                            <div className="bottom_content mt-6">
                                <button className="j_button bg-white text-black rounded-full w-16 h-16 flex items-center justify-center shadow-md">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        style={{ fill: "rgba(0, 0, 0, 1)" }}
                                    >
                                        <path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Card;
