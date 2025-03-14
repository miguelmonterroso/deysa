"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";

// Interfaces para la respuesta de WordPress
interface WPGenericTerm {
  id: number;
  name: string;
  slug: string;
  taxonomy: string;
  [key: string]: unknown;
}

interface WPAuthor {
  name: string;
}

interface WPFeaturedMedia {
  source_url: string;
}

interface WPPost {
  id: number;
  slug: string;
  date: string;
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
  _embedded?: {
    author?: WPAuthor[];
    "wp:featuredmedia"?: WPFeaturedMedia[];
    "wp:term"?: WPGenericTerm[][]; // Normalmente: [categorías, tags]
  };
}

/**
 * transformContent:
 * - Reemplaza cualquier <h2 ...>...</h2> por uno con nuestras clases.
 * - Reemplaza <blockquote ...>...</blockquote> por uno con clases personalizadas.
 * - Añade clases a <p> sin clase definida.
 */
function transformContent(html: string): string {
  // Reemplazar <h2> por uno con clases personalizadas
  html = html.replace(/<h2[^>]*>(.*?)<\/h2>/g, (_, content) => {
    return `<h2 class="text-2xl font-bold my-4 text-deysaDark">${content}</h2>`;
  });

  // Reemplazar <blockquote> por uno con clases personalizadas
  html = html.replace(/<blockquote[^>]*>([\s\S]*?)<\/blockquote>/g, (_, content) => {
    return `<blockquote class="border-2 pt-4 text-deysaDark my-4 italic border-deysaDark flex items-center justify-center font-black text-xl text-center">${content}</blockquote>`;
  });

  // Añadir clases a <p> que no tengan atributos (o no tengan class)
  html = html.replace(/<p(?![^>]*class=)([^>]*)>(.*?)<\/p>/g, (_, attrs, content) => {
    return `<p class="mb-4 text-deysaDark"${attrs}>${content}</p>`;
  });

  html = html.replace(/<ul[^>]*>([\s\S]*?)<\/ul>/g, (_, content) => {
    return `<ul class="list-disc pl-4 flex flex-col gap-2 ">${content}</ul>`;
  });

  return html;
}

export default function BlogDetail() {
  const params = useParams();
  const [post, setPost] = useState<WPPost | null>(null);
  const [loading, setLoading] = useState(true);

  // Obtener el slug de la URL
  const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;

  useEffect(() => {
    if (!slug) return;

    async function fetchPostBySlug() {
      try {
        const res = await fetch(
          `http://test.local/wp-json/wp/v2/posts?_embed&slug=${slug}`
        );
        if (!res.ok) {
          throw new Error("Error en la petición del post");
        }
        const data: WPPost[] = await res.json();
        setPost(data.length ? data[0] : null);
      } catch (error) {
        console.error("Error fetching post:", error);
        setPost(null);
      } finally {
        setLoading(false);
      }
    }

    fetchPostBySlug();
  }, [slug]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-[51vh] flex-col gap-5">
        <Skeleton className="w-[50%] h-[100px] bg-gray-300"/>
        <Skeleton className="w-[50%] h-[100px] bg-gray-300"/>
        <Skeleton className="w-[50%] h-[100px] bg-gray-300"/>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="h-[51.2vh] flex items-center justify-center flex-col">
        <p className="text-3xl font-black italic text-deysaDark mb-4">
          Blog no encontrado.
        </p>
        <Link href="/blog">
          <Button className="bg-deysaYellow text-black font-black italic hover:bg-amber-300 p-4 text-lg">
            Volver
          </Button>
        </Link>
      </div>
    );
  }

  // Transformar el HTML del contenido para aplicar nuestros estilos
  const transformedHTML = transformContent(post.content.rendered);

  return (
    <div className="flex flex-col lg:flex-row">
      {/* Sección principal */}
      <div className="p-4 lg:p-10 lg:w-[75%] text-deysaDark">
        <h1 className="text-2xl font-bold mb-2">{post.title.rendered}</h1>
        <div className="mb-4 text-sm text-gray-600">
          {post._embedded?.author?.[0]?.name && (
            <span className="mr-2">
              <strong>Autor:</strong> {post._embedded.author[0].name}
            </span>
          )}
          {post.date && (
            <span>
              <strong>Fecha de publicación:</strong>{" "}
              {new Date(post.date).toLocaleDateString("es-ES", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
          )}
        </div>
        <div
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: transformedHTML }}
        />
        <div className="flex justify-end">
            <Link href="/blog">
                <Button className="bg-white border-2 border-deysaDark p-6 text-deysaDark font-black text-xl">REGRESAR</Button>
            </Link>
        </div>
      </div>
      {/* Barra lateral */}
      <aside className="p-4 lg:p-3 xl:p-6 lg:w-[25%] rounded-md">
        <div className="bg-deysaDark p-4 rounded-sm text-white">
          <Image
            src="/deysaLogo.png"
            width={150}
            height={50}
            alt="logo"
            className="mx-auto mb-6 mt-6"
          />
          <p className="text-center font-bold text-lg">
            AHORRA COSTOS Y MEJORA TU EFICIENCIA. DEJA TU NÚMERO Y TE EXPLICAMOS
            CÓMO
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
        <p className="text-xs text-gray-500 mt-3 text-center uppercase font-normal mb-10.5">
          En Deysa Ingeniería respetamos tu privacidad. No compartiremos tu
          número con terceros sin tu autorización.
        </p>
      </aside>
    </div>
  );
}
