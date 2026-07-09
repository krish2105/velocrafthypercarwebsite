import { motion } from 'framer-motion';
import { cars } from '../data/cars';
import { ArrowRight } from 'lucide-react';
import React, { useRef, useState } from 'react';

// 3D Tilt Card Component
const TiltCard = ({ car, index }: { car: typeof cars[0], index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    setRotateX(yPct * 20); // max 10 deg
    setRotateY(xPct * 20);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
      }}
      animate={{
        rotateX: -rotateX,
        rotateY: rotateY,
      }}
      className="relative group glass-panel rounded-lg p-6 lg:p-8 cursor-pointer overflow-hidden transition-all duration-300"
    >
      {/* Background glow on hover */}
      <div className="absolute inset-0 bg-brand-gold/0 group-hover:bg-brand-gold/5 transition-colors duration-500 rounded-lg pointer-events-none" />
      
      {/* Image container */}
      <div className="relative h-48 md:h-64 w-full mb-8 flex items-center justify-center" style={{ transform: 'translateZ(50px)' }}>
        <img 
          src={car.image} 
          alt={car.name} 
          className="max-h-full object-contain drop-shadow-xl group-hover:scale-110 transition-transform duration-700 ease-out"
        />
      </div>

      <div style={{ transform: 'translateZ(30px)' }}>
        <p className="text-brand-gold text-xs tracking-[0.3em] uppercase mb-2 font-bold">{car.category}</p>
        <h3 className="font-heading text-2xl md:text-3xl text-white font-bold mb-4">{car.name}</h3>
        
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div>
            <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Power</p>
            <p className="text-brand-platinum font-semibold">{car.horsepower} HP</p>
          </div>
          <div>
            <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Top Speed</p>
            <p className="text-brand-platinum font-semibold">{car.topSpeed} km/h</p>
          </div>
          <div>
            <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">0-100</p>
            <p className="text-brand-platinum font-semibold">{car.acceleration}s</p>
          </div>
          <div>
            <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Starting At</p>
            <p className="text-brand-platinum font-semibold">{car.price}</p>
          </div>
        </div>

        <button className="flex items-center gap-2 text-sm font-heading font-bold uppercase tracking-widest text-brand-platinum group-hover:text-brand-gold transition-colors">
          View Details
          <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
        </button>
      </div>
    </motion.div>
  );
};

export default function CarShowcase() {
  return (
    <section id="models" className="py-32 relative bg-brand-black z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight">
              The <span className="text-brand-gold">Fleet</span>
            </h2>
            <p className="text-gray-400 mt-4 max-w-lg text-lg">
              Three distinct philosophies of speed. One uncompromising commitment to perfection.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car, index) => (
            <TiltCard key={car.id} car={car} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}
