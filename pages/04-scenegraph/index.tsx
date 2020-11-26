import { Canvas } from 'react-three-fiber';
import { OrbitControls } from '@react-three/drei';
import Sun from './components/Sun';

export default function Scene() {
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
      <Sun emissive={0xffff00} scale={[5, 5, 5]} />
      <OrbitControls />
    </Canvas>
  );
}
