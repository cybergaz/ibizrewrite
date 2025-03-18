import Image from "next/image";

// import { siteConfig } from "@/config/site";

export default function GlobalLoading() {
    return (
        <main className="bg-background fixed inset-0 z-50 grid h-screen w-full cursor-wait place-items-center">
            <div className="space-y-10">
                {/* <Image */}
                {/*     priority */}
                {/*     src="/Images/logo.png" */}
                {/*     alt={siteConfig.name} */}
                {/*     height={720} */}
                {/*     width={840} */}
                {/*     className="mx-auto p-4 drop-shadow-md sm:h-[30vh] sm:w-[40vw] sm:p-0" */}
                {/* /> */}

                <h1 className="font-redRose text-center text-4xl font-medium drop-shadow-md">
                    Loading...
                </h1>
            </div>
        </main>
    );
}


