import Image from "next/image";
import { RiHeart2Fill } from "react-icons/ri";

export default function Events() {
  return (
    <div
      id="events"
      className="flex flex-col items-center justify-center py-[80px] lg:py-[160px] px-[20px] bg-[#a88a4d] bg-opacity-10"
    >
      <div className="futarapt text-[22px] lg:text-[28px] text-[#a88a4d] font-bold">
        EVENTS
      </div>
      <div className="h-[1px] w-full max-w-[400px] bg-[#a88a4d] flex items-center justify-center mt-[50px] lg:mt-[80px]">
        <RiHeart2Fill className="text-[#a88a4d] text-[24px]" />
      </div>
      <div className="mt-[70px] grid grid-cols-1 gap-[30px]">
        <Image alt="peje" src={`/images/trad.jpg`} width={999} height={999} className="w-full max-w-[350px]" />
        {/* <EventItem Date={"Saturday, 20th September, 2025"} Type={"CHURCH"} Time={"10:00 AM"} Venue={"St Joseph Catholic Church, First East Circular Road, Benin City, Edo State."} /> */}
      </div>
    </div>
  );
}

function EventItem({ Date, Type, Time, Venue }: any) {
  return (
    <div className="w-[300px] h-[400px] relative flex items-center justify-center">
      <div
        style={{
          backgroundImage: "url(/images/frame3.png)",
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
        className="eventframe absolute z-10 w-full h-full"
      ></div>
      <div className="absolute w-[80%] h-full z-0 p-[30px]">
        <div className="bg-[#a88a4d] h-full bg-opacity-30 flex flex-col rounded-[10px] p-[20px]">
          <div className="text-[18px] futurapt text-center pb-[20px] border-b border-b-[#a88a4d]">
            {Type}
          </div>
          <div className="font-sans text-black opacity-60 text-[14px] mt-[20px] text-center">
            {Date}
          </div>
          <div className="font-sans text-black opacity-60 text-[14px] text-center">
            {Time}
          </div>
          <div className="font-sans text-black opacity-60 text-[14px] text-center mt-[20px]">
            {Venue}
          </div>
        </div>
      </div>
    </div>
  );
}
