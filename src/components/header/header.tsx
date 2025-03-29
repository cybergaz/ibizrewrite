"use client"

import { cn } from "@/lib/utils"
import Navbar from "./navbar"
import { useEffect, useState } from "react"

const Header = ({ className }: { className?: String }) => {

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Check if the user has scrolled more than 50 pixels
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <div className={cn("z-50 fixed w-screen min-h-32 justify-center items-center flex bg-transparent transition-normal duration-500", isScrolled && "min-h-20 bg-white/70 backdrop-blur-sm ", className)}>
            <Navbar />
        </div>
    )
}

export default Header
