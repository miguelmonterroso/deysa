import Banner from "@/components/shared/banner/Banner";
import BlogCard from "@/components/shared/blogCard/BlogCard";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Blog() {
  const blogs = [
    {
      title:
        "Optimiza tu Producción con Sistemas de Aire Comprimido de Alta Eficiencia",
      category: "Aire Comprimido, Eficiencia Industrial",
      author: "Diana L. Panzo",
      content: [
        "Introducción sobre la importancia del aire comprimido en la industria.",
        "Descripción de los diferentes tipos de compresores y sus aplicaciones.",
      ],
      imageUrl: "/blogImage.png",
      date: "26 de octubre de 2024",
    },
    {
      title: "Mejorando la Eficiencia Energética en la Industria",
      category: "Energía, Sustentabilidad",
      author: "Carlos M. Rivas",
      content: [
        "Cómo reducir el consumo de energía en procesos industriales.",
        "Casos de éxito de empresas que han optimizado su eficiencia energética.",
      ],
      imageUrl: "/blogImage.png",
      date: "10 de noviembre de 2024",
    },
    {
      title: "Innovaciones en Automatización Industrial",
      category: "Automatización, Industria 4.0",
      author: "Laura T. Fernández",
      content: [
        "Cómo la automatización está transformando la producción industrial.",
        "Ejemplos de empresas que han adoptado nuevas tecnologías.",
      ],
      imageUrl: "/blogImage.png",
      date: "15 de noviembre de 2024",
    },
    {
      title: "Sistemas de Calidad en Procesos Industriales",
      category: "Calidad, Control de Producción",
      author: "José M. Pérez",
      content: [
        "Importancia del control de calidad en la industria.",
        "Cómo implementar un sistema de gestión de calidad eficiente.",
      ],
      imageUrl: "/blogImage.png",
      date: "20 de noviembre de 2024",
    },
  ];

  return (
    <div>
      <div className="p-4 lg:p-10 lg:w-[75%]">
        <h2 className="font-black italic p-4">LO ÚLTIMO</h2>
        <hr className="mb-5" />
        {blogs.map((blog, index) => (
          <div key={index}>
            <BlogCard
              title={blog.title}
              category={blog.category}
              author={blog.author}
              content={blog.content}
              imageUrl={blog.imageUrl}
              date={blog.date}
            />
            {index === 1 && (
              <Banner>
                <div className="flex gap-3 items-center">
                  <Image src="/logo.png" width={50} height={50} alt="logo" />
                  <p>
                    ¿Listo para optimizar tu industria? ¡Comparte tu número y te
                    contactamos ahora!
                  </p>
                </div>
              </Banner>
            )}
          </div>
        ))}
        <div className="flex justify-end gap-5 mt-6">
          <Button className="px-4 py-2 bg-deysaYellow rounded hover:bg-gray-300 italic text-deysaDark font-black text-lg capitalize">Más recientes</Button>
          <Button className="px-4 py-2 bg-deysaYellow rounded hover:bg-gray-300 italic text-deysaDark font-black text-lg capitalize">Más antiguas</Button>
        </div>
      </div>
    </div>
  );
}