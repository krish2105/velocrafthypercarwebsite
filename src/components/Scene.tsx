import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { useScroll, Text, Stars, ContactShadows, Environment, Scroll } from '@react-three/drei';
import { EffectComposer, Bloom, DepthOfField, Vignette } from '@react-three/postprocessing';
import * as THREE from 'three';
import { easing } from 'maath';
import ProceduralWheel from './ProceduralWheel';

// Drifting dust particles for volumetric feel
function DustMotes() {
  const count = 500;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) pos[i] = (Math.random() - 0.5) * 40;
    return pos;
  }, [count]);

  const pointsRef = useRef<THREE.Points>(null);

  useFrame((_state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.05;
      pointsRef.current.rotation.x += delta * 0.02;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#d4af37" transparent opacity={0.4} sizeAttenuation depthWrite={false} />
    </points>
  );
}

export default function Scene() {
  const scroll = useScroll();
  const cameraGroup = useRef<THREE.Group>(null);

  // Animate Camera based on Scroll
  useFrame((_state, delta) => {
    if (!cameraGroup.current) return;
    
    // r1 is the scroll progress from 0 to 1
    const r1 = scroll.offset;
    
    // Fly the camera deeply forward in the Z axis as you scroll down
    easing.damp3(cameraGroup.current.position, [0, 0, -r1 * 30], 0.25, delta);
  });

  return (
    <>
      <color attach="background" args={['#050505']} />
      <fog attach="fog" args={['#050505', 5, 20]} />
      
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} color="#ffffff" />
      <Environment preset="city" />

      {/* Camera Group that moves based on scroll */}
      <group ref={cameraGroup}>
        
        {/* DOM Overlays tied to scroll using Drei's <Scroll> */}
        <Scroll html style={{ width: '100%', height: '100%' }}>
          
          {/* Page 1: Hero */}
          <div className="w-screen h-screen flex flex-col items-center justify-center pointer-events-none relative">
            <h1 className="text-[12vw] font-heading font-black text-white uppercase tracking-tighter mix-blend-overlay opacity-20 absolute z-0 pointer-events-none">
              Velocraft
            </h1>
            <h2 className="text-4xl md:text-7xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 uppercase z-10 text-center pointer-events-auto">
              Engineered Beyond <br /> <span className="text-brand-gold">Speed</span>
            </h2>
            <p className="mt-6 text-brand-platinum/50 uppercase tracking-[0.3em] text-sm">Scroll to Enter the Void</p>
          </div>

          {/* Page 2: Performance */}
          <div className="w-screen h-screen flex flex-col items-center justify-center pointer-events-none">
            <div className="max-w-4xl mx-auto text-center pointer-events-auto">
              <h2 className="text-5xl md:text-8xl font-heading font-black text-white uppercase mb-8">
                Relentless <span className="text-brand-gold">Force</span>
              </h2>
              <div className="grid grid-cols-3 gap-8 border-t border-b border-white/10 py-12">
                <div>
                  <h3 className="text-5xl font-bold text-white mb-2">1480</h3>
                  <p className="text-brand-gold text-xs tracking-widest uppercase">Horsepower</p>
                </div>
                <div>
                  <h3 className="text-5xl font-bold text-white mb-2">1.9s</h3>
                  <p className="text-brand-gold text-xs tracking-widest uppercase">0-100 KM/H</p>
                </div>
                <div>
                  <h3 className="text-5xl font-bold text-white mb-2">1200</h3>
                  <p className="text-brand-gold text-xs tracking-widest uppercase">KG Downforce</p>
                </div>
              </div>
            </div>
          </div>

          {/* Page 3: Experience */}
          <div className="w-screen h-screen flex flex-col items-center justify-center pointer-events-none">
            <a href="https://velocraft-web.vercel.app" className="pointer-events-auto px-12 py-4 border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-black transition-all tracking-[0.2em] uppercase font-bold text-sm rounded-sm backdrop-blur-md">
              Initialize Prototype
            </a>
          </div>

        </Scroll>
      </group>

      {/* 3D Objects scattered in space */}
      
      {/* Object 1: The Core (at z=0) */}
      <ProceduralWheel position={[0, 0, 0]} scale={2} />
      <ContactShadows position={[0, -2, 0]} opacity={0.5} scale={10} blur={2} far={4} color="#000" />
      <Text position={[0, 3, 0]} fontSize={0.5} letterSpacing={0.2} color="#fff">
        THE APEX
      </Text>

      {/* Object 2: Engineering Nodes (at z=-10) */}
      <ProceduralWheel position={[-4, 0, -10]} scale={1} />
      <ProceduralWheel position={[4, 0, -10]} scale={1} />
      <Text position={[0, 0, -12]} fontSize={2} fillOpacity={0.1} outlineWidth={0.02} outlineColor="#d4af37">
        AERODYNAMICS
      </Text>

      {/* Object 3: Deep Void (at z=-20) */}
      <ProceduralWheel position={[0, -2, -20]} scale={3} />
      <Text position={[0, 4, -20]} fontSize={1} color="#ffffff">
        MASTER LEVEL
      </Text>

      <DustMotes />
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

      <EffectComposer>
        <DepthOfField focusDistance={0} focalLength={0.02} bokehScale={2} height={480} />
        <Bloom luminanceThreshold={0.5} mipmapBlur intensity={1.5} />
        <Vignette eskil={false} offset={0.1} darkness={1.1} />
      </EffectComposer>
    </>
  );
}
