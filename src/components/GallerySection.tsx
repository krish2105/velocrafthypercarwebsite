import { motion } from 'framer-motion';

const images = [
  { src: '/assets/car-renders/velocraft-vanta-r-render.png', title: 'Aero Dynamics', category: 'Exterior', span: 'col-span-1 md:col-span-2 row-span-2' },
  { src: '/assets/car-renders/velocraft-aether-x-render.png', title: 'Grand Touring', category: 'Performance', span: 'col-span-1' },
  { src: '/assets/car-renders/velocraft-solara-gt-render.png', title: 'Track Focus', category: 'Track', span: 'col-span-1' },
  { src: '/assets/car-renders/velocraft-vanta-r-render.png', title: 'Carbon Details', category: 'Interior', span: 'col-span-1 md:col-span-2' },
];

export default function GallerySection() {
  return (
    <section className="py-24 bg-brand-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16">
        <h2 className="font-heading text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
          Visual <span className="text-brand-gold">Excellence</span>
        </h2>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]">
        {images.map((item, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`relative group overflow-hidden rounded-lg bg-brand-carbon flex items-center justify-center ${item.span}`}
          >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-brand-black/40 group-hover:bg-brand-black/10 transition-colors duration-500 z-10" />
            
            <img 
              src={item.src} 
              alt={item.title} 
              className="w-full h-full object-cover md:object-contain p-8 group-hover:scale-110 transition-transform duration-700 ease-out"
            />
            
            {/* Hover Content */}
            <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 translate-y-4 group-hover:translate-y-0">
              <p className="text-brand-gold text-xs tracking-widest uppercase font-bold mb-1">{item.category}</p>
              <h3 className="text-white font-heading text-xl font-bold">{item.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
