
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Contact Us",
    description: 'Contact ibizkart engineers (best industrial products supplier in india)',
    metadataBase: new URL('https://ibizkart.com/contact'),
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
