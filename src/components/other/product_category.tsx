"use client"

import { PRODUCT_CATEGORIES } from "@/lib/constants"
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const ProductCategory = () => {
    const [loadItems, setLoadItems] = useState(8);

    return (
        <div className="flex flex-col gap-5 items-center">
            <div className="grid grid-cols-4 gap-y-10 gap-x-12">
                {
                    PRODUCT_CATEGORIES.slice(0, loadItems).map((product, index) => (
                        <div
                            key={index}
                            className=" w-[17rem] h-[18rem] p-3 flex flex-col justify-between animate-fade-in-scale delay-500 shadow-2xl gap-2 bg-accent-light-gray/25 border border-black/5 rounded-2xl">
                            <div className="flex h-[70%] relative justify-between gap-5">
                                <Image className="w-[80%] rounded-xl" src="/images/illustration4.jpg" width={200} height={400} alt="hero image" />
                                <div className="absolute overflow-hidden right-0 top-0 group">
                                    <Link
                                        href="/about"
                                        className="p-1 pl-4 group flex gap-2 justify-center items-center hover:bg-black/20 hover:backdrop-blur-xs text-white text-lg rounded-full transition-all duration-500 **:transition-all **:duration-500"
                                    >
                                        <span className="translate-x-52 z-10 group-hover:translate-x-0"> Explore Category </span>
                                        <ArrowUpRight className="size-9 z-20 text-black group-hover:text-white rounded-full p-2 bg-white/50 group-hover:bg-black/20 border border-transparent group-hover:border-black/50 group-hover:cursor-pointer" />
                                    </Link>
                                </div>
                            </div>
                            <div className="h-[20%] flex gap-2 justify-center items-center pr-5">
                                <Link href="" className=" text-lg text-center font-medium">{product.title}</Link>
                                {/* <button className="p-2 px-3 rounded-full text-sm bg-accent-magenta/60 text-white "> Explore All </button> */}
                            </div>
                        </div>
                    ))
                }
            </div>

            {loadItems < PRODUCT_CATEGORIES.length ?
                <button
                    onClick={() => setLoadItems(24)}
                    className="mt-14 p-2 px-5 w-fit bg-accent-magenta/10 hover:bg-accent-magenta/15 rounded-lg text-accent-magenta font-medium cursor-pointer"
                >
                    Load More Products
                </button>
                :
                <button
                    onClick={() => setLoadItems(8)}
                    className="mt-14 p-2 px-5 w-fit border border-accent-magenta/20 hover:bg-accent-magenta/5 rounded-lg text-accent-magenta font-medium cursor-pointer"
                >
                    Hide More Products
                </button>
            }
        </div>
    )
}

export default ProductCategory
