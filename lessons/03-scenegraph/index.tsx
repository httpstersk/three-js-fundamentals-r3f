import { Canvas } from 'react-three-fiber';
import { OrbitControls } from '@react-three/drei';
import SolarSystem from './components/SolarSystem';

export default function Scene(controlsProps) {
  return (
    <Canvas
      camera={{
        aspect: 2,
        far: 1000,
        fov: 40,
        near: 0.1,
        position: [0, 50, 0],
        up: [0, 0, 1],
      }}
    >
      <pointLight color={0xffffff} intensity={3} />
      <SolarSystem />
      <OrbitControls {...controlsProps} />
    </Canvas>
  );
}
