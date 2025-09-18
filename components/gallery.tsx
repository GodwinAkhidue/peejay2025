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
    const interval = setInterval(() => {
      setReload(!reload)
    }, 5000);
    return clearInterval(interval);
  }, [])

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
          if (!error && result && result.event === "success") {
            const timeout = setTimeout(() => {
              setReload(!reload)
            }, 2000);
            return clearTimeout(timeout)
          }
        }
      );
    }
  }, []);

  const openWidget = () => {
    if (window.cloudinaryWidget) {
      window.cloudinaryWidget.open();
    }
  };

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
      <div className="w-full text-center mt-[30px] md:mt-[60px] lg:mt-[100px] flex justify-center">
        <Gallery reload={reload} />
      </div>

      {/* <div className="mt-[30px] md:mt-[60px] lg:mt-[100px]">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-[30px]">
          {images && images.length > 0 &&
            images.map((i: any, index: any) => (
              <div key={index} className="w-full relative group">
                <button
                  onClick={() => openGallery(index)}
                  className="w-full h-full absolute top-0 left-0 invisible opacity-0 group-hover:opacity-100 group-hover:visible bg-[#00000080] transition-all duration-300 flex items-center justify-center text-white text-[60px] lg:text-[96px]"
                >
                  <MdFullscreen />
                </button>
                <img
                  src={i}
                  alt="sv"
                  className="w-full block mb-[30px] mx-auto"
                  loading="lazy"
                />
              </div>
            ))}
        </div>
      </div> */}
    </div>
  );
}
