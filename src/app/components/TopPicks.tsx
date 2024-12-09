import Image from "next/image";
import React from "react";

const TopPicks = () => {
  return (
    <div className="font-poppins max-w-[1440px] mx-auto relative overflow-hidden  py-10 ">
      <div className=" flex flex-col justify-center items-center gap-14 pb-8 ">
        <h2 className="text-[36px] font-medium">Top Picks For You</h2>
        <p className="text-[#9F9F9F] text-[16px] font-medium  pb-5">
          Find a bright ideal to suit your taste with our great selection of
          suspension, floor and table lights.
        </p>
      </div>
      <div className="max-w-[1240px] mx-auto   overflow-hidden  flex  flex-wrap justify-center   lg:justify-between   pl-10 lg:pl-0   gap-4 md:gap-0  ">
        <div>
        <Image
            src={"/images/shop1.png"}
            height={450}
            width={450} 
            alt="blogs laptop images"
            className="w-[287px] h-[287px]   object-contain"
          />
          <div className="flex flex-col gap-6 justify-center items-center text-center">
            <p className="text-center pt-3">
            Trenton modular sofa_3
            </p>
            <div className="font-medium text-[24px] mx-auto">
              RS. 25,000.00
            </div>
          </div>
        </div>
        <div>
        <Image
            src={"/images/shop2.png"}
            height={350}
            width={350}
            alt="blogs laptop images"
            className="w-[287px] h-[287px]   object-contain"
          />
          <div className="flex flex-col  gap-6 justify-center items-center text-center pt-3">
            <p>Granite dining table with dining chair</p>
            <div className="font-medium text-[24px] mx-auto">
              RS. 25,000.00
            </div>
          </div>
        </div>
        <div>
        <Image
            src={"/images/shop3.png"}
            height={350}
            width={350}
            alt="blogs laptop images"
            className="w-[287px] h-[287px]   object-contain"
          />
          <div className="flex flex-col  gap-6 justify-center items-center text-center pt-3">
            <p>Outdoor bar table and stool</p>
            <div className="font-medium text-[24px] mx-auto">
              RS. 25,000.00
            </div>
          </div>
        </div>
        <div>
        <Image
            src={"/images/shop4.png"}
            height={350}
            width={350}
            alt="blogs laptop images"
            className="w-[287px] h-[287px]   object-contain"
          />
          <div className="flex flex-col  gap-6 justify-center items-center text-center pt-3">
            <p>Plain console with teak mirror</p>
            <div className="font-medium text-[24px] mx-auto">
              RS. 25,000.00
            </div>
          </div>
        </div>
      </div>
      <div className=" flex justify-center items-center p-6 mt-6">
        <button className="underline underline-offset-8 mx-auto text-[20px] font-medium">
          View All
        </button>
      </div>
    </div>
  );
};

export default TopPicks;
