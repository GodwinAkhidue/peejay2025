import { MdFullscreen } from "react-icons/md";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

export default function Gallery() {
  const images = [
    "/images/Gallery/img1.jpg",
    "/images/Gallery/img2.jpg",
    "/images/Gallery/img3.jpg",
    "/images/Gallery/img4.jpg",
    "/images/Gallery/img5.jpg",
    "/images/Gallery/img6.jpg",
    "/images/Gallery/img7.jpg",
    "/images/Gallery/img8.jpg",
  ]

  const openGallery = () => {
    Fancybox.show(
      images.map((item) => ({
        src: item,
        thumb: item,
        alt: "peejay2025",
      })),
      {
        Carousel: {
          infinite: false,
        },
      }
    );
  };

  return (
    <div id="gallery" className="flex flex-col items-center justify-center pt-[80px] lg:pt-[160px] px-[20px] bg-[#a88a4d] bg-opacity-10">
      <div className="futarapt text-[22px] lg:text-[28px] text-[#a88a4d] font-bold">
        GALLERY
      </div>
      <div className="mt-[30px] md:mt-[60px] lg:mt-[100px]">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-[30px]">
          {images && images.length > 0 &&
            images.map((i: any, index: any) => (
              <div key={index} className="w-full relative group">
                <button
                  onClick={() => openGallery()}
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
      </div>
    </div>
  );
}
