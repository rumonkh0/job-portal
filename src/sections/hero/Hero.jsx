import React from "react";
import hero_img from "../../assets/hero-image.png";

function Hero() {
  return (
    <div className="w-[1170px] flex justify-between">
      <div className="hero_left w-[435px] flex flex-col gap-4">
        <div class="flex flex-col gap-10">
          <div className="title text-[44px] font-medium leading-[54px]">
            Jobs Made Simple Dreams Made Real
          </div>
          <div className="description">
            The mission of transforming aspirations into tangible achievements
            through streamlined employment processes and opportunities.
          </div>
        </div>
        <div className="relative searchbar flex items-center gap-6 z-10 bg-white overflow w-[1032px] py-8 rounded-2xl">
          <img className="absolute top-0 left-[460px] -translate-y-full" src="/cornerUp.svg" alt="" />
          <img className="absolute bottom-0 left-[460px] translate-y-full" src="/cornerDown.svg" alt="" />
          <input
            className="search_input w-[313] h-[48px] px-4 rounded-full border border-gray-300 focus:outline-none focus:border-blue-500 text-[16px]"
            placeholder="Search for jobs, companies, or locations"
          />
          <input
            className="search_input w-[313] h-[48px] px-4 rounded-full border border-gray-300 focus:outline-none focus:border-blue-500 text-[16px]"
            placeholder="Search for jobs, companies, or locations"
          />
          <input
            className="search_input w-[313] h-[48px] px-4 rounded-full border border-gray-300 focus:outline-none focus:border-blue-500 text-[16px]"
            placeholder="Search for jobs, companies, or locations"
          />
          <div className="bg-blue-600 px-4 py-3 rounded-full text-white">
            Find Job
          </div>
        </div>
        <div className="hero_footer flex justify-between items-center">
          <div className="professoinals flex flex-col items-center">
            <div class="images pb-4 flex -space-x-3">
              <img
                className="w-[40px] h-[40px] rounded-full object- border-2 border-white"
                src="/1.png"
                alt="people"
              />
              <img
                className="w-[40px] h-[40px] rounded-full object- border-2 border-white"
                src="/2.png"
                alt="people"
              />
              <img
                className="w-[40px] h-[40px] rounded-full object- border-2 border-white"
                src="/3.png"
                alt="people"
              />
              <img
                className="w-[40px] h-[40px] rounded-full object- border-2 border-white"
                src="/4.png"
                alt="people"
              />
            </div>
            <div className="text-[20px] font-semibold">25k+</div>
            <div className="text-gray-600">professionals</div>
          </div>
          <div className="watchvideo px-16 py-6.5 flex items-center gap-2 border border-dotted border-blue-500 rounded-[16px]">
            <div class="video_icon">
              <img src="/video_icon.png" alt="video icon" />
            </div>
            <div className="video_text text-gray-500">Watch Video</div>
          </div>
        </div>
      </div>
      <div className="hero_right  rounded-2xl z-0">
        <img
          src={hero_img}
          alt="hero"
          className="hero_img w-[710px] rounded-2xl"
        />
      </div>
    </div>
  );
}

export default Hero;
