"use client";
import logo2 from "@/public/images/logo2.png";
import logo from "@/public/images/logo.png";
import Image from "next/image";
import { useEffect, useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import Link from "next/link";

export default function Header() {
  const [loading, setLoading] = useState(true);
  const [screenHeight, setScreenHeight] = useState(0);
  const [scrollTop, setScrollTop] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  //Update screenHeight on mount and everytime the browser window is resized
  useEffect(() => {
    setLoading(false);
    const updateHeight = () => {
      setScreenHeight(window.innerHeight);
    };

    updateHeight();

    window.addEventListener("resize", updateHeight);

    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

  //Update scrollTop on mount and everytime the user scrolls
  useEffect(() => {
    const updateScrollTop = () => {
      setScrollTop(window.scrollY);
    };

    updateScrollTop();

    window.addEventListener("scroll", updateScrollTop);

    return () => {
      window.removeEventListener("scroll", updateScrollTop);
    };
  }, []);

  const navLinks = [
    { name: "HOME", url: "/" },
    { name: "COUPLE", url: "/#couple" },
    { name: "GROOMSMEN", url: "/#groomsmen" },
    { name: "BRIDESMAID", url: "/#bridesmaid" },
    { name: "GIFT", url: "/#gift" },
    { name: "GALLERY", url: "/#gallery" },
    { name: "EVENTS", url: "/#events" },
  ];

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 text-white ${
        scrollTop >= screenHeight ? "p-0" : "px-[20px] lg:px-[60px] py-[20px]"
      } transition-all duration-300`}
    >
      <div
        className={`bg-black w-full p-[20px] lg:p-[30px] ${scrollTop >= screenHeight ? "bg-opacity-100":"bg-opacity-20 rounded-[10px]"} flex items-center justify-between transition-all duration-300`}
      >
        <div className="greatvibes text-[20px]">
          <Image
            src={logo2}
            alt="peje"
            className="w-[40px] h-[25px] lg:w-[80px] lg:h-[51px]"
          />
        </div>
        <button onClick={() => setIsMenuOpen(true)} className="lg:hidden">
          <IoMenu className="text-[25px]" />
        </button>

        {/*Mobile Nav Start */}
        <div
          className={`fixed lg:static top-0 transition-all duration-300 ${
            isMenuOpen ? "right-0" : "right-[-100vw]"
          } bg-black lg:bg-transparent w-full lg:w-max h-[120vh] pb-[20vh] lg:pb-0 lg:h-max flex flex-col items-center justify-center`}
        >
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-[30px] right-[30px] lg:hidden"
          >
            <IoClose className="text-[28px]" />
          </button>
          <div className="lg:hidden">
            <Image src={logo} alt="peje" className="w-[150px] h-[102px]" />
          </div>
          <div className="flex flex-col lg:flex-row items-center mt-[70px] lg:mt-0 gap-[30px] lg:mr-[20px] font-medium futurapt">
            {navLinks.map((i, index) => (
              <NavItem
                key={index}
                i={{ name: i.name, setIsMenuOpen, url: i.url }}
              />
            ))}
          </div>
        </div>
        {/*Mobile Nav End */}
      </div>
    </div>
  );
}

function NavItem({ i }: { i: any }) {
  return (
    <Link
      onClick={() => i.setIsMenuOpen(false)}
      href={i.url}
      className="lg:relative group"
    >
      {i.name}
      <div className="hidden lg:flex absolute bottom-[-5px] w-0 group-hover:w-full transition-all duration-300 h-[3px] bg-white rounded-full"></div>
    </Link>
  );
}
