import { cn } from "@/lib/utils"
import { InfiniteSlider } from "../ui/framer-slider"
import Image from "next/image"


const LogoSlider = ({ className }: { className?: string }) => {
    return (
        <div className={cn("flex flex-col relative", className)}>
            <div className="absolute inset-y-0 left-0 w-64 bg-gradient-to-r from-white to-transparent z-10"></div>
            <h1 className="self-center text-4xl font-medium text-accent-magenta">Our Clients</h1>

            <InfiniteSlider durationOnHover={80} duration={15} gap={70} className="mt-14">
                {
                    [...Array(15)].map((logo, index) => (
                        <Image
                            key={index}
                            src="/images/logo.png"
                            alt="hello"
                            className=""
                            width={100}
                            height={10}
                        />
                    ))
                }
            </InfiniteSlider>
            <div className="absolute inset-y-0 right-0 w-64 bg-gradient-to-l from-white to-transparent z-10"></div>
        </div>
    )
}

export default LogoSlider
