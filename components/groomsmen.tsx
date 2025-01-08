import img1 from "@/public/images/Groomsmen/Godwin Prosperity.jpg";
import img2 from "@/public/images/Groomsmen/Theodore Idiahi.jpg";
import img3 from "@/public/images/Groomsmen/OLUSAKIN KEHINDE.jpg";
import img4 from "@/public/images/Groomsmen/Akinseye Lucas Femi.jpg";
import img5 from "@/public/images/Groomsmen/Joshua Sogolo.jpg";
import img6 from "@/public/images/Groomsmen/Ronald Odemakpore.jpg";
import img7 from "@/public/images/Groomsmen/Charles Jamil.jpg";
import img8 from "@/public/images/Groomsmen/GODSON TATA.jpg";
import img9 from "@/public/images/Groomsmen/Ejeye Larry.jpg";
import Image from "next/image";
import { BsHeartFill } from "react-icons/bs";

export default function GroomsMen() {
  const groomsmen = [
    {
      img: img1,
      role: "BEST MAN",
      name: "Godwin Prosperity",
      body: "A loyal friend with unmatched personality.",
    },
    {
      img: img2,
      role: "FRIEND",
      name: "Theodore Idiahi",
      body: " A brother who's been there through thick and thin. Loves soccer, Skilled songwriter, A decent cook, A decent photographer.",
    },
    {
      img: img3,
      role: "FRIEND",
      name: "Olusakin Kehinde",
      body: "The one that makes him love HOT BANTIS. He hated women, still shocked he's getting married.",
    },
    {
      img: img4,
      role: "FRIEND",
      name: "Akinseye Lucas Femi",
      body: "",
    },
    {
      img: img5,
      role: "FRIEND",
      name: "Joshua Sogolo",
      body: "We have been through a lot together. He can do anything for you provided you give him food.",
    },
    {
      img: img6,
      role: "FRIEND",
      name: "Ronald Odemakpore",
      body: "Loves hosting events, Web 3.0 and Music",
    },
    {
      img: img7,
      role: "FRIEND",
      name: "Charles Jamil",
      body: "A Loyal Son in the Faith. He simplifies the process of revering GOD",
    },
    {
      img: img8,
      role: "SON (not literally)",
      name: "Godson Tata",
      body: "SON OF CONSOLATION",
    },
    {
      img: img9,
      role: "FRIEND",
      name: "Ejeye Larry",
      body: "A brother who's been there through thick and thin.",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center py-[80px] lg:py-[160px] px-[20px] bg-[#a88a4d] bg-opacity-10">
      <div className="futarapt text-[22px] lg:text-[28px] text-[#a88a4d] font-bold">
        OUR GROOMSMEN
      </div>
      <div className="mt-[50px] lg:mt-[80px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-[30px] w-max">
        {groomsmen.map((i, index) => (
          <Item key={index} i={i} />
        ))}
      </div>
    </div>
  );
}

function Item({ i }: { i: any }) {
  return (
    <div className="bg-white w-full h-full max-w-[300px] p-[40px] flex flex-col gap-[20px] items-center justify-center shadow-md rounded-[10px]">
      <div className="w-[150px] h-[150px] relative flex items-center justify-center">
        <div className=" w-full h-full relative rounded-full overflow-hidden">
          <Image src={i.img} alt="peje" fill className="object-cover" />
        </div>
        <div className="text-[15px] w-[30px] h-[30px] bottom-[-15px] bg-white flex items-center justify-center text-[#a88a4d] absolute z-10 rounded-full">
          <BsHeartFill />
        </div>
      </div>
      <div className="futurapt font-medium">{i.role}</div>
      <div className="text-[32px] greatvibes leading-tight text-center">{i.name}</div>
      <div className="text-center italic font-sans text-[#666]">{i.body}</div>
    </div>
  );
}
