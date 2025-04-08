import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Jost, Inter, Bodoni_Moda, Ibarra_Real_Nova, Atkinson_Hyperlegible } from 'next/font/google'


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
    title: "IBizKart - Industrial products",
    description: "All type of industrial products",
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
