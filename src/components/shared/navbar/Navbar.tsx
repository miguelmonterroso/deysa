import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { forwardRef } from "react";
import { ChevronRight } from "lucide-react";
import { BlurFade } from "@/components/magicui/blur-fade";
import ContactForm from "../contactForm/ContactForm";
import NavbarMovil from "./movil/NavMovil";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Comercialización de Equipos",
    href: "/services#comercializacion",
    description:
      "Equipos nuevos y usados para la industria.",
  },
  {
    title: "Cogeneración Energética",
    href: "/services#energetica",
    description:
      "Generación de energía y recuperación de calor.",
  },
  {
    title: "Sistemas Térmicos y Enfriamiento",
    href: "/services#enfriamiento",
    description:
      "Chillers e intercambiadores de calor.",
  },
  {
    title: "Generación de Aire Comprimido",
    href: "/services#comprimido",
    description: "Compresores eficientes y de alto rendimiento.",
  },
  {
    title: "Transportación de Multifluídos",
    href: "/services#multifluidos",
    description:
      "Tuberías para aire, gas y líquidos.",
  },
  {
    title: "Tratamiento de Aire",
    href: "/services#aire",
    description:
      "Filtración y secado de aire comprimido.",
  },
  {
    title: "Auditorías y Monitoreo de Redes",
    href: "/services#redes",
    description:
      "Optimización de consumo y detección de fugas.",
  },
  {
    title: "Generación de Nitrógeno",
    href: "/services#nitrogeno",
    description:
      "Producción interna para reducir costos.",
  },
  {
    title: "Filtración Hidráulica",
    href: "/services#hidraulica",
    description:
      "Mantenimiento y optimización de aceites.",
  },
  {
    title: "Instrumentación para Vapor",
    href: "/services#vapor",
    description:
      "Monitoreo y control de sistemas de vapor.",
  },
  {
    title: "Diseño y Optimización de Redes",
    href: "/services#optimizacion",
    description:
      "Infraestructura eficiente y adaptable.",
  },
];
export default function Navbar() {
  return (
    <div>
      <NavbarMovil/>
      <div className="h-[128px] border-b-8 border-b-deysaYellow hidden items-center justify-between p-10 lg:flex sticky top-0 z-30 bg-white">
      <Image src="/deysaNav.png" width={150} height={150} alt="logo" priority/>
      <div className="bg-white sticky top-0 hidden md:flex">
        <NavigationMenu className="text-deysaDark">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink>Inicio</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink>Sobre Nosotros</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Servicios</NavigationMenuTrigger>
              <NavigationMenuContent className="flex items-center border-b-8 border-deysaYellow text-deysaDark">
                <ul className="grid w-[90vw] gap-3 p-4 md:w-[70vw] md:grid-cols-3 lg:w-[83vw] max-w-[1000px]">
                  {components.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
                <NavigationMenuLink asChild className="md:hidden lg:hidden xl:block hover:bg-white">
                  <Link
                    className="flex h-full w-[200px] select-none flex-col justify-end rounded-md p-6 no-underline outline-none"
                    href="/"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium h-full flex items-center">
                        <Image src="/deysaNav.png" width={150} height={150} alt="logo" />
                    </div>
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/cases" legacyBehavior passHref>
                <NavigationMenuLink>Casos de Éxito</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/blog" legacyBehavior passHref>
                <NavigationMenuLink>Blog</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
                <ContactForm/>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
    </div>
    
  );
}

const ListItem = forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <BlurFade inView delay={0.1}>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-bold leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
          <p className="text-sm flex items-center">
            Ver más <ChevronRight className="text-sm text-deysaDark" />
          </p>
        </a>
      </NavigationMenuLink>
      </BlurFade>
    </li>
  );
});
ListItem.displayName = "ListItem";
