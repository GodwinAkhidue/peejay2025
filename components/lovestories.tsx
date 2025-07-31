// import vid1 from "@/public/images/Lovestories/proposalvideo.mp4";

import Image from "next/image";
import { BsHeartFill } from "react-icons/bs";

export default function LoveStories() {
  const lovestories = [
    {
      video: '/images/Lovestories/proposalvideo.mp4',
      type: "the proposal video",
    },
  ];

  return (
    <div id="groomsmen" className="flex flex-col items-center justify-center py-[80px] lg:py-[160px] px-[20px] bg-[#a88a4d] bg-opacity-10 w-full h-full">
      <div className="futarapt text-[22px] lg:text-[28px] text-[#a88a4d] font-bold">
        THE PROPOSAL
      </div>
      <div className="mt-[50px] lg:mt-[80px] flex items-center justify-center gap-[30px] ">
        {lovestories.map((i, index) => (
          <Item key={index} i={i} />
        ))}
      </div>
    </div>
  );
}

function Item({ i }: { i: any }) {
  return (
    <div className="bg-white w-full h-full p-[20px] lg:p-[40px] flex flex-col gap-[20px] items-center justify-center shadow-md rounded-[10px]">
      <div className="relative flex justify-center items-center">
        <div className="h-full max-h-[80vh] relative rounded overflow-hidden">
          <video autoPlay loop id="myVideo" className="w-full h-full" playsInline preload="auto">
            <source src={i.video} type="video/mp4" />
          </video>
        </div>

        <div className="text-[15px] w-[30px] h-[30px] bottom-[-15px] bg-white flex items-center justify-center text-[#a88a4d] absolute z-10 rounded-full">
          <BsHeartFill />
        </div>
      </div>
      {/* <div className="futurapt font-medium">{i.type}</div> */}
      <div className="text-[32px] greatvibes leading-tight text-center">{i.type}</div>
      {/* <div className="text-center italic font-sans text-[#666]">{i.body}</div> */}
    </div>
  );
}