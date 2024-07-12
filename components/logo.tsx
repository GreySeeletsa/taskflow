import Image from "next/image"
import Link from "next/link"
import localFont from "next/font/local"

import { cn } from "@/lib/utils"

const headingFont = localFont({
    src: "../public/fonts/font.woff2",
});

export const Logo = () => {
    return (
        <Link href="/">
            <div className="hover:opacity-75 transition items-center hidden md:flex">
                <Image
                src="/logo.png"
                alt="logo"
                height={65}
                width={65}
                />
                <p className={cn("text-lg text-pretty text-neutral-700 pb-1", headingFont.className)}>
                    TaskFlow
                </p>
            </div>
        </Link>
    );
};