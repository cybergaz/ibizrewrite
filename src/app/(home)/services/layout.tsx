import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Our Services",
    description: 'services that ibizkart engineers provides (best industrial products supplier in india)',
    metadataBase: new URL('https://ibizkart.com/services'),
};

export default function ServicesPageLayout({
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
