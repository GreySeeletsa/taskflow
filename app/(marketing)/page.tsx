import Link from "next/link";
import localFont from "next/font/local";
import { Cormorant } from "next/font/google";
import { Medal } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const headingFont = localFont({ src: "../../public/fonts/font.woff2" });

const textFont = Cormorant({
    subsets: ["latin"],
    weight:[
        "300",
        "400",
        "500",
        "600",
        "700",
    ],
});

// MarketingPage component
const MarketingPage = () => {
    return (
        // Container div with flexbox layout for centering content
        <div className="flex items-center justify-center flex-col">
            { /* Div with heading font and styles for the title section */}
            <div className={cn("flex items-center justify-center flex-col", headingFont.className)}>
                <div className="mb-4 flex items-center border shadow-sm p-4 rounded-full uppercase" style={{ backgroundColor: 'rgb(207, 160, 125)',  color: 'rgb(6, 26, 48)' }}>

                    <Medal className="h-6 w-6 mr-2" />
                    No. 1 Task Management Tool
                </div>
                {/*  Main heading with custom font size and styles */}
                <h1 className="text-3xl md:text-6xl text-center text-neutral-800 mb-6">
                    TaskFlow: Your Path to Organized Success.
                </h1>
            </div>
            <div className={cn(
                "text-sm md:text-xl text-neutral-400 mt-4 max-w-xs md:max-w-2xl text-center mx=auto",
                textFont.className,
                )}>
            Collaborate, simplify, prioritize and unlock your productivity potential.
            </div>
            {/* Button component with custom styles and link to sign-up page */}
            <Button className="mt-6" size="lg" asChild>
                <Link href="/sign-up">
                Get started with TaskFlow for free
                </Link>
            </Button>
        </div>
    );
};

export default MarketingPage;