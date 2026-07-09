import { Globe, MessageCircle, Share2, Video } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-black border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-8 mb-16">
          <div className="md:col-span-1">
            <h2 className="font-heading font-bold text-2xl tracking-[0.2em] text-white mb-6">
              VELOCRAFT
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              A new generation of electric hypercars sculpted for impossible performance. Luxury is not added. It is engineered.
            </p>
          </div>
          
          <div>
            <h3 className="font-heading font-semibold text-white tracking-widest uppercase mb-6 text-sm">Models</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Vanta R</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Aether X</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Solara GT</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-white tracking-widest uppercase mb-6 text-sm">Company</h3>
            <ul className="space-y-4">
              <li><a href="#heritage" className="text-gray-400 hover:text-white transition-colors text-sm">Our Story</a></li>
              <li><a href="#performance" className="text-gray-400 hover:text-white transition-colors text-sm">Engineering</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Careers</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors text-sm">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-white tracking-widest uppercase mb-6 text-sm">Stay Updated</h3>
            <p className="text-gray-400 text-sm mb-4">Subscribe to receive the latest updates and exclusive invitations.</p>
            <form className="flex" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-brand-graphite border border-white/10 px-4 py-2 text-sm text-white w-full focus:outline-none focus:border-brand-gold transition-colors rounded-l-sm"
              />
              <button 
                type="submit" 
                className="bg-brand-gold text-black px-4 py-2 text-sm font-semibold hover:bg-yellow-500 transition-colors rounded-r-sm"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10">
          <p className="text-gray-500 text-xs mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Velocraft Automotive. All rights reserved. (Fictional Concept)
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Globe size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Share2 size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Video size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <MessageCircle size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
