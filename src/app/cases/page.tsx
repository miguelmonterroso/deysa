import Banner from "@/components/shared/banner/Banner";
import Hero from "@/components/shared/hero/Hero";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

const empresas = [
    {
        name: 'PLANTA AUTOMOTRIZ EN MONTERREY',
        solution: ['Instalación de sistemas de filtración y secado de aire para eliminar impurezas.'],
        img: '/Generadores/Generadores/18.png'
    },
    {
        name: 'PLANTA AUTOMOTRIZ EN QUERETARO',
        solution: ['Instalación de sistemas de filtración y secado de aire para eliminar impurezas.'],
        img: '/Generadores/Generadores/5.png'
    },
    {
        name: 'PLANTA AUTOMOTRIZ EN TUXLA',
        solution: ['Instalación de sistemas de filtración y secado de aire para eliminar impurezas.'],
        img: '/Generadores/Generadores/20.png'
    },
    
];

export default function Cases() {
    return (
        <div className="text-deysaDark">
            <Hero backgroundImage="/Generadores/Generadores/30.png">
                <strong className="text-3xl">Soluciones Reales, Resultados Comprobados</strong> <br />
                Descubre cómo hemos transformado industrias con
                <strong> innovación</strong>, <strong> eficiencia</strong> y <strong> tecnología</strong> de vanguardia.
            </Hero>

            <Banner>
                <div className="flex flex-col md:flex-row text-center md:text-left items-center gap-5 p-10">
                    <Image src="/logo.png" width={45} height={45} alt="logo" />
                    <p>
                        En <strong>Deysa Ingeniería</strong>, hemos ayudado a numerosas empresas a <strong>optimizar sus procesos, reducir costos y mejorar su eficiencia operativa</strong>.
                    </p>
                </div>
            </Banner>

            <div className="p-12">
                <p className="mb-8">
                    A través de nuestra experiencia en aire comprimido, generación de nitrógeno, cogeneración energética y sistemas térmicos, hemos desarrollado soluciones personalizadas para distintas industrias.
                </p>
                <div className="w-full flex justify-center">
                    <Image src="/Generadores/Generadores/19.png" width={800} height={800} alt="casesImage"/>
                </div>

                <div className="mt-10 mb-10 flex flex-wrap gap-10 justify-between">
                    {empresas.map((empresa, index) => (
                        <article key={index} className="w-full md:w-[47%] lg:w-[48%] border-2 p-10">
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-b from-[#3E61AB] to-[#192745] mix-blend-hard-light"></div>
                                <Image src={empresa.img} width={800} height={800} alt="companyImage" />
                            </div>
                            <div className="mt-5">
                                <p>Nombre del Cliente o Industria</p>
                                <h2 className="text-2xl font-black italic">{empresa.name}</h2>
                                <p>
                                    Nuestra Solución
                                </p>
                                <ul className="list-disc ml-4 italic">
                                        {empresa.solution.map((sol, i) => (
                                            <li key={i}>{sol}</li>
                                        ))}
                                    </ul>
                            </div>
                        </article>
                    ))}
                </div>

                <Separator className="bg-deysaYellow" />
                <p className="text-center mt-10 mb-2">
                    Nuestra capacidad para ofrecer soluciones integrales y personalizadas nos permite desarrollar <br />
                    proyectos altamente competitivos y eficientes para diversas industrias.
                </p>
            </div>
        </div>
    );
}
