import Image from "next/image";

type BlogCardProps = {
    title: string;
    category: string;
    author: string;
    content: string[];
    imageUrl: string;
    date: string;
};

export default function BlogCard({ title, category, author, content, imageUrl, date }: BlogCardProps) {
    return (
        <div className="text-deysaDark lg:flex lg:items-center mt-5 mb-5">
            <div className="lg:w-1/2 flex flex-col p-4 gap-3 xl:gap-10">
                <h2 className="font-semibold italic">{title}</h2>
                <div>
                    <span className="text-gray-500">Categoría:</span>
                    <p className="italic">{category}</p>
                </div>
                <div>
                    <span className="text-gray-500">Autor:</span>
                    <p>{author}</p>
                </div>
                <div>
                    <span className="text-gray-500">Contenido:</span>
                    <ul className="list-disc pl-5">
                        {content.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="lg:w-1/2 relative">
                <div className="absolute inset-0 bg-gradient-to-b from-[#3E61AB] to-[#192745] mix-blend-hard-light"></div>
                <Image src={imageUrl} width={1000} height={1000} alt="blogImage" />
                <div className="absolute mt-[-55px] ml-3 flex items-center gap-3">
                    <div className="bg-deysaYellow rounded-full p-2 flex items-center justify-center">
                        <Image src="/logoDark.png" width={18} height={18} alt="logo" />
                    </div>
                    <div className="text-white">
                        <span>Fecha de publicación: </span>
                        <p>{date}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}