"use client";
import { useState } from "react";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { IoIosGift } from "react-icons/io";
import { IoClose, IoCopyOutline } from "react-icons/io5";
import { IoCheckmarkDone } from "react-icons/io5";

export default function Gift() {
  const [openGift, setOpenGift] = useState(false);

  return (
    <div
      id="gift"
      className="w-full h-[300px] lg:h-[500px]"
      style={{
        backgroundImage: `url(/images/giftbg.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="w-full h-full text-white bg-black bg-opacity-20 flex flex-col items-center justify-center px-[20px] gap-[20px] lg:gap-[30px]">
        <div className="greatvibes text-[40px] lg:text-[100px]">
          Gift The Couple
        </div>
        <button
          onClick={() => setOpenGift(true)}
          className="bg-[#a88a4d] hover:bg-white hover:text-[#a88a4d] transition-all duration-300 flex gap-[5px] lg:gap-[10px] items-center justify-center w-[120px] lg:w-[200px] h-[50px] lg:h-[80px] futurapt rounded-[10px] shadow-md lg:text-[20px]"
        >
          <IoIosGift className="text-[24px] lg:text-[32px]" />
          GIFT
        </button>
      </div>
      <Modal i={{ openGift, setOpenGift }} />
    </div>
  );
}

function Modal({ i }: { i: any }) {
  const acctNumber = "1122334455";
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(acctNumber).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 5000);
    });
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-black z-40 ${
        i.openGift == true ? "bg-opacity-50 visible" : "bg-opacity-0 invisible"
      } transition-all duration-500`}
    >
      <div
        className={`absolute left-0 w-full h-full flex items-center justify-center ${
          i.openGift == true ? "top-0" : "top-[100vh]"
        } transition-all duration-500 px-[20px]`}
      >
        <div className="bg-white rounded-[10px] w-full max-w-[700px] shadow-md overflow-hidden">
          <div className="bg-[#a88a4d] bg-opacity-20 p-[40px] w-full flex flex-col items-center justify-center relative">
            <button
              onClick={() => i.setOpenGift(false)}
              className="absolute top-[20px] right-[20px]"
            >
              <IoClose className="text-[24px] lg:text-[28px]" />
            </button>
            <div className="greatvibes text-[40px] lg:text-[100px]">
              Gift The Couple
            </div>
            <div className="futarapt text-[18px] lg:text-[28px] font-bold mt-[5px]">
              ACCOUNT DETAILS
            </div>
            <div className="flex items-center gap-[10px] mt-[15px]">
              <div className="futarapt text-[18px] lg:text-[28px] font-bold">
                {acctNumber}
              </div>
              <button
                onClick={() => copy()}
                className="bg-white text-[14px] font-medium py-[3px] px-[10px] rounded-full shadow-md"
              >
                {copied ? (
                  <div className="flex items-center gap-[5px]">
                    <IoCheckmarkDone className="text-[16px] text-green-500" />{" "}
                    Copied
                  </div>
                ) : (
                  <div className="flex items-center gap-[5px]">
                    <IoCopyOutline className="text-[16px]" /> Copy
                  </div>
                )}
              </button>
            </div>
            <div className="futarapt text-[18px] lg:text-[28px] font-bold mt-[15px]">
              BANK NAME
            </div>
            <div className="futarapt text-[18px] lg:text-[28px] font-bold mt-[15px]">
              ACCOUNT NAME
            </div>
            <div className="mt-[15px] text-[14px] italic text-center">
              Need to confirm your transaction? Reach out to us on whatsapp
            </div>
            <a
              href="https://wa.me/0000000000"
              className="mt-[15px] text-[32px] text-[#25d366]"
            >
              <FaSquareWhatsapp />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
