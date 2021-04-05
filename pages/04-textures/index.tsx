import { OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';
import { Canvas } from 'react-three-fiber';
import SixTextures from './components/SixTextures';

export default function Scene(controlsProps) {
  return (
    <Canvas
      camera={{
        position: [0, 0, 2],
        fov: 75,
        aspect: 2,
        near: 0.1,
        far: 5,
      }}
    >
      <Suspense fallback={null}>
        <SixTextures />
      </Suspense>

      <OrbitControls {...controlsProps} />
    </Canvas>
  );
}
