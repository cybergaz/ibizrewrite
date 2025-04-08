import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type Items = { title: string, link: string }[] | null

const ProductList = ({ products }: { products: Items }) => {

    return (
        <div className="flex flex-col gap-5 items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-sm:grid-cols-2 gap-y-10 gap-x-4 max-sm:gap-x-2 sm:gap-x-6 md:gap-x-8 lg:gap-x-12">
                {
                    products?.map((product, index) => (
                        <div
                            key={index}
                            className="w-full max-w-[15rem] h-[18rem] max-sm:h-[14rem] p-3 max-sm:p-1.5 flex flex-col justify-between animate-fade-in-scale delay-500 shadow-2xl gap-2 bg-accent-light-gray/40 border border-black/5 rounded-2xl">
                            <div className="flex h-[70%] relative justify-between gap-5">
                                <Image className="w-full rounded-xl" src="/images/illustration4.jpg" width={200} height={400} alt="hero image" />
                            </div>
                            <div className="h-[20%] max-sm:pb-2 relative flex gap-2 justify-between items-center pl-1">
                                <div className="absolute overflow-hidden right-0 top-0 group">
                                    <Link
                                        href={product.link}
                                        className="mt-1 p-1 max-sm:p-0 pl-4 group flex gap-2 justify-center items-center hover:bg-black/20 hover:backdrop-blur-xs text-white text-lg rounded-full transition-all duration-500 **:transition-all **:duration-500"
                                    >
                                        <span className="translate-x-52 z-10 group-hover:translate-x-0"> View Details </span>
                                        <ArrowUpRight className="size-9 max-sm:size-8 z-20 text-black group-hover:text-white rounded-full p-2 bg-white/50 group-hover:bg-black/20 border border-transparent group-hover:border-black/50 group-hover:cursor-pointer" />
                                    </Link>
                                </div>
                                <Link href={product.link} className="w-[78%] text-lg max-sm:text-base text-start font-medium">{product.title}</Link>
                                {/* <button className="p-2 px-3 rounded-full text-sm bg-accent-magenta/60 text-white "> Explore All </button> */}
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ProductList

