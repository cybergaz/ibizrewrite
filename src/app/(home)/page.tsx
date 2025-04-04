// alluminium profile, hiwin linear guide, ball screws, epson robots, gearboxes

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

async function Homepage() {
    const images = [
        "https://images.unsplash.com/photo-1485433592409-9018e83a1f0d?q=80&w=1814&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1483982258113-b72862e6cff6?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1482189349482-3defd547e0e9?q=80&w=2848&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ];

    const DEMO_FAQS = [
        {
            question: "What makes your platform unique?",
            answer: "Our platform stands out through its intuitive design, powerful automation capabilities, and seamless integration options. We've focused on creating a user experience that combines simplicity with advanced features.",
        },
        {
            question: "How does the pricing structure work?",
            answer: "We offer flexible, transparent pricing tiers designed to scale with your needs. Each tier includes a core set of features, with additional capabilities as you move up. All plans start with a 14-day free trial.",
        },
        {
            question: "What kind of support do you offer?",
            answer: "We provide comprehensive support through multiple channels. This includes 24/7 live chat, detailed documentation, video tutorials, and dedicated account managers for enterprise clients.",
        },
    ];

    const features = [
        {
            icon: <Wrench className="text-accent-magenta" />,
            title: "Production and Assembly",
            description: "Details on production processes, assembly, capacity, and product types."
        },
        {
            icon: <Diamond className="text-accent-magenta" />,
            title: "Custom Manufacturing",
            description: "Custom product creation with design and customization options. "
        },
        {
            icon: <Layers2 className="text-accent-dark-gray" />,
            title: "Quality Control",
            description: "Procedures and systems in place to ensure high product quality. "
        },
        {
            icon: <Package className="text-accent-dark-gray" />,
            title: "Logistics and Delivery",
            description: "Details on delivery and logistics services, including shipping and storage. "
        },
        {
            icon: <Layers2 className="text-accent-dark-gray" />,
            title: "Technology and Innovation",
            description: "Details on the latest manufacturing technologies and ongoing innovations."
        },
        {
            icon: <User className="text-accent-dark-gray" />,
            title: "Customer Support",
            description: "Information on customer support services, including contact details and hours."
        },
    ]

    return (
        <div className="-mt-16">
            <div className="fixed inset-0 -z-20 w-screen h-screen">
                {/* <div className="h-8 bg-[#EBF2FF]" /> */}
                <Image className="h-screen w-screen object-cover blur-2xl" src="/images/homebg1.jpg" width={1920} height={1080} alt="hero image" />
            </div>

            <div className="max-w-[85rem] mx-auto h-screen px-5 flex justify-between gap-10 relative">
                {/* <Image className="absolute brightness-[0.6] -z-10 rounded-3xl" src="/images/illustration4.jpg" width={1800} height={900} alt="hero image" /> */}
                <div className="w-1/2 flex flex-col justify-center -mt-40 gap-10">
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
                    <ImagesSlider className="h-[40rem]" images={images} />
                    <div className="flex gap-8 animate-slide-in delay-700">
                        <Link href="" className="py-2 group border-b border-black/20 flex gap-2 justify-center items-center">
                            Get in touch
                            <ArrowUpRight className="text-black stroke-[1.2px] group-hover:text-white size-7 rounded-full p-1 bg-black/10 group-hover:bg-black transition-all duration-300 group-hover:translate-x-1 group-hover:rotate-45" />
                        </Link>
                        <Link href="" className="py-2 group border-b border-black flex gap-2 justify-center items-center">
                            Our Services
                            <ArrowUpRight className="text-black stroke-[1.2px] group-hover:text-white size-7 rounded-full p-1 bg-black/10 group-hover:bg-black transition-all duration-300 group-hover:translate-x-1 group-hover:rotate-45" />
                        </Link>
                    </div>
                </div>

                <div className=" w-[45%] flex flex-col justify-center gap-10">
                    <div className="flex gap-8 justify-between">
                        <div className="flex flex-col gap-5">
                            <div className="h-[35%] animate-fade-in-scale w-[18rem] p-5 shadow-2xl text-lg flex justify-center items-center bg-accent-light-gray/25 border border-black/5 rounded-2xl">
                                10+ Years of Dedicated Service, 100+ Happy Clients
                            </div>
                            <Image className="animate-fade-in-scale delay-700 w-[18rem] h-[65%] rounded-xl self-end" src="/images/header_img.png" width={200} height={200} alt="hero image" placeholder="empty" />
                            {/* <Image className="w-[19rem] h-[8rem] rounded-xl self-end" src="/images/pexels-photo-24739784.webp" width={200} height={400} alt="hero image" /> */}
                        </div>
                        <div className="flex flex-col justify-between animate-fade-in-scale delay-500 shadow-2xl gap-2 bg-accent-light-gray/25 border border-black/5 **:text-black rounded-2xl w-72 h-[19rem] p-3">
                            <div className="flex justify-between gap-5">
                                <div>
                                    <Image className="w-[12rem] h-[12rem] rounded-xl" src="/images/illustration4.jpg" width={200} height={400} alt="hero image" />
                                </div>
                                <button className="self-start rounded-full p-1.5 hover:bg-white/20"><Ellipsis className="text-white" /> </button>
                            </div>
                            <div className="flex gap-2 items-center justify-between pr-5">
                                <ArrowUpRight className="text-white size-10 rounded-full p-2 bg-white/50 hover:bg-black/20 border border-transparent hover:border-black/50 transition-all duration-300 hover:cursor-pointer" />
                                <span className="text-white text-lg">Discover Our <br /> New Products</span>
                            </div>
                        </div>
                    </div>

                    <div className="p-10 flex justify-between rounded-2xl shadow-2xl animate-fade-in-scale delay-200 bg-accent-light-gray/25 border border-black/5">
                        <div className="flex flex-col gap-2 items-start">
                            <h2 className="text-5xl ">20k+</h2>
                            <span className="text-sm text-accent-dark-gray">Products sold annualy</span>
                        </div>
                        <div className="flex flex-col gap-2 items-start">
                            <h2 className="text-5xl ">78+</h2>
                            <span className="text-sm text-accent-dark-gray">Products available</span>
                        </div>
                        <div className="flex flex-col gap-2 items-start">
                            <h2 className="text-5xl ">120</h2>
                            <span className="text-sm text-accent-dark-gray">Something to write</span>
                        </div>
                    </div>
                </div>
            </div>


            <div className="bg-accent-magenta/70 py-20">

                <div className="max-w-[80rem] mx-auto px-5 text-white flex gap-14 justify-between items-center">
                    <div className=" w-72 h-28 px-3 flex gap-5 justify-center items-center border border-accent-light-gray rounded-2xl">
                        <Image className=" rounded-xl invert" src="/images/quality.svg" width={50} height={50} alt="image" />
                        <span className="text-xl font-medium">Uncompromising Quality</span>
                    </div>

                    <div className=" w-72 h-28 px-3 flex gap-5 justify-center items-center border border-accent-light-gray rounded-2xl">
                        <Image className=" rounded-xl invert" src="/images/global2.svg" width={50} height={50} alt="image" />
                        <span className="text-xl font-medium">Global Reach</span>
                    </div>

                    <div className=" w-72 h-28 px-3 flex gap-5 justify-center items-center border border-accent-light-gray rounded-2xl">
                        <Image className=" rounded-xl invert" src="/images/range.svg" width={50} height={50} alt="image" />
                        <span className="text-xl font-medium">Extensive Product Range</span>
                    </div>

                    <div className=" w-72 h-28 px-3 flex gap-5 justify-center items-center border border-accent-light-gray rounded-2xl">
                        <Image className=" rounded-xl invert" src="/images/clock.svg" width={50} height={50} alt="image" />
                        <span className="text-xl font-medium">Available to you 24/7</span>
                    </div>
                </div>

                <div className="mt-20 flex flex-col items-center justify-center w-screen gap-10 ">
                    <span className="text-2xl font-light text-white">  LEARN MORE ABOUT <span className="text-zinc-300/80">IBIZKART ENGINEERS</span> </span>
                    <Link
                        href="/about"
                        className="group flex gap-2 justify-center items-center bg-white p-3 px-8 text-lg rounded-full **:transition-all **:duration-300"
                    >
                        <span className="text-black"> About Us </span>
                        <ArrowUpRight className="size-0 group-hover:size-5" />
                    </Link>
                </div>
            </div>

            <div className="w-screen">
                <div className="max-w-[85rem] mx-auto px-5 py-20 flex flex-col gap-14 justify-center items-center">
                    <h1 className="text-4xl font-medium ">Featured Products</h1>
                    <div className="flex gap-5 justify-between items-center ">
                        <div className="bg-accent-dark-gray/50 h-[14rem] w-[28rem] rounded-lg p-5 flex gap-5">
                            <Image className="rounded-lg h-full w-[50%]" src="/images/illustration3.jpg" width={200} height={400} alt="hero image" />
                            <div className="w-[50%] py-5 flex flex-col gap-5 justify-between">
                                <span className="text-2xl text-white font-semibold">
                                    Product Longest Name
                                </span>
                                <Link
                                    href="/about"
                                    className="group flex gap-2 justify-center items-center bg-white p-1.5 px-5 w-fit rounded-full **:transition-all **:duration-300"
                                >
                                    <span className="text-black"> View Details </span>
                                    <ArrowUpRight className="size-0 group-hover:size-5" />
                                </Link>
                            </div>
                        </div>
                        <div className="bg-accent-dark-gray/50 h-[14rem] w-[28rem] rounded-lg p-5 flex gap-5">
                            <Image className="rounded-lg h-full w-[50%]" src="/images/illustration3.jpg" width={200} height={400} alt="hero image" />
                            <div className="w-[50%] py-5 flex flex-col gap-5 justify-between">
                                <span className="text-2xl text-white font-semibold">
                                    Product Longest Name
                                </span>
                                <Link
                                    href="/about"
                                    className="group flex gap-2 justify-center items-center bg-white p-1.5 px-5 w-fit rounded-full **:transition-all **:duration-300"
                                >
                                    <span className="text-black"> View Details </span>
                                    <ArrowUpRight className="size-0 group-hover:size-5" />
                                </Link>
                            </div>
                        </div>
                        <div className="bg-accent-dark-gray/50 h-[14rem] w-[28rem] rounded-lg p-5 flex gap-5">
                            <Image className="rounded-lg h-full w-[50%]" src="/images/illustration3.jpg" width={200} height={400} alt="hero image" />
                            <div className="w-[50%] py-5 flex flex-col gap-5 justify-between">
                                <span className="text-2xl text-white font-semibold">
                                    Product Longest Name
                                </span>
                                <Link
                                    href="/about"
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

            <div className="px-5 pb-24 mt-5">
                <div className="max-w-[85rem] mx-auto flex flex-col gap-16 items-center">
                    <h1 className="text-4xl font-medium ">Browse Products Category</h1>
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

            <div className="bg-[#CAC0E3]/80 px-5 py-20">
                <div className="max-w-[85rem] mx-auto text-white flex flex-col gap-14 justify-between items-center">
                    <h1 className="text-4xl font-light text-center text-accent-magenta leading-12">Premium quality,<span className="text-accent-magenta/70"> with the <br /> finest materials and services</span></h1>

                    <div className="grid grid-cols-3 grid-rows-2 gap-10">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="group relative w-[23rem] h-[14rem] z-10 p-8 rounded-2xl flex flex-col justify-between bg-white/60  text-black"
                            >
                                <span className="absolute inset-0 size-0 -z-10 group-hover:size-24 translate-1 group-hover:translate-8 group-hover:blur-2xl rounded-full bg-white transition-normal duration-700" />
                                <div className="bg-accent-magenta/10 h-[25%] rounded-md p-2 w-fit">
                                    {feature.icon}
                                </div>
                                <div className="flex h-[75%] pt-5 flex-col gap-3">
                                    <h1 className="text-xl font-bold">{feature.title}</h1>
                                    <span className="text-accent-dark-gray">
                                        {feature.description}
                                    </span>
                                </div>
                                <span className="absolute right-0 bottom-0 size-0 -z-10 group-hover:size-24 -translate-1 group-hover:-translate-8 group-hover:blur-2xl rounded-full bg-[#EFDFFC] transition-normal duration-700" />
                            </div>
                        ))
                        }
                    </div>
                </div>
            </div>


            <div className=" py-20 w-screen">
                <div className="max-w-[85rem] mx-auto px-10 flex w-full gap-5 justify-between">
                    <div className="w-1/2 py-3 flex flex-col justify-between gap-20 ">
                        <div className="flex flex-col gap-8">
                            <h1 className="text-5xl leading-14 font-light">Trusted Service, <span className="text-accent-gray">for your <br /> various needs</span></h1>
                            <Link
                                href="/about"
                                className="w-fit group flex gap-2 justify-center items-center bg-black text-white p-3 px-8 text-lg rounded-full **:transition-all **:duration-300"
                            >
                                <span> Learn more about our services </span>
                                <ArrowUpRight className="size-0 group-hover:size-5" />
                            </Link>
                        </div>
                        <div className="grid grid-cols-2 gap-10 pr-10">
                            <div className="p-5 rounded-xl flex flex-col gap-3 border border-accent-gray/50 ">
                                <h1 className="text-lg font-light text-accent-gray">01</h1>
                                <span className="text-2xl font-light">USA imports to india</span>
                                <Link href="" className="  w-fit text-accent-gray border-b border-b-accent-light-gray/90 hover:border-b-white">view details</Link>
                            </div>
                            <div className="p-5 rounded-xl flex flex-col gap-3 border border-accent-gray/50 ">
                                <h1 className="text-lg font-light text-accent-gray">02</h1>
                                <span className="text-2xl font-light">Global Imports</span>
                                <Link href="" className="  w-fit text-accent-gray border-b border-b-accent-light-gray/90 hover:border-b-white">view details</Link>
                            </div>
                            <div className="p-5 rounded-xl flex flex-col gap-3 border border-accent-gray/50 ">
                                <h1 className="text-lg font-light text-accent-gray">03</h1>
                                <span className="text-2xl font-light">D2D Imports</span>
                                <Link href="" className="  w-fit text-accent-gray border-b border-b-accent-light-gray/90 hover:border-b-white">view details</Link>
                            </div>

                        </div>
                    </div>

                    <div className="w-1/2 flex justify-end items-center">
                        <Image className="w-[80%] h-full rounded-xl" src="/images/1743149236.png" width={200} height={400} alt="hero image" />
                    </div>

                </div>
            </div>

            <div className="max-w-[85rem] mx-auto my-16">
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
        </div >
    );
}

export default Homepage;
