import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export default function LegalModal({ isOpen, onClose, title, children }: LegalModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative z-10 w-full max-w-2xl overflow-hidden rounded-[2.5rem] border border-swell-white/10 bg-[#161618] shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-swell-white/5 px-8 py-6">
              <h2 className="font-display text-xl font-bold tracking-tight text-white">{title}</h2>
              <button 
                onClick={onClose}
                className="group flex h-10 w-10 items-center justify-center rounded-full bg-swell-white/5 transition-colors hover:bg-swell-white/10"
              >
                <X size={20} className="text-swell-muted transition-colors group-hover:text-white" />
              </button>
            </div>
            <div className="max-h-[65vh] overflow-y-auto px-8 py-8 text-sm leading-relaxed text-swell-muted scrollbar-thin scrollbar-track-transparent scrollbar-thumb-swell-white/10">
              <div className="space-y-6">
                {children}
              </div>
            </div>
            <div className="border-t border-swell-white/5 bg-swell-white/[0.02] px-8 py-4 text-center">
              <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-swell-white/20">
                Estudio Swell · Legal
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
