import Image from "next/image";
import React from "react";
import Link from "next/link"; // Import Link for navigation

const TopPicks = () => {
  return (
    <div className="font-poppins max-w-[1440px] mx-auto relative overflow-hidden py-10">
      <div className="flex flex-col justify-center items-center gap-14 pb-8">
        <h2 className="text-[36px] font-medium">Top Picks For You</h2>
        <p className="text-[#9F9F9F] text-[16px] font-medium pb-5">
          Find a bright ideal to suit your taste with our great selection of
          suspension, floor and table lights.
        </p>
      </div>
      <div className="max-w-[1240px] mx-auto overflow-hidden flex flex-wrap justify-center lg:justify-between pl-10 lg:pl-0 gap-4 md:gap-0">
        <div className="w-[287px] h-[372px]">
          <Image
            src={"/images/shop1.png"}
            height={50}
            width={650}
            alt="images"
            className="w-[287px] h-[270px] object-none"
          />
          <div className="flex flex-col gap-6 justify-center items-center text-center">
            <p className="mt-[3rem] text-center pt-3">Trenton modular sofa_3</p>
            <div className="mt-[-1rem] font-medium text-[24px] mx-auto">
              RS. 25,000.00
            </div>
          </div>
        </div>
        <div className="w-[287px] h-[397px]">
          <Image
            src={"/images/shop2.png"}
            height={300}
            width={350}
            alt="images"
            className="w-[287px] h-[287px] mt-[2rem] object-contain"
          />
          <div className="md-[4rem]flex flex-col gap-6 justify-center items-center text-center pt-3">
            <p>Granite dining table with dining chair</p>
            <div className="mt-[.5rem] font-medium text-[24px] mx-auto">
              RS. 25,000.00
            </div>
          </div>
        </div>
        <div>
          <Image
            src={"/images/shop3.png"}
            height={350}
            width={350}
            alt="images"
            className="w-[287px] h-[270px] object-center"
          />
          <div className="mt-[3rem] flex flex-col gap-6 justify-center items-center text-center pt-3">
            <p>Outdoor bar table and stool</p>
            <div className="mt-[-1rem] font-medium text-[24px] mx-auto">
              RS. 25,000.00
            </div>
          </div>
        </div>
        <div>
          <Image
            src={"/images/shop4.png"}
            height={350}
            width={350}
            alt="images"
            className="w-[250px] h-[340px] object-contain"
          />
          <div className="mt-[-1.5rem] flex flex-col gap-6 justify-center items-center text-center pt-3">
            <p>Plain console with teak mirror</p>
            <div className="mt-[-1rem] font-medium text-[24px] mx-auto">
              RS. 25,000.00
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center p-6 mt-6">
        <Link href="/shop"> {/* Add Link to Shop */}
          <button className="underline underline-offset-8 mx-auto text-[20px] font-medium cursor-pointer">
            View All
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TopPicks;
