import { useState } from 'react';
import { Waves } from 'lucide-react';
import LegalModal from './LegalModal';

export default function Footer() {
  const [modalType, setModalType] = useState<'privacy' | 'terms' | null>(null);

  const privacyContent = (
    <>
      <p>En <strong>Estudio Swell</strong>, valoramos tu privacidad. Esta política detalla cómo tratamos tu información.</p>
      <section className="space-y-3">
        <h3 className="text-white font-bold">1. Recopilación de Datos</h3>
        <p>Recogemos únicamente los datos que nos proporcionás voluntariamente a través de nuestro formulario de contacto o WhatsApp (nombre, correo y mensaje) para gestionar tus consultas.</p>
      </section>
      <section className="space-y-3">
        <h3 className="text-white font-bold">2. Uso de la Información</h3>
        <p>Utilizamos tu información exclusivamente para comunicarnos con vos sobre tu proyecto. No vendemos ni compartimos tus datos con terceros con fines publicitarios.</p>
      </section>
      <section className="space-y-3">
        <h3 className="text-white font-bold">3. Seguridad</h3>
        <p>Implementamos medidas de seguridad técnicas para proteger tus datos contra accesos no autorizados.</p>
      </section>
    </>
  );

  const termsContent = (
    <>
      <p>Al contratar los servicios de <strong>Estudio Swell</strong>, aceptás los siguientes términos:</p>
      <section className="space-y-3">
        <h3 className="text-white font-bold">1. Servicio y Entrega</h3>
        <p>Nos comprometemos a entregar tu sitio web en 72 horas hábiles a partir de la recepción completa de todos los materiales necesarios (textos, imágenes, accesos).</p>
      </section>
      <section className="space-y-3">
        <h3 className="text-white font-bold">2. Revisiones</h3>
        <p>Cada proyecto incluye 2 rondas de revisiones. Cambios adicionales fuera del alcance inicial pueden tener costos extra.</p>
      </section>
      <section className="space-y-3">
        <h3 className="text-white font-bold">3. Pagos</h3>
        <p>Para iniciar el proyecto se requiere el pago total o la seña acordada. No se realizan devoluciones una vez iniciado el proceso de diseño.</p>
      </section>
    </>
  );

  return (
    <footer className="border-t border-swell-white/5 bg-[#0c0c0e] py-16 px-6 md:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {/* Brand Column */}
          <div className="flex flex-col items-center gap-4 md:items-start">
            <div className="flex items-center gap-2">
              <Waves className="text-swell-blue" size={20} />
              <div className="font-sans tracking-tight text-swell-white">
                <span className="text-sm font-light uppercase">Estudio</span>
                <span className="ml-1 text-sm font-extrabold uppercase text-swell-blue">Swell</span>
              </div>
            </div>
            <p className="max-w-xs text-center text-xs leading-relaxed text-swell-muted md:text-left">
              Transformamos la presencia digital de negocios locales con diseño de alta velocidad y conversión.
            </p>
          </div>

          {/* Links Column */}
          <div className="flex flex-col items-center gap-6 md:items-start lg:items-center">
            <div className="flex flex-col items-center gap-3 md:items-start">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">Contacto</h4>
              <div className="flex flex-col items-center gap-2 md:items-start">
                <a href="mailto:hola@estudioswell.com" className="text-xs font-medium text-swell-muted hover:text-swell-blue transition-colors">hola@estudioswell.com</a>
                <a href="https://wa.me/message/NUC5USYCEZNON1" target="_blank" rel="noopener noreferrer" className="text-xs font-medium text-swell-muted hover:text-swell-blue transition-colors">+598 99 145 565</a>
              </div>
            </div>
          </div>

          {/* Legal Column */}
          <div className="flex flex-col items-center gap-6 md:items-end">
            <div className="flex flex-col items-center gap-3 md:items-end">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">Ubicación</h4>
              <p className="text-xs font-medium text-swell-white/60">Punta del Este, Maldonado, Uruguay</p>
            </div>
            <div className="flex gap-4 text-[10px] font-bold uppercase tracking-widest">
              <button onClick={() => setModalType('privacy')} className="text-swell-white/20 hover:text-swell-blue transition-colors cursor-pointer">Privacidad</button>
              <button onClick={() => setModalType('terms')} className="text-swell-white/20 hover:text-swell-blue transition-colors cursor-pointer">Términos</button>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-swell-white/5 pt-8 text-center">
          <p className="text-[10px] uppercase tracking-[0.1em] font-medium text-swell-white/10">
            © {new Date().getFullYear()} Estudio Swell · Todos los derechos reservados
          </p>
        </div>
      </div>

      <LegalModal 
        isOpen={modalType === 'privacy'} 
        onClose={() => setModalType(null)} 
        title="Política de Privacidad"
      >
        {privacyContent}
      </LegalModal>

      <LegalModal 
        isOpen={modalType === 'terms'} 
        onClose={() => setModalType(null)} 
        title="Términos y Condiciones"
      >
        {termsContent}
      </LegalModal>
    </footer>
  );
}

