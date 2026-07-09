import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useAudio } from '../hooks/useAudio';

const navLinks = [
  { name: 'Models', href: '#models' },
  { name: 'Performance', href: '#performance' },
  { name: 'Configurator', href: '#configurator' },
  { name: 'Heritage', href: '#heritage' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { playHoverSound, playClickSound } = useAudio();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-brand-black/80 backdrop-blur-md py-4 border-b border-white/5' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <a 
          href="/" 
          className="relative group flex items-center gap-2 z-50"
          onMouseEnter={playHoverSound}
          onClick={playClickSound}
        >
          <span className="font-heading font-bold text-2xl tracking-[0.2em] text-white">
            VELOCRAFT
          </span>
          <div className="absolute -bottom-2 left-0 w-0 h-0.5 bg-brand-gold transition-all duration-300 group-hover:w-full" />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onMouseEnter={playHoverSound}
              onClick={playClickSound}
              className="text-sm font-medium tracking-wider text-gray-300 hover:text-white uppercase transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <a
            href="#contact"
            onMouseEnter={playHoverSound}
            onClick={playClickSound}
            className="px-6 py-2.5 bg-brand-platinum text-brand-black font-semibold tracking-wider text-sm hover:bg-white transition-all shadow-[0_0_20px_rgba(215,217,220,0.3)] hover:shadow-[0_0_30px_rgba(215,217,220,0.6)] rounded-sm"
          >
            Reserve Yours
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden z-50 text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-0 left-0 right-0 h-screen bg-brand-black/95 backdrop-blur-xl flex flex-col items-center justify-center space-y-8 px-6"
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-heading tracking-widest uppercase text-white hover:text-brand-gold transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-8 px-8 py-4 bg-brand-platinum text-brand-black font-semibold tracking-wider text-lg w-full text-center hover:bg-white transition-all"
              >
                Reserve Yours
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
