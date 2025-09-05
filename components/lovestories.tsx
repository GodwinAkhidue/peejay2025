import { BsHeartFill } from "react-icons/bs";
import { MdFullscreen } from "react-icons/md";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

export default function LoveStories() {

  const images = [
    "/images/Gallery/bride.jpg",
    "/images/Gallery/groom.jpeg",
    "/images/Gallery/img2.jpg",
    "/images/Gallery/img9.jpg",
    "/images/Gallery/img1.jpg",
    "/images/Gallery/img3.jpg",
    "/images/Gallery/img5.jpg",
    "/images/Gallery/img6.jpg",
    "/images/Gallery/img8.jpg",
    "/images/save the date copy.jpg",
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

  const lovestories = [
    {
      video: '/images/Lovestories/proposalvideo.mp4',
      type: "the proposal video",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center py-[80px] lg:py-[160px] px-[20px] bg-[#a88a4d] bg-opacity-10 w-full h-full">
      <div className="mb-[80px] lg:mb-[160px] flex flex-col items-center justify-center">
        <div className="futarapt text-[22px] lg:text-[28px] text-[#a88a4d] font-bold lg:leading-tight">
          OUR LOVE STORY
        </div>
        <div className="text-center italic mt-[10px] lg:mt-[20px] lg:text-[20px]">
          Our love story began in the most unexpected of ways, yet it was divinely orchestrated—written long before we ever knew.
        </div>
        <div className="mt-[20px] lg:mt-[30px] w-full flex justify-center">
          <div className="w-full max-w-[400px] h-max relative group">
            <button
              onClick={() => openGallery()}
              className="w-full h-full absolute top-0 left-0 invisible opacity-0 group-hover:opacity-100 group-hover:visible bg-[#00000080] transition-all duration-300 flex items-center justify-center text-white text-[60px] lg:text-[96px]"
            >
              <MdFullscreen />
            </button>
            <img
              src={images[0]}
              alt="sv"
              className="w-full block"
              loading="lazy"
            />
          </div>
        </div>
        <div className="text-center italic mt-[20px] lg:mt-[30px] lg:text-[20px]">
          We first crossed paths in late 2021. He had come to my school for a program,
          carrying the weight of anointing and grace as a Pastor sent to bless us. I was
          serving as the welfare lead, not knowing destiny was quietly weaving its threads.
          After the program, we found ourselves driving around, sharing conversations so
          deep and natural, it felt as though we had known each other for years. He taught,
          I listened, I questioned, and he answered—planting seeds that would later bloom.
          Two days later, he returned to his chapter, and life carried us on separate paths.
        </div>
        <div className="mt-[20px] lg:mt-[30px] w-full flex justify-center">
          <div className="w-full max-w-[400px] h-max relative group">
            <button
              onClick={() => openGallery()}
              className="w-full h-full absolute top-0 left-0 invisible opacity-0 group-hover:opacity-100 group-hover:visible bg-[#00000080] transition-all duration-300 flex items-center justify-center text-white text-[60px] lg:text-[96px]"
            >
              <MdFullscreen />
            </button>
            <img
              src={images[1]}
              alt="sv"
              className="w-full block"
              loading="lazy"
            />
          </div>
        </div>
        <div className="text-center italic mt-[20px] lg:mt-[30px] lg:text-[20px]">
          But destiny never forgets its own. In mid–2023, our worlds aligned again
          through a mutual connection. We began to work together, and in no time, our
          schedules intertwined. Between church activities and business pursuits,
          we were constantly in each other’s presence—building not just moments,
          but a profound friendship. Our conversations grew deeper, our laughter louder,
          and before long, friendship gave way to something eternal—love.
        </div>
        <div className="columns-1 md:columns-2 gap-[30px] mt-[20px] lg:mt-[30px]">
          {images && images.length > 0 &&
            images.slice(2, 4).map((i: any, index: any) => (
              <div key={index} className="w-full max-w-[400px] relative group">
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
        <div className="text-center italic mt-[20px] lg:mt-[30px] lg:text-[20px]">
          By November of that year, love took its rightful seat. He looked at me and
          said with certainty, “I am going to marry you. So know it now.” Not long after,
          he was transferred to Uniport, and distance tested us. But love that is divinely
          sealed cannot be undone. Long distance only deepened what heaven had already ordained.
        </div>
        <div className="columns-1 md:columns-2 lg:columns-3 gap-[30px] mt-[20px] lg:mt-[30px]">
          {images && images.length > 0 &&
            images.slice(4, 7).map((i: any, index: any) => (
              <div key={index} className="w-full max-w-[400px] relative group">
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
        <div className="text-center italic mt-[20px] lg:mt-[30px] lg:text-[20px]">
          And so, days rolled into months, and our love only strengthened. We became
          engaged, and now here in 2025, forever stands before us—no longer a promise,
          but a covenant about to be lived.
        </div>
        <div className="columns-1 md:columns-2 gap-[30px] mt-[20px] lg:mt-[30px]">
          {images && images.length > 0 &&
            images.slice(7, 9).map((i: any, index: any) => (
              <div key={index} className="w-full max-w-[400px] relative group">
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
        <div className="text-center italic mt-[20px] lg:mt-[30px] lg:text-[20px]">
          What began as a meeting in service has become the love of a lifetime. Written, sealed, and now revealed.
          What was once a promise now rises as a covenant. What heaven wrote, earth now witnesses.
          And so, our forever begins—majestic, unshaken, and sealed in love eternal.
        </div>
        <div className="columns-1 gap-[30px] mt-[20px] lg:mt-[30px]">
          {images && images.length > 0 &&
            images.slice(9, 10).map((i: any, index: any) => (
              <div key={index} className="w-full max-w-[400px] relative group">
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
      <div className="futarapt text-[22px] lg:text-[28px] text-[#a88a4d] font-bold">
        THE PROPOSAL
      </div>
      <div className="mt-[50px] lg:mt-[80px] flex items-center justify-center gap-[30px] ">
        {lovestories.map((i, index) => (
          <Item key={index} i={i} />
        ))}
      </div>
    </div>
  );
}

function Item({ i }: { i: any }) {
  return (
    <div className="bg-white w-full h-full p-[20px] lg:p-[40px] flex flex-col gap-[20px] items-center justify-center shadow-md rounded-[10px]">
      <div className="relative flex justify-center items-center">
        <div className="h-full max-h-[80vh] relative rounded overflow-hidden">
          <video autoPlay loop id="myVideo" className="w-full h-full" playsInline preload="auto">
            <source src={i.video} type="video/mp4" />
          </video>
        </div>

        <div className="text-[15px] w-[30px] h-[30px] bottom-[-15px] bg-white flex items-center justify-center text-[#a88a4d] absolute z-10 rounded-full">
          <BsHeartFill />
        </div>
      </div>
      {/* <div className="futurapt font-medium">{i.type}</div> */}
      <div className="text-[32px] greatvibes leading-tight text-center">{i.type}</div>
      {/* <div className="text-center italic font-sans text-[#666]">{i.body}</div> */}
    </div>
  );
}