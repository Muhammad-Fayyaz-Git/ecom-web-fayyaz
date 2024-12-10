import Image from "next/image"; 
import Link from "next/link"; // Import the Link component

const Herosection = () => {
  return (
    <>
      <div className="max-w-[1440px] mx-auto bg-[#FBEBB5] overflow-hidden relative py-10">
        <div className="flex flex-wrap justify-center gap-[-20px] items-center w-full">
          {/* Content */}
          <div className="text-[#000000] pl-10 lg:pl-0">
            <h2 className="text-[64px] text-center md:text-left font-medium md:font-semibold">
              Rocket single <br /> seater
            </h2>

            {/* Shop Now Button */}
            <Link href="/shop">
              <button className="font-medium text-[24px] underline underline-offset-[1.5rem] pt-8 mx-auto cursor-pointer">
                Shop Now
              </button>
            </Link>
          </div>

          {/* Image */}
          <div>
            <Image
              src={"/images/heroimage.png"}
              height={500}
              width={500}
              className="max-w-[853px] w-full"
              alt="seat image"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Herosection;
