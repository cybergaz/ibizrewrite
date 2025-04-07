import { ArrowUpRight, Share2, Heart, ShoppingCart } from 'lucide-react';
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
            {/* Breadcrumb Navigation */}
            <nav className="mb-8">
                <ol className="flex items-center space-x-2 text-gray-600">
                    <li><Link href="/" className="hover:text-gray-900">Home</Link></li>
                    <li>/</li>
                    <li><Link href="/products" className="hover:text-gray-900">Products</Link></li>
                    <li>/</li>
                    <li className="text-gray-900 font-medium">Abrasive Wheels</li>
                </ol>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Left Column - Image Section */}
                <div className="space-y-4">
                    <div className="relative h-[500px] w-full">
                        <Image
                            src="/images/illustration4.jpg"
                            alt="Machine Image"
                            fill
                            className="object-cover rounded-xl shadow-lg"
                            priority
                        />
                        <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                            <Share2 className="size-5" />
                        </button>
                    </div>
                    {/* Thumbnail Gallery */}
                    <div className="flex gap-4">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="relative h-20 w-20 cursor-pointer opacity-70 hover:opacity-100">
                                <Image
                                    src="/images/illustration4.jpg"
                                    alt={`Thumbnail ${i}`}
                                    fill
                                    className="object-cover rounded-lg"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Column - Product Info */}
                <div className="space-y-8">
                    <div>
                        <h1 className="text-4xl font-bold text-gray-800 tracking-tight mb-4">
                            Abrasive Wheels
                        </h1>
                        <div className="flex items-center gap-4">
                            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                                In Stock
                            </span>
                            <span className="text-gray-500">SKU: AW-2024-001</span>
                        </div>
                    </div>

                    <div className="prose prose-lg max-w-none">
                        <p className="text-xl leading-relaxed text-gray-700 tracking-wide">
                            Abrasive Wheels - ibizkart is an industry leader with its custom formulated Gardner ceramic, aluminum oxide, silicon carbide, and hybrid abrasive grinding wheels. ibizkart offers abrasive grinding wheels that are available in various bond types and designed using decades of abrasive application and processing experience to satisfy the clients' particular requirements.
                        </p>
                    </div>

                    {/* Key Features */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold">Key Features</h3>
                        <ul className="grid grid-cols-2 gap-4">
                            {['Custom Formulated', 'Multiple Bond Types', 'Industry Leading', 'High Durability'].map((feature) => (
                                <li key={feature} className="flex items-center gap-2">
                                    <span className="h-2 w-2 bg-blue-500 rounded-full"></span>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4 pt-6">
                        <button className="flex-1 flex items-center justify-center gap-2 bg-black text-white p-4 rounded-full hover:bg-gray-800 transition-colors">
                            <ShoppingCart className="size-5" />
                            <span>Request Quote</span>
                        </button>
                        <button className="p-4 border-2 border-gray-300 rounded-full hover:border-gray-400 transition-colors">
                            <Heart className="size-5" />
                        </button>
                    </div>

                    {/* Contact Section */}
                    <div className="mt-12 p-6 bg-gray-50 rounded-xl">
                        <div className='flex gap-6 items-center'>
                            <span className='text-xl font-medium'>
                                Have any query in mind?
                            </span>
                            <Link
                                href="/contact"
                                className="group flex gap-2 justify-center items-center bg-black text-white p-3 px-8 rounded-full transition-all duration-300"
                            >
                                <span>Ask Anything</span>
                                <ArrowUpRight className="size-0 group-hover:size-5" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
