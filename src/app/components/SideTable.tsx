import React from "react";
import Image from "next/image";

const SideTable = () => {
  return (
    <div className="w-[1440px] h-[672px] mx-auto flex justify-between items-center py-10">
      {/* First Side Table (Left) */}
      <div className="w-[605px] h-[562px] flex flex-col items-center text-center gap-4">
        {/* Image */}
        <Image
          src="/images/tabbel.png" // Replace with your sofa image path
          alt="Side table"
          width={405}
          height={1062}
          className="object-right-top"
        />
        {/* Text */}
        <p className="text-[24px] font-medium">Side table</p>
        <button className="underline underline-offset-4 text-[16px] font-medium">
          View More
        </button>
      </div>

      {/* Second Side Table (Right) */}
      <div className="w-[605px] h-[562px] flex flex-col items-center text-center gap-4">
        {/* Image */}
        <Image
          src="/images/sofa.png" // Replace with your sofa image path
          alt="Side sofa"
          width={905}
          height={562}
          className="object-left-bottom"
        />
        {/* Text */}
        <p className="text-[24px] font-medium">Side table</p>
        <button className="underline underline-offset-4 text-[16px] font-medium">
          View More
        </button>
      </div>
    </div>
  );
};

export default SideTable;
