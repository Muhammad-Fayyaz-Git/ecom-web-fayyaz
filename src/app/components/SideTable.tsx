import React from "react"; 
import Image from "next/image";
import Link from "next/link"; // Import the Link component

const SideTable = () => {
  return (
    <div className="w-[1440px] h-[672px] mx-auto flex items-center py-10 bg-[#FAF4F4]">
      {/* First Side Table (Left) */}
      <div className="w-[605px] h-[562px] ml-[4rem] flex flex-col items-center text-center gap-4">
        {/* Image */}
        <div className="ml-[6rem] mt-[2rem] w-[400px] h-[400px] object-none cursor-pointer">
          <Image
            src={"/images/table2.png"}
            height={400}
            width={400} 
            alt="Tableimages"
            className="object-fill"
          />
        </div>
        {/* Text */}
        <div className="mr-[11rem] mt-[-7rem] w-[182px] h-[54px]">
          <p className="text-[34px] font-medium">Side table</p>
        </div>
        <Link href="/shop"> 
          <div className="mr-[15rem] underline underline-offset-4 text-[16px] font-medium cursor-pointer">
            View More
          </div>
        </Link>
      </div>

      {/* Second Side Table (Right) */}
      <div className="w-[605px] h-[562px] ml-[6rem] flex flex-col items-stretch text-center gap-4">
        {/* Image */}
        <div className="mt-[2rem] ml-[10rem] w-[450px] cursor-pointer">
          <Image
            src="/images/sofa2.png"
            alt="Side sofa"
            width={605}
            height={562}
            className="object-left-bottom"
          />
        </div>
        {/* Text */}
        <p className="mr-[10rem] mt-[-1rem] text-[34px] font-medium">Side table</p>
        <Link href="/shop"> {/* Wrap View More with Link */}
          <div className="mr-[14rem] underline underline-offset-4 text-[16px] font-medium cursor-pointer">
            View More
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SideTable;
