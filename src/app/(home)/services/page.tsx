"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function ServicesPage() {
    return (
        <div className="space-y-8 py-12 md:py-24">
            <Image src="/images/home_bg1.jpg" alt="hero image" className="fixed -z-30 w-screen h-screen inset-0 blur-2xl object-cover" width={1920} height={1080} />
            <div className="max-w-[85rem] mx-auto bg-white/50 rounded-3xl p-6 md:p-10 flex flex-col md:flex-row gap-6 md:gap-10 justify-between items-center">
                <div className="w-full md:w-[50%] flex flex-col gap-6 md:gap-10">
                    <h1 className="text-2xl md:text-3xl font-medium">USA Imports to India</h1>
                    <p className="text-sm md:text-base">
                        USA Imports best Imports from USA to India and Cheapest way to import all industrial part and consolidate shipment by IBK Engineers Pvt Ltd. We have office in imports from USA to India Global imports Best and Cheapest way to import all industrial part help you fast and GST invoice for tax benefit.
                    </p>
                    <Link href="" className="py-2 group border-b border-black flex gap-2 justify-center items-center w-fit">
                        Know more by contacting us
                        <ArrowUpRight className="text-black stroke-[1.2px] group-hover:text-white size-6 md:size-7 rounded-full p-1 bg-black/10 group-hover:bg-black transition-all duration-300 group-hover:translate-x-1 group-hover:rotate-45" />
                    </Link>
                </div>
                <Image src="/images/illustration4.jpg" alt="hero image" className="w-full md:w-[50%] rounded-xl" width={500} height={500} />
            </div>


            <div className="max-w-[85rem] mx-auto bg-white/50 rounded-3xl p-6 md:p-10 flex flex-col-reverse md:flex-row gap-6 md:gap-10 justify-between items-center">
                <Image src="/images/illustration4.jpg" alt="hero image" className="w-full md:w-[50%] rounded-xl" width={500} height={500} />
                <div className="w-full md:w-[50%] flex flex-col gap-6 md:gap-10">
                    <h1 className="text-2xl md:text-3xl font-medium">Global Imports</h1>
                    <p className="text-sm md:text-base">
                        Global imports from USA, Europe, China, Japan and other countries. you can call us. We supply all brand products McMaster Carr, CarrLane, Fastnal, Mahr, Crossby.
                    </p>
                    <Link href="" className="py-2 group border-b border-black flex gap-2 justify-center items-center w-fit">
                        Know more by contacting us
                        <ArrowUpRight className="text-black stroke-[1.2px] group-hover:text-white size-6 md:size-7 rounded-full p-1 bg-black/10 group-hover:bg-black transition-all duration-300 group-hover:translate-x-1 group-hover:rotate-45" />
                    </Link>
                </div>
            </div>


            <div className="max-w-[85rem] mx-auto bg-white/50 rounded-3xl p-6 md:p-10 flex flex-col md:flex-row gap-6 md:gap-10 justify-between items-center">
                <div className="w-full md:w-[50%] flex flex-col gap-6 md:gap-10">
                    <h1 className="text-2xl md:text-3xl font-medium">Door to Door Imports</h1>
                    <p className="text-sm md:text-base">
                        You buy all your industrial imports in Indian rupees, fast, easy and low cost.
                    </p>
                    <Link href="" className="py-2 group border-b border-black flex gap-2 justify-center items-center w-fit">
                        Know more by contacting us
                        <ArrowUpRight className="text-black stroke-[1.2px] group-hover:text-white size-6 md:size-7 rounded-full p-1 bg-black/10 group-hover:bg-black transition-all duration-300 group-hover:translate-x-1 group-hover:rotate-45" />
                    </Link>
                </div>
                <Image src="/images/illustration4.jpg" alt="hero image" className="w-full md:w-[50%] rounded-xl" width={500} height={500} />
            </div>
        </div>
    );
}
