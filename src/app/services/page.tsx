import Hero from "@/components/shared/hero/Hero";
import Image from "next/image";

const services = [
    {
        name: 'COMERCIALIZACIÓN DE EQUIPOS',
        description: 'Equipos nuevos y usados para la industria.',
        id: 'comercializacion',
        products: [
            {
                title: 'Chillers de Proceso: ',
                description: 'Enfriamiento eficiente para procesos industriales.',
                image: '/box.png'
            },
            {
                title: 'Tuberías de Aluminio para Aire Comprimido y Gases Inertes:',
                description: 'Conexiones rápidas y certificadas.',
                image: '/box.png'
            },
            {
                title: 'Generadores de Nitrógeno:',
                description: 'Producción interna para reducir costos operativos.',
                image: '/box.png'
            }
        ]
    },
    {
        name: 'SISTEMAS TÉRMICOS Y ENFRIAMIENTO',
        description: 'Soluciones para control térmico industrial.',
        id: 'termicos',
        products: [
            {
                title: 'Chillers Industriales',
                description: 'de Alta Eficiencia.',
                image: '/box.png'
            },
            {
                title: 'Intercambiadores de Calor',
                description: '(Placas y Tubulares).',
                image: '/box.png'
            },
            {
                title: 'Tanques',
                description: 'para Condensado y Recuperación de Vapor Flash.',
                image: '/box.png'
            }
        ]
    },
    {
        name: 'GENERACIÓN Y TRATAMIENTO DE AIRE COMPRIMIDO',
        description: 'Optimización de redes de aire comprimido.',
        id: 'comprimido',
        products: [
            {
                title: 'Compresores',
                description: 'de Aire Industriales.',
                image: '/box.png'
            },
            {
                title: 'Filtros OIL-X',
                description: 'de Alto Rendimiento.',
                image: '/box.png'
            },
            {
                title: 'Secadores de Aire',
                description: '(Desecantes y Refrigerativos).',
                image: '/box.png'
            },
            {
                title: 'Sistemas de Monitoreo',
                description: 'de Calidad del Aire.',
                image: '/box.png'
            }
        ]
    },
    {
        name: 'TRANSPORTACIÓN DE MULTIFLUÍDOS',
        description: 'Tuberías especializadas para aire, gas y líquidos.',
        id: 'multifluidos',
        products: [
            {
                title: 'Diseño e Instalación',
                description: ' de Redes de Tuberías Industriales',
                image: '/box.png'
            },
            {
                title: 'Sistemas',
                description: 'de Distribución de Multifluídos.',
                image: '/box.png'
            }
        ]
    }
];

export default function Services() {
    return (
        <div className="text-deysaDark">
            <Hero backgroundImage="/heroImage.jpg">
                <strong className="text-3xl">Nuestros Servicios y Equipos</strong> <br /> <span className=" hidden md:block"> En Deysa Ingeniería, ofrecemos soluciones industriales enfocadas en aire comprimido, energía, optimización de procesos y filtración. Proveemos equipos de alta calidad, servicio de instalación y mantenimiento especializado para garantizar la máxima eficiencia en la industria.</span>
                
            </Hero>

            <div className="p-12">
                {services.map((service, index) => (
                    <section key={index} className="mt-10 mb-12" id={service.id}>
                        <h3 className="text-2xl font-black italic">{service.name}</h3>
                        <p className="mb-5">{service.description}</p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {service.products.map((product, i) => (
                                <div key={i} className="flex flex-col items-center text-center">
                                    <Image src={product.image} width={400} height={400} alt={product.title} />
                                    <div>
                                        <h4 className="font-bold italic mt-2">{product.title}</h4>
                                        <p>{product.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                ))}
            </div>
        </div>
    );
}
