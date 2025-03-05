import { BlurFade } from "@/components/magicui/blur-fade";
import ContactForm from "../contactForm/ContactForm";

interface HeroProps {
  children: React.ReactNode;
  backgroundImage: string;
}

export default function Hero({ children, backgroundImage }: HeroProps) {
  return (
    <BlurFade inView delay={0.3}>
        <div
        className="h-[455px] relative bg-no-repeat bg-center bg-cover"
        style={{ backgroundImage: `url(${backgroundImage})` }}
        >
        <div className="absolute inset-0 bg-gradient-to-b from-[#3E61AB] to-[#192745] mix-blend-hard-light"></div>
        <div className="relative z-10 flex flex-col items-center justify-center gap-10 h-full text-white text-2xl font-bold md:p-20 lg:p-36 xl:p-56">
            <BlurFade inView delay={0.5}>
                <p className="text-center font-normal p-4 md:p-0">
                        {children}
                </p>
            </BlurFade>
            <div className="flex items-center justify-center flex-col gap-2">
            <ContactForm />
            <p className="italic font-bold text-sm text-center">
                OBTÉN UNA COTIZACIÓN <br />
                PERSONALIZADA EL MISMO DÍA HÁBIL.
            </p>
            </div>
        </div>
        </div>
    </BlurFade>

  );
}
