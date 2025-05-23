import { Instagram } from "lucide-react";
import Image from "next/image";

export default function Footer() {
    return (
      <footer className="bg-deysaDark text-white py-8 px-4 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-6 border-b border-gray-500 pb-6">
            <div className="flex-1">
                <Image src="/deysaLogo.png" width={150} height={150} alt="logo"/>
              <p className="mt-2 font-bold text-lg">
                <span className="font-black italic text-[16px]">PRESENCIA EN TODA LA REPÚBLICA</span> <br />
                Brindamos soluciones en todo México con atención rápida y personalizada.
              </p>
            </div>
  
            <div className="flex-1">
              <h3 className="font-bold italic">MATRIZ</h3>
              <p className="text-lg font-normal">
                Parque Industrial Benito <br /> Juárez, calle 2 num 5C int 1, <br />
                C.P. 76120, Benito Juárez, <br />
                Santiago de Querétaro.
              </p>
              <p className="text-yellow-400 font-normal mt-1 text-sm">
                Móvil: <span className="text-white text-[16px]">+52 44 22 74 94 86</span>
              </p>
            </div>
  
            <div className="flex-1">
              <h3 className="font-bold italic">SALTILLO</h3>
              <p className="text-lg font-normal">
                Privada Triángulo 5, Virreyes <br /> Residencial, <br />
                C2J8+89P Saltillo, Coahuila.
              </p>
              <p className="text-yellow-400 font-normal mt-1 text-sm">
                Móvil: <span className="text-white text-[16px]">+861 109 0913</span>
              </p>
            </div>
          </div>
  
          <div className="flex flex-col md:flex-row justify-between items-center text-sm mt-4">
            <div className="flex flex-col sm:flex-row items-center justify-center">
                <p>2025 Deysa Ingeniería. Todos los derechos reservados. |</p>
                <a href="/privacy" className="text-gray-300 hover:text-gray-100 transition underline ml-2">
                Aviso de Privacidad
                </a>
            </div>
            
            <div className="flex gap-4 mt-2 md:mt-0">
              <a href="#" className="text-gray-300 hover:text-gray-100">
                <i className="fab fa-instagram text-xl"></i>
                <Instagram />
              </a>
              <a href="#" className="text-gray-300 hover:text-gray-100">
                <i className="fab fa-linkedin text-xl"></i>
                  {/* <Linkedin fill="deysaDark"/> */}
                  <Image src="/Linkedin.png" width={23} height={23} alt="icon"/>
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  