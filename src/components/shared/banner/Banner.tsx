import { BlurFade } from "@/components/magicui/blur-fade";
import { ReactNode } from "react";

interface BannerProps {
    children: ReactNode;
}

export default function Banner({ children }: BannerProps){
    return(
        <div className="bg-deysaDark text-white min-h-[80px] flex items-center justify-center">
            <BlurFade delay={0.3}>
                {children}
            </BlurFade>
        </div>
    )
}