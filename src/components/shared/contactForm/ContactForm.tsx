import { BlurFade } from "@/components/magicui/blur-fade";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import FormComponent from "./form/FormComponent";

export default function ContactForm() {
  return (
    <BlurFade inView delay={0.7}>
      <Dialog>
        <DialogTrigger className="bg-deysaYellow text-black font-black italic hover:bg-amber-300 p-2 text-lg">
            COTIZA AHORA
        </DialogTrigger>
        <DialogContent className="flex flex-col md:flex-row md:min-w-[785px] min-h-[700px]">
          <DialogTitle className="hidden">FORMULARIO DE CONTACTO</DialogTitle>
          <div className="w-full md:w-1/2 bg-deysaDark p-4 md:p-10 text-white flex flex-col justify-evenly">
            <Image src="/deysaLogo.png" width={150} height={150} alt="logo" />
            <div className="hidden md:block">
              <h2 className="font-bold text-xl italic">
                Presencia en toda la <br /> República
              </h2>
              <p className="font-normal">
                Brindamos soluciones en todo México con atención rápida y
                personalizada.
              </p>
            </div>
            <div className="hidden md:block">
              <h2 className="font-bold text-xl italic">Contáctanos</h2>
              <p>
                Hablemos sobre tu proyecto y encuentra la mejor solución para tu
                industria.
              </p>
            </div>
            <section className="hidden md:block">
              <a className="flex gap-2" href="tel:+">
                <span className="text-deysaYellow">Móvil: </span>{" "}
                <p className="italic">+52 44 22 74 94 86</p>
              </a>
            </section>
            <section className="hidden md:block">
              <a className="flex gap-2" href="tel:+">
                <span className="text-deysaYellow">Oficina: </span>{" "}
                <p className="italic">+52 442 58 92 409</p>
              </a>
            </section>
            <section className="hidden md:block">
              <a className="flex gap-2" href="mailto:">
                <span className="text-deysaYellow">Correo: </span>{" "}
                <p className="italic">mercadotecnia@deysa.mx</p>
              </a>
            </section>
          </div>
          <div className="w-full md:w-1/2 p-8">
            <h2 className="font-black italic text-xl mt-10">
              FORMULARIO DE CONTACTO
            </h2>
            <FormComponent />
          </div>
        </DialogContent>
      </Dialog>
    </BlurFade>
  );
}
