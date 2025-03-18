
export default function HomeLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex w-full justify-center min-h-screen overflow-hidden">
            {children}
        </div>
    );
}
