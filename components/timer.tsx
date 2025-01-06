import frame from "@/public/images/flower.png";
import Image from "next/image";

export default function Timer() {
  return (
    <div>
      <TimerItem />
    </div>
  );
}

function TimerItem() {
  return (
    <div className="relative flex items-center justify-center">
      <Image src={frame} alt="peje" className="w-[120px] h-[120px] frame" />
      <div className="absolute flex flex-col items-center justify-center">
        <div className="text-[30px] futurapt font-medium leading-tight">20</div>
        <div className="text-[14px]">Days</div>
      </div>
    </div>
  );
}
