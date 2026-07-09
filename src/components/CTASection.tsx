import { motion } from 'framer-motion';

export default function CTASection() {
  return (
    <section id="contact" className="py-32 bg-brand-carbon relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-heading text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-6">
            Reserve Your <span className="text-brand-gold">Legacy</span>
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-md">
            Production is strictly limited to 499 units worldwide. Secure your allocation and begin the bespoke personalization process.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center">
                <span className="text-brand-gold font-bold">1</span>
              </div>
              <p className="text-white font-medium">Request Private Consultation</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center">
                <span className="text-brand-gold font-bold">2</span>
              </div>
              <p className="text-white font-medium">Configure Your Allocation</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center">
                <span className="text-brand-gold font-bold">3</span>
              </div>
              <p className="text-white font-medium">Finalize Reservation</p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass p-8 md:p-12 rounded-lg"
        >
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">First Name</label>
                <input type="text" className="w-full bg-brand-black/50 border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-brand-gold transition-colors" />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Last Name</label>
                <input type="text" className="w-full bg-brand-black/50 border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-brand-gold transition-colors" />
              </div>
            </div>
            
            <div>
              <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Email Address</label>
              <input type="email" className="w-full bg-brand-black/50 border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-brand-gold transition-colors" />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Preferred Model</label>
              <select className="w-full bg-brand-black/50 border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-brand-gold transition-colors appearance-none">
                <option value="vanta-r">Vanta R (Track-Focused)</option>
                <option value="aether-x">Aether X (Grand Touring)</option>
                <option value="solara-gt">Solara GT (Supercar)</option>
              </select>
            </div>

            <button className="w-full mt-4 px-8 py-4 bg-brand-platinum text-brand-black font-heading font-bold uppercase tracking-widest hover:bg-white hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] transition-all rounded-sm">
              Request Consultation
            </button>
            <p className="text-center text-gray-600 text-xs mt-4">
              By submitting this form, you agree to our privacy policy and terms of service.
            </p>
          </form>
        </motion.div>
        
      </div>
    </section>
  );
}
