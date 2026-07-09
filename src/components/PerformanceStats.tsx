import { motion } from 'framer-motion';
import { specsData } from '../data/cars';

export default function PerformanceStats() {
  return (
    <section className="py-24 bg-brand-black border-t border-white/5 relative overflow-hidden">
      {/* Abstract Background Element */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full text-brand-platinum fill-current">
          <polygon points="100,0 100,100 0,100" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="mb-16">
          <h2 className="font-heading text-3xl md:text-5xl font-black text-white uppercase tracking-widest mb-4">
            Uncompromised <br/><span className="text-brand-platinum">Specifications</span>
          </h2>
          <div className="w-20 h-1 bg-brand-gold mt-6" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-12">
          {specsData.map((spec, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border-l border-white/10 pl-6 hover:border-brand-gold transition-colors duration-300"
            >
              <p className="text-gray-500 text-xs tracking-[0.2em] uppercase mb-2 font-medium">{spec.label}</p>
              <p className="text-white font-heading font-bold text-xl md:text-2xl">{spec.value}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
