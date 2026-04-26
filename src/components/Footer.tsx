import { Waves } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-swell-white/5 bg-[#0c0c0e] py-10 px-6 md:px-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 md:flex-row">
        <div className="flex flex-col items-center gap-1.5 md:items-start">
          <div className="flex items-center gap-2">
            <Waves className="text-swell-blue" size={18} />
            <div className="font-sans tracking-tight text-swell-white">
              <span className="text-xs font-light uppercase">Estudio</span>
              <span className="ml-1 text-xs font-extrabold uppercase text-swell-blue">Swell</span>
            </div>
          </div>
          <p className="text-[9px] uppercase tracking-[0.25em] font-bold text-swell-muted">Tu negocio, visible.</p>
        </div>

        <div className="flex flex-col items-center gap-6 md:items-end">
          <div className="flex flex-col items-center gap-4 md:items-end">
            <div className="flex gap-6 text-[9px] font-bold uppercase tracking-widest leading-none">
              <a href="mailto:hola@estudioswell.com" className="text-swell-white/30 hover:text-swell-blue transition-colors">hola@estudioswell.com</a>
              <a href="https://estudioswell.com" className="text-swell-white/30 hover:text-swell-blue transition-colors">estudioswell.com</a>
            </div>
            <div className="flex gap-4 text-[9px] font-bold uppercase tracking-widest leading-none">
              <a href="#" className="text-swell-white/20 hover:text-swell-white transition-colors">Privacidad</a>
              <a href="#" className="text-swell-white/20 hover:text-swell-white transition-colors">Términos y Condiciones</a>
            </div>
          </div>
          <div className="flex flex-col items-center gap-1 md:items-end">
            <p className="text-[9px] uppercase tracking-[0.1em] font-medium text-swell-white/20">
              Punta del Este, Maldonado, Uruguay
            </p>
            <p className="text-[9px] uppercase tracking-[0.1em] font-medium text-swell-white/10">
              © {new Date().getFullYear()} Estudio Swell · Todos los derechos reservados
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
