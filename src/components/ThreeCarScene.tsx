import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows } from '@react-three/drei';
import ProceduralWheel from './ProceduralWheel';

export default function ThreeCarScene() {
  return (
    <section id="configurator" className="relative w-full min-h-[100vh] bg-brand-black flex flex-col items-center justify-center overflow-hidden py-20">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-brand-gold/5 blur-[150px] rounded-full pointer-events-none z-0" />

      <div className="z-10 text-center mb-12 px-6">
        <h2 className="text-sm tracking-[0.3em] text-brand-gold uppercase font-semibold mb-4">Webgl Configurator</h2>
        <h3 className="text-4xl md:text-6xl font-heading font-bold text-white uppercase">Shape Your Vision</h3>
        <p className="text-gray-400 mt-4 max-w-xl mx-auto font-light">Interact with the core aerodynamic geometry in true 3D space.</p>
      </div>

      {/* WebGL Canvas */}
      <div className="w-full h-[60vh] max-w-6xl mx-auto cursor-grab active:cursor-grabbing relative z-10 border border-brand-platinum/10 bg-brand-carbon/30 backdrop-blur-sm rounded-xl overflow-hidden">
        <Canvas camera={{ position: [0, 2, 6], fov: 45 }}>
          <color attach="background" args={['#050505']} />
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
          
          <Suspense fallback={null}>
            <ProceduralWheel scale={1.2} />
            <ContactShadows position={[0, -1.8, 0]} opacity={0.7} scale={10} blur={2.5} far={4} color="#000" />
            <Environment preset="city" />
            <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} maxPolarAngle={Math.PI / 2 + 0.1} minPolarAngle={Math.PI / 4} />
          </Suspense>
        </Canvas>
        
        {/* UI Overlay */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-4 p-4 bg-brand-black/80 backdrop-blur-md border border-white/10 rounded-full">
          <button className="w-8 h-8 rounded-full bg-[#111] border-2 border-brand-gold hover:scale-110 transition-transform" />
          <button className="w-8 h-8 rounded-full bg-brand-gold border-2 border-transparent hover:border-white transition-all" />
          <button className="w-8 h-8 rounded-full bg-brand-crimson border-2 border-transparent hover:border-white transition-all" />
          <button className="w-8 h-8 rounded-full bg-brand-platinum border-2 border-transparent hover:border-white transition-all" />
        </div>
      </div>
    </section>
  );
}
