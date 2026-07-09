import { motion } from 'framer-motion';
import { features } from '../data/cars';
import * as Icons from 'lucide-react';

export default function FeatureSection() {
  return (
    <section id="performance" className="py-32 bg-brand-carbon relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-brand-gold text-sm tracking-[0.3em] uppercase font-bold mb-4">Performance Engineering</p>
          <h2 className="font-heading text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-6">
            Designed for the <span className="text-brand-platinum border-b-4 border-brand-gold">Impossible</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Every component is engineered with aerospace-grade precision to redefine the laws of physics on the track.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            // Dynamically get the icon component
            const IconComponent = (Icons as any)[feature.icon] || Icons.Activity;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-panel p-8 rounded-lg group hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-brand-black/50 border border-white/10 flex items-center justify-center mb-6 group-hover:border-brand-gold/50 group-hover:bg-brand-gold/10 transition-colors">
                  <IconComponent size={24} className="text-brand-platinum group-hover:text-brand-gold transition-colors" />
                </div>
                <h3 className="text-xl font-heading font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
}
