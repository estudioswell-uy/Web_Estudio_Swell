import { motion, useReducedMotion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  const shouldReduceMotion = useReducedMotion();
  const whatsappUrl = "https://wa.me/message/NUC5USYCEZNON1";

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ 
        type: "spring", 
        stiffness: 260, 
        damping: 20,
        delay: 2 
      }}
      className="fixed bottom-6 right-6 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl shadow-[#25D366]/40 backdrop-blur-sm border border-white/20"
      aria-label="Contactar por WhatsApp"
    >
      {!shouldReduceMotion && (
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute inset-0 rounded-full bg-[#25D366] opacity-30"
        />
      )}
      <MessageCircle size={28} className="relative z-10" fill="currentColor" aria-hidden="true" />
    </motion.a>
  );
}
