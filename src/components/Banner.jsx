import React from "react";

function Banner() {
  return (
    <div className="relative w-full h-[458px]  flex justify-center items-center">
      <img
        src="/Rectangle 2744.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-80 z-0"
      />
      <div className="absolute inset-0 bg-blue-600 opacity-68"></div>

      <div className="w-[850px] -mt-[100px] flex flex-col gap-8 justify-center items-center z-10 text-white">
        <div className="text-[40px] font-bold">About Us</div>
        <div className="text-center ">
          Connecting talent with opportunity, we are your trusted partner in the
          journey towards career growth and organizational success
        </div>
      </div>
    </div>
  );
}

export default Banner;
