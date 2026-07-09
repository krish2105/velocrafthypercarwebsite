import { motion } from 'framer-motion';

const timeline = [
  { year: '2026', title: 'Concept Unveiled', desc: 'The original Vanta R clay model breaks the internet, redefining what an electric hypercar could look like.' },
  { year: '2027', title: 'Prototype Testing', desc: 'Nürburgring Nordschleife testing pushes the quad-motor system to its theoretical limits.' },
  { year: '2028', title: 'Limited Production', desc: 'First 499 units enter hand-assembly at our bespoke carbon-fiber facility.' },
  { year: '2029', title: 'Track Edition', desc: 'The uncompromising track-only variant shatters records globally.' }
];

export default function HeritageSection() {
  return (
    <section id="heritage" className="py-32 bg-brand-black relative border-t border-white/5 overflow-hidden">
      <div className="absolute left-0 w-1/3 h-full bg-brand-graphite/20 -skew-x-12 -ml-20 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-brand-gold text-sm tracking-[0.3em] uppercase font-bold mb-4">Our Heritage</p>
            <h2 className="font-heading text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-8">
              Born from <br /> Carbon & Code
            </h2>
            <div className="space-y-6 text-gray-400 text-lg">
              <p>
                Velocraft was founded on a singular vision: to create the ultimate driving machine for the electric era. We don't just build cars; we engineer rolling masterpieces using aerospace-grade materials.
              </p>
              <p>
                Designed for collectors, drivers, and innovators, every Velocraft vehicle represents the absolute pinnacle of human engineering.
              </p>
            </div>
          </motion.div>

          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-[27px] top-4 bottom-4 w-[2px] bg-white/10" />
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="relative pl-16 group"
                >
                  <div className="absolute left-5 top-1.5 w-4 h-4 rounded-full bg-brand-black border-2 border-brand-gold group-hover:bg-brand-gold transition-colors z-10" />
                  <h3 className="font-heading font-bold text-2xl text-white mb-2">{item.year}: <span className="text-brand-platinum font-medium">{item.title}</span></h3>
                  <p className="text-gray-400">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
