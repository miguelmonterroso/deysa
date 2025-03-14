'use client';

import { useState, useEffect } from "react";
import Banner from "@/components/shared/banner/Banner";
import BlogCard from "@/components/shared/blogCard/BlogCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton"

// Interfaces para la respuesta de WordPress
interface WPPost {
  title: { rendered: string };
  date: string;
  slug: string;
  categories: number[];
  tags: number[];
  _embedded?: {
    author?: Array<{ name: string }>;
    "wp:featuredmedia"?: Array<{ source_url: string }>;
  };
}

interface WPCategory {
  id: number;
  name: string;
}

interface WPTag {
  id: number;
  name: string;
}

// Interfaz para nuestro BlogPost transformado
interface BlogPost {
  title: string;
  category: string;
  tags: string[];
  author: string;
  imageUrl: string;
  date: string;
  slug: string;
}

export default function Blog() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("Todo");
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const itemsPerPage = 4;

  useEffect(() => {
    async function fetchData() {
      try {
        const [postsRes, categoriesRes, tagsRes] = await Promise.all([
          fetch("http://test.local/wp-json/wp/v2/posts?_embed"),
          fetch("http://test.local/wp-json/wp/v2/categories"),
          fetch("http://test.local/wp-json/wp/v2/tags"),
        ]);

        if (!postsRes.ok || !categoriesRes.ok || !tagsRes.ok) {
          throw new Error("Error en alguna de las peticiones");
        }

        const posts: WPPost[] = await postsRes.json();
        const wpCategories: WPCategory[] = await categoriesRes.json();
        const wpTags: WPTag[] = await tagsRes.json();

        const transformedBlogs = posts.map((post: WPPost) => {
          const title = post.title.rendered;
          const categoryNames = post.categories
            .map((catId) => {
              const cat = wpCategories.find((c) => c.id === catId);
              return cat ? cat.name : "";
            })
            .filter((name) => name !== "");
          const category = categoryNames.join(", ") || "Sin Categoría";

          const tagNames = post.tags
            .map((tagId) => {
              const tag = wpTags.find((t) => t.id === tagId);
              return tag ? tag.name : "";
            })
            .filter((name) => name !== "");

          const author =
            post._embedded && post._embedded.author && post._embedded.author[0]
              ? post._embedded.author[0].name
              : "Desconocido";

          const imageUrl =
            post._embedded &&
            post._embedded["wp:featuredmedia"] &&
            post._embedded["wp:featuredmedia"][0]
              ? post._embedded["wp:featuredmedia"][0].source_url
              : "/blogImage.png";

          const date = new Date(post.date).toLocaleDateString("es-ES", {
            day: "numeric",
            month: "long",
            year: "numeric",
          });
          const slug = post.slug;

          return { title, category, tags: tagNames, author, imageUrl, date, slug };
        });

        setBlogs(transformedBlogs);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  // Filtrado por categoría
  const filteredBlogs =
    selectedCategory === "Todo"
      ? blogs
      : blogs.filter((blog) => blog.category.includes(selectedCategory));

  const totalPages = Math.ceil(filteredBlogs.length / itemsPerPage);
  const paginatedBlogs = filteredBlogs.slice(page * itemsPerPage, (page + 1) * itemsPerPage);

  return (
    <div className="flex flex-col lg:flex-row">
      <div className="p-4 lg:p-10 lg:w-[75%]">
        <h2 className="font-black italic p-4">LO ÚLTIMO</h2>
        <hr className="mb-5" />
        {loading ? (
          <div className="flex flex-col justify-center items-center gap-5">
            <Skeleton className="w-[100%] h-[300px] rounded-sm bg-gray-300" />
            <Skeleton className="w-[100%] h-[300px] rounded-sm bg-gray-300" />
          </div>
        ) : (
          paginatedBlogs.map((blog, index) => (
            <div key={index}>
              <BlogCard
                title={blog.title}
                category={blog.category}
                author={blog.author}
                content={blog.tags}
                imageUrl={blog.imageUrl}
                date={blog.date}
                slug={blog.slug}
              />
              {index === 1 && (
                <Banner>
                  <div className="flex gap-3 items-center justify-between m-4">
                    <Image
                      src="/logo.png"
                      width={50}
                      height={50}
                      alt="logo"
                      className="mt-4 mb-4"
                    />
                    <p className="text-xs md:text-lg">
                      ¿Listo para optimizar tu industria? ¡Comparte tu número y te
                      contactamos ahora!
                    </p>
                  </div>
                </Banner>
              )}
            </div>
          ))
        )}
        {!loading && (
          <div className="flex justify-end gap-5 mt-6">
            <Button
              onClick={() => setPage((prev) => Math.max(prev - 1, 0))}
              disabled={page === 0}
              className="px-4 py-2 bg-deysaYellow rounded hover:bg-gray-300 italic text-deysaDark font-black text-lg capitalize"
            >
              Más recientes
            </Button>
            <Button
              onClick={() => setPage((prev) => Math.min(prev + 1, totalPages - 1))}
              disabled={page >= totalPages - 1}
              className="px-4 py-2 bg-deysaYellow rounded hover:bg-gray-300 italic text-deysaDark font-black text-lg capitalize"
            >
              Más antiguas
            </Button>
          </div>
        )}
      </div>
      <aside className="p-4 lg:p-3 xl:p-6 lg:w-[25%] rounded-md">
        <h2 className="font-black italic p-4">ETIQUETAS Y CATEGORÍAS.</h2>
        <hr className="mb-4" />
        <ul className="mb-6">
          {["Todo", ...new Set(blogs.map((blog) => blog.category))].map((category, index) => (
            <li
              key={index}
              className={`text-deysaDark p-2 cursor-pointer hover:text-blue-600 ${
                selectedCategory === category ? "font-bold text-blue-600" : ""
              }`}
              onClick={() => {
                setSelectedCategory(category);
                setPage(0);
              }}
            >
              {category}
            </li>
          ))}
        </ul>
        <div className="bg-deysaDark p-4 rounded-sm text-white">
          <Image
            src="/deysaLogo.png"
            width={150}
            height={50}
            alt="logo"
            className="mx-auto mb-6 mt-6"
          />
          <p className="text-center font-bold text-lg">
            AHORRA COSTOS Y MEJORA TU EFICIENCIA. DEJA TU NÚMERO Y TE EXPLICAMOS CÓMO
          </p>
          <Input
            type="text"
            placeholder="Teléfono"
            className="w-full p-2 border rounded-md mb-3 bg-white italic mt-6"
          />
          <Button className="w-full bg-deysaYellow rounded-md text-deysaDark font-black hover:bg-yellow-300 italic mt-4 mb-4">
            RECIBIR LLAMADA
          </Button>
        </div>
        <p className="text-xs text-gray-500 mt-3 text-center uppercase font-normal">
          En Deysa Ingeniería respetamos tu privacidad. No compartiremos tu número con terceros sin tu autorización.
        </p>
      </aside>
    </div>
  );
}
