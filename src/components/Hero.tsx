import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const headline = "Engineered Beyond".split(" ");

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background with gradient lighting and parallax */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-brand-black opacity-90 z-10" />
        <motion.div 
          animate={{ x: mousePosition.x * -2, y: mousePosition.y * -2 }}
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] max-w-4xl max-h-4xl bg-brand-gold/10 rounded-full blur-[120px] mix-blend-screen animate-pulse z-0" 
        />
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-brand-black to-transparent z-10" />
      </div>

      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 lg:px-8 pt-20 flex flex-col items-center">
        {/* Headlines */}
        <div className="text-center mb-8 md:mb-12 flex flex-col items-center">
          <h1 className="font-heading font-black text-4xl sm:text-5xl md:text-7xl lg:text-8xl tracking-tight text-white mb-6 uppercase flex flex-wrap justify-center gap-x-4 lg:gap-x-8">
            {headline.map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 50, rotateX: -90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.15, ease: [0.33, 1, 0.68, 1] }}
                style={{ transformOrigin: "bottom" }}
              >
                {word}
              </motion.span>
            ))}
            <motion.span
              initial={{ opacity: 0, y: 50, rotateX: -90 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.8, delay: 0.2 + headline.length * 0.15, ease: [0.33, 1, 0.68, 1] }}
              className="text-transparent bg-clip-text bg-gradient-to-r from-brand-platinum to-brand-gold text-glow"
              style={{ transformOrigin: "bottom" }}
            >
              SPEED
            </motion.span>
          </h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-gray-400 text-base md:text-xl max-w-2xl mx-auto font-light tracking-wide"
          >
            A new generation of electric hypercars sculpted for impossible performance.
          </motion.p>
        </div>

        {/* 3D-style Hero Image / Attached Photo */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
          className="relative w-full max-w-5xl mx-auto h-[35vh] sm:h-[40vh] md:h-[50vh] flex items-center justify-center mb-12"
          style={{ perspective: '1000px' }}
        >
          {/* Animated Glow behind the car */}
          <motion.div 
            animate={{ 
              scale: [1, 1.05, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 bg-brand-gold/20 blur-[100px] rounded-full z-0" 
          />
          
          <motion.img 
            src="/assets/car-renders/hero-car.jpg" 
            alt="Velocraft Hypercar"
            animate={{ 
              y: [0, -15, 0],
              rotateX: mousePosition.y * -0.5,
              rotateY: mousePosition.x * 0.5,
              x: mousePosition.x
            }}
            transition={{ 
              y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
              rotateX: { type: "spring", stiffness: 50 },
              rotateY: { type: "spring", stiffness: 50 },
              x: { type: "spring", stiffness: 50 }
            }}
            className="w-full h-full object-contain relative z-10 drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
          />
        </motion.div>

        {/* CTAs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 z-20 w-full sm:w-auto px-6 sm:px-0"
        >
          <a href="#models" className="w-full sm:w-auto text-center group relative px-8 py-4 bg-brand-platinum text-brand-black font-heading font-bold uppercase tracking-widest overflow-hidden">
            <span className="relative z-10 flex items-center justify-center gap-2">
              Explore Models
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
          </a>
          <a href="#configurator" className="w-full sm:w-auto text-center group px-8 py-4 border border-brand-platinum/30 text-brand-platinum font-heading font-bold uppercase tracking-widest hover:bg-brand-platinum/10 transition-colors flex items-center justify-center gap-2">
            Build Your Hypercar
          </a>
        </motion.div>
      </div>

      {/* Floating Specs at bottom */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="absolute bottom-8 w-full px-6 lg:px-8 hidden md:block z-20"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center border-t border-brand-platinum/10 pt-6">
          {[
            { label: '0-100 km/h', value: '1.9s' },
            { label: 'Top Speed', value: '412 km/h' },
            { label: 'Power', value: '1,480 HP' },
            { label: 'Range', value: '720 km' },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center sm:items-start">
              <span className="text-brand-gold text-2xl lg:text-3xl font-heading font-bold mb-1">{stat.value}</span>
              <span className="text-brand-platinum/60 text-xs tracking-widest uppercase">{stat.label}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
