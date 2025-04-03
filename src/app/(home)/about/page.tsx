import Card from "@/components/ui/custom-card"
import { ArrowRight, CircleCheckBig } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { LogoCarouselComp } from "@/components/other/logo-carousel"

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
                            Delivering Precision Engineering Solutions
                        </h1>
                        {/* <span className=" text-3xl text-accent-magenta/40 font-medium">since 2014</span> */}
                        <p className="text-accent-dark-gray text-lg">
                            At IBK Engineers, we deliver high-quality engineering solutions with precision and innovation. From motion control to power tools, we provide industries with reliable components and automation—all under one roof.
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
                    <div className="max-w-[85rem] mx-auto px-32 flex flex-col gap-16 justify-center items-center">
                        <p className="text-2xl text-zinc-100 text-center">
                            At IBK Engineers we are your trusted partner in industrial excellence, offering a comprehensive range of high-quality engineering solutions. With a commitment to innovation and precision, we provide industries with the tools, components, and automation solutions they need to thrive. From motion control to power tools, we deliver <span className="text-white">reliability, efficiency, and expertise—all under one roof.</span>
                        </p>
                        {/* <div className="flex justify-between gap-3 w-full"> */}
                        {/*     <div className="flex flex-col justify-center items-center gap-3 bg-white/10 text-white p-10 rounded-2xl w-60"> */}
                        {/*         <span className="text-4xl font-bold">574+</span> */}
                        {/*         <span className="text-lg font-medium text-white/80">Products Available</span> */}
                        {/*     </div> */}
                        {/*     <div className="flex flex-col justify-center items-center gap-3 bg-white/10 text-white p-10 rounded-2xl w-60"> */}
                        {/*         <span className="text-4xl font-bold">200+</span> */}
                        {/*         <span className="text-lg font-medium text-white/80">Client Reviews</span> */}
                        {/*     </div> */}
                        {/*     <div className="flex flex-col justify-center items-center gap-3 bg-white/10 text-white p-10 rounded-2xl w-60"> */}
                        {/*         <span className="text-4xl font-bold">100+</span> */}
                        {/*         <span className="text-lg font-medium text-white/80">ToBeFilled</span> */}
                        {/*     </div> */}
                        {/*     <div className="flex flex-col justify-center items-center gap-3 bg-white/10 text-white p-10 rounded-2xl w-60"> */}
                        {/*         <span className="text-4xl font-bold">50+</span> */}
                        {/*         <span className="text-lg font-medium text-white/80">ToBeFilled</span> */}
                        {/*     </div> */}
                        {/* </div> */}
                        <div className="flex flex-wrap justify-between gap-3 w-full">
                            <Card h1="574+" h2="Products Available" />
                            <Card h1="200+" h2="Client Reviews" />
                            <Card h1="100+" h2="Temp Content" />
                            <Card h1="50" h2="Temp Content" />
                        </div>
                    </div>
                </div>

                <div className="max-w-[85rem] px-5 mx-auto flex flex-col gap-20">
                    <div className="flex justify-between gap-14 w-full *:w-1/2">
                        <Image className="order-1 aspect-3/2 rounded-3xl" src="/images/header_img.png" alt="about us image" width={600} height={500} />
                        <div className="order-2 flex flex-col flex-wrap gap-5 mt-10">
                            <h1 className="text-4xl font-semibold text-accent-magenta">Who We Are?</h1>
                            <p className="text-accent-dark-gray">
                                Established in 2014 in Bengaluru, Karnataka, IBK Engineers Pvt. Ltd. specializes in wholesaling, supplying, and trading industrial components. We offer a wide range of products, including bearings, linear guides, ball screws, roller chains, clamps, and imported parts from leading brands. With a focus on quality, reliability, and customer satisfaction, we provide efficient solutions at competitive prices.
                            </p>
                            <div className="mt-3 flex flex-col gap-5">
                                <p className="flex gap-5 animate-fade-in-scale"> <CircleCheckBig color="#3E1854" /> List content Yet to be filled </p>
                                <p className="flex gap-5"> <CircleCheckBig color="#3E1854" /> List content Yet to be filled </p>
                                <p className="flex gap-5"> <CircleCheckBig color="#3E1854" /> List content Yet to be filled </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-between gap-14 w-full *:w-1/2">
                        <Image className="order-2 aspect-3/2 rounded-3xl" src="/images/pexels-photo-24739784.webp" alt="about us image" width={600} height={500} />
                        <div className="order-1 flex flex-col flex-wrap gap-5 mt-10">
                            <h1 className="text-4xl font-semibold text-accent-magenta">Our Commitment To Quality</h1>
                            <p className="text-accent-dark-gray">
                                Quality is at the heart of everything we do. Each product is crafted using the latest technology and sourced from reliable manufacturers to ensure durability and high performance. Our rigorous quality checks guarantee that only the finest products reach our customers.
                            </p>
                            <div className="mt-3 flex flex-col gap-5">
                                <p className="flex gap-5"> <CircleCheckBig color="#3E1854" /> List content Yet to be filled </p>
                                <p className="flex gap-5"> <CircleCheckBig color="#3E1854" /> List content Yet to be filled </p>
                                <p className="flex gap-5"> <CircleCheckBig color="#3E1854" /> List content Yet to be filled </p>
                            </div>
                        </div>
                    </div>


                    <div className="flex justify-between gap-14 w-full *:w-1/2">
                        <Image className="order-1 aspect-3/2 rounded-3xl" src="/images/pexels-photo-11294358.webp" alt="about us image" width={600} height={500} />
                        <div className="order-2 flex flex-col flex-wrap gap-5 mt-10">
                            <h1 className="text-4xl font-semibold text-accent-magenta">What We Offer?</h1>
                            <div className="text-accent-dark-gray">
                                We take pride in offering a comprehensive range of industrial solutions, including:
                                <div className="pl-4 mt-3 flex flex-col gap-5">
                                    <p className="flex gap-5"> <CircleCheckBig color="#3E1854" size={35} /> <span><span className="font-semibold">Automation & Motion Control:</span> Bosch Rexroth Aluminum Profiles, Conveyor Rollers, Ball Screws, and Linear Guides.</span></p>
                                    <p className="flex gap-5"> <CircleCheckBig color="#3E1854" size={33} /> <span><span className="font-semibold">Power & Pneumatics:</span> Aventics Bosch Rexroth Pneumatic Products, Rexroth Bosch VFD, and Hand Tools.</span></p>
                                    <p className="flex gap-5"> <CircleCheckBig color="#3E1854" size={31} /> <span><span className="font-semibold">Precision Components:</span> Bearings, Carr Lane Tooling Components, Fasteners, and Cutting Tools.</span></p>
                                    <p className="flex gap-5"> <CircleCheckBig color="#3E1854" size={27} /> <span><span className="font-semibold">Industrial Essentials:</span> Welding Accessories, Roller Chains, Workstations, and more.</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-accent-magenta/70 from-accent-dark-gray to-accent-magenta/90 w-screen py-24">
                    <div className="max-w-[80rem] mx-auto px-5 relative flex flex-col items-center gap-16">
                        <div className="text-center">
                            <h1 className="text-4xl font-bold text-white mb-4">Why Choose IBK Engineers?</h1>
                            <p className="text-gray-200 max-w-2xl mx-auto">Partner with a leader in industrial components and solutions</p>
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
                            <div className="group relative z-10 p-8 rounded-2xl flex flex-col gap-5 justify-between bg-white/70  text-black" >
                                <span className="absolute inset-0 size-0 -z-10 group-hover:size-24 translate-1 group-hover:translate-8 group-hover:blur-2xl rounded-full bg-white transition-normal duration-700" />
                                <div className="flex items-center gap-4">
                                    <div className="p-1.5 rounded-lg bg-accent-magenta/10">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent-magenta" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                                        </svg>
                                    </div>
                                    <h2 className="text-lg font-bold text-accent-dark-gray">Extensive Product Portfolio</h2>
                                </div>
                                <p className="text-accent-gray">A comprehensive one-stop solution for all your industrial component needs, from bearings to automation systems.</p>
                                <span className="absolute right-0 bottom-0 size-0 -z-10 group-hover:size-24 -translate-1 group-hover:-translate-8 group-hover:blur-2xl rounded-full bg-[#EFDFFC] transition-normal duration-700" />
                            </div>

                            <div className="group relative z-10 p-8 rounded-2xl flex flex-col gap-5 justify-between bg-white/70  text-black" >
                                <span className="absolute inset-0 size-0 -z-10 group-hover:size-24 translate-1 group-hover:translate-8 group-hover:blur-2xl rounded-full bg-white transition-normal duration-700" />
                                <div className="flex items-center gap-4">
                                    <div className="p-1.5 rounded-lg bg-accent-magenta/10">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent-magenta" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                        </svg>
                                    </div>
                                    <h2 className="text-lg font-bold text-accent-dark-gray">Uncompromising Quality</h2>
                                </div>
                                <p className="text-accent-gray">Rigorous quality control processes ensure only the finest products reach our valued customers.</p>
                                <span className="absolute right-0 bottom-0 size-0 -z-10 group-hover:size-24 -translate-1 group-hover:-translate-8 group-hover:blur-2xl rounded-full bg-[#EFDFFC] transition-normal duration-700" />
                            </div>

                            <div className="group relative z-10 p-8 rounded-2xl flex flex-col gap-5 justify-between bg-white/70  text-black" >
                                <span className="absolute inset-0 size-0 -z-10 group-hover:size-24 translate-1 group-hover:translate-8 group-hover:blur-2xl rounded-full bg-white transition-normal duration-700" />
                                <div className="flex items-center gap-4">
                                    <div className="p-1.5 rounded-lg bg-accent-magenta/10">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent-magenta" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <h2 className="text-lg font-bold text-accent-dark-gray">Competitive Pricing</h2>
                                </div>
                                <p className="text-accent-gray text-lg">Premium quality products at the most competitive market rates, ensuring the best value for your investment.</p>
                                <span className="absolute right-0 bottom-0 size-0 -z-10 group-hover:size-24 -translate-1 group-hover:-translate-8 group-hover:blur-2xl rounded-full bg-[#EFDFFC] transition-normal duration-700" />
                            </div>

                            <div className="group relative z-10 p-8 rounded-2xl flex flex-col gap-5 justify-between bg-white/70  text-black" >
                                <span className="absolute inset-0 size-0 -z-10 group-hover:size-24 translate-1 group-hover:translate-8 group-hover:blur-2xl rounded-full bg-white transition-normal duration-700" />
                                <div className="flex items-center gap-4">
                                    <div className="p-1.5 rounded-lg bg-accent-magenta/10">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent-magenta" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                        </svg>
                                    </div>
                                    <h2 className="text-lg font-bold text-accent-dark-gray">Customer-Centric Approach</h2>
                                </div>
                                <p className="text-accent-gray">Dedicated support team providing personalized solutions and ensuring timely delivery for your business needs.</p>
                                <span className="absolute right-0 bottom-0 size-0 -z-10 group-hover:size-24 -translate-1 group-hover:-translate-8 group-hover:blur-2xl rounded-full bg-[#EFDFFC] transition-normal duration-700" />
                            </div>
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
