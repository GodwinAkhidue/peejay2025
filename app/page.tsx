"use client";
import Header from "@/components/header";
import HeroSection from "@/components/hero";
import { createRef, useEffect } from "react";
import Couple from "@/components/couple";
import Bridesmaid from "@/components/bridesmaid";
import GroomsMen from "@/components/groomsmen";
import Gift from "@/components/gift";
import Events from "@/components/events";
import LoveStories from "@/components/lovestories";
import AOS from "aos";
import 'aos/dist/aos.css';

export default function Home() {
  const page = createRef<HTMLDivElement | null>();

  useEffect(() => {
    AOS.init({
      once: true,
      duration: 600
    });
    AOS.refresh();
  }, [])

  return (
    <div ref={page} className="">
      <Header />
      <HeroSection />
      <Couple />
      <div
        className="w-full h-[300px] lg:h-[500px]"
        style={{
          backgroundImage: `url(/images/heroimg1.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="w-full h-full text-white bg-black bg-opacity-20 flex flex-col items-center justify-center px-[20px]">
          <div className="greatvibes text-[40px] lg:text-[100px]">
            Our Love Stories
          </div>
          <div className="italic text-center text-[14px] lg:text-[24px] opacity-60 max-w-[500px] lg:max-w-[800px]">
            The wonderful journey so far.
          </div>
        </div>
      </div>
      <LoveStories />
      {/* <div
        className="w-full h-[300px] lg:h-[500px]"
        style={{
          backgroundImage: `url(/images/lens.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="w-full h-full text-white bg-black bg-opacity-20 flex flex-col items-center justify-center px-[20px]">
          <div className="greatvibes text-[40px] lg:text-[100px]">
            Shared Moments
          </div>
          <div className="italic text-center text-[14px] lg:text-[24px] opacity-60 max-w-[500px] lg:max-w-[800px]">
            Upload your favorite snapshots and be part of our gallery.
            Let us relive the day through your lens.
          </div>
        </div>
      </div> */}
      <div
        className="w-full h-[300px] lg:h-[500px]"
        style={{
          backgroundImage: `url(/images/heroimg2.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="w-full h-full text-white bg-black bg-opacity-20 flex flex-col items-center justify-center px-[20px]">
          <div className="greatvibes text-[40px] lg:text-[100px]">
            Our Closest Companions
          </div>
          <div className="italic text-center text-[14px] lg:text-[24px] opacity-60 max-w-[500px] lg:max-w-[800px]">
            Every great love story has its cherished circle — those who stand
            beside us, laugh with us, and celebrate our journey. Meet the ones
            who make this moment even more special.
          </div>
        </div>
      </div>
      <GroomsMen />
      <div
        className="w-full h-[300px] lg:h-[500px]"
        style={{
          backgroundImage: `url(/images/heroimg3.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="w-full h-full text-white bg-black bg-opacity-20 flex flex-col items-center justify-center px-[20px]"></div>
      </div>
      <Bridesmaid />
      <Gift />
      <Events />
      <div
        className="w-full h-screen"
        style={{
          backgroundImage: `url(/images/heroimg1.jpg)`,
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          backgroundPosition: "top"
        }}
      >
        <div className="w-full h-full text-white bg-black bg-opacity-20 flex flex-col items-center justify-center px-[20px]">
          <div className="greatvibes text-[40px] lg:text-[100px]">
            Thank You.
          </div>
          <div className="greatvibes text-[40px] lg:text-[100px]">
            Precious & Jeffery
          </div>
        </div>
      </div>
    </div>
  );
}
