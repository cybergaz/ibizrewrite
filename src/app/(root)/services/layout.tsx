import { Metadata } from 'next';
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
    title: "Import Services from USA & Worldwide | IBK Engineers",
    description: "IBK Engineers Pvt. Ltd. offers reliable import services from the USA and other countries, with complete door-to-door delivery solutions.",
    metadataBase: new URL(siteConfig.url),
};

export default function ServicesPageLayout({
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
