"use client";
import img1 from "@/public/images/Bridesmaid/Benson Milliscent.jpeg";
import img2 from "@/public/images/Bridesmaid/Elemihe Uzoh.jpg";
import img3 from "@/public/images/Bridesmaid/Princess Semefene.jpg";
import img4 from "@/public/images/Bridesmaid/Patricia Ejiro.jpg";
import img5 from "@/public/images/Bridesmaid/Uzoma Success.jpg";
import img6 from "@/public/images/Bridesmaid/Osazuwa Peace.jpg";
import img7 from "@/public/images/Bridesmaid/Aidobhese isioma.jpg";
import img8 from "@/public/images/Bridesmaid/Zainab Bah.jpg";
import Image from "next/image";
import { BsHeartFill } from "react-icons/bs";
import { useState } from "react";
import { IoClose } from "react-icons/io5";

export default function Bridesmaid() {
  const [openBridesmaid1, setOpenBridesmaid1] = useState(false);
  const [openBridesmaid2, setOpenBridesmaid2] = useState(false);
  const groomsmen = [
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
      body: "A constant source of support, love and amazing memories.",
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
  ];

  return (
    <div
      id="bridesmaid"
      className="flex flex-col items-center justify-center py-[80px] lg:py-[160px] px-[20px] bg-[#a88a4d] bg-opacity-10"
    >
      <div className="futarapt text-[22px] lg:text-[28px] text-[#a88a4d] font-bold">
        OUR BRIDESMAID
      </div>
      <div className="mt-[50px] lg:mt-[80px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-[30px] w-max">
        <Bridesmaid1 i={{ setOpenBridesmaid1 }} />
        <Bridesmaid2 i={{ setOpenBridesmaid2 }} />
        <Bridesmaid1Writeup i={{ openBridesmaid1, setOpenBridesmaid1 }} />
        <Bridesmaid2Writeup i={{ openBridesmaid2, setOpenBridesmaid2 }} />
        {groomsmen.map((i, index) => (
          <Item key={index} i={i} />
        ))}
      </div>
    </div>
  );
}

function Bridesmaid1({ i }: { i: any }) {
  return (
    <div className="bg-white w-full h-full max-w-[300px] p-[40px] flex flex-col gap-[20px] items-center justify-center shadow-md rounded-[10px]">
      <div className="w-[150px] h-[150px] relative flex items-center justify-center">
        <div className=" w-full h-full relative rounded-full overflow-hidden">
          <Image src={img1} alt="peje" fill className="object-cover" />
        </div>
        <div className="text-[15px] w-[30px] h-[30px] bottom-[-15px] bg-white flex items-center justify-center text-[#a88a4d] absolute z-10 rounded-full">
          <BsHeartFill />
        </div>
      </div>
      <div className="futurapt font-medium">MAID OF HONOR</div>
      <div className="text-[32px] greatvibes leading-tight text-center">
        Benson Milliscent
      </div>
      <div className="text-center italic font-sans text-[#666]">
        Precious is my heart in human form  a rare blend of grace, brilliance, and deep love...
      </div>
      <button
        onClick={() => i.setOpenBridesmaid1(true)}
        className="futarapt font-bold px-[25px] py-[10px] bg-[#a88a4d] text-white text-[14px] rounded-[10px] shadow-md hover:bg-opacity-40 transition-all duration-300"
      >
        READ ALL
      </button>
    </div>
  );
}

function Bridesmaid2({ i }: { i: any }) {
  return (
    <div className="bg-white w-full h-full max-w-[300px] p-[40px] flex flex-col gap-[20px] items-center justify-center shadow-md rounded-[10px]">
      <div className="w-[150px] h-[150px] relative flex items-center justify-center">
        <div className=" w-full h-full relative rounded-full overflow-hidden">
          <Image src={img8} alt="peje" fill className="object-cover" />
        </div>
        <div className="text-[15px] w-[30px] h-[30px] bottom-[-15px] bg-white flex items-center justify-center text-[#a88a4d] absolute z-10 rounded-full">
          <BsHeartFill />
        </div>
      </div>
      <div className="futurapt font-medium">FRIEND</div>
      <div className="text-[32px] greatvibes leading-tight text-center">
        Zainab Bah
      </div>
      <div className="text-center italic font-sans text-[#666]">
        From day one of uni to the very end, she has been more than just a
        friend - she is a sister, a partner in crime, and a constant source of
        inspiratio...
      </div>
      <button
        onClick={() => i.setOpenBridesmaid2(true)}
        className="futarapt font-bold px-[25px] py-[10px] bg-[#a88a4d] text-white text-[14px] rounded-[10px] shadow-md hover:bg-opacity-40 transition-all duration-300"
      >
        READ ALL
      </button>
    </div>
  );
}

function Bridesmaid1Writeup({ i }: { i: any }) {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-black z-50 ${i.openBridesmaid1 == true
        ? "bg-opacity-50 visible"
        : "bg-opacity-0 invisible"
        } transition-all duration-500`}
    >
      <div
        className={`absolute left-0 w-full h-full flex items-center justify-center ${i.openBridesmaid1 == true ? "top-0" : "top-[100vh]"
          } transition-all duration-500 px-[20px]`}
      >
        <div className="bg-white rounded-[10px] w-full max-w-[300px] shadow-md overflow-hidden">
          <div className="bg-[#a88a4d] bg-opacity-20 p-[40px] w-full flex flex-col items-center justify-center relative">
            <button
              onClick={() => i.setOpenBridesmaid1(false)}
              className="absolute top-[20px] right-[20px]"
            >
              <IoClose className="text-[24px] lg:text-[28px]" />
            </button>
            <div className="w-[150px] h-[150px] relative flex items-center justify-center">
              <div className=" w-full h-full relative rounded-full overflow-hidden">
                <Image src={img1} alt="peje" fill className="object-cover" />
              </div>
              <div className="text-[15px] w-[30px] h-[30px] bottom-[-15px] bg-[#eee8da] flex items-center justify-center text-[#a88a4d] absolute z-10 rounded-full">
                <BsHeartFill />
              </div>
            </div>
            <div className="futurapt font-medium mt-[20px]">MAID OF HONOR</div>
            <div className="text-[32px] greatvibes leading-tight text-center mt-[20px]">
              Benson Milliscent
            </div>
            <div className="text-center italic font-sans text-[#666] overflow-y-scroll h-[230px] mt-[10px]">
              Precious is my heart in human form  a rare blend of grace, brilliance, and deep love. She's selfless, faith-driven, and radiates light wherever she goes. Her energy lifts rooms, and her mind challenges mine in the best way. She’s wise, humble, fiercely loyal, and always speaks the truth with love. Through every season, she’s been my biggest cheerleader, therapist, and sister. Simply put, she’s extraordinary the kind of friend who makes life richer and brighter just by being in it.

              Fun Fact: She’s a creative cook, expert gift-giver, natural therapist, and passionate about giving back.

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Bridesmaid2Writeup({ i }: { i: any }) {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-black z-50 ${i.openBridesmaid2 == true
        ? "bg-opacity-50 visible"
        : "bg-opacity-0 invisible"
        } transition-all duration-500`}
    >
      <div
        className={`absolute left-0 w-full h-full flex items-center justify-center ${i.openBridesmaid2 == true ? "top-0" : "top-[100vh]"
          } transition-all duration-500 px-[20px]`}
      >
        <div className="bg-white rounded-[10px] w-full max-w-[300px] shadow-md overflow-hidden">
          <div className="bg-[#a88a4d] bg-opacity-20 p-[40px] w-full flex flex-col items-center justify-center relative">
            <button
              onClick={() => i.setOpenBridesmaid2(false)}
              className="absolute top-[20px] right-[20px]"
            >
              <IoClose className="text-[24px] lg:text-[28px]" />
            </button>
            <div className="w-[150px] h-[150px] relative flex items-center justify-center">
              <div className=" w-full h-full relative rounded-full overflow-hidden">
                <Image src={img8} alt="peje" fill className="object-cover" />
              </div>
              <div className="text-[15px] w-[30px] h-[30px] bottom-[-15px] bg-[#eee8da] flex items-center justify-center text-[#a88a4d] absolute z-10 rounded-full">
                <BsHeartFill />
              </div>
            </div>
            <div className="futurapt font-medium mt-[20px]">FRIEND</div>
            <div className="text-[32px] greatvibes leading-tight text-center mt-[20px]">
              Zainab Bah
            </div>
            <div className="text-center italic font-sans text-[#666] overflow-y-scroll h-[230px] mt-[10px]">
              From day one of uni to the very end, she has been more than just a
              friend - she is a sister, a partner in crime, and a constant
              source of inspiration. Her incredible cooking skills kept me alive
              for 4years 😂 . Her determination and perseverance has motivated
              me in so many ways I can’t even begin to mention. And her
              unwavering loyalty showed me what it means to have a true friend.
              She’s the most spontaneous and courageous person I know.
            </div>
          </div>
        </div>
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
