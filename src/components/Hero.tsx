import { motion } from 'motion/react';
import MagneticButton from './MagneticButton';
import { ArrowRight, Globe, Zap, Search } from 'lucide-react';

export default function Hero() {
  return (
    <section id="main-content" className="relative flex min-h-screen items-center overflow-hidden px-6 pt-28 pb-12 md:px-12 md:pt-20">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-swell-blue/10 blur-[140px]" />

      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12 lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-center text-center lg:col-span-7 lg:items-start lg:text-left"
        >
          <div className="mb-6 inline-block rounded-full border border-swell-blue/20 bg-swell-blue/10 px-4 py-1.5 text-[9px] font-bold uppercase tracking-[0.2em] text-swell-blue">
            Tu negocio, visible.
          </div>
          <h1 className="mb-6 font-display text-4xl font-bold leading-[0.95] tracking-tighter sm:text-6xl lg:text-7xl text-balance">
            Tu negocio local merece ser la <br />
            <span className="text-swell-blue">primera opción</span> en Google.
          </h1>
          <p className="mb-10 max-w-md text-sm leading-relaxed text-swell-white/70 md:text-base">
            Creamos tu sitio web profesional en 72 horas para que dejes de ser invisible y 
            empieces a captar clientes mientras dormís. Todo por un pago único, sin sorpresas.
          </p>

          <div className="flex flex-col items-center gap-8 sm:flex-row lg:items-center">
            <a 
              href="#contact"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-swell-blue px-8 py-4 font-display font-bold text-white shadow-xl shadow-swell-blue/20 transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              Quiero mi web ahora
            </a>
            
            <div className="flex flex-col border-swell-white/10 sm:border-l sm:pl-6">
              <span className="text-sm font-bold">+15 negocios locales</span>
              <span className="text-xs text-swell-white/50">transformados este mes</span>
            </div>
          </div>
        </motion.div>

        {/* Desktop & Tablet Perspective Cards */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="hidden space-y-4 lg:col-span-5 lg:block"
        >
          <div className="rounded-2xl border border-swell-white/10 bg-swell-white/5 backdrop-blur-md p-6 transition-transform hover:scale-[1.02]">
            <h3 className="mb-2 text-xs font-bold uppercase tracking-wider text-swell-blue">El Problema</h3>
            <p className="text-sm leading-snug text-swell-white/80">
              "Si tu negocio no está en Google hoy, simplemente no existís para el 90% de tus clientes potenciales. Dejá de regalarle mercado a tu competencia."
            </p>
          </div>
          
          <div className="rounded-2xl bg-swell-blue/80 backdrop-blur-md p-6 text-white shadow-2xl shadow-swell-blue/20 transition-transform hover:scale-[1.02] border border-white/20">
            <div className="flex justify-between items-start">
              <span className="text-xs font-bold uppercase opacity-80">Plan único</span>
              <span className="text-2xl font-black">{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(350)} <span className="text-sm font-normal opacity-80">USD</span></span>
            </div>
            <div className="mt-4 space-y-1">
              <div className="flex items-center gap-2 text-sm font-medium">✓ Entrega en 72 horas</div>
              <div className="flex items-center gap-2 text-sm font-medium">✓ 2 rondas de revisiones</div>
              <div className="flex items-center gap-2 text-sm font-medium">✓ SEO Local incluído</div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 rounded-2xl border border-swell-white/10 bg-swell-white/5 backdrop-blur-md p-6">
            <div className="flex flex-col justify-center">
              <h4 className="text-[10px] font-bold uppercase text-swell-white/40">WhatsApp Directo</h4>
              <p className="text-sm font-medium">+598 99 145 565</p>
            </div>
            <div className="flex flex-col justify-center border-l border-white/10 pl-4">
              <h4 className="text-[10px] font-bold uppercase text-swell-white/40">Ubicación</h4>
              <p className="text-sm font-medium">Punta del Este / Uruguay</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
