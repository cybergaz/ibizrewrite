import { Metadata } from 'next';
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
    title: "Industrial Products | Ball Screws, Bearings, Couplings & More",
    description: "Explore our wide range of industrial products including ball screws, bearings, couplings, and more. Quality engineering components from top brands.",
    metadataBase: new URL(siteConfig.url),
};

export default function ProductsPageLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <section className="w-full min-h-screen overflow-hidden ">
            {children}
        </section>
    );
}
