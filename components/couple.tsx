import Image from "next/image";
import groom from "@/public/images/groom.jpeg";
import bride from "@/public/images/bride.jpg";
import { RiHeart2Fill } from "react-icons/ri";
import { IoIosHeart } from "react-icons/io";

export default function Couple() {
  return (
    <div id="couple" className="flex items-center justify-center py-[80px] lg:py-[160px] px-[20px] bg-[#a88a4d] bg-opacity-10">
      <div className="w-full max-w-[400px] lg:max-w-[800px] flex flex-col items-center justify-center">
        {/*Prop */}
        <div className="h-[1px] w-full max-w-[400px] bg-[#a88a4d] flex items-center justify-center">
            <RiHeart2Fill className="text-[#a88a4d] text-[24px]" />
        </div>

        <div className="flex flex-col items-center justify-center lg:flex-row lg:gap-[100px] lg:mt-[80px]">
          {/*Groom */}
          <div className="flex items-center flex-col gap-[20px] mt-[50px] lg:mt-0">
            <div className="futarapt text-[22px] lg:text-[28px] text-[#a88a4d] font-bold">
              THE GROOM
            </div>
            {/*Groom Img*/}
            <div className="relative w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] rounded-full overflow-hidden flex items-center justify-center border-2 border-[#856404]">
              <Image src={groom} alt="peje" fill className="object-cover object-top" />
              <div className="border-2 border-[#a88a4d] w-[90%] h-[90%] absolute z-10 rounded-full"></div>
            </div>
            <div className="greatvibes text-[40px] lg:text-[60px] text-[#a88a4d]">Jeffrey</div>
          </div>

          {/*Heart */}
          <div className="mt-[30px] w-[42px] h-[42px] relative flex items-center justify-center">
            <IoIosHeart className="text-[42px] lg:text-[64px] animate-ping text-[#a88a4d]" />
            <IoIosHeart className="text-[42px] lg:text-[64px] absolute text-[#a88a4d]" />
          </div>

          {/*Bride */}
          <div className="flex items-center flex-col-reverse lg:flex-col gap-[20px] mt-[30px] lg:mt-0">
            <div className="futarapt text-[22px] lg:text-[28px] text-[#a88a4d] font-bold">
              THE BRIDE
            </div>
            {/*Groom Img*/}
            <div className="relative w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] rounded-full overflow-hidden flex items-center justify-center border-2 border-[#856404]">
              <Image src={bride} alt="peje" fill className="object-cover object-top" />
              <div className="border-2 border-[#a88a4d] w-[90%] h-[90%] absolute z-10 rounded-full"></div>
            </div>
            <div className="greatvibes text-[40px] lg:text-[60px] text-[#a88a4d]">
              Precious
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
