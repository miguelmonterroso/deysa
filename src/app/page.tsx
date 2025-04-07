import { BlurFade } from "@/components/magicui/blur-fade";
import Banner from "@/components/shared/banner/Banner";
import Hero from "@/components/shared/hero/Hero";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export default function Home() {
  return (
    <div className="text-deysaDark">
      <BlurFade>
      <Hero backgroundImage="/Generadores/Generadores/30.png">
      Nuestra capacidad para ofrecer <strong>soluciones integrales 
      y personalizadas</strong> nos permite desarrollar proyectos altamente 
      competitivos y eficientes para diversas industrias.
      </Hero>
      <Banner>
        <p className="text-center font-normal text-sm p-5">
          Tenemos presencia en todo <strong>México</strong>, <br />
          con oficinas en <strong>Querétaro</strong>, <strong>Monterrey</strong>, <strong>CDMX</strong>, <strong>Guadalajara</strong> y <strong>San Luis Potosí</strong>, ofreciendo atención rápida y cercana a nuestros clientes.
        </p>
      </Banner>
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 p-12">
          <article className="mb-8">
            <h2 className="font-black text-xl italic uppercase">Sobre Nosotros</h2>
            <p>
              En Deysa Ingeniería, contamos con más de 10 años de experiencia 
              brindando soluciones industriales especializadas en aire comprimido, 
              generación de nitrógeno, cogeneración energética y optimización de 
              redes industriales. Nuestro enfoque en innovación y eficiencia nos 
              permite desarrollar proyectos competitivos y personalizados para 
              diversas industrias.
            </p>
          </article>
          <article className="mb-8">
            <h2 className="font-black text-xl italic uppercase">Misión</h2>
            <p>
              Ser el socio estratégico de la industria, proporcionando 
              soluciones innovadoras, eficientes y de alta calidad en 
              productos y servicios  industriales.
            </p>
          </article>
          <article className="mb-8">
            <h2 className="font-black text-xl italic uppercase">Visión</h2>
            <p>
              Convertirnos en la empresa líder en desarrollo industrial
              y tecnológico en México, destacándonos por nuestra 
              calidad, rapidez y eficiencia en cada proyecto.
            </p>
          </article>

        </div>
        <div className="w-full md:w-1/2 flex items-center justify-center p-12">
          <Image src="/Generadores/Generadores/3.png" width={500} height={800} alt="hero"/>
        </div>
      </div>
      <Separator className="bg-deysaYellow mb-10"/>
      <div className="p-12">
        <h2 className="font-black text-xl italic mb-4 uppercase">Nuestros Servicios</h2>
          <p className="mb-8">
            En <strong>Deysa Ingeniería ofrecemos soluciones industriales en México</strong> , especializándonos en <strong>aire comprimido, generación de nitrógeno, cogeneración energética y sistemas de enfriamiento.</strong> Contamos con equipos de alta eficiencia para <strong>optimizar procesos industriales, reducir costos y mejorar la productividad</strong>. Brindamos atención en todo el país con un servicio profesional y personalizado. Contáctanos y descubre cómo mejorar el rendimiento de tu industria con tecnología innovadora y sostenible.
          </p>
          <div className="w-full flex items-center justify-center">
            <Image src="/Generadores/Generadores/tuberias.png" width={800} height={800} alt="image"/>
          </div>
          <p className="mt-8">
            Brindamos una <strong>amplia gama de productos y servicios</strong> diseñados para mejorar la <strong>eficiencia y productividad</strong> en la industria.
          </p>
      </div>
      <Banner>
        <Image src='/deysaLogo.png' width={150} height={150} alt="logo" className="mb-3 mt-3"/>
      </Banner>
      <Separator className="bg-deysaYellow mb-10"/>
      <div className="flex flex-col gap-5 md:gap-10">
        <section className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 p-12 flex flex-col justify-center">
            <h3 className="font-black text-xl italic mb-8"> SOLUCIONES ENERGÉTICAS</h3>
            <ul className="flex flex-col gap-5 italic">
              <li>Cogeneración energética</li>
              <li>Generación de aire comprimido</li>
              <li>Generación de nitrógeno</li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 p-10 mt-[-50px] md:mt-0">
            <Image src="/Generadores/Generadores/electricidad.png" width={300} height={300} alt="productImage"/>
          </div>
        </section>
        <section className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 p-12 flex flex-col justify-center">
            <h3 className="font-black text-xl italic mb-8"> SISTEMAS DE TRANSPORTE Y DISTRIBUCION</h3>
            <ul className="flex flex-col gap-5 italic">
              <li>Transportación de multifluidos</li>
              <li>Diseño y optimización de redes industriales</li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 p-10 mt-[-50px] md:mt-0">
            <Image src="/Generadores/Generadores/1.png" width={300} height={300} alt="productImage"/>
          </div>
        </section>
        <section className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 p-12 flex flex-col justify-center">
            <h3 className="font-black text-xl italic mb-8"> TRATAMIENTO Y CONTROL DE FLUIDOS</h3>
            <ul className="flex flex-col gap-5 italic">
              <li>Tratamiento de aire</li>
              <li>Filtración hidráulica</li>
              <li>Instrumentación para vapor</li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 p-10 mt-[-50px] md:mt-0">
            <Image src="/Generadores/Generadores/27.png" width={300} height={300} alt="productImage"/>
          </div>
        </section>
        <section className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 p-12 flex flex-col justify-center">
            <h3 className="font-black text-xl italic mb-8"> AUDITORÍA Y MONITOREO</h3>
            <ul className="flex flex-col gap-5 italic">
              <li>Auditorías y monitoreo de redes</li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 p-10 mt-[-50px] md:mt-0">
            <Image src="/Generadores/Generadores/32.png" width={300} height={300} alt="productImage"/>
          </div>
        </section>
      </div>

      <Separator className="bg-deysaYellow mt-20"/>

      <p className="text-center p-9">
        Nuestra capacidad para ofrecer soluciones integrales y personalizadas nos permite desarrollar <br className="hidden md:block" />
        proyectos altamente competitivos y eficientes para diversas industrias.
      </p>
      </BlurFade>
    </div>
  );
}
