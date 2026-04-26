import { motion } from 'motion/react';
import { Check } from 'lucide-react';
import MagneticButton from './MagneticButton';
import Tooltip from './Tooltip';

export default function Pricing() {
  const items = [
    { name: "Diseño web personalizado", info: "Tu sitio web diseñado desde cero para reflejar la esencia de tu marca." },
    { name: "Diseño responsive (móvil, tablet, desktop)", info: "Tu web se verá increíble en cualquier dispositivo, móvil o computadora." },
    { name: "Formulario de contacto", info: "Facilitá que tus clientes te escriban directamente a tu casilla de correo." },
    { name: "Integración redes sociales", info: "Conectamos tu web con tus perfiles de Instagram, Facebook y más." },
    { name: "Certificado SSL", info: "Seguridad para tus usuarios y mejor posicionamiento en buscadores." },
    { name: "Optimización SEO", info: "Configuración técnica para que Google encuentre tu negocio fácilmente." },
    { name: "Sistema de reserva de turnos", info: "Agenda automatizada para que tus clientes reserven sin que vos hagas nada." },
    { name: "Entrega en 72 horas hábiles", info: "Velocidad real. Tu negocio online en menos de lo que esperás." },
    { name: "2 revisiones incluidas", info: "Ajustamos los detalles finales hasta que estés 100% conforme." }
  ];

  return (
    <section id="pricing" className="py-24 px-6 md:px-12 bg-swell-white/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-swell-blue/5 blur-[120px]" />
      
      <div className="mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="mb-4 font-display text-3xl font-bold md:text-5xl tracking-tighter text-balance">
            Un precio. <span className="text-swell-blue">Todo incluido.</span>
          </h2>
          <p className="mx-auto max-w-xl text-base text-swell-muted md:text-lg">
            Sin suscripciones mensuales confusas ni costos ocultos. Una inversión transparente para el crecimiento de tu negocio.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative mx-auto w-full max-w-3xl rounded-[2rem] border border-swell-white/10 bg-swell-white/5 backdrop-blur-xl p-8 md:p-10 text-white shadow-2xl shadow-swell-blue/10"
        >
          {/* Badge */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2">
            <span className="saas-badge bg-swell-blue text-white border-none px-4 py-1.5 shadow-lg shadow-swell-blue/30 text-[9px]">
              RECOMENDADO
            </span>
          </div>

          <div className="mb-10 text-center">
            <h3 className="mb-2 font-display text-xl font-bold uppercase tracking-widest text-swell-blue opacity-80">Plan Web Full</h3>
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="text-5xl font-black md:text-6xl">{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(350)}</span>
              <span className="text-sm font-medium text-swell-muted">USD</span>
            </div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-swell-muted">
              Pago único · Sin cuotas · Sin sorpresas
            </p>
          </div>
          
          <div className="mb-10 grid gap-4 md:grid-cols-2 text-left">
            {items.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-green-500/20 shrink-0 mt-0.5">
                  <Check size={12} className="text-green-500" aria-hidden="true" />
                </div>
                <Tooltip content={item.info}>
                  <span className="text-xs md:text-sm font-medium text-swell-white/80 border-b border-swell-white/10 pb-0.5 cursor-help transition-colors hover:text-white">
                    {item.name}
                  </span>
                </Tooltip>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <a 
              href="https://wa.me/message/NUC5USYCEZNON1"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center rounded-xl bg-swell-blue py-4 font-display font-bold text-base text-white shadow-xl shadow-swell-blue/20 transition-all hover:scale-[1.01] hover:bg-swell-blue/90 active:scale-[0.99]"
            >
              Comenzar mi proyecto hoy
            </a>
            <div className="space-y-4">
              <p className="text-xs text-swell-muted leading-relaxed">
                * El servicio incluye hosting el primer año bonificado.
              </p>
              <div className="pt-4 border-t border-swell-white/5 grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                <div className="space-y-1">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-swell-blue">Métodos de Pago</p>
                  <p className="text-[11px] text-swell-white/60 leading-snug">
                    Transferencia directa (sin comisiones) · Mercado Pago (Hasta 3 cuotas para Uruguay) · PayPal (Exterior).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
