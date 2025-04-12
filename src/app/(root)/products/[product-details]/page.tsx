import { ArrowUpRight, Share2, Heart, ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

type Props = {
    params: Promise<{ 'product-details': string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { 'product-details': productDetails } = await params;
    const formattedTitle = productDetails.replace(/-/g, ' ').toUpperCase();

    return {
        title: `${formattedTitle} | Ibizkart`,
        description: `${formattedTitle} - ibizkart engineers (best industrial products supplier in india)`,
        metadataBase: new URL('https://ibizkart.com/products'),
        openGraph: {
            title: `${formattedTitle} | Ibizkart`,
            description: `${formattedTitle} - ibizkart engineers (best industrial products supplier in india)`,
            images: [
                {
                    url: '/images/illustration4.jpg',
                    width: 1200,
                    height: 630,
                    alt: formattedTitle,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: `${formattedTitle} | Ibizkart`,
            description: `${formattedTitle} - ibizkart engineers (best industrial products supplier in india)`,
            images: ['/images/illustration4.jpg'],
        },
        other: {
            'application-name': 'Ibizkart',
            'product:price:amount': '0',
            'product:price:currency': 'INR',
            'product:availability': 'in stock',
            'product:sku': 'AW-2024-001',
        },
    };
}

export default async function ProductDetails({ params }: Props) {
    const { 'product-details': product } = await params;
    const formattedTitle = product.replace(/-/g, ' ').toUpperCase();

    return (
        <section className="max-w-6xl mx-auto px-4 py-12" role="main">
            {/* Breadcrumb Navigation */}
            <nav aria-label="Breadcrumb" className="mb-8">
                <ol className="flex items-center space-x-2 text-gray-600">
                    <li><Link href="/" className="hover:text-gray-900">Home</Link></li>
                    <li aria-hidden="true">/</li>
                    <li><Link href="/products" className="hover:text-gray-900">Products</Link></li>
                    <li aria-hidden="true">/</li>
                    <li className="text-gray-900 font-medium" aria-current="page">{formattedTitle}</li>
                </ol>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Left Column - Image Section */}
                <section aria-label="Product Images" className="space-y-4">
                    <div className="relative h-[500px] w-full">
                        <Image
                            src="/images/illustration4.jpg"
                            alt={`${formattedTitle} - Main product image`}
                            fill
                            className="object-cover rounded-xl shadow-lg"
                            priority
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <button
                            className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-100"
                            aria-label="Share product"
                        >
                            <Share2 className="size-5" aria-hidden="true" />
                        </button>
                    </div>
                    {/* Thumbnail Gallery */}
                    <div className="flex gap-4" role="tablist" aria-label="Product image gallery">
                        {[1, 2, 3, 4].map((i) => (
                            <button
                                key={i}
                                className="relative h-20 w-20 cursor-pointer opacity-70 hover:opacity-100 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                role="tab"
                                aria-label={`View product image ${i}`}
                            >
                                <Image
                                    src="/images/illustration4.jpg"
                                    alt={`${formattedTitle} - Thumbnail ${i}`}
                                    fill
                                    className="object-cover rounded-lg"
                                    sizes="80px"
                                />
                            </button>
                        ))}
                    </div>
                </section>

                {/* Right Column - Product Info */}
                <section aria-label="Product Information" className="space-y-8">
                    <div>
                        <h1 className="text-4xl font-bold text-gray-800 tracking-tight mb-4">
                            {formattedTitle}
                        </h1>
                        <div className="flex items-center gap-4">
                            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm" role="status">
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
                    <section aria-labelledby="features-heading">
                        <h2 id="features-heading" className="text-xl font-semibold">Key Features</h2>
                        <ul className="grid grid-cols-2 gap-4" role="list">
                            {['Custom Formulated', 'Multiple Bond Types', 'Industry Leading', 'High Durability'].map((feature) => (
                                <li key={feature} className="flex items-center gap-2">
                                    <span className="h-2 w-2 bg-blue-500 rounded-full" aria-hidden="true"></span>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* Action Buttons */}
                    <div className="flex gap-4 pt-6">
                        <button
                            className="flex-1 flex items-center justify-center gap-2 bg-black text-white p-4 rounded-full hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
                            aria-label="Request quote for product"
                        >
                            <ShoppingCart className="size-5" aria-hidden="true" />
                            <span>Request Quote</span>
                        </button>
                        <button
                            className="p-4 border-2 border-gray-300 rounded-full hover:border-gray-400 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
                            aria-label="Add to favorites"
                        >
                            <Heart className="size-5" aria-hidden="true" />
                        </button>
                    </div>

                    {/* Contact Section */}
                    <section className="mt-12 p-6 bg-gray-50 rounded-xl" aria-labelledby="contact-heading">
                        <div className='flex gap-6 items-center'>
                            <h2 id="contact-heading" className='text-xl font-medium'>
                                Have any query in mind?
                            </h2>
                            <Link
                                href="/contact"
                                className="group flex gap-2 justify-center items-center bg-black text-white p-3 px-8 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
                            >
                                <span>Ask Anything</span>
                                <ArrowUpRight className="size-0 group-hover:size-5" aria-hidden="true" />
                            </Link>
                        </div>
                    </section>
                </section>
            </div>
        </section>
    );
}
