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
} from 'lucide-react';
import Getintouch from "@/components/other/contact-us";
import { Metadata } from 'next';
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
    title: "About Us",
    description: 'about us page ibizkart engineers (best industrial products supplier in india)',
    metadataBase: new URL(siteConfig.url),
};

const features = [
    {
        icon: <Warehouse className="text-accent-magenta" aria-hidden="true" />,
        title: "Comprehensive Industrial Marketplace",
        description: "Your complete sourcing solution - from precision bearings and fasteners to advanced robotics and CNC control systems."
    },
    {
        icon: <BadgeCheck className="text-accent-magenta" aria-hidden="true" />,
        title: "Certified Global Partnerships",
        description: "Genuine components from industry leaders including SKF, FESTO, BOSCH, PANASONIC, EPSON, and HIWIN."
    },
    {
        icon: <Cpu className="text-accent-dark-gray" aria-hidden="true" />,
        title: "Technical Solutions Partnership",
        description: "Dedicated engineering support for automation integration, production optimization, and turnkey assembly solutions."
    },
    {
        icon: <Truck className="text-accent-dark-gray" aria-hidden="true" />,
        title: "Nationwide Distribution Network",
        description: "Timely logistics with guaranteed delivery timelines to all industrial hubs across India."
    },
    // {
    //     icon: <IndianRupee className="text-accent-dark-gray" />,
    //     title: "Value-Driven Procurement",
    //     description: "Competitive wholesale pricing with direct manufacturer partnerships ensuring optimal cost efficiency."
    // },
    // {
    //     icon: <HeartHandshake className="text-accent-dark-gray" />,
    //     title: "Relationship-Focused Commerce",
    //     description: "We prioritize sustainable business relationships over transactional dealings, with customer success at our core."
    // }
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
        <section role="main">
            <div className="w-screen mx-auto mt-20 flex flex-col gap-16 md:gap-32 justify-center items-start">
                <Image
                    className="object-cover fixed inset-0 w-screen h-screen blur-xs -z-10"
                    src="/images/about_page_bg_blurred.jpg"
                    alt="Decorative background image"
                    width={1920}
                    height={1080}
                    aria-hidden="true"
                />
                <section className="max-w-[85rem] px-4 md:px-5 mx-auto flex flex-col md:flex-row justify-between gap-8 md:gap-10">
                    <div className="w-full md:w-auto">
                        <Image
                            className="aspect-3/2 object-cover rounded-3xl w-full"
                            src="/images/pexels-photo-7178310.jpeg"
                            alt="Industrial equipment and machinery in a modern facility"
                            width={600}
                            height={400}
                        />
                    </div>
                    <div className="flex flex-col w-full md:w-1/2 gap-6 md:gap-10 justify-center">
                        <h1 className="text-3xl md:text-5xl tracking-wide leading-tight md:leading-16 font-semibold">
                            Your Trusted Industrial Equipment Suppliers
                        </h1>
                        <p className="text-accent-dark-gray text-base md:text-lg">
                            IBK Engineers offers a powerful B2B platform designed for efficient sourcing of automation, electrical, mechanical, pneumatic, and tooling components. Trusted by industries across India, the platform brings together a wide range of high-performance products from global leaders like SKF, HIWIN, FESTO, EPSON, DELTA, BOSCH, CARRLANE, and many more.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 md:gap-5">
                            <Link
                                href="/products"
                                className="text-accent-magenta font-medium bg-accent-magenta/10 hover:bg-accent-magenta/5 hover:scale-95 transition-all duration-500 w-full sm:w-fit p-2 px-10 rounded-lg flex justify-center items-center"
                                aria-label="Browse our products"
                            >
                                Our Products
                            </Link>
                            <Link
                                href="/contact"
                                className="border border-accent-magenta/15 text-accent-magenta font-medium transition-all duration-500 w-full sm:w-fit p-2 px-8 rounded-lg gap-2 hover:gap-3.5 flex justify-center items-center"
                                aria-label="Contact us for more information"
                            >
                                Get In Touch <ArrowRight size={18} aria-hidden="true" />
                            </Link>
                        </div>
                    </div>
                </section>

                <section className="bg-accent-magenta w-screen flex justify-center items-center py-12 md:py-14 md:pb-20" aria-labelledby="our-goal-heading">
                    <div className="max-w-[85rem] mx-auto px-4 md:px-8 lg:px-32 flex flex-col gap-6 md:gap-10 justify-center items-center">
                        <h2 id="our-goal-heading" className="text-3xl md:text-4xl text-white font-bold font-jost">Our Goal</h2>
                        <p className="text-xl md:text-2xl font-light text-zinc-100 text-center">
                            Enable Indian industries to access global-quality components faster, smarter, and more cost-effectively—helping businesses reduce downtime, boost efficiency, and maintain production continuity.
                        </p>
                        <div className="flex flex-wrap justify-center gap-5 w-full max-sm:scale-90" role="list">
                            <Card h1="500+" h2="Products Available" />
                            <Card h1="4000+" h2="Happy Clients" />
                            <Card h1="10+" h2="Years of Experience" />
                            <Card h1="200+" h2="Industry Experts" />
                        </div>
                    </div>
                </section>

                <section className="max-w-[85rem] px-4 md:px-5 mx-auto flex flex-col gap-12 md:gap-20">
                    <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-14 w-full">
                        <div className="w-full md:w-1/2 order-2 md:order-1">
                            <Image
                                className="aspect-3/2 rounded-3xl w-full"
                                src="/images/header_img.png"
                                alt="Modern industrial facility with advanced machinery"
                                width={600}
                                height={500}
                            />
                        </div>
                        <div className="w-full md:w-1/2 order-1 md:order-2 flex flex-col flex-wrap gap-4 md:gap-5 mt-0 md:mt-10">
                            <h2 className="text-3xl md:text-4xl font-semibold text-accent-magenta">Who We Are?</h2>
                            <p className="text-accent-dark-gray">
                                Since 2014, IBK Engineers Pvt. Ltd. has been a trusted partner in wholesaling, supplying, and trading industrial components. Based in Bengaluru, Karnataka, the company delivers high-quality bearings, linear guides, ball screws, roller chains, clamps, and specialized imported parts from top global brands
                            </p>
                            <div className="mt-3 flex flex-col gap-4 md:gap-5" role="list">
                                <p className="flex gap-3 md:gap-5 text-accent-magenta"> <CircleCheckBig color="#a066de" aria-hidden="true" /> Comprehensive Product Range </p>
                                <p className="flex gap-3 md:gap-5 text-accent-magenta"> <CircleCheckBig color="#a066de" aria-hidden="true" /> Global Brand Partnerships </p>
                                <p className="flex gap-3 md:gap-5 text-accent-magenta"> <CircleCheckBig color="#a066de" aria-hidden="true" /> Customer-Centric Approach </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-14 w-full">
                        <div className="w-full md:w-1/2 order-2">
                            <Image
                                className="aspect-3/2 rounded-3xl w-full"
                                src="/images/pexels-photo-24739784.webp"
                                alt="Quality control inspection of industrial components"
                                width={600}
                                height={500}
                            />
                        </div>
                        <div className="w-full md:w-1/2 order-1 flex flex-col flex-wrap gap-4 md:gap-5 mt-0 md:mt-10">
                            <h2 className="text-3xl md:text-4xl font-semibold text-accent-magenta">Our Commitment To Quality</h2>
                            <p className="text-accent-dark-gray">
                                Ibk Engineers delivers only genuine, brand-certified industrial products from trusted global manufacturers. Every item undergoes strict quality checks to ensure high performance, long-term durability, and compliance with international standards across automation, mechanical, electrical, and tooling categories.
                            </p>
                            <div className="mt-3 flex flex-col gap-4 md:gap-5" role="list">
                                <p className="flex gap-3 md:gap-5 text-accent-magenta"> <CircleCheckBig color="#a066de" aria-hidden="true" /> Industry-Leading Standards </p>
                                <p className="flex gap-3 md:gap-5 text-accent-magenta"> <CircleCheckBig color="#a066de" aria-hidden="true" /> Advanced Technology </p>
                                <p className="flex gap-3 md:gap-5 text-accent-magenta"> <CircleCheckBig color="#a066de" aria-hidden="true" /> Trusted Supplier Network </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-14 w-full">
                        <div className="w-full md:w-1/2 order-2 md:order-1">
                            <Image
                                className="aspect-3/2 rounded-3xl w-full"
                                src="/images/pexels-photo-11294358.webp"
                                alt="Industrial automation and robotics solutions"
                                width={600}
                                height={500}
                            />
                        </div>
                        <div className="w-full md:w-1/2 order-1 md:order-2 flex flex-col flex-wrap gap-4 md:gap-5 mt-0 md:mt-5">
                            <h2 className="text-3xl md:text-4xl font-semibold text-accent-magenta">What We Offer?</h2>
                            <div className="text-accent-dark-gray">
                                Ibk Engineers is your one-stop destination for a comprehensive range of industrial products and automation solutions.
                                <div className="mt-3 flex flex-col gap-4 md:gap-5" role="list">
                                    <p className="flex gap-3 md:gap-5 text-accent-magenta"> <CircleCheckBig color="#a066de" aria-hidden="true" /> Mechanical & Structural Solutions </p>
                                    <p className="flex gap-3 md:gap-5 text-accent-magenta"> <CircleCheckBig color="#a066de" aria-hidden="true" /> Motion & Transmission Systems </p>
                                    <p className="flex gap-3 md:gap-5 text-accent-magenta"> <CircleCheckBig color="#a066de" aria-hidden="true" /> Robotics & Automation </p>
                                    <p className="flex gap-3 md:gap-5 text-accent-magenta"> <CircleCheckBig color="#a066de" aria-hidden="true" /> Electrical & Control Systems </p>
                                    <p className="flex gap-3 md:gap-5 text-accent-magenta"> <CircleCheckBig color="#a066de" aria-hidden="true" /> Power Tools & Hand Tools </p>
                                    <p className="flex gap-3 md:gap-5 text-accent-magenta"> <CircleCheckBig color="#a066de" aria-hidden="true" /> Custom Sourcing & Global Procurement </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-accent-magenta/70 from-accent-dark-gray to-accent-magenta/90 w-screen py-16 md:py-24" aria-labelledby="why-choose-heading">
                    <div className="max-w-[80rem] mx-auto px-4 md:px-5 relative flex flex-col items-center gap-10 md:gap-16">
                        <div className="text-center">
                            <h2 id="why-choose-heading" className="text-3xl md:text-4xl font-bold text-white mb-2 md:mb-4">Why Choose IBK Engineers</h2>
                            <p className="text-gray-200 max-w-2xl mx-auto text-lg md:text-xl">as a Top Supplier of Industrial Equipment in India?</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 w-full" role="list">
                            {features.map((item, index) =>
                                <div
                                    key={index}
                                    className="group relative z-10 p-6 md:p-8 rounded-2xl flex flex-col gap-4 md:gap-5 justify-between bg-white/70 text-black"
                                    role="listitem"
                                >
                                    <span className="absolute inset-0 size-0 -z-10 group-hover:size-24 translate-1 group-hover:translate-8 group-hover:blur-2xl rounded-full bg-white transition-normal duration-700" aria-hidden="true" />
                                    <div className="flex items-center gap-3 md:gap-4">
                                        <div className="p-1.5 rounded-lg bg-accent-magenta/10">
                                            {item.icon}
                                        </div>
                                        <h3 className="text-base md:text-lg font-bold text-accent-dark-gray">{item.title}</h3>
                                    </div>
                                    <p className="text-accent-gray text-sm md:text-base">{item.description}</p>
                                    <span className="absolute right-0 bottom-0 size-0 -z-10 group-hover:size-24 -translate-1 group-hover:-translate-8 group-hover:blur-2xl rounded-full bg-[#EFDFFC] transition-normal duration-700" aria-hidden="true" />
                                </div>
                            )}
                        </div>
                    </div>
                </section>

                <section className="w-screen max-w-[85rem] mx-auto px-4 md:px-5 mb-12 md:mb-20" aria-labelledby="testimonials-heading">
                    <div className="flex flex-col justify-center items-center gap-6 md:gap-8">
                        <h2 id="testimonials-heading" className="text-3xl md:text-4xl font-bold mb-2 md:mb-4 text-accent-magenta">What Our Customers Say?</h2>
                        <AnimatedTestimonials testimonials={testimonials} />
                    </div>
                </section>
            </div>

            <Getintouch />
            <LogoCarouselComp />
        </section>
    )
}

export default AboutPage
