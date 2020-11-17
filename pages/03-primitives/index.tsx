import { Canvas } from 'react-three-fiber';
import { OrbitControls } from '@react-three/drei';
import { Cone, Cube, FlatCircle } from './components';

export default function Scene() {
  return (
    <Canvas camera={{ position: [0, 0, 4] }}>
      {/* <Cube /> */}
      {/* <FlatCircle /> */}
      <Cone />

      <directionalLight
        color={0xffffff}
        intensity={1.0}
        position={[-1, 2, 4]}
      />

      <OrbitControls />
    </Canvas>
  );
}
