"use client";

import React, { type SVGProps } from "react";
import { LogoCarousel } from "@/components/ui/logo-carousel";

// Массив с логотипами
const allLogos = [
    { name: "Apple", id: 1, img: "/images/company/0.jpg" },
    { name: "Apple", id: 1, img: "/images/company/1.jpg" },
    { name: "Apple", id: 1, img: "/images/company/3.jpg" },
    { name: "Apple", id: 1, img: "/images/company/4.jpg" },
    { name: "Apple", id: 1, img: "/images/company/5.jpg" },
    { name: "Apple", id: 1, img: "/images/company/6.jpg" },
    { name: "Apple", id: 1, img: "/images/company/7.jpg" },
    { name: "Apple", id: 1, img: "/images/company/8.jpg" },
    { name: "Apple", id: 1, img: "/images/company/9.jpg" },
    { name: "Apple", id: 1, img: "/images/company/10.jpg" },
    { name: "Apple", id: 1, img: "/images/company/11.jpg" },
    { name: "Apple", id: 1, img: "/images/company/12.jpg" },
];

export function LogoCarouselComp() {
    return (
        <div className="py-5 pb-10 bg-accent-dark-gray/30">
            <div className=" max-w-[85rem] mx-auto rounded-3xl py-10 flex w-full flex-col items-center space-y-16">
                <div className="text-center">
                    <h1 className="text-4xl font-medium">
                        Our Clients
                    </h1>
                </div>

                <LogoCarousel columnCount={6} logos={allLogos} />
            </div>
        </div>
    );
}
