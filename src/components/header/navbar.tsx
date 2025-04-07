"use client"

import { Button } from "../ui/button"
import Image from "next/image"
import { NAVLINKS } from "@/lib/constants"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { SearchBar } from "./SearchBar"
import { MenuIcon } from "lucide-react"
import { useState } from "react"
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <div className={cn("w-[87rem] mx-auto px-5 flex justify-between items-center rounded-md transition-normal duration-500")}>
            <Image src="/images/logo.png" width={135} height={100} alt="logo" />
            <Navlinks className="justify-center items-center  max-[960px]:hidden" />
            <div className="flex items-center gap-4">
                <div className="hidden min-[500px]:flex items-center gap-2">
                    <SearchBar />
                    <Button className="cursor-pointer text-sm rounded-md bg-accent-magenta/10 text-accent-magenta hover:bg-accent-magenta/20 transition-colors duration-300">
                        Download Brochure
                    </Button>
                </div>
                <div className="hidden max-[960px]:flex items-center justify-center">
                    <Popover>
                        <PopoverTrigger className="cursor-pointer h-fit rounded-full">
                            <MenuIcon className="size-9 p-1.5 z-20 text-black rounded-full bg-white/50 hover:bg-accent-magenta/10 border border-transparent hover:border-black/50 hover:cursor-pointer" />
                        </PopoverTrigger>
                        <PopoverContent className="animate-slide-in-forward bg-white/70 backdrop-blur-md mr-5">
                            <div className="flex flex-col gap-2 p-2">
                                <Navlinks className="flex flex-col gap-2" />
                                <Button className="cursor-pointer w-fit self-center text-sm rounded-md bg-accent-magenta/10 text-accent-magenta hover:bg-accent-magenta/20 transition-colors duration-300">
                                    Download Brochure
                                </Button>
                            </div>
                        </PopoverContent>
                    </Popover>
                </div>
            </div>
        </div>
    )
}

const Navlinks = ({ className }: { className?: string }) => {
    return (
        <div className={cn("flex justify-center items-center gap-2", className)}>
            {
                NAVLINKS.map((link, index) => (
                    <Link
                        key={index}
                        href={link.href}
                        target={link.href === "https://ibizkart.blogspot.com/" ? "_blank" : ""}
                        className={cn("text-sm font-medium text-accent-dark-gray hover:text-foreground **:transition-colors **:duration-200", (usePathname() === link.href) && "text-accent-magenta")}
                    >
                        <span className={cn("border border-transparent p-1.5 px-5 flex justify-center items-center rounded-md", usePathname() === link.href && " bg-accent-magenta/5")}>
                            {link.title}
                        </span>
                    </Link>
                ))
            }
        </div>
    )
}

export default Navbar
