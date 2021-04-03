import { Canvas } from 'react-three-fiber';
import { OrbitControls } from '@react-three/drei';
import Cube from './Cube';

export default function HomepageScene() {
  return (
    <Canvas camera={{ position: [0, 0, 2] }}>
      <Cube />

      <directionalLight
        color={0xffffff}
        intensity={1.0}
        position={[-1, 2, 4]}
      />

      <color args={['#010101']} attach="background" />
      <fog attach="fog" color="#010101" far={2} near={1} />

      <OrbitControls />
    </Canvas>
  );
}
