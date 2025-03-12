export default function Privacy() {
    return (
        <div className="text-deysaDark grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-12 lg:p-24">
            <div>
                <section>
                    <h2 className="font-bold text-lg">1. IDENTIDAD Y DOMICILIO DEL RESPONSABLE</h2>
                    <p>Deysa Ingeniería, con domicilio en C. 2-1-2 NUM 5C INT, Benito Juárez, 76120 Santiago de Querétaro, Qro., es responsable del tratamiento de sus datos personales, conforme a lo establecido en la <strong>Ley Federal de Protección de Datos Personales en Posesión de Particulares (LFPDPPP)</strong>.</p>
                </section>
                
                <section className="mt-4">
                    <h2 className="font-bold text-lg list">2. DATOS PERSONALES QUE RECABAMOS</h2>
                    <p>Los datos personales que podemos solicitar incluyen, pero no se limitan a:</p>
                    <ul className="list-disc pl-6">
                        <li>Nombre completo</li>
                        <li>Correo electrónico</li>
                        <li>Número de teléfono</li>
                        <li>Empresa y puesto</li>
                        <li>Información fiscal para facturación</li>
                        <li>Dirección</li>
                        <li>En caso de ser necesario, podríamos solicitar información adicional para fines específicos, la cual será tratada con total confidencialidad</li>
                    </ul>
                </section>
                
                <section className="mt-4">
                    <h2 className="font-bold text-lg">3. FINALIDADES DEL TRATAMIENTO DE DATOS</h2>
                    <p>Sus datos personales serán utilizados para las siguientes finalidades:</p>
                    <h3 className="font-semibold">Finalidades primarias:</h3>
                    <ul className="list-disc pl-6">
                        <li>Proveer los productos y servicios solicitados.</li>
                        <li>Contactarlo para dar seguimiento a solicitudes, cotizaciones o contratos.</li>
                        <li>Facturación y cumplimiento de obligaciones fiscales.</li>
                        <li>Soporte técnico y atención al cliente.</li>
                    </ul>
                    <h3 className="font-semibold mt-2">Finalidades secundarias (opcional):</h3>
                    <ul className="list-disc pl-6">
                        <li>Envío de promociones, ofertas e información comercial.</li>
                        <li>Encuestas de satisfacción y mejora del servicio.</li>
                        <li>Publicidad y estrategias de marketing digital.</li>
                    </ul>
                    <p className="mt-2">Si no desea que sus datos sean utilizados para estas finalidades secundarias, puede solicitarlo en cualquier momento enviando un correo a <strong>contacto@deysaingenieria.com</strong>.</p>
                </section>
            </div>
            
            <div>
                <section>
                    <h2 className="font-bold text-lg">4. TRANSFERENCIA DE DATOS</h2>
                    <p>Sus datos personales no serán compartidos con terceros sin su consentimiento, salvo en los siguientes casos:</p>
                    <ul className="list-disc pl-6">
                        <li>Autoridades competentes en cumplimiento de obligaciones legales.</li>
                        <li>Proveedores de servicios que apoyan nuestras operaciones (facturación, soporte técnico, marketing), bajo estrictos acuerdos de confidencialidad.</li>
                    </ul>
                </section>
                
                <section className="mt-4">
                    <h2 className="font-bold text-lg">5. EJERCICIO DE SUS DERECHOS ARCO</h2>
                    <p>Usted tiene derecho a <strong>Acceder, Rectificar, Cancelar u Oponerse</strong> (Derechos ARCO) al tratamiento de sus datos personales. Para ejercer estos derechos, envíe una solicitud a <strong>contacto@deysaingenieria.com</strong>, indicando su nombre, los datos a modificar o eliminar y un medio para contactarlo.</p>
                </section>
                
                <section className="mt-4">
                    <h2 className="font-bold text-lg">6. SEGURIDAD Y PROTECCIÓN DE DATOS</h2>
                    <p>Implementamos medidas de seguridad físicas, técnicas y administrativas para proteger sus datos contra daño, pérdida, alteración o uso no autorizado.</p>
                </section>
                
                <section className="mt-4">
                    <h2 className="font-bold text-lg">7. CAMBIOS EN EL AVISO DE PRIVACIDAD</h2>
                    <p>Este aviso de privacidad puede actualizarse en cualquier momento. Cualquier cambio será publicado en nuestro sitio web <strong>www.deysaingenieria.com/aviso-de-privacidad</strong>.</p>
                </section>
                
                <section className="mt-4">
                    <h2 className="font-bold text-lg">8. CONTACTO</h2>
                    <p>Si tiene dudas sobre este aviso o el manejo de sus datos, puede contactarnos en:</p>
                    <p><strong>Correo electrónico:</strong> contacto@deysaingenieria.com</p>
                    <p><strong>Dirección:</strong> C. 2-1-2 NUM 5C INT, Benito Juárez, 76120 Santiago de Querétaro, Qro.</p>
                    <p><strong>Teléfono:</strong> +52 44 22 74 94 86 / +52 442 58 92 409</p>
                </section>
            </div>
        </div>
    );
}