"use client";
import Image from "next/image";
import Header from "@/components/header";
import HeroSection from "@/components/hero";
import { createRef } from "react";

export default function Home() {
  const page = createRef<HTMLDivElement | null>();

  return (
    <div ref={page} className="w-full overflow-x-hidden flex relative">
      <div className="w-full relative">
        <Header />
        <HeroSection />
      </div>
    </div>
  );
}
