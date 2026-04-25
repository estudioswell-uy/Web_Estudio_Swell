import { motion } from 'motion/react';
import { AlertCircle, XCircle, TrendingDown } from 'lucide-react';

export default function Problem() {
  const problems = [
    {
      icon: <XCircle className="text-red-500" aria-hidden="true" />,
      title: "Sos invisible en Google",
      desc: "Si un cliente te busca y no aparecés, está llamando a tu competencia en este mismo instante."
    },
    {
      icon: <TrendingDown className="text-red-500" aria-hidden="true" />,
      title: "Ventas que no escalan",
      desc: "Depender solo del boca en boca es una ruleta rusa. Necesitás un canal que venda 24/7."
    },
    {
      icon: <AlertCircle className="text-red-500" aria-hidden="true" />,
      title: "Imagen poco profesional",
      desc: "Una web lenta o obsoleta espanta a los clientes. Tu web debe generar confianza, no dudas."
    }
  ];

  return (
    <section id="problem" className="py-20 px-6 md:px-12 bg-swell-white/5">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <span className="mb-3 inline-block font-display text-[9px] font-bold uppercase tracking-[0.3em] text-swell-blue">
            La Realidad Digital
          </span>
          <h2 className="font-display text-3xl font-bold leading-tight md:text-4xl tracking-tighter max-w-2xl mx-auto text-balance">
            Si tu negocio no está en internet, le estás <span className="text-red-500">regalando mercado</span> a tu competencia.
          </h2>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {problems.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-swell-white/10 bg-swell-white/5 backdrop-blur-md p-6 transition-all hover:border-swell-blue/30 lg:hover:bg-swell-white/10"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/10 shrink-0">
                {p.icon}
              </div>
              <h3 className="mb-2 font-display text-base font-bold tracking-tight">{p.title}</h3>
              <p className="text-xs leading-relaxed text-swell-muted">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
