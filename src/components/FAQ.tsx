import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "¿Necesito saber de tecnología para tener mi web?",
    answer: "Para nada. Vos nos contás cómo es tu negocio, qué ofrecés y cómo querés que te vean. Nosotros hacemos el resto. No necesitás saber nada de diseño ni de código."
  },
  {
    question: "¿Realmente mi web estará lista en 72 horas?",
    answer: "Sí. En 72 horas hábiles desde que aprobás el diseño inicial tu web está activa en internet. Sin esperas de semanas ni procesos complicados."
  },
  {
    question: "¿Qué pasa si no me gusta el diseño?",
    answer: "Incluye 2 rondas de revisión sin costo. Si algo no te convence, lo ajustamos. El objetivo es que quedes 100% conforme antes de publicar."
  },
  {
    question: "¿El hosting y dominio están incluidos en los $350?",
    answer: "Los $350 son el costo del diseño y desarrollo, pago único, sin sorpresas. El primer año de hosting está incluido, solo necesitás comprar tu dominio. A partir del segundo año, podés mantener tu web activa con nuestros planes de mantenimiento desde $15/mes. Nosotros nos encargamos de todo lo técnico, vos solo te enfocás en tu negocio."
  },
  {
    question: "¿Puedo agregar más páginas después?",
    answer: "Sí. Podés sumar páginas en cualquier momento como servicio adicional, o arrancar directamente con el Plan Completo que incluye hasta 5 páginas desde el inicio."
  },
  {
    question: "¿Qué métodos de pago aceptan?",
    answer: "Podés pagar por Transferencia Bancaria directa (sin comisiones extras). También ofrecemos hasta 3 cuotas sin interés a través de Mercado Pago (para clientes en Uruguay) y PayPal para todos nuestros clientes del exterior."
  },
  {
    question: "¿Puedo contratar el hosting y dominio yo mismo?",
    answer: "Sí, podés hacerlo. El dominio lo tenés que comprar vos desde el inicio — te orientamos sobre qué elegir y cómo configurarlo. El primer año de hosting está incluido en tu plan, así que no necesitás contratarlo ahora. A partir del segundo año, si preferís que nos encarguemos de todo, con $15/mes te olvidás del tema para siempre — sin renovaciones, sin configuraciones, sin sorpresas técnicas."
  }
];

interface FAQItemProps {
  key?: number | string;
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

function FAQItem({ question, answer, isOpen, onClick }: FAQItemProps) {
  return (
    <div className="border-b border-swell-white/5 last:border-0">
      <button
        onClick={onClick}
        className="group flex w-full items-center justify-between py-6 text-left transition-all"
      >
        <span className={`text-sm font-bold md:text-base tracking-tight transition-colors ${isOpen ? 'text-swell-blue' : 'text-swell-white/80 group-hover:text-swell-white'}`}>
          {question}
        </span>
        <motion.div 
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className={`flex h-6 w-6 items-center justify-center rounded-full transition-colors ${isOpen ? 'bg-swell-blue text-white' : 'bg-swell-white/5 text-swell-muted group-hover:bg-swell-white/10'}`}
        >
          <ChevronDown size={14} />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30, opacity: { duration: 0.2 } }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-sm leading-relaxed text-swell-muted">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 px-6 md:px-12 bg-swell-bg">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <span className="mb-3 inline-block font-display text-[9px] font-bold uppercase tracking-[0.3em] text-swell-blue">
            Despejá tus dudas
          </span>
          <h2 className="font-display text-3xl font-bold tracking-tighter md:text-4xl text-white">
            Preguntas <span className="text-swell-blue">Frecuentes</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="rounded-3xl border border-swell-white/10 bg-swell-white/5 backdrop-blur-xl px-8 shadow-2xl"
        >
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === i}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </motion.div>
        
        <p className="mt-8 text-center text-xs text-swell-muted">
          ¿Tenés otra pregunta? <a href="#contact" className="text-swell-blue font-bold hover:underline">Escribinos directo por WhatsApp</a>.
        </p>
      </div>
    </section>
  );
}
