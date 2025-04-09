import { Metadata } from 'next';
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
    title: "Contact Us",
    description: 'Contact IBK Engineers for industrial products, automation solutions, and engineering components. Reach us via email, phone, or our contact form for expert assistance.',
    metadataBase: new URL(siteConfig.url),
    openGraph: {
        title: "Contact Us | Get in Touch with IBK Engineers",
        description: 'Contact IBK Engineers for industrial products, automation solutions, and engineering components. Reach us via email, phone, or our contact form for expert assistance.',
        images: [
            {
                url: '/images/contact_banner.jpg',
                width: 1199,
                height: 629,
                alt: 'IBK Engineers Contact Information',
            }
        ]
    }
};

export default function ContactPageLayout({
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
