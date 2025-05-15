import React from 'react';
import AnimatedText from '@/components/AnimatedText';
import VideoPlayer from "@/components/shared/VideoPlayer";

const words = [
  "STORYTLLR",
  "LAVLEEN",
  "ARTISTS",
  "NAFIUL",
  "CREATIVE",
  "MUSA",
  "MARKETER",
  "ANNA",
  "ASH",
  "PHIL",
  "DAVID",
]

const WeAreMotif = () => {
  return (
    <section className="w-full md:w-[90%] lg:w-[70%] mx-auto mt-10 md:mt-20 px-4 md:px-4 py-6 md:py-6">
      <div className="flex flex-col md:flex-row gap-[10%]">
        <div className="w-full md:w-[40%] float-left">
          <AnimatedText words={words} className="text-animated_contact_2xl text-animated_contact_lg text-animated_contact_md text-animated_contact_sm font-semibold font-clash " />
        </div>
        <div className="w-full md:w-[60%] ">
          <div className=''>
            <VideoPlayer
              className=""
              url="https://player.vimeo.com/video/1005543010"
              muted={true}
              autoplay={true}
              loop={true}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default WeAreMotif