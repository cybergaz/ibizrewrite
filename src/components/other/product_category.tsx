"use client"

import { PRODUCTS } from "@/lib/constants"
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, EllipsisVertical, Search } from "lucide-react";
import router from "next/router";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

const ProductCategory = () => {
    const [loadItems, setLoadItems] = useState(8);

    return (
        <div className="flex flex-col gap-5 items-center w-full px-4 sm:px-6 md:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 w-full">
                {
                    PRODUCTS.slice(0, loadItems).map((product, index) => (
                        <div
                            key={index}
                            className="w-full h-auto min-h-[18rem] max-sm:min-h-[13rem] max-sm:h-[10rem] p-3 flex flex-col justify-between animate-fade-in-scale delay-500 shadow-2xl gap-2 bg-accent-light-gray/50 border border-black/5 rounded-2xl">
                            <div className="flex h-[70%] relative justify-between gap-2">
                                <Image className="w-[82%] rounded-xl object-cover" src={product.image} width={200} height={400} alt="hero image" />
                                <Popover>
                                    <PopoverTrigger className="cursor-pointer h-fit rounded-full">
                                        <EllipsisVertical className="size-7 sm:size-9 z-20 text-black group-hover:text-white rounded-full p-1.5 sm:p-2 bg-white/50 group-hover:bg-black/20 border border-transparent group-hover:border-black/50 group-hover:cursor-pointer" />
                                    </PopoverTrigger>
                                    <PopoverContent className="animate-slide-in-forward bg-white/70 backdrop-blur-md">
                                        {
                                            product.items.map((item, index) => (
                                                <Link
                                                    key={index}
                                                    href={item.link}
                                                    className="flex gap-2 items-center p-2 px-5 border-b hover:bg-black/40 hover:text-white transition-all duration-200"
                                                >
                                                    {/* <Search className="text-accent-magenta" /> */}
                                                    <span>{item.title}</span>
                                                </Link>
                                            ))
                                        }

                                    </PopoverContent>
                                </Popover>
                            </div>
                            <div className="h-[20%] relative flex gap-2 justify-between items-center">
                                <Link
                                    href={`/products?c=${product.category.replace(/\s+/g, '+')}`}
                                    className="w-[80%] text-base sm:text-lg font-medium"
                                >
                                    {product.category}
                                </Link>
                                <Link
                                    href={`/products?c=${product.category.replace(/\s+/g, '+')}`}
                                    className="absolute overflow-hidden right-0 top-0 group"
                                >
                                    <button className="p-1 pl-4 group hover:cursor-pointer flex gap-2 justify-center items-center hover:bg-black/20 hover:backdrop-blur-xs text-white text-base sm:text-lg rounded-full transition-all duration-500 **:transition-all **:duration-500" >
                                        <span className="translate-x-52 z-10 group-hover:translate-x-0"> Explore Category </span>
                                        <ArrowUpRight className="size-7 sm:size-9 z-20 text-black group-hover:text-white rounded-full p-1.5 sm:p-2 bg-white/50 group-hover:bg-black/20 border border-transparent group-hover:border-black/50 group-hover:cursor-pointer" />
                                    </button>
                                </Link>
                                {/* <button className="p-2 px-3 rounded-full text-sm bg-accentmagenta/60 text-white "> Explore All </button> */}
                            </div>
                        </div>
                    ))
                }
            </div>

            {/* { */}
            {/*     loadItems < PRODUCTS.length ? */}
            <Link
                href="/products"
                className="group mt-6 sm:mt-10 flex gap-2 justify-center items-center bg-black text-white p-2 sm:p-3 px-6 sm:px-8 text-base sm:text-lg rounded-full **:transition-all **:duration-300"
            >
                <span> Explore All Categories </span>
                <ArrowUpRight className="size-0 group-hover:size-4 sm:group-hover:size-5" />
            </Link>
            {/*         : */}
            {/*         <button */}
            {/*             onClick={() => setLoadItems(8)} */}
            {/*             className="mt-14 p-2 px-5 w-fit border border-accent-magenta/20 hover:bg-accent-magenta/5 rounded-lg text-accent-magenta font-medium cursor-pointer" */}
            {/*         > */}
            {/*             Hide Categories */}
            {/*         </button> */}
            {/* } */}
        </div >
    )
}

export default ProductCategory
