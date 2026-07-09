import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { colors } from '../data/cars';

export default function ThreeCarScene() {
  const [activeColor, setActiveColor] = useState(colors[0]);

  return (
    <section id="configurator" className="relative py-32 bg-brand-carbon overflow-hidden border-y border-white/5">
      
      {/* Background Lighting connected to active color */}
      <AnimatePresence>
        <motion.div
          key={activeColor.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 z-0"
          style={{
            background: `radial-gradient(circle at 50% 50%, ${activeColor.hex}, transparent 70%)`
          }}
        />
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-5xl font-black text-white uppercase tracking-widest mb-4">
            Configure Your <span className="text-transparent bg-clip-text" style={{ backgroundImage: `linear-gradient(90deg, #fff, ${activeColor.hex})`}}>Vanta R</span>
          </h2>
          <p className="text-gray-400">Select your exterior finish to visualize the aerodynamics in different environments.</p>
        </div>

        {/* 3D Simulated Stage */}
        <div className="relative w-full h-[300px] md:h-[500px] flex flex-col items-center justify-center mb-16 perspective-[1200px]">
          
          {/* Rotating Platform Effect */}
          <div className="absolute bottom-10 md:bottom-20 w-[80%] md:w-[60%] h-32 md:h-48 border-2 border-white/10 rounded-[100%] shadow-[0_0_50px_rgba(255,255,255,0.05)] transform rotate-X-[70deg] z-0 pointer-events-none" />
          
          <div className="absolute bottom-10 md:bottom-20 w-[70%] md:w-[50%] h-24 md:h-40 border border-white/20 rounded-[100%] transform rotate-X-[70deg] z-0 pointer-events-none flex items-center justify-center">
            <motion.div 
              animate={{ rotateZ: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-full h-full rounded-[100%] border-t-2 border-brand-gold/30"
            />
          </div>

          {/* Car Image with CSS color blending trick to tint the image */}
          <div className="relative z-10 w-full max-w-4xl flex justify-center">
            {/* Base Image */}
            <img 
              src="/assets/car-renders/velocraft-vanta-r-render.png" 
              alt="Vanta R" 
              className="w-full h-auto object-contain relative z-10"
            />
            {/* Color overlay using mix-blend-mode */}
            <motion.div 
              className="absolute inset-0 bg-current mix-blend-color z-20 mask-image-car opacity-80"
              style={{ 
                color: activeColor.hex,
                WebkitMaskImage: 'url(/assets/car-renders/velocraft-vanta-r-render.png)',
                WebkitMaskSize: 'contain',
                WebkitMaskRepeat: 'no-repeat',
                WebkitMaskPosition: 'center',
                // This is a CSS trick to tint a grayscale or base image.
                // Depending on the exact render, it might look amazing or just okay.
              }}
              animate={{ backgroundColor: activeColor.hex }}
              transition={{ duration: 0.5 }}
            />
          </div>

        </div>

        {/* Controls */}
        <div className="flex flex-col items-center">
          <p className="text-brand-platinum font-heading tracking-widest uppercase text-sm mb-6">
            Exterior Finish: <span className="font-bold">{activeColor.name}</span>
          </p>
          <div className="flex space-x-6">
            {colors.map((color) => (
              <button
                key={color.id}
                onClick={() => setActiveColor(color)}
                className={`relative w-12 h-12 rounded-full transition-all duration-300 ${activeColor.id === color.id ? 'scale-125' : 'hover:scale-110 opacity-70 hover:opacity-100'}`}
                aria-label={`Select ${color.name}`}
              >
                <div 
                  className="absolute inset-1 rounded-full shadow-inner"
                  style={{ backgroundColor: color.hex }}
                />
                {activeColor.id === color.id && (
                  <motion.div 
                    layoutId="color-ring"
                    className="absolute inset-0 rounded-full border-2 border-white"
                  />
                )}
              </button>
            ))}
          </div>
          
          <button className="mt-12 px-10 py-4 bg-brand-platinum text-brand-black font-heading font-bold uppercase tracking-widest hover:bg-white hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] transition-all rounded-sm">
            Finalize Configuration
          </button>
        </div>
      </div>
    </section>
  );
}
