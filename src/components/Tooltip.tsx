import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle } from 'lucide-react';

interface TooltipProps {
  content: string;
  children: React.ReactNode;
}

export default function Tooltip({ content, children }: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div 
      className="relative flex items-center gap-2 group cursor-help"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      <HelpCircle size={14} className="text-swell-muted opacity-50 group-hover:opacity-100 transition-opacity" />
      
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 5 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 5 }}
            className="absolute bottom-full left-0 z-50 mb-2 w-48 rounded-lg bg-swell-card border border-swell-white/10 p-3 text-xs text-swell-white shadow-2xl"
          >
            {content}
            <div className="absolute -bottom-1 left-4 h-2 w-2 rotate-45 border-r border-b border-swell-white/10 bg-swell-card" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
