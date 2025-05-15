import Image from "next/image";
import React from "react";




const Approach = () => {
  return (
    <section className="layout_normal  mt-64 w-[90%] md:w-[90%] lg:w-[70%]  mx-auto px-2">
      <div className="mt-28 text-typo-primary">
        <h5 className="text-section_title_sm md:text-section_title_md lg:text-section_title_lg 2xl:text-section_title_2xl font-helvetica uppercase font-bold mb-4">
          The approach
        </h5>
        <div className="w-full md:w-[60%] lg:w-[50%] xl:w-[40%] ">
          <h2 className="capitalize text-section_heading_sm md:text-section_heading_md lg:text-section_heading_lg 2xl:text-section_heading_2xl font-semibold font-clash leading-[1.2em]"> where strategy <br/> meets creativity <br/> to drive impact</h2>
        </div>
      </div>
      <div className="grid md:grid-cols-[33%_66%] gap-[20px]">
        <div></div>
        <div>
          <div className="relative mt-[9vh] lg:mt-0 w-[80vw] h-[80vw] md:w-[45vw] nd:h-[45vh] lg:w-[40vw] lg:h-[40vh] xl:w-[30vw] xl:h-[59vh] mx-auto  overflow-hidden">
            <div className="absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <div className="animate-spin_slow w-[152px]">
                <Image src={"/assets/home/Stamp1.webp"} width={200} height={200} alt="" />
              </div>
            </div>
            <Image
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[100%] object-contain"
              src="/assets/home/what-we-do-word.png"
              width={1000}
              height={1000}
              alt=""
            />
          </div>
        </div>
      </div>



    </section>
  );
};

export default Approach;
