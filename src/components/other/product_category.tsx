"use client"

import { PRODUCTS } from "@/lib/constants"
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, EllipsisVertical } from "lucide-react";
import router from "next/router";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

const ProductCategory = () => {
    const [loadItems, setLoadItems] = useState(8);

    return (
        <div className="flex flex-col gap-5 items-center">
            <div className="grid grid-cols-4 gap-y-10 gap-x-12">
                {
                    PRODUCTS.slice(0, loadItems).map((product, index) => (
                        <div
                            key={index}
                            className=" w-[17rem] h-[18rem] p-3 flex flex-col justify-between animate-fade-in-scale delay-500 shadow-2xl gap-2 bg-accent-light-gray/40 border border-black/5 rounded-2xl">
                            <div className="flex h-[70%] relative justify-between gap-2">
                                <Image className="w-[82%] rounded-xl" src="/images/illustration4.jpg" width={200} height={400} alt="hero image" />
                                <Popover>
                                    <PopoverTrigger className="cursor-pointer h-fit rounded-full">
                                        <EllipsisVertical className="size-9 z-20 text-black group-hover:text-white rounded-full p-2 bg-white/50 group-hover:bg-black/20 border border-transparent group-hover:border-black/50 group-hover:cursor-pointer" />
                                    </PopoverTrigger>
                                    <PopoverContent>Place content for the popover here.</PopoverContent>
                                </Popover>
                            </div>
                            <div className="h-[20%] relative flex gap-2 justify-between items-center">
                                <Link href={product.category} className="w-[80%] text-lg font-medium">{product.category}</Link>
                                <div className="absolute overflow-hidden right-0 top-0 group">
                                    <button
                                        // onClick={() => router.push(product)}
                                        className="p-1 pl-4 mt-1 group flex gap-2 justify-center items-center hover:bg-black/20 hover:backdrop-blur-xs text-white text-lg rounded-full transition-all duration-500 **:transition-all **:duration-500"
                                    >
                                        <span className="translate-x-52 z-10 group-hover:translate-x-0"> Explore Category </span>
                                        <ArrowUpRight className="size-9 z-20 text-black group-hover:text-white rounded-full p-2 bg-white/50 group-hover:bg-black/20 border border-transparent group-hover:border-black/50 group-hover:cursor-pointer" />
                                    </button>
                                </div>
                                {/* <button className="p-2 px-3 rounded-full text-sm bg-accentmagenta/60 text-white "> Explore All </button> */}
                            </div>
                        </div>
                    ))
                }
            </div>

            {
                loadItems < PRODUCTS.length ?
                    <Link
                        href="/products"
                        className="group mt-10 flex gap-2 justify-center items-center bg-black text-white p-3 px-8 text-lg rounded-full **:transition-all **:duration-300"
                    >
                        <span> Explore All Categories </span>
                        <ArrowUpRight className="size-0 group-hover:size-5" />
                    </Link>
                    :
                    <button
                        onClick={() => setLoadItems(8)}
                        className="mt-14 p-2 px-5 w-fit border border-accent-magenta/20 hover:bg-accent-magenta/5 rounded-lg text-accent-magenta font-medium cursor-pointer"
                    >
                        Hide Categories
                    </button>
            }
        </div >
    )
}

export default ProductCategory
