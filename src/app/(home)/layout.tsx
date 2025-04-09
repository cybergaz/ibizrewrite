import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import Image from "next/image";
import { Metadata } from 'next';
import { siteConfig } from "@/config/site";
import { LocateIcon, Mail, MapPinIcon, Phone } from "lucide-react";

export const metadata: Metadata = {
    metadataBase: new URL(siteConfig.url),
    title: {
        default: "Homepage",
        template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    keywords: siteConfig.keywords,
    manifest: '/site.webmanifest',
    openGraph: {
        type: "website",
        locale: "en_US",
        url: siteConfig.url,
        title: siteConfig.name,
        description: siteConfig.description,
        siteName: siteConfig.name,
        images: [
            {
                url: '/images/main.png',
                width: 1200,
                height: 630,
                alt: siteConfig.name,
                type: 'image/png'
            }
        ]
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1
        }
    },
    twitter: {
        card: "summary_large_image",
        title: siteConfig.name,
        description: siteConfig.description,
        site: siteConfig.links.x,
    },
    creator: 'cybergaz',
    icons: {
        icon: [
            { rel: "icon", url: "/favicon/favicon.ico" },
            { url: "/favicon/favicon.ico", type: "image/ico", sizes: "16x16" },
            { url: "/favicon/favicon.ico", type: "image/ico", sizes: "32x32" },
            { url: "/favicon/favicon.ico", type: "image/ico", sizes: "192x192" },
            { url: "/images/logo.png", type: "image/png", sizes: "512x512" },
        ],
        apple: [{ url: "/favicon.png", type: "image/png" }],
    },
};

export default function HomeLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <main className="w-full min-h-screen overflow-hidden ">

            {/* <Image className="-z-50 fixed opacity-25 blur-xs" src="/images/bg2.jpg" alt="background-image" width={1920} height={1080} /> */}

            <div className="bg-accent-magenta/90 max-lg:hidden text-white **:text-white fixed w-screen py-1 flex justify-center items-center text-xs">
                <span className="pr-10 font-light text-xs">#1 Industrial engineering product supplier</span>
                Brands You Like, Company You Trust
                <span className="pl-10  flex items-center gap-3 text-xs">
                    <span className="flex items-center gap-1 font-light"><MapPinIcon className="size-3 stroke-1" /> Bangalore</span>
                    <span className="flex items-center gap-1 font-light"><Phone className="size-3 stroke-1" />  08048890627</span>
                    <span className="flex items-center gap-1 font-light"><Mail className="size-3 stroke-1" /> raju.kn@ibizkart.com</span>
                </span>
            </div>
            <Header className="h-20" />
            <div className="h-24" /> {/* Used as a space between FIXED header and rest of layout */}

            {children}

            <Footer />
        </main>
    );
}
