"use client"
import { useEffect } from "react";

export default function Gallery({ reload }: { reload: boolean }) {

    useEffect(() => {
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
    }, [reload]);

    return <div id="wedding-gallery" className="w-full max-w-[800px]" />;
}