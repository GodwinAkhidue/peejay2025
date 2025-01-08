import img1 from "@/public/images/Bridesmaid/Benson Milliscent.jpg";
import img2 from "@/public/images/Bridesmaid/Elemihe Uzoh.jpg";
import img3 from "@/public/images/Bridesmaid/Princess Semefene.jpg";
import img4 from "@/public/images/Bridesmaid/Patricia Ejiro.jpg";
import img5 from "@/public/images/Bridesmaid/Uzoma Success.jpg";
import img6 from "@/public/images/Bridesmaid/Osazuwa Peace.jpg";
import img7 from "@/public/images/Bridesmaid/Aidobhese isioma.jpg";
import img8 from "@/public/images/Bridesmaid/Zainab Bah.jpg";
import Image from "next/image";
import { BsHeartFill } from "react-icons/bs";

export default function Bridesmaid() {
  const groomsmen = [
    {
      img: img1,
      role: "MAID OF HONOR",
      name: "Benson Milliscent",
      body: "Apologies, but it seems the bride was a bit emotional when talking about this person and made the writeup a bit too long, might have to dedicate an entire webpage just for this person.",
    },
    {
      img: img2,
      role: "FRIEND",
      name: "Elemihe Uzoh",
      body: "She is an inspiration. She’s an amazing cook and business oriented.",
    },
    {
      img: img3,
      role: "FRIEND",
      name: "Princess Semefene",
      body: "Great at taking photos and videos of important moments the bride might want to relive. A good dancer whose energy is contagious.",
    },
    {
      img: img4,
      role: "FRIEND",
      name: "Patricia Ejiro",
      body: "My friend who’s always made life brighter. She’s an amazing Cook",
    },
    {
      img: img5,
      role: "FRIEND",
      name: "Uzoma Success",
      body: "A constant source of support, love and amazing memories. A constant source of support,Love and amazing memories.",
    },
    {
      img: img6,
      role: "FRIEND",
      name: "Osazuwa Peace",
      body: "A constant source of support and love. She’s an amazing person, ultimate story teller, and a great chef.",
    },
    {
      img: img7,
      role: "FRIEND",
      name: "Aidobhese isioma",
      body: "She has an humble attitude and she’s so smart. She’s a  supporter and also a good chef.",
    },
    {
      img: img8,
      role: "FRIEND",
      name: "Zainab Bah",
      body: "Omo, might also have to dedicate an entire webpage just for this person.",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center py-[80px] lg:py-[160px] px-[20px] bg-[#a88a4d] bg-opacity-10">
      <div className="futarapt text-[22px] lg:text-[28px] text-[#a88a4d] font-bold">
        OUR BRIDESMAID
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
      <div className="text-[32px] greatvibes leading-tight text-center">
        {i.name}
      </div>
      <div className="text-center italic font-sans text-[#666]">{i.body}</div>
    </div>
  );
}
