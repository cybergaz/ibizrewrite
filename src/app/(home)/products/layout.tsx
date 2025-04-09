
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Products",
    description: 'products range ibizkart engineers (best industrial products supplier in india)',
    metadataBase: new URL('https://ibizkart.com/products'),
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
