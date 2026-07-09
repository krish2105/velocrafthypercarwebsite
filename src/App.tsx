import { Canvas } from '@react-three/fiber';
import { ScrollControls } from '@react-three/drei';
import Scene from './components/Scene';
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import Preloader from './components/Preloader';

function App() {
  return (
    <div className="w-screen h-screen overflow-hidden bg-brand-black">
      <Preloader />
      <CustomCursor />
      <Navbar />

      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        {/* We use 3 pages here to match the 3 objects spread out across the Z axis */}
        <ScrollControls pages={3} damping={0.25}>
          <Scene />
        </ScrollControls>
      </Canvas>
    </div>
  );
}

export default App;
