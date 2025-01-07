"use client";
import Header from "@/components/header";
import HeroSection from "@/components/hero";
import { createRef } from "react";
import Couple from "@/components/couple";

export default function Home() {
  const page = createRef<HTMLDivElement | null>();

  return (
    <div ref={page} className="w-full overflow-x-hidden flex relative">
      <div className="w-full relative">
        <Header />
        <HeroSection />
        <Couple />
        <div
          className="w-full h-[300px] lg:h-[500px]"
          style={{
            backgroundImage: `url(/images/heroimg1.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        >
          <div className="w-full h-full bg-black bg-opacity-20"></div>
        </div>
      </div>
    </div>
  );
}
