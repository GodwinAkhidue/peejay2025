"use client"
import { useEffect } from "react";

export default function Gallery({ initiate_gallery }: { initiate_gallery: any }) {

    useEffect(() => {
        initiate_gallery();
    }, []);

    return <div id="wedding-gallery" className="w-full max-w-[800px] " />;
}