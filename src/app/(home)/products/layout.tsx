import { Metadata } from 'next';
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
    title: "Products",
    description: 'products range ibizkart engineers (best industrial products supplier in india)',
    metadataBase: new URL(siteConfig.url),
};

export default function ProductsPageLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <main className="w-full min-h-screen overflow-hidden ">
            {children}
        </main>
    );
}
