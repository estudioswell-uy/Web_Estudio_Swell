import { motion } from 'motion/react';
import { Target, Zap, TrendingUp, Search } from 'lucide-react';

export default function Methodology() {
  const steps = [
    {
      icon: <Search className="text-swell-blue" size={24} />,
      title: "Diagnóstico",
      description: "Analizamos cómo te encuentran hoy tus clientes y dónde estás perdiendo ventas frente a la competencia."
    },
    {
      icon: <Target className="text-swell-blue" size={24} />,
      title: "Estrategia",
      description: "No hacemos webs 'lindas', hacemos herramientas de venta diseñadas para convertir visitas en WhatsApps."
    },
    {
      icon: <Zap className="text-swell-blue" size={24} />,
      title: "Ejecución",
      description: "Lanzamos tu sitio optimizado para Google en tiempo récord. Sin esperas de meses, resultados en días."
    },
    {
      icon: <TrendingUp className="text-swell-blue" size={24} />,
      title: "Crecimiento",
      description: "Tu negocio empieza a aparecer donde la gente busca. Tu visibilidad sube, tus llamadas aumentan."
    }
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-[#0a0a0c] relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 bg-swell-blue/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-96 h-96 bg-swell-blue/5 rounded-full blur-3xl" />

      <div className="mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <span className="inline-block px-3 py-1 bg-swell-blue/10 text-swell-blue text-[10px] font-bold uppercase tracking-widest rounded-full mb-4">
              Nuestro Método
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tighter leading-tight">
              De ser invisible a <br />
              <span className="text-swell-blue">dominar tu mercado.</span>
            </h2>
          </motion.div>
          
          <motion.p 
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="text-swell-muted max-w-xs text-lg"
          >
            Nuestra obsesión es la velocidad y la conversión. Tu negocio no puede esperar.
          </motion.p>
        </div>

        <div className="grid gap-8 md:grid-cols-4">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-swell-white/5 border border-swell-white/10 transition-all duration-300 group-hover:bg-swell-blue/20 group-hover:border-swell-blue/30 group-hover:-translate-y-1">
                {step.icon}
              </div>
              <h3 className="mb-3 text-xl font-bold font-display tracking-tight">{step.title}</h3>
              <p className="text-swell-muted leading-relaxed text-sm">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 p-8 md:p-12 rounded-3xl bg-gradient-to-br from-swell-blue/20 to-transparent border border-swell-blue/20 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2">¿Listo para dar el salto?</h3>
            <p className="text-swell-white/60">No pierdas más clientes frente a la competencia.</p>
          </div>
          <a 
            href="https://wa.me/message/NUC5USYCEZNON1" 
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 bg-swell-blue hover:bg-blue-600 text-white font-bold rounded-full transition-all shadow-lg shadow-swell-blue/20 active:scale-95"
          >
            Quiero mi diagnóstico gratis
          </a>
        </motion.div>
      </div>
    </section>
  );
}
