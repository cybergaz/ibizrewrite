import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Getintouch = () => {
    return (
        <div className="px-4 sm:px-5">
            <div className="max-w-[82rem] mx-auto flex flex-col md:flex-row gap-5 justify-between items-center border border-accent-dark-gray/30 bg-white/80 shadow-2xl rounded-3xl my-10 sm:my-20 p-6 sm:p-10">
                <Image 
                    src="/images/contact3.svg" 
                    alt="contact image" 
                    className="w-full md:w-auto max-w-[300px] sm:max-w-[400px]" 
                    width={400} 
                    height={300}
                    priority
                />
                <div className="flex flex-col justify-between gap-6 sm:gap-10 text-center md:text-left">
                    <div className="text-xl sm:text-2xl font-light text-accent-gray leading-8 sm:leading-10">
                        Enhance Your Operations with Reliable Tools and Components
                        <br />
                        <span className="text-accent-magenta font-normal">Connect with IBK Engineers</span>
                    </div>

                    <Link
                        href="/contact"
                        className="group w-fit mx-auto md:mx-0 flex gap-2 justify-center items-center bg-black p-3 px-8 text-base sm:text-lg rounded-full **:transition-all **:duration-300"
                    >
                        <span className="text-white"> CONTACT US NOW ! </span>
                        <ArrowUpRight className="size-0 group-hover:size-5 text-white" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Getintouch
