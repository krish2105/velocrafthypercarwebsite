import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function PerformanceStats() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !textRef.current || !statsRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=200%",
          scrub: 1,
          pin: true,
        }
      });

      tl.fromTo(textRef.current, 
        { scale: 0.5, opacity: 0 }, 
        { scale: 1, opacity: 1, duration: 1, ease: "power2.out" }
      )
      .to(textRef.current, { opacity: 0, scale: 2, duration: 1, ease: "power2.in" })
      .fromTo(statsRef.current,
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="performance" className="h-screen w-full bg-brand-black flex flex-col items-center justify-center overflow-hidden relative">
      <div className="absolute inset-0 z-0 opacity-20 bg-[url('/assets/moodboard/02-carbon-fiber-texture.png')] bg-repeat mix-blend-overlay" />
      
      <h2 ref={textRef} className="absolute text-5xl md:text-8xl lg:text-[10rem] font-heading font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-brand-carbon uppercase text-center tracking-tighter leading-none z-10">
        Relentless <br/> Force
      </h2>

      <div ref={statsRef} className="absolute z-20 w-full max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
        {[
          { label: 'Downforce', value: '1,200 kg' },
          { label: 'Lateral G', value: '2.5G' },
          { label: 'Aerodynamics', value: 'Active System' },
        ].map((stat, i) => (
          <div key={i} className="flex flex-col items-center">
            <div className="w-16 h-1 bg-brand-gold mb-6" />
            <h3 className="text-4xl md:text-5xl font-heading font-bold text-white mb-2">{stat.value}</h3>
            <p className="text-brand-platinum/50 uppercase tracking-[0.2em] text-sm font-medium">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
