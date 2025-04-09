import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import Image from "next/image";
import { LocateIcon, Mail, MapPinIcon, Phone } from "lucide-react";

export default function HomeLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <main className="w-full min-h-screen overflow-hidden ">

            {/* <Image className="-z-50 fixed opacity-25 blur-xs" src="/images/bg2.jpg" alt="background-image" width={1920} height={1080} /> */}

            {/* <div className="bg-accent-magenta/90 max-lg:hidden text-white **:text-white fixed w-screen py-1 flex justify-center items-center text-xs"> */}
            {/*     <span className="pr-10 font-light text-xs">#1 Industrial engineering product supplier</span> */}
            {/*     Brands You Like, Company You Trust */}
            {/*     <span className="pl-10  flex items-center gap-3 text-xs"> */}
            {/*         <span className="flex items-center gap-1 font-light"><MapPinIcon className="size-3 stroke-1" /> Bangalore</span> */}
            {/*         <span className="flex items-center gap-1 font-light"><Phone className="size-3 stroke-1" />  08048890627</span> */}
            {/*         <span className="flex items-center gap-1 font-light"><Mail className="size-3 stroke-1" /> raju.kn@ibizkart.com</span> */}
            {/*     </span> */}
            {/* </div> */}
            <Header className="h-20" />
            <div className="h-24" /> {/* Used as a space between FIXED header and rest of layout */}

            {children}

            <Footer />
        </main>
    );
}
