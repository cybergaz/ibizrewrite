import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import Image from "next/image";

export default function HomeLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <main className="w-full min-h-screen overflow-hidden ">

            {/* <Image className="-z-50 fixed opacity-25 blur-xs" src="/images/bg2.jpg" alt="background-image" width={1920} height={1080} /> */}

            <Header className="h-20" />
            <div className="h-24" /> {/* Used as a space between FIXED header and rest of layout */}

            {children}

            <Footer />
        </main>
    );
}
