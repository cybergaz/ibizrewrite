import { ArrowRight, ArrowUpRight, CircleCheckBig } from "lucide-react"
import Image from "next/image"
import { Input } from "../ui/input"
import Link from "next/link"

const Footer = () => {
    return (
        <div className="pt-8 md:pt-16 pb-10 flex bg-accent-magenta/90 backdrop-blur-md text-white">
            <div className="max-w-[85rem] mx-auto w-full px-4 md:px-5 flex flex-col gap-8 md:gap-16">
                <div className="flex flex-col md:flex-row gap-8 md:gap-0">
                    <div className="w-full md:w-2/3 flex flex-col gap-6 md:gap-8">
                        <h1 className="text-2xl md:text-3xl font-light space-y-3">
                            Find the Best Industrial Solution for Your Business
                            <br />
                            <span className="text-accent-light-gray">with IBK Engineers</span>
                        </h1>
                        {/* <div className="flex gap-10"> */}
                        {/*     <span className="flex gap-3 font-light"> <CircleCheckBig color="#C8B1E1" /> Content yet to be filled</span> */}
                        {/*     <span className="flex gap-3 font-light"> <CircleCheckBig color="#C8B1E1" /> Content yet to be filled</span> */}
                        {/* </div> */}
                    </div>
                    <div className="w-full md:w-1/3 text-white flex flex-col justify-center items-start md:items-end gap-8">
                        {/* <span>Maximizing Efficiency and Sustainability: Leveraging Renewable Resources for Superior Industrial Solutions and Services</span> */}
                        <Link
                            href="/contact"
                            className="w-fit flex justify-center items-center gap-2 hover:gap-4 bg-white hover:bg-white/90 text-black px-5 py-4 rounded-full cursor-pointer transition-all duration-300">
                            Get In Touch <ArrowUpRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>

                <div className="p-6 md:p-10 bg-[#CCC6E1]/100 rounded-2xl text-black flex flex-col md:flex-row justify-between gap-10">
                    <div className="flex flex-col gap-6">
                        <Image src="/images/logo.png" width={100} height={50} alt="ibizkart logo" />
                        <h1 className="text-xl md:text-2xl font-light">
                            Global Industrial
                            <span className="text-accent-dark-gray pl-2">
                                Sourcing Partner
                            </span>
                        </h1>
                        <div className="flex flex-col gap-2 mt-5">
                            <span className="font-medium">Subscribe to our newsletter</span>
                            <div className="relative flex w-full md:w-80">
                                <Input
                                    placeholder="Your email address"
                                    className="rounded-full border-accent-dark-gray p-5 text-black"
                                    type="email"
                                />
                                <button className="absolute place-self-center right-[6px] bg-accent-magenta/60 px-3 py-1.5 rounded-full text-sm text-white cursor-pointer hover:scale-95 transition-all duration-300">subscribe</button>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-5 text-accent-dark-gray">
                        <h1 className="text-xl md:text-2xl font-light text-black">Quick Links</h1>
                        <Link href="/about" className="border-b font-light border-transparent hover:border-accent-magenta transition-all duration-300 w-fit"> About Us </Link>
                        <Link href="/services" className="border-b font-light border-transparent hover:border-accent-magenta transition-all duration-300 w-fit"> Services </Link>
                        <Link href="/products" className="border-b font-light border-transparent hover:border-accent-magenta transition-all duration-300 w-fit"> Products </Link>
                        <Link href="" className="border-b font-light border-transparent hover:border-accent-magenta transition-all duration-300 w-fit"> Blogs </Link>
                    </div>

                    <div className="flex flex-col gap-5 text-accent-dark-gray">
                        <h1 className="text-xl md:text-2xl font-light text-black">Services</h1>
                        <Link href="/" className="border-b font-light border-transparent hover:border-accent-magenta transition-all duration-300 w-fit"> USA imports to india </Link>
                        <Link href="/" className="border-b font-light border-transparent hover:border-accent-magenta transition-all duration-300 w-fit"> Global imports </Link>
                        <Link href="/" className="border-b font-light border-transparent hover:border-accent-magenta transition-all duration-300 w-fit"> Door to door imports </Link>
                    </div>

                    <div className="flex flex-col gap-3 text-accent-dark-gray">
                        <h1 className="text-xl md:text-2xl font-light text-black mb-1.5">Socials</h1>
                        <div className="flex gap-3">
                            <div className="group w-fit transition-all duration-300 text-gray-900 p-2 rounded-full flex justify-center items-center bg-accent-magenta/10 hover:bg-accent-magenta/60 hover:cursor-pointer">
                                <a href="https://wa.me/919880566644" >
                                    <Image className="group-hover:invert transition-all duration-300" src="/images/socials/whatsapp.svg" alt="whatsapp svg" width={20} height={20} />
                                </a>
                            </div>
                            <div className="group w-fit transition-all duration-300 text-gray-900 p-2 rounded-full flex justify-center items-center bg-accent-magenta/10 hover:bg-accent-magenta/60 hover:cursor-pointer">
                                <a href="https://wa.me/919880566644" >
                                    <Image className="group-hover:invert transition-all duration-300" src="/images/socials/facebook.svg" alt="whatsapp svg" width={20} height={20} />
                                </a>
                            </div>
                            <div className="group w-fit transition-all duration-300 text-gray-900 p-2 rounded-full flex justify-center items-center bg-accent-magenta/10 hover:bg-accent-magenta/60 hover:cursor-pointer">
                                <a href="https://wa.me/919880566644" >
                                    <Image className="group-hover:invert transition-all duration-300" src="/images/socials/twitter.svg" alt="whatsapp svg" width={20} height={20} />
                                </a>
                            </div>
                            <div className="group w-fit transition-all duration-300 text-gray-900 p-2 rounded-full flex justify-center items-center bg-accent-magenta/10 hover:bg-accent-magenta/60 hover:cursor-pointer">
                                <a href="https://wa.me/919880566644" >
                                    <Image className="group-hover:invert transition-all duration-300" src="/images/socials/linkedin.svg" alt="whatsapp svg" width={20} height={20} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
