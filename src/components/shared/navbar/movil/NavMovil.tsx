import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import Image from "next/image"

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import ContactForm from "../../contactForm/ContactForm";
  
export default function NavbarMovil(){
    return(
        <Sheet>
            <SheetTrigger className="w-full flex justify-between items-center p-10 sticky top-0 lg:hidden">
                <Link href="/" className="z-50">
                    <Image src="/deysaNav.png" width={150} height={150} alt="logo"/>
                </Link>
                <Menu/>
            </SheetTrigger>
            <SheetContent className="w-screen h-1/2 bg-deysaDark flex justify-center border-b-4 border-b-deysaYellow text-white">
                <SheetHeader className="h-full flex justify-center relative">
                <SheetTitle className="w-full text-center text-white absolute top-0 mt-3">Presencia en toda la República</SheetTitle>
                <div>
                <Image src="/deysaLogo.png" width={150} height={150} alt="logo"/>
                    <NavigationMenu>
                        <NavigationMenuList className="flex flex-col items-start">
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
                </SheetHeader>
            </SheetContent>
        </Sheet>

    )
}