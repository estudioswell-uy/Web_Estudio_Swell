import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, Menu, X, Waves } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Problema', href: '#problem' },
    { name: 'Servicios', href: '#services' },
    { name: 'Precios', href: '#pricing' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contacto', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const id = href.replace('#', '');
      const element = document.getElementById(id);
      
      if (element) {
        const offset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });

        // Limpiar la URL para que no muestre el '#'
        window.history.pushState('', document.title, window.location.pathname + window.location.search);
      }
      setIsOpen(false);
    }
  };


  return (
    <>
      <a 
        href="#main-content" 
        onClick={(e) => handleLinkClick(e, '#main-content')}
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-lg focus:bg-swell-blue focus:px-4 focus:py-2 focus:text-white"
      >
        Saltar al contenido principal
      </a>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 z-50 w-full px-6 py-4 transition-[padding,background-color] duration-300 md:px-12 ${
          scrolled ? 'py-3' : 'py-5'
        }`}
      >
        <div className={`mx-auto flex max-w-7xl items-center justify-between rounded-xl border border-swell-white/10 bg-swell-bg/80 px-6 py-2 backdrop-blur-xl transition-[box-shadow] duration-300 ${
          scrolled ? 'shadow-lg shadow-black/20' : ''
        }`}>
          <button 
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              window.history.pushState('', document.title, window.location.pathname + window.location.search);
            }}
            className="flex items-center gap-2 transition-transform hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            aria-label="Ir al inicio"
          >
            <Waves className="text-swell-blue" size={20} aria-hidden="true" />
            <div className="font-sans tracking-tight text-swell-white">
              <span className="text-[13px] font-light uppercase">Estudio</span>
              <span className="ml-1 text-[13px] font-extrabold uppercase text-swell-blue">Swell</span>
            </div>
          </button>

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-[11px] font-bold uppercase tracking-widest text-swell-white/40 transition-colors hover:text-swell-white"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/message/NUC5USYCEZNON1"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 rounded-full border border-swell-white/10 bg-swell-white/5 p-1.5 text-swell-white transition-all hover:bg-swell-white/10 md:flex px-4"
            >
              <Phone size={14} aria-hidden="true" />
              <span className="text-[10px] font-bold uppercase tracking-wider">Hablemos</span>
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-swell-white/5 text-swell-white md:hidden"
              aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              {isOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-swell-bg px-6 pt-24 md:hidden overscroll-behavior-contain"
          >
            <div className="flex w-full flex-col gap-6 text-center">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="font-display text-2xl font-bold tracking-tight text-swell-white hover:text-swell-blue"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            <div className="mt-12 flex flex-col items-center gap-4">
              <a
                href="https://wa.me/message/NUC5USYCEZNON1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-full bg-swell-blue px-8 py-4 font-display font-bold text-white shadow-xl shadow-swell-blue/20"
              >
                <Phone size={18} aria-hidden="true" />
                WhatsApp Directo
              </a>
              <a href="mailto:hola@estudioswell.com" className="text-sm font-medium text-swell-muted">
                hola@estudioswell.com
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
