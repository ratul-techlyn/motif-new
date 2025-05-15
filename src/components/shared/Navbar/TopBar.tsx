"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import BrandLogo from "./BrandLogo";
import { LuArrowUpRight } from "react-icons/lu";
import { Button } from "@/components/ui/button";
import { TfiClose } from "react-icons/tfi";
import { useRouter } from "next/navigation";
import gsap from "gsap";





const TopBar = () => {
  const [isOpen, setIsClose] = useState(false);
  const [opacity, setOpacity] = useState(1);
  const [isScrolling, setIsScrolling] = useState(false);

  const handleOpen = () => {
    setIsClose(!isOpen);
  };
  const router = useRouter()
  const handleNavigation = (link:string) =>{
    router.push(link);
    handleOpen();
  }

  useEffect(() => {
    const handleScroll = () => {
      if(!isScrolling){
        setIsScrolling(true);
      }
      // Get the scroll position
      const scrollPosition = window.scrollY;

      // Calculate opacity based on scroll position
      // Adjust 0.005 as needed to change the rate of opacity decrease
      const newOpacity = 1 - scrollPosition * 0.005;

      // Set opacity (ensure it doesn't go below 0)
      setOpacity(Math.max(newOpacity, 0));
      gsap.to("#top-bar", {
        opacity: 0.9,
        duration: 0.3,
        ease: "power2.out",
      });
      if( scrollY>0){
        setIsScrolling(true);
      }
      else{
        setIsScrolling(false);
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
        };
  }, []);
  return (
    <div id="top-bar" className={cn("sticky top-0 z-30 mx-auto py-4 transition-all", isScrolling? "bg-primary/50 backdrop-blur-md":"bg-primary",)}>
      <nav className="w-[90%] md:w-[90%] lg:w-[70%] layout_normal flex items-center justify-between gap-x-5 px-2">
        <BrandLogo
        className="w-1/3 justify-start"
        brandIconClass="w-[50px] h-[20px]"
        brandClass={cn(`w-[120px] h-[20px] opacity-[${opacity}]`)}
        brandStyle={{opacity}}
        />
        <div  className="w-1/3 flex justify-center">
          <time className="text-para4 text-">
            EST - 2015
          </time>
        </div>
        <div className="w-1/3 flex justify-end">
            <span className="cursor-pointer" onClick={handleOpen}>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="15" viewBox="0 0 50 15" fill="none">
              <path d="M49.09 1.09003H0" stroke="white" strokeWidth="2" strokeMiterlimit="10"></path>
              <path d="M49.09 13.1801H15.26" stroke="white" strokeWidth="2" strokeMiterlimit="10"></path>
            </svg>
            </span>
        </div>
      </nav>
      {
        isOpen && <nav className={cn('fixed left-0 top-0 bottom-0 z-20 pxX-[6%] w-full h-screen  backdrop-blur-[6px]',`bg-[url("/assets/mask_bg/bg_mask.png")]`)}>
          <div className="bg-[#000]/30 min-h-screen px-[6%] md:px-0 py-[2%] md:py-0">
          <div className="grid grid-cols-1 md:grid-cols-2 text-typo-primary ">
              <aside className="flex flex-col justify-center md:min-h-screen border-b-[0.5px] md:border-b-0 md:border-r-[0.5px] border-mute flex-grow pb-4 lg:pb-0">
                  <div className="w-full md:w-[70%] lg:w-[65%] xl:w-[45%] mx-auto">
                      <div>
                          <Button className="w-[30%] h-[1.5rem] rounded-full px-10  hover:bg-btn_hvr hover:text-typo-primary " variant={"outline"}>Let&lsquo;s Talk</Button>
                      </div>
                      <ul className="flex justify-between gap-2 mt-8">
                          <li>
                              <div className="uppercase text-[1rem] md:text-[calc(100vw/60)]  lg:text-[calc(100vw/60)] xl:text-[calc(50vw/45)] font-helvetica font-normal ">Phone</div>
                              <div className="text-[1rem] md:text-[calc(100vw/60)] lg:text-[calc(100vw/60)] xl:text-[calc(50vw/45)] font-helvetica mt-[0.9rem]">+1 (415)-800-2326</div>
                          </li>
                          <li>
                              <div className="uppercase text-[1rem] md:text-[calc(100vw/60)] lg:text-[calc(100vw/60)] xl:text-[calc(50vw/45)] font-helvetica font-normal ">Email</div>
                              <div className="text-[1rem] md:text-[calc(100vw/60)] lg:text-[calc(100vw/60)] xl:text-[calc(50vw/45)] font-helvetica mt-[0.9rem]">hey@wemotif.com</div>
                          </li>
                          <li>
                              <div className="uppuppercase text-[1rem] md:text-[calc(100vw/60)] lg:text-[calc(100vw/60)] xl:text-[calc(50vw/45)] font-helvetica font-normalercase ">Blog</div>
                              <div className="mt-2">
                                  <LuArrowUpRight className="xl:w-[calc(50vw/30)]" size={40} />
                              </div>
                          </li>
                      </ul>
                      <div className="hidden md:block w-full mt-10">
                          <Image className="" layout="responsive" src={"/assets/common/navbar/Left-side-card.png"} width={900} height={500} alt='' />
                      </div>

                  </div>
              </aside>
              <aside className="flex flex-col justify-center">
                  <div className="md:pl-16 md:pr-[2vw]">
                      <div className="md:relativeX">
                          <div className="absolute z-[1] top-0 md:top-3 md:right-6 lg:top-12 lg:right-12 right-0  cursor-pointer" onClick={handleOpen}>
                              <TfiClose className="text-typo-primary w-[40%] md:w-[2vw] h-[2.5rem]" size={50} />
                          </div>
                          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 lg:relative">
                            <BrandLogo
                                brandIconClass="w-[2.5rem] h-[2rem]"
                                brandClass="w-[10rem] h-[3rem]"
                            />
                          </div>
                      </div>
                      <div className=" mt-0">
                          <p className="text-[2.5rem] lg:text-[2rem] xl:text-[3.5rem] font-clash cursor-pointer text-typo-primary" onClick={()=>handleNavigation("/what-we-do")}>
                            What We Do
                          </p>
                          <p className="text-[2.5rem] lg:text-[2rem] xl:text-[3.5rem] font-clash cursor-pointer text-typo-primary" onClick={()=>handleNavigation("/the-motif-process")}>
                            How We Do
                          </p>
                          <p className="text-[2.5rem] lg:text-[2rem] xl:text-[3.5rem] font-clash cursor-pointer text-typo-primary" onClick={()=>handleNavigation("/why-motif")}>Why <span className="font-bold">MOTIF</span> <span className="text-head5">®</span> ? </p>
                          <p className="text-[2.5rem] lg:text-[2rem] xl:text-[3.5rem] font-clash cursor-pointer text-typo-primary" onClick={()=>handleNavigation("/about")}>
                            About
                          </p>
                          <p className="text-[2.5rem] lg:text-[2rem] xl:text-[3.5rem] font-clash cursor-pointer text-typo-primary" onClick={()=>handleNavigation("/contact")}>
                            Contact
                          </p>
                          <div className="w-full h-[70px] md:hidden overflow-hidden rounded-full">
                            <Image className="object-cover object-center w-full h-full" src={"/assets/nav/nav_img.jpeg"} width={100} height={80} alt="" />
                          </div>
                      </div>
                  </div>
              </aside>
          </div>
          </div>
        </nav>
      }

    </div>
  );
};

export default TopBar;
