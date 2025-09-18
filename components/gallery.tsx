"use client"
import { useEffect, useState } from "react";
import Gallery from "./cloudinary_gallery";

declare global {
  interface Window {
    cloudinaryWidget: any;
    cloudinary: any;
  }
}

export default function Gallery_Page() {

  const [reload, setReload] = useState(false);

  useEffect(() => {
    // Attach upload widget to window so it doesn't recreate
    if (typeof window !== "undefined" && !window.cloudinaryWidget) {
      window.cloudinaryWidget = window.cloudinary.createUploadWidget(
        {
          cloudName: "dvi3p8qic",
          uploadPreset: "pj25wedding",
          sources: ["local", "camera"],
          multiple: true,
          maxFiles: 10,
        },
        (error: any, result: any) => {
          if (!error && result && result.event === "close") {
            setReload(false);
          }
        }
      );
    }
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!reload) {
        initiate_gallery();
        setReload(!reload);
      }
    }, 1000);

    return () => clearTimeout(timeout)
  }, [reload])

  const openWidget = () => {
    if (window.cloudinaryWidget) {
      window.cloudinaryWidget.open();
    }
  };

  const initiate_gallery = () => {
    const script = document.createElement("script");
    script.src = "https://product-gallery.cloudinary.com/latest/all.js";
    script.async = true;
    script.onload = () => {
      if (window.cloudinary) {
        const gallery = (window as any).cloudinary.galleryWidget({
          cloudName: "dvi3p8qic",
          mediaAssets: [{ tag: "pj25wedding" }],
          container: "#wedding-gallery",
        });
        gallery.render();
      }
    };
    document.body.appendChild(script);
  }

  return (
    <div id="gallery" className="flex flex-col items-center justify-center py-[80px] lg:py-[160px] px-[20px] bg-[#a88a4d] bg-opacity-10">
      <div className="futarapt text-[22px] lg:text-[28px] text-[#a88a4d] font-bold">
        GALLERY
      </div>
      <button
        className="justify-self-center w-[200px] text-white bg-[#a88a4d] h-[50px] mt-[30px] rounded-full flex items-center justify-center font-semibold cursor-pointer"
        onClick={() => openWidget()}
      >
        ADD YOUR PICTURE(S)
      </button>
      <div className="w-full text-center mt-[30px] md:mt-[60px] lg:mt-[100px] flex justify-center min-h-[430px] lg:h-[731px]">
        {reload && <Gallery initiate_gallery={initiate_gallery} />}
      </div>
      <button
        className="justify-self-center w-[150px] text-white bg-[#a88a4d] h-[50px] mt-[30px] rounded-full flex items-center justify-center font-semibold cursor-pointer"
        onClick={() => setReload(false)}
      >
        Refresh
      </button>
    </div >
  );
}
