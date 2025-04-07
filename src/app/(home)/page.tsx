// Top selling -> alluminium profile, hiwin linear guide, ball screws, epson robots, gearboxes

import BenefitsSection from "@/components/other/benifits-section";
import { FaqSection } from "@/components/other/faq";
import { LogoCarouselComp } from "@/components/other/logo-carousel";
import LogoSlider from "@/components/other/logo-slider";
import ProductCategory from "@/components/other/product_category";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight, User, Package, Diamond, Ellipsis, Layers2, Wrench } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ImagesSlider } from "@/components/ui/image-slider";
import {
    ShoppingCart,
    Globe,
    Cog,
    Truck,
    BadgeIndianRupee,
    HeartHandshake
} from 'lucide-react';

async function Homepage() {
    const images = [
        "https://images.unsplash.com/photo-1485433592409-9018e83a1f0d?q=80&w=1814&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1483982258113-b72862e6cff6?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1482189349482-3defd547e0e9?q=80&w=2848&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ];

    const DEMO_FAQS = [
        {
            question: "What kind of industrial products do you offer?",
            answer: "We supply a wide range of industrial and mechanical products, including valves, fittings, motors, pumps, and automation components. Whether you need standard parts or specific solutions, we provide high-quality, durable industrial equipment that meets the demands of various industries.",
        },
        {
            question: "Are your products reliable and quality-tested?",
            answer: "Yes, every product we supply goes through strict quality control checks. We work with trusted industrial brands known for their performance and durability, so you can be confident you're getting reliable, long-lasting components.",
        },
        {
            question: "Do you provide custom engineering solutions for industries?",
            answer: "Absolutely. We specialize in tailored engineering solutions to meet the unique needs of your business. From custom component sourcing to optimized product selection, we help streamline your operations with efficient and innovative industrial solutions.",
        },
        {
            question: "Which industries do you serve with your products?",
            answer: "Our products are used across multiple sectors including manufacturing, automotive, construction, pharmaceutical, food processing, and oil & gas. We understand industry-specific needs and deliver industrial supply solutions that fit.",
        },
        {
            question: "Can I get support after the purchase or place a bulk order?",
            answer: "Yes! We offer full after-sales support, including technical assistance and maintenance guidance. For bulk orders, just reach out to us — we'll provide a customized quotation with competitive pricing and fast pan-India delivery.",
        },
    ];

    const features = [
        {
            icon: <ShoppingCart className="text-accent-magenta" />,
            title: "One-Stop Industrial Store",
            description: "Find everything from bearings and fasteners to robots and CNC controllers."
        },
        {
            icon: <Globe className="text-accent-magenta" />,
            title: "Trusted Global Brands",
            description: "Original products from SKF, FESTO, BOSCH, PANASONIC, EPSON, HIWIN, and more."
        },
        {
            icon: <Cog className="text-accent-dark-gray" />,
            title: "Engineering Expertise",
            description: "Expert consultation for industrial automation and assembly solutions."
        },
        {
            icon: <Truck className="text-accent-dark-gray" />,
            title: "Pan-India Delivery",
            description: "Fast, reliable shipping across all major industrial cities."
        },
        {
            icon: <BadgeIndianRupee className="text-accent-dark-gray" />,
            title: "Competitive Pricing",
            description: "Direct supply with better margins for businesses of all sizes."
        },
        {
            icon: <HeartHandshake className="text-accent-dark-gray" />,
            title: "People Over Profits",
            description: "We prioritize long-term relationships and customer satisfaction."
        }
    ];

    return (
        <div className="-mt-16">
            <div className="fixed inset-0 -z-20 w-screen h-screen">
                {/* <div className="h-8 bg-[#EBF2FF]" /> */}
                <Image className="h-screen w-screen object-cover blur-2xl" src="/images/homebg1.jpg" width={1920} height={1080} alt="hero image" />
            </div>

            <div className="max-w-[85rem] mx-auto min-h-screen px-4 sm:px-5 flex flex-col lg:flex-row mt-12 lg:mt-0 justify-between gap-10 relative py-10 lg:py-0">
                {/* <Image className="absolute brightness-[0.6] -z-10 rounded-3xl" src="/images/illustration4.jpg" width={1800} height={900} alt="hero image" /> */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center gap-10">
                    {/* <span className=" text-lg font-light animate-slide-in delay">#1 Industrial engineering product supplier </span> */}
                    {/* <h1 className="text-5xl font-medium animate-slide-in delay-300 "> */}
                    {/*     Brand You Like */}
                    {/*     <br /> */}
                    {/*     Company You Trust */}
                    {/* </h1> */}
                    {/* <span className="font-light animate-slide-in delay-500"> */}
                    {/*     Industrial Supply, Industrial Robots */}
                    {/*     Pneumatics & Conveyors */}
                    {/* </span> */}
                    <ImagesSlider className="h-[20rem] sm:h-[25.5rem] rounded-3xl" overlay={false} images={images} />
                    <div className="flex flex-col sm:flex-row justify-between gap-4 sm:gap-8 px-1 animate-slide-in delay-700">
                        <Link href="/contact" className="py-2 group border-b border-black/40 hover:border-black flex gap-2 justify-center items-center">
                            Get in touch
                            <ArrowUpRight className="text-black stroke-[1.2px] group-hover:text-white size-7 rounded-full p-1 bg-black/10 group-hover:bg-black transition-all duration-300 group-hover:translate-x-1 group-hover:rotate-45" />
                        </Link>
                        <Link href="/services" className="py-2 group border-b border-black/40 hover:border-black flex gap-2 justify-center items-center">
                            Our Services
                            <ArrowUpRight className="text-black stroke-[1.2px] group-hover:text-white size-7 rounded-full p-1 bg-black/10 group-hover:bg-black transition-all duration-300 group-hover:translate-x-1 group-hover:rotate-45" />
                        </Link>
                        <Link href="/products" className="py-2 group border-b border-black/40 hover:border-black flex gap-2 justify-center items-center">
                            Browse Products
                            <ArrowUpRight className="text-black stroke-[1.2px] group-hover:text-white size-7 rounded-full p-1 bg-black/10 group-hover:bg-black transition-all duration-300 group-hover:translate-x-1 group-hover:rotate-45" />
                        </Link>
                    </div>
                </div>

                <div className="w-full lg:w-[45%] flex flex-col justify-center gap-10">
                    <div className="flex flex-col sm:flex-row gap-8 justify-between">
                        <div className="flex flex-col gap-5">
                            <div className="h-[35%] animate-fade-in-scale w-full sm:w-[18rem] p-5 shadow-2xl text-lg flex justify-center items-center bg-accent-light-gray/25 border border-black/5 rounded-2xl">
                                10+ Years of Dedicated Service
                            </div>
                            <Image className="animate-fade-in-scale delay-700 w-full sm:w-[18rem] h-[65%] rounded-xl self-end" src="/images/header_img.png" width={200} height={200} alt="hero image" placeholder="empty" />
                            {/* <Image className="w-[19rem] h-[8rem] rounded-xl self-end" src="/images/pexels-photo-24739784.webp" width={200} height={400} alt="hero image" /> */}
                        </div>
                        <div className="flex flex-col justify-between animate-fade-in-scale delay-500 shadow-2xl gap-2 bg-accent-light-gray/25 border border-black/5 **:text-black rounded-2xl w-full sm:w-72 h-[19rem] p-3 ">
                            <div className="flex justify-between gap-5">
                                <div>
                                    <Image className="w-[12rem] h-[12rem] rounded-xl border border-black/20" src="/images/newpr.jpg" width={200} height={400} alt="hero image" />
                                </div>
                                <button className="self-start rounded-full p-1.5 hover:bg-white/20"><Ellipsis className="text-white" /> </button>
                            </div>
                            <div className="flex gap-2 items-center justify-between pr-5">
                                <Link
                                    href={"/products"}>
                                    <ArrowUpRight className="text-white size-10 rounded-full p-2 bg-white/50 hover:bg-black/20 border border-transparent hover:border-black/50 transition-all duration-300 hover:cursor-pointer" />
                                </Link>
                                <span className="text-white text-lg">Discover Our <br /> New Products</span>
                            </div>
                        </div>
                    </div>

                    <div className="p-5 sm:p-10 flex flex-col sm:flex-row justify-between rounded-2xl shadow-2xl animate-fade-in-scale delay-200 bg-accent-light-gray/25 border border-black/5">
                        <div className="flex flex-col gap-2 items-start mb-4 sm:mb-0">
                            <h2 className="text-4xl sm:text-5xl">10+</h2>
                            <span className="text-sm text-accent-dark-gray">Years Of Experience</span>
                        </div>
                        <div className="flex flex-col gap-2 items-start mb-4 sm:mb-0">
                            <h2 className="text-4xl sm:text-5xl">4k+</h2>
                            <span className="text-sm text-accent-dark-gray">Happy Clients</span>
                        </div>
                        <div className="flex flex-col gap-2 items-start">
                            <h2 className="text-4xl sm:text-5xl">500+</h2>
                            <span className="text-sm text-accent-dark-gray">Products Available</span>
                        </div>
                    </div>
                </div>
            </div>


            <div className="bg-accent-magenta/80 py-10 sm:py-20">
                <div className="max-w-[90rem] mx-auto px-4 sm:px-5 text-white flex flex-wrap lg:flex-row justify-center gap-6 sm:gap-14">
                    <div className="w-72 h-28 max-sm:scale-90 max-sm:w-full px-5 max-sm:px-2 flex gap-5 justify-start items-center border-accent-light-gray bg-[#82599a]/80 rounded-2xl">
                        <Image className="rounded-xl invert" src="/images/quality.svg" width={50} height={50} alt="image" />
                        <span className="text-xl font-medium">Uncompromising Quality</span>
                    </div>

                    <div className="w-72 h-28 max-sm:scale-90 max-sm:w-full px-5 max-sm:px-2 flex gap-5 justify-start items-center border-accent-light-gray bg-[#82599a]/80 rounded-2xl">
                        <Image className="rounded-xl invert" src="/images/global2.svg" width={50} height={50} alt="image" />
                        <span className="text-xl font-medium">Global Reach</span>
                    </div>

                    <div className="w-72 h-28 max-sm:scale-90 max-sm:w-full px-5 max-sm:px-2 flex gap-5 justify-start items-center border-accent-light-gray bg-[#82599a]/80 rounded-2xl">
                        <Image className="rounded-xl invert" src="/images/range.svg" width={50} height={50} alt="image" />
                        <span className="text-xl font-medium">Extensive Product Range</span>
                    </div>

                    <div className="w-72 h-28 max-sm:scale-90 max-sm:w-full px-5 max-sm:px-2 flex gap-5 justify-start items-center border-accent-light-gray bg-[#82599a]/80 rounded-2xl">
                        <Image className="rounded-xl invert" src="/images/clock.svg" width={50} height={50} alt="image" />
                        <span className="text-xl font-medium">Available to you 24/7</span>
                    </div>
                </div>

                <div className="mt-10 sm:mt-20 max-w-[80rem] mx-auto px-4 sm:px-5 flex flex-col items-center justify-center w-screen gap-6 sm:gap-10">
                    <span className="mt-5 w-full sm:w-[85%] text-2xl sm:text-4xl font-bold text-center text-white">High-Quality Industrial Equipment & Automation Solutions for Your Business</span>
                    <p className="text-base sm:text-lg text-center max-sm:text-justify font-light text-[#f4ebfc]">
                        IBK Engineers Pvt. Ltd. is one of the <span className="font-medium text-white">top wholesale suppliers of industrial products in India</span>, helping businesses since 2014. We deal in everything from bearings, ball screws, and linear guides to grippers, clamps, sprockets, and a whole lot more. Plus, we supply imported components from trusted global brands like Norelem, Misumi, Destaco, Carrlane, and McMaster.
                        <br className="mb-5" />
                        Our goal is simple — make it easy for industries to get reliable products at fair prices, with fast delivery and solid support.
                    </p>
                    <Link
                        href="/about"
                        className="group flex gap-2 justify-center items-center bg-white p-3 px-8 text-lg rounded-full **:transition-all **:duration-300"
                    >
                        <span className="text-black"> Read More </span>
                        <ArrowUpRight className="size-0 group-hover:size-5" />
                    </Link>
                </div>
            </div>

            <div className="w-screen">
                <div className="max-w-[85rem] mx-auto px-4 sm:px-5 py-10 sm:py-20 flex flex-col gap-10 sm:gap-14 justify-center items-center">
                    <h1 className="text-3xl sm:text-4xl font-medium">Top Selling Products</h1>
                    <div className="flex flex-row flex-wrap sm:flex-row justify-center gap-5 items-center">
                        <div className="bg-accent-dark-gray/50 h-[14rem] w-full sm:w-[28rem] rounded-lg p-5 flex gap-5">
                            <Image className="rounded-lg h-full w-[50%]" src="/images/pr3.jpg" width={200} height={400} alt="hero image" />
                            <div className="w-[50%] py-5 flex flex-col gap-5 justify-between">
                                <span className="text-xl sm:text-2xl text-white font-semibold">
                                    Hiwin Linear Guide
                                </span>
                                <Link
                                    href="/products?c=Linear+Motion+Systems"
                                    className="group flex gap-2 justify-center items-center bg-white p-1.5 px-5 w-fit rounded-full **:transition-all **:duration-300"
                                >
                                    <span className="text-black"> View Details </span>
                                    <ArrowUpRight className="size-0 group-hover:size-5" />
                                </Link>
                            </div>
                        </div>
                        <div className="bg-accent-dark-gray/50 h-[14rem] w-full sm:w-[28rem] rounded-lg p-5 flex gap-5">
                            <Image className="rounded-lg h-full w-[50%]" src="/images/pr2.jpg" width={200} height={400} alt="hero image" />
                            <div className="w-[50%] py-5 flex flex-col gap-5 justify-between">
                                <span className="text-xl sm:text-2xl text-white font-semibold">
                                    Epson Robots
                                </span>
                                <Link
                                    href="/products?c=SCARA+Robot+Models"
                                    className="group flex gap-2 justify-center items-center bg-white p-1.5 px-5 w-fit rounded-full **:transition-all **:duration-300"
                                >
                                    <span className="text-black"> View Details </span>
                                    <ArrowUpRight className="size-0 group-hover:size-5" />
                                </Link>
                            </div>
                        </div>
                        <div className="bg-accent-dark-gray/50 h-[14rem] w-full sm:w-[28rem] rounded-lg p-5 flex gap-5">
                            <Image className="rounded-lg h-full w-[50%]" src="/images/pr1.jpg" width={200} height={400} alt="hero image" />
                            <div className="w-[50%] py-5 flex flex-col gap-5 justify-between">
                                <span className="text-xl sm:text-2xl text-white font-semibold">
                                    Ball Screws
                                </span>
                                <Link
                                    href="/products/ground-ball-screws"
                                    className="group flex gap-2 justify-center items-center bg-white p-1.5 px-5 w-fit rounded-full **:transition-all **:duration-300"
                                >
                                    <span className="text-black"> View Details </span>
                                    <ArrowUpRight className="size-0 group-hover:size-5" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="px-4 sm:px-5 pb-12 sm:pb-24 mt-5">
                <div className="max-w-[85rem] mx-auto flex flex-col gap-10 sm:gap-16 items-center">
                    <h1 className="text-3xl sm:text-4xl font-medium">Our Product Range</h1>
                    {/* <div className="flex gap-32 w-fit mb-10"> */}
                    {/*     <div className="grid grid-cols-4 gap-10 "> */}
                    {/*         <div className="flex gap-5 items-center w-full"> */}
                    {/*             <Wrench className="p-2.5 size-10 rounded-full bg-white shadow-xl text-black stroke-1" /> */}
                    {/*             <span className="text-lg">Industrial Robots</span> */}
                    {/*         </div> */}
                    {/*         <div className="flex gap-5 items-center w-full "> */}
                    {/*             <Wrench className="p-2.5 size-10 rounded-full bg-white shadow-xl text-black stroke-1" /> */}
                    {/*             <span className="text-lg">Conveyor Systems</span> */}
                    {/*         </div> */}
                    {/*         <div className="flex gap-5 items-center w-full "> */}
                    {/*             <Wrench className="p-2.5 size-10 rounded-full bg-white shadow-xl text-black stroke-1" /> */}
                    {/*             <span className="text-lg">Aluminum Profiles</span> */}
                    {/*         </div> */}
                    {/*         <div className="flex gap-5 items-center w-full "> */}
                    {/*             <Wrench className="p-2.5 size-10 rounded-full bg-white shadow-xl text-black stroke-1" /> */}
                    {/*             <span className="text-lg">Rexroth Hydraulic</span> */}
                    {/*         </div> */}
                    {/*         {/* </div> */}
                    {/*         {/* <div className="flex flex-col gap-10 "> */}
                    {/*         <div className="flex gap-5 items-center w-full "> */}
                    {/*             <Wrench className="p-2.5 size-10 rounded-full bg-white shadow-xl text-black stroke-1" /> */}
                    {/*             <span className="text-lg">Industrial Tools</span> */}
                    {/*         </div> */}
                    {/*         <div className="flex gap-5 items-center w-full "> */}
                    {/*             <Wrench className="p-2.5 size-10 rounded-full bg-white shadow-xl text-black stroke-1" /> */}
                    {/*             <span className="text-lg">Roller Chain</span> */}
                    {/*         </div> */}
                    {/*         <div className="flex gap-5 items-center w-full "> */}
                    {/*             <Wrench className="p-2.5 size-10 rounded-full bg-white shadow-xl text-black stroke-1" /> */}
                    {/*             <span className="text-lg">Pneumatics</span> */}
                    {/*         </div> */}
                    {/*         <div className="flex gap-5 items-center w-full "> */}
                    {/*             <Wrench className="p-2.5 size-10 rounded-full bg-white shadow-xl text-black stroke-1" /> */}
                    {/*             <span className="text-lg">Rollers</span> */}
                    {/*         </div> */}
                    {/*     </div> */}
                    {/* </div> */}

                    <ProductCategory />
                </div>
            </div>

            <div className="bg-[#CAC0E3]/80 px-4 sm:px-5 py-10 sm:py-20">
                <div className="max-w-[85rem] mx-auto text-white flex flex-col gap-10 sm:gap-14 justify-between items-center">
                    <h1 className="text-3xl sm:text-4xl font-light text-center text-accent-magenta leading-12">The Key Reasons to Choose <span className="text-accent-magenta/70 font-normal">IBK Engineers</span><br />for Industrial Solutions</h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="group relative w-full h-[14rem] z-10 p-6 sm:p-8 rounded-2xl flex flex-col justify-between bg-white/60 text-black"
                            >
                                <span className="absolute inset-0 size-0 -z-10 group-hover:size-36 bg-white translate-1 group-hover:translate-8 group-hover:blur-2xl rounded-full transition-normal duration-700" />
                                <div className="bg-accent-magenta/10 h-[25%] rounded-md p-2 w-fit">
                                    {feature.icon}
                                </div>
                                <div className="flex h-[75%] pt-5 flex-col gap-3">
                                    <h1 className="text-xl font-bold">{feature.title}</h1>
                                    <span className="text-accent-dark-gray">
                                        {feature.description}
                                    </span>
                                </div>
                                <span className="absolute right-0 bottom-0 size-0 -z-10 group-hover:size-24 -translate-1 group-hover:-translate-8 group-hover:blur-2xl rounded-full bg-[#bba3ce] transition-normal duration-700" />
                            </div>
                        ))
                        }
                    </div>
                </div>
            </div>


            <div className="py-10 sm:py-20 w-screen">
                <div className="max-w-[85rem] mx-auto px-4 sm:px-10 flex flex-col lg:flex-row w-full gap-10 sm:gap-5 justify-between">
                    <div className="w-full lg:w-1/2 py-3 flex flex-col justify-between gap-10 sm:gap-20">
                        <div className="flex flex-col gap-5">
                            <h1 className="text-3xl sm:text-5xl leading-10 sm:leading-14 font-light">Trusted Services, <span className="text-accent-gray">For Your <br /> Industrial Needs</span></h1>
                            <p className="text-base sm:text-lg">
                                Explore our reliable sourcing and import solutions tailored to your business.
                            </p>
                            <Link
                                href="/services"
                                className="w-fit group flex gap-2 justify-center items-center bg-black text-white p-3 px-8 text-lg rounded-full **:transition-all **:duration-300"
                            >
                                <span> Explore </span>
                                <ArrowUpRight className="size-0 group-hover:size-5" />
                            </Link>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10 pr-0 sm:pr-10">
                            <div className="p-5 rounded-xl flex flex-col gap-3 border border-accent-gray/50">
                                <h1 className="text-lg font-light text-accent-gray">01</h1>
                                <span className="text-xl sm:text-2xl font-light">USA imports to india</span>
                                <Link
                                    href="/services"
                                    className="w-fit text-accent-gray border-b border-b-accent-light-gray/90 hover:border-b-white">view details</Link>
                            </div>
                            <div className="p-5 rounded-xl flex flex-col gap-3 border border-accent-gray/50">
                                <h1 className="text-lg font-light text-accent-gray">02</h1>
                                <span className="text-xl sm:text-2xl font-light">Global Imports</span>
                                <Link
                                    href="/services"
                                    className="w-fit text-accent-gray border-b border-b-accent-light-gray/90 hover:border-b-white">view details</Link>
                            </div>
                            <div className="p-5 rounded-xl flex flex-col gap-3 border border-accent-gray/50">
                                <h1 className="text-lg font-light text-accent-gray">03</h1>
                                <span className="text-xl sm:text-2xl font-light">D2D Imports</span>
                                <Link
                                    href="/services"
                                    className="w-fit text-accent-gray border-b border-b-accent-light-gray/90 hover:border-b-white">view details</Link>
                            </div>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2 flex justify-center lg:justify-end items-center">
                        <Image className="w-full sm:w-[80%] h-full rounded-xl" src="/images/1743149236.png" width={200} height={400} alt="hero image" />
                    </div>
                </div>
            </div>

            <div className="max-w-[85rem] mx-auto my-10 sm:my-16">
                <BenefitsSection />
            </div>

            <div className="w-screen mx-auto">
                <FaqSection
                    title="Frequently Asked Questions"
                    description="Everything you need to know about our platform"
                    items={DEMO_FAQS}
                />
            </div>
            {/* <LogoSlider className="mt-20" /> */}
            <LogoCarouselComp />
        </div>
    );
}

export default Homepage;
