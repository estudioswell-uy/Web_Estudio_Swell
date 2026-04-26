import { motion } from 'motion/react';
import { Send, MessageCircle } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  return (
    <section id="contact" className="py-20 px-6 md:px-12 bg-swell-white/5">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4 font-display text-3xl font-bold md:text-5xl tracking-tighter text-balance">
              Llevá tu negocio al <br /> <span className="text-swell-blue">siguiente nivel</span>.
            </h2>
            <p className="mb-8 text-base text-swell-muted leading-relaxed max-w-md md:text-lg">
              Solo aceptamos 4 proyectos nuevos por semana para garantizar la entrega en 72h. 
              Escribinos hoy y arrancá a vender online.
            </p>

            <div className="space-y-4">
              <a
                href="https://wa.me/message/NUC5USYCEZNON1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-green-500/10 bg-green-500/5 p-5 transition-all hover:bg-green-500/10 group max-w-sm"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500 shadow-lg shadow-green-500/20 group-hover:scale-110 transition-transform">
                  <MessageCircle className="text-white" size={18} aria-hidden="true" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-green-500/80">Canal Directo</p>
                  <p className="text-base font-bold text-swell-white">WhatsApp de Estudio</p>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-5 rounded-[2rem] bg-swell-white/5 backdrop-blur-lg border border-swell-white/10 p-8 md:p-10 shadow-2xl"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-1.5">
                <label htmlFor="contact-name" className="text-[10px] font-bold uppercase tracking-widest text-swell-muted">Nombre</label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Tu nombre…"
                  className="w-full rounded-xl bg-swell-white/5 p-3.5 text-sm outline-none border border-transparent focus:border-swell-blue focus-visible:ring-1 focus-visible:ring-swell-blue/50 transition-all"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div className="space-y-1.5">
                <label htmlFor="contact-email" className="text-[10px] font-bold uppercase tracking-widest text-swell-muted">Email</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="hola@ejemplo.com…"
                  className="w-full rounded-xl bg-swell-white/5 p-3.5 text-sm outline-none border border-transparent focus:border-swell-blue focus-visible:ring-1 focus-visible:ring-swell-blue/50 transition-all"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>
            <div className="space-y-1.5">
              <label htmlFor="contact-message" className="text-[10px] font-bold uppercase tracking-widest text-swell-muted">Mensaje</label>
              <textarea
                id="contact-message"
                name="message"
                rows={4}
                placeholder="¿En qué podemos ayudarte?…"
                className="w-full rounded-xl bg-swell-white/5 p-3.5 text-sm outline-none border border-transparent focus:border-swell-blue focus-visible:ring-1 focus-visible:ring-swell-blue/50 transition-all resize-none"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>
            <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-swell-blue py-3.5 font-display font-bold text-base text-white shadow-lg shadow-swell-blue/20 transition-all hover:opacity-90 active:scale-[0.98]">
              Enviar mensaje <Send size={16} aria-hidden="true" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
