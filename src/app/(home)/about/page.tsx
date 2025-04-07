import Card from "@/components/ui/custom-card"
import { ArrowRight, CircleCheckBig } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { LogoCarouselComp } from "@/components/other/logo-carousel"

import {
    Warehouse,
    BadgeCheck,
    Cpu,
    Truck,
    IndianRupee,
    HeartHandshake
} from 'lucide-react';

const features = [
    {
        icon: <Warehouse className="text-accent-magenta" />,
        title: "Comprehensive Industrial Marketplace",
        description: "Your complete sourcing solution - from precision bearings and fasteners to advanced robotics and CNC control systems."
    },
    {
        icon: <BadgeCheck className="text-accent-magenta" />,
        title: "Certified Global Partnerships",
        description: "Genuine components from industry leaders including SKF, FESTO, BOSCH, PANASONIC, EPSON, and HIWIN."
    },
    {
        icon: <Cpu className="text-accent-dark-gray" />,
        title: "Technical Solutions Partnership",
        description: "Dedicated engineering support for automation integration, production optimization, and turnkey assembly solutions."
    },
    {
        icon: <Truck className="text-accent-dark-gray" />,
        title: "Nationwide Distribution Network",
        description: "Timely logistics with guaranteed delivery timelines to all industrial hubs across India."
    },
    {
        icon: <IndianRupee className="text-accent-dark-gray" />,
        title: "Value-Driven Procurement",
        description: "Competitive wholesale pricing with direct manufacturer partnerships ensuring optimal cost efficiency."
    },
    {
        icon: <HeartHandshake className="text-accent-dark-gray" />,
        title: "Relationship-Focused Commerce",
        description: "We prioritize sustainable business relationships over transactional dealings, with customer success at our core."
    }
];

const AboutPage = () => {

    const testimonials = [
        {
            quote:
                "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
            name: "Sarah Chen",
            designation: "Product Manager at TechFlow",
            src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            quote:
                "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
            name: "Michael Rodriguez",
            designation: "CTO at InnovateSphere",
            src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            quote:
                "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
            name: "Emily Watson",
            designation: "Operations Director at CloudScale",
            src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            quote:
                "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
            name: "James Kim",
            designation: "Engineering Lead at DataPro",
            src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            quote:
                "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
            name: "Lisa Thompson",
            designation: "VP of Technology at FutureNet",
            src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
    ];

    return (
        <>
            <div className=" w-screen mx-auto mt-20 flex flex-col gap-32 justify-center items-start ">
                <Image className="object-cover fixed inset-0 w-screen h-screen blur-xs -z-10" src="/images/about_page_bg_blurred.jpg" alt="about page header image" width={1920} height={1080} />
                <div className=" max-w-[85rem] px-5 mx-auto flex justify-between gap-10">
                    <div className="">
                        <Image className="aspect-3/2 object-cover rounded-3xl" src="/images/pexels-photo-7178310.jpeg" alt="about page header image" width={600} height={400} />
                    </div>
                    <div className="flex flex-col w-1/2 gap-10 justify-center">
                        {/* <h1 className="text-xl font-medium text-accent-light-gray">[Home / <span className="text-accent-red">About</span>]</h1> */}
                        <h1 className="text-5xl tracking-wide leading-16 font-semibold">
                            Your Trusted Industrial Equipment Suppliers
                        </h1>
                        {/* <span className=" text-3xl text-accent-magenta/40 font-medium">since 2014</span> */}
                        <p className="text-accent-dark-gray text-lg">
                            IBK Engineers offers a powerful B2B platform designed for efficient sourcing of automation, electrical, mechanical, pneumatic, and tooling components. Trusted by industries across India, the platform brings together a wide range of high-performance products from global leaders like SKF, HIWIN, FESTO, EPSON, DELTA, BOSCH, CARRLANE, and many more.
                        </p>
                        <div className="flex gap-5 ">
                            <Link
                                href="/products"
                                className=" text-accent-magenta font-medium bg-accent-magenta/10 hover:bg-accent-magenta/5 hover:scale-95 transition-all duration-500 w-fit p-2 px-10 rounded-lg flex justify-center items-center"
                            >
                                Our Products
                            </Link>
                            <Link
                                href="/contact"
                                className="border border-accent-magenta/15 text-accent-magenta font-medium transition-all duration-500 w-fit p-2 px-8 rounded-lg gap-2 hover:gap-3.5 flex justify-center items-center"
                            >
                                Get In Touch <ArrowRight size={18} />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="bg-accent-magenta/70 w-screen flex justify-center items-center py-20">
                    <div className="max-w-[85rem] mx-auto px-32 flex flex-col gap-10 justify-center items-center">
                        <h1 className="text-4xl text-white font-bold">Our Goal</h1>
                        <p className="text-2xl font-light text-zinc-100 text-center">
                            Enable Indian industries to access global-quality components faster, smarter, and more cost-effectively—helping businesses reduce downtime, boost efficiency, and maintain production continuity.
                        </p>
                        <div className="mt-10 flex flex-wrap justify-between gap-3 w-full">
                            <Card h1="500+" h2="Products Available" />
                            <Card h1="4000+" h2="Happy Clients" />
                            <Card h1="10+" h2="Years of Experience" />
                            <Card h1="200+" h2="Industry Experts" />
                        </div>
                    </div>
                </div>

                <div className="max-w-[85rem] px-5 mx-auto flex flex-col gap-20">
                    <div className="flex justify-between gap-14 w-full *:w-1/2">
                        <Image className="order-1 aspect-3/2 rounded-3xl" src="/images/header_img.png" alt="about us image" width={600} height={500} />
                        <div className="order-2 flex flex-col flex-wrap gap-5 mt-10">
                            <h1 className="text-4xl font-semibold text-accent-magenta">Who We Are?</h1>
                            <p className="text-accent-dark-gray">
                                Since 2014, IBK Engineers Pvt. Ltd. has been a trusted partner in wholesaling, supplying, and trading industrial components. Based in Bengaluru, Karnataka, the company delivers high-quality bearings, linear guides, ball screws, roller chains, clamps, and specialized imported parts from top global brands
                            </p>
                            <div className="mt-3 flex flex-col gap-5">
                                <p className="flex gap-5 text-accent-magenta"> <CircleCheckBig color="#a066de" /> Comprehensive Product Range </p>
                                <p className="flex gap-5 text-accent-magenta"> <CircleCheckBig color="#a066de" /> Global Brand Partnerships </p>
                                <p className="flex gap-5 text-accent-magenta"> <CircleCheckBig color="#a066de" /> Customer-Centric Approach </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-between gap-14 w-full *:w-1/2">
                        <Image className="order-2 aspect-3/2 rounded-3xl" src="/images/pexels-photo-24739784.webp" alt="about us image" width={600} height={500} />
                        <div className="order-1 flex flex-col flex-wrap gap-5 mt-10">
                            <h1 className="text-4xl font-semibold text-accent-magenta">Our Commitment To Quality</h1>
                            <p className="text-accent-dark-gray">
                                Ibk Engineers delivers only genuine, brand-certified industrial products from trusted global manufacturers. Every item undergoes strict quality checks to ensure high performance, long-term durability, and compliance with international standards across automation, mechanical, electrical, and tooling categories.
                            </p>
                            <div className="mt-3 flex flex-col gap-5">
                                <p className="flex gap-5 text-accent-magenta"> <CircleCheckBig color="#a066de" /> Industry-Leading Standards </p>
                                <p className="flex gap-5 text-accent-magenta"> <CircleCheckBig color="#a066de" /> Advanced Technology </p>
                                <p className="flex gap-5 text-accent-magenta"> <CircleCheckBig color="#a066de" /> Trusted Supplier Network </p>
                            </div>
                        </div>
                    </div>


                    <div className="flex justify-between gap-14 w-full *:w-1/2">
                        <Image className="order-1 aspect-3/2 rounded-3xl" src="/images/pexels-photo-11294358.webp" alt="about us image" width={600} height={500} />
                        <div className="order-2 flex flex-col flex-wrap gap-5 mt-5">
                            <h1 className="text-4xl font-semibold text-accent-magenta">What We Offer?</h1>
                            <div className="text-accent-dark-gray">
                                Ibk Engineers is your one-stop destination for a comprehensive range of industrial products and automation solutions.
                                <div className="mt-3 flex flex-col gap-5">
                                    <p className="flex gap-5 text-accent-magenta"> <CircleCheckBig color="#a066de" /> Mechanical & Structural Solutions </p>
                                    <p className="flex gap-5 text-accent-magenta"> <CircleCheckBig color="#a066de" /> Motion & Transmission Systems </p>
                                    <p className="flex gap-5 text-accent-magenta"> <CircleCheckBig color="#a066de" /> Robotics & Automation </p>
                                    <p className="flex gap-5 text-accent-magenta"> <CircleCheckBig color="#a066de" /> Electrical & Control Systems </p>
                                    <p className="flex gap-5 text-accent-magenta"> <CircleCheckBig color="#a066de" /> Power Tools & Hand Tools </p>
                                    <p className="flex gap-5 text-accent-magenta"> <CircleCheckBig color="#a066de" /> Custom Sourcing & Global Procurement </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-accent-magenta/70 from-accent-dark-gray to-accent-magenta/90 w-screen py-24">
                    <div className="max-w-[80rem] mx-auto px-5 relative flex flex-col items-center gap-16">
                        <div className="text-center">
                            <h1 className="text-4xl font-bold text-white mb-4">Why Choose IBK Engineers</h1>
                            <p className="text-gray-200 max-w-2xl mx-auto">as a Top Supplier of Industrial Equipment in India?</p>
                        </div>
                        {/**/}
                        {/* <Image */}
                        {/*     className="aspect-3/2 blur-3xl rounded-3xl absolute top-[40%] opacity-30 transition-opacity duration-300" */}
                        {/*     src="/images/pexels-photo-24739784.webp" */}
                        {/*     alt="background effect" */}
                        {/*     width={600} */}
                        {/*     height={600} */}
                        {/* /> */}

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            {features.map((item, index) =>
                                <div
                                    key={index}
                                    className="group relative z-10 p-8 rounded-2xl flex flex-col gap-5 justify-between bg-white/70  text-black" >
                                    <span className="absolute inset-0 size-0 -z-10 group-hover:size-24 translate-1 group-hover:translate-8 group-hover:blur-2xl rounded-full bg-white transition-normal duration-700" />
                                    <div className="flex items-center gap-4">
                                        <div className="p-1.5 rounded-lg bg-accent-magenta/10">
                                            {item.icon}
                                        </div>
                                        <h2 className="text-lg font-bold text-accent-dark-gray">{item.title}</h2>
                                    </div>
                                    <p className="text-accent-gray">{item.description}</p>
                                    <span className="absolute right-0 bottom-0 size-0 -z-10 group-hover:size-24 -translate-1 group-hover:-translate-8 group-hover:blur-2xl rounded-full bg-[#EFDFFC] transition-normal duration-700" />
                                </div>
                            )}

                        </div>
                    </div>
                </div>

                <div className="w-screen max-w-[85rem] mx-auto px-5 mb-20">
                    <div className="flex flex-col justify-center items-center gap-8">
                        <h1 className="text-4xl font-bold mb-4 text-accent-magenta">What Our Customers Say?</h1>
                        <AnimatedTestimonials testimonials={testimonials} />
                    </div>
                </div>

                {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full mt-6"> */}
                {/*     <div className="flex flex-col gap-4 p-6 border rounded-xl shadow-xl bg-background/90 hover:shadow-2xl transition-shadow"> */}
                {/*         <div className="flex items-center gap-4"> */}
                {/*             <div className="w-14 h-14 rounded-full bg-accent-magenta/20 flex items-center justify-center"> */}
                {/*                 <span className="text-accent-magenta text-xl font-bold">AB</span> */}
                {/*             </div> */}
                {/*             <div> */}
                {/*                 <h3 className="font-semibold text-accent-dark-gray">Aditya Birla Group</h3> */}
                {/*                 <p className="text-accent-gray text-sm">Manufacturing</p> */}
                {/*             </div> */}
                {/*         </div> */}
                {/*         <p className="text-accent-gray italic"> */}
                {/*             "IBK Engineers has been our trusted supplier for over 5 years. Their precision components have significantly improved our production efficiency and product quality." */}
                {/*         </p> */}
                {/*         <div className="flex text-yellow-500"> */}
                {/*             <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span> */}
                {/*         </div> */}
                {/*     </div> */}
                {/**/}
                {/*     <div className="flex flex-col gap-4 p-6 border rounded-xl shadow-xl bg-background/90 hover:shadow-2xl transition-shadow"> */}
                {/*         <div className="flex items-center gap-4"> */}
                {/*             <div className="w-14 h-14 rounded-full bg-accent-magenta/20 flex items-center justify-center"> */}
                {/*                 <span className="text-accent-magenta text-xl font-bold">TM</span> */}
                {/*             </div> */}
                {/*             <div> */}
                {/*                 <h3 className="font-semibold text-accent-dark-gray">Tata Motors</h3> */}
                {/*                 <p className="text-accent-gray text-sm">Automotive</p> */}
                {/*             </div> */}
                {/*         </div> */}
                {/*         <p className="text-accent-gray italic"> */}
                {/*             "The quality of linear guides and ball screws from IBK Engineers is exceptional. Their technical support and prompt delivery have made them our go-to supplier." */}
                {/*         </p> */}
                {/*         <div className="flex text-yellow-500"> */}
                {/*             <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span> */}
                {/*         </div> */}
                {/*     </div> */}
                {/**/}
                {/*     <div className="flex flex-col gap-4 p-6 border rounded-xl shadow-xl bg-background/90 hover:shadow-2xl transition-shadow"> */}
                {/*         <div className="flex items-center gap-4"> */}
                {/*             <div className="w-14 h-14 rounded-full bg-accent-magenta/20 flex items-center justify-center"> */}
                {/*                 <span className="text-accent-magenta text-xl font-bold">BL</span> */}
                {/*             </div> */}
                {/*             <div> */}
                {/*                 <h3 className="font-semibold text-accent-dark-gray">Bharat Electronics</h3> */}
                {/*                 <p className="text-accent-gray text-sm">Electronics</p> */}
                {/*             </div> */}
                {/*         </div> */}
                {/*         <p className="text-accent-gray italic"> */}
                {/*             "We've been impressed with IBK Engineers' automation solutions. Their products have helped us streamline our manufacturing process and reduce downtime." */}
                {/*         </p> */}
                {/*         <div className="flex text-yellow-500"> */}
                {/*             <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span> */}
                {/*         </div> */}
                {/*     </div> */}
                {/* </div> */}
                {/* </div> */}

            </div >
            {/* <LogoSlider className="mt-28" /> */}
            <LogoCarouselComp />
        </>
    )
}

export default AboutPage
