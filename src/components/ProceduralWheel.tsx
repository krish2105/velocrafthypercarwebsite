import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

export default function ProceduralWheel(props: any) {
  const groupRef = useRef<THREE.Group>(null);
  const caliperRef = useRef<THREE.Mesh>(null);
  const wheelRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (wheelRef.current) {
      // Spin the wheel rapidly
      wheelRef.current.rotation.x -= delta * 5;
    }
    if (groupRef.current) {
      // Slowly rotate the entire assembly for viewing
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.5;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
      <group ref={groupRef} {...props}>
        
        {/* Brake Assembly (Does not spin with wheel) */}
        <group>
          {/* Brake Disc */}
          <mesh rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[1.4, 1.4, 0.1, 64]} />
            <meshStandardMaterial color="#888" metalness={0.8} roughness={0.4} />
          </mesh>
          {/* Brake Caliper (Red) */}
          <mesh ref={caliperRef} position={[0, 1.2, 0.1]}>
            <boxGeometry args={[0.4, 0.8, 0.3]} />
            <meshStandardMaterial color="#ff003c" metalness={0.5} roughness={0.2} emissive="#ff003c" emissiveIntensity={0.2} />
          </mesh>
        </group>

        {/* Wheel Assembly (Spins) */}
        <group ref={wheelRef}>
          {/* Tire (Thick Torus) */}
          <mesh rotation={[0, 0, Math.PI / 2]}>
            <torusGeometry args={[1.8, 0.4, 32, 64]} />
            <meshStandardMaterial color="#050505" roughness={0.9} metalness={0.1} />
          </mesh>

          {/* Rim Barrel */}
          <mesh rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[1.7, 1.7, 0.6, 64]} />
            <meshStandardMaterial color="#1a1a1a" metalness={0.9} roughness={0.1} />
          </mesh>

          {/* Rim Center Hub */}
          <mesh rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.3, 0.3, 0.7, 32]} />
            <meshStandardMaterial color="#d4af37" metalness={1} roughness={0.2} />
          </mesh>

          {/* Spokes (5-spoke design) */}
          {[0, 1, 2, 3, 4].map((i) => (
            <mesh key={i} rotation={[i * ((Math.PI * 2) / 5), 0, 0]} position={[0, 0, 0]}>
              <boxGeometry args={[0.2, 3.4, 0.2]} />
              <meshStandardMaterial color="#222" metalness={0.8} roughness={0.3} />
            </mesh>
          ))}
          
          {/* Inner Lug Nuts */}
          {[0, 1, 2, 3, 4].map((i) => {
            const angle = i * ((Math.PI * 2) / 5);
            const radius = 0.4;
            return (
              <mesh key={`lug-${i}`} position={[0, Math.cos(angle) * radius, Math.sin(angle) * radius]} rotation={[0, 0, Math.PI / 2]}>
                <cylinderGeometry args={[0.05, 0.05, 0.75, 6]} />
                <meshStandardMaterial color="#fff" metalness={1} roughness={0.1} />
              </mesh>
            );
          })}
        </group>

        {/* Floating Animated Geometric "Tech" Elements around the wheel */}
        {[...Array(8)].map((_, i) => (
          <FloatingElement key={i} index={i} />
        ))}
      </group>
    </Float>
  );
}

// Small tech elements floating around the wheel
function FloatingElement({ index }: { index: number }) {
  const ref = useRef<THREE.Mesh>(null);
  const randomOffset = Math.random() * 10;
  const radius = 3 + Math.random() * 2;
  const speed = 0.5 + Math.random() * 1.5;

  useFrame((state) => {
    if (ref.current) {
      const t = state.clock.elapsedTime * speed + randomOffset;
      ref.current.position.x = Math.sin(t) * radius * (index % 2 === 0 ? 1 : 0);
      ref.current.position.y = Math.cos(t) * radius;
      ref.current.position.z = Math.sin(t) * radius * (index % 2 === 0 ? 0 : 1);
      ref.current.rotation.x += 0.02;
      ref.current.rotation.y += 0.02;
    }
  });

  return (
    <mesh ref={ref}>
      <octahedronGeometry args={[0.1]} />
      <meshStandardMaterial color="#d4af37" emissive="#d4af37" emissiveIntensity={1} wireframe={index % 2 === 0} />
    </mesh>
  );
}
