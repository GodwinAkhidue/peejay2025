import { RiHeart2Fill } from "react-icons/ri";

export default function Events() {
  return (
    <div
      id="events"
      className="flex flex-col items-center justify-center pb-[80px] lg:pb-[160px] px-[20px] bg-[#a88a4d] bg-opacity-10"
    >
      <div className="futarapt text-[22px] lg:text-[28px] text-[#a88a4d] font-bold">
        EVENTS
      </div>
      <div className="h-[1px] w-full max-w-[400px] bg-[#a88a4d] flex items-center justify-center mt-[50px] lg:mt-[80px]">
        <RiHeart2Fill className="text-[#a88a4d] text-[24px]" />
      </div>
      <div className="mt-[70px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-[30px]">
        <EventItem Date={"Thursday, 3rd Jul, 2025"} Type={"TRADITIONAL"} Time={"9:00 AM - 2:00 PM"} Venue={"2 Commercial Ave, Off Ikpokpan Road, GRA, Gloria Gardens, Benin City, Edo State."}/>
        <EventItem Date={"Saturday, 5th Jul, 2025"} Type={"CHURCH"} Time={"9:00 AM - 12:00 PM"} Venue={"2 Commercial Ave, Off Ikpokpan Road, GRA, Gloria Gardens, Benin City, Edo State."}/>
        {/* <EventItem /> */}
      </div>
    </div>
  );
}

function EventItem({Date , Type, Time, Venue}:any) {
  return (
    <div className="w-[270px] h-[450px] relative flex items-center justify-center">
      <div
        style={{
          backgroundImage: "url(/images/frame3.png)",
          backgroundSize: "contain",
          backgroundPosition: "center",
        }}
        className="eventframe absolute z-10 w-full h-full"
      ></div>
      <div className="absolute w-full h-full z-0 p-[30px]">
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
