import { motion } from 'motion/react';
import { Layout, Smartphone, Gauge, LayoutGrid } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Layout className="text-swell-blue" aria-hidden="true" />,
      title: "Diseño que Convierte",
      desc: "No hacemos webs 'lindas', hacemos instrumentos de venta diseñados para captar el interés de tu cliente ideal."
    },
    {
      icon: <Smartphone className="text-swell-blue" aria-hidden="true" />,
      title: "Optimización Mobile",
      desc: "El 90% de tus clientes te busca desde el celular. Nos aseguramos de que tu experiencia sea perfecta."
    },
    {
      icon: <Gauge className="text-swell-blue" />,
      title: "Optimización de Carga",
      desc: "Webs ultrarrápidas que mejoran tu posicionamiento y reducen la tasa de rebote."
    },
    {
      icon: <LayoutGrid className="text-swell-blue" aria-hidden="true" />,
      title: "Google Local SEO",
      desc: "Configuramos tu presencia para que aparezcas primero cuando alguien busque servicios cerca."
    }
  ];

  return (
    <section id="services" className="py-20 px-6 md:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="mb-4 inline-block font-display text-[10px] font-bold uppercase tracking-[0.3em] text-swell-blue">
              Cómo trabajamos
            </span>
            <h2 className="mb-6 font-display text-3xl font-bold leading-tight md:text-4xl tracking-tighter text-balance">
              El puente entre tu negocio físico <br /> y el éxito digital.
            </h2>
            <p className="mb-8 text-base text-swell-muted leading-relaxed max-w-md">
              No necesitás ser un experto para tener una web que venda. Nos encargamos de todo lo técnico para que vos puedas 
              enfocarte en lo que mejor sabés hacer: atender a tus clientes.
            </p>
            <ul className="space-y-3">
              {['Resultados reales en 72 horas', 'Diseño persuasivo y moderno', 'Comunicación humana por WhatsApp', 'Sos dueño total de tu dominio'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm font-medium opacity-80">
                  <div className="h-1 w-1 rounded-full bg-swell-blue" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2">
            {services.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.02, 
                  y: -5,
                  backgroundColor: "rgba(255, 255, 255, 0.15)",
                  boxShadow: "0 20px 40px -15px rgba(10, 132, 255, 0.1)",
                  backdropBlur: "12px"
                }}
                transition={{ 
                  type: "spring", 
                  stiffness: 300, 
                  damping: 20, 
                  delay: i * 0.1 
                }}
                className="rounded-2xl border border-swell-white/10 bg-swell-white/5 backdrop-blur-md p-6 transition-colors"
              >
                <div className="mb-4">{s.icon}</div>
                <h3 className="mb-2 font-display text-base font-bold tracking-tight">{s.title}</h3>
                <p className="text-xs leading-relaxed text-swell-muted">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
