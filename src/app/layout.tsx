import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Jost, Inter, Bodoni_Moda, Ibarra_Real_Nova, Atkinson_Hyperlegible } from 'next/font/google'
import { siteConfig } from "@/config/site";

const jost = Jost({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    variable: '--font-jost'
})

const inter = Inter({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    variable: '--font-inter'
})

export const metadata: Metadata = {
    metadataBase: new URL(siteConfig.url),
    title: {
        default: `${siteConfig.name} | Best Industrial Products Supplier in India`,
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

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={`${inter.variable} ${inter.className} ${jost.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
