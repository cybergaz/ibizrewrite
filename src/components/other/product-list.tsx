import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type Items = { title: string, link: string }[] | null

const ProductList = ({ products }: { products: Items }) => {
    if (!products || products.length === 0) {
        return (
            <div role="status" aria-live="polite" className="text-center py-8">
                <p className="text-gray-600">No products found</p>
            </div>
        );
    }

    return (
        <div className="flex flex-col gap-5 items-center">
            <ul
                className="grid min-[1200px]:grid-cols-4 min-[950px]:grid-cols-3 min-[730px]:grid-cols-2 max-sm:grid-cols-2 gap-y-10 gap-x-4 max-sm:gap-x-2 sm:gap-x-6 md:gap-x-8 lg:gap-x-12"
                role="list"
                aria-label="Product list"
            >
                {products.map((product, index) => (
                    <li
                        key={index}
                        className="w-full max-w-[15rem] h-[18rem] max-sm:h-[14rem] p-3 max-sm:p-1.5 flex flex-col justify-between animate-fade-in-scale delay-500 shadow-2xl gap-2 bg-accent-light-gray/40 border border-black/5 rounded-2xl"
                        role="listitem"
                    >
                        <div className="flex h-[70%] relative justify-between gap-5">
                            <Image
                                className="w-full rounded-xl"
                                src="/images/illustration4.jpg"
                                width={200}
                                height={400}
                                alt={`${product.title} product image`}
                                loading="lazy"
                            />
                        </div>
                        <div className="h-[20%] max-sm:pb-2 relative flex gap-2 justify-between items-center pl-1">
                            <div className="absolute overflow-hidden right-0 top-0 group">
                                <Link
                                    href={product.link}
                                    className="mt-1 p-1 max-sm:p-0 pl-4 group flex gap-2 justify-center items-center hover:bg-black/20 hover:backdrop-blur-xs text-white text-lg rounded-full transition-all duration-500 **:transition-all **:duration-500"
                                    aria-label={`View details for ${product.title}`}
                                >
                                    <span className="translate-x-52 z-10 text-sm font-medium max-sm:pl-2 group-hover:translate-x-0">View Details</span>
                                    <ArrowUpRight
                                        className="size-9 max-sm:size-8 z-20 text-black group-hover:text-white rounded-full p-2 bg-white/50 group-hover:bg-black/20 border border-transparent group-hover:border-black/50 group-hover:cursor-pointer"
                                        aria-hidden="true"
                                    />
                                </Link>
                            </div>
                            <Link
                                href={product.link}
                                className="w-[78%] text-lg max-sm:text-base text-start font-medium"
                                aria-label={`Learn more about ${product.title}`}
                            >
                                {product.title}
                            </Link>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ProductList

