import { Metadata } from 'next';
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
    title: "Contact IBK Engineers Pvt. Ltd | Get in Touch Today ",
    description: "Have a question or need a quote? Contact IBK Engineers Pvt. Ltd for inquiries related to industrial products and services. We're here to help!",
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
        <section className="w-full min-h-screen overflow-hidden ">
            {children}
        </section>
    );
}
