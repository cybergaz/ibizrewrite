import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default async function ProductDetails({
    params,
}: {
    params: Promise<{ product: string }>
}) {
    const { product } = await params

    return (
        <div className="max-w-6xl mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold mb-8 text-gray-800 tracking-tight">
                Product Details
            </h1>

            {/* Machine Image */}
            <div className="relative h-[600px] w-full mb-12">
                <Image
                    src="/images/illustration4.jpg"
                    alt="Machine Image"
                    fill
                    className="object-cover rounded-xl shadow-2xl"
                    priority
                />
            </div>

            {/* Machine Description */}
            <div className="prose prose-lg max-w-none">
                <p className="text-xl leading-relaxed text-gray-700 tracking-wide">
                    Abrasive Wheels - ibizkart is an industry leader with its custom formulated Gardner ceramic, aluminum oxide, silicon carbide, and hybrid abrasive grinding wheels. ibizkart offers abrasive grinding wheels that are available in various bond types and designed using decades of abrasive application and processing experience to satisfy the clients’ particular requirements.
                </p>
            </div>

            <div className='mt-20 flex gap-20 items-center justify-center'>
                <span className='text-3xl font-medium '>
                    Have any query in mind??
                </span>
                <Link
                    href="/contact"
                    className="group flex gap-2 justify-center items-center bg-black text-white p-3 px-8 text-lg rounded-full **:transition-all **:duration-300"
                >
                    <span> Ask Anything </span>
                    <ArrowUpRight className="size-0 group-hover:size-5" />
                </Link>

            </div>

        </div>
    );
}
