import { Suspense, useRef } from 'react';
import { Canvas } from 'react-three-fiber';
import { OrbitControls } from '@react-three/drei';
import PerspectiveCamera from './cameras/PerspectiveCamera';
import { Cube, Plane, Sphere } from './components';
import { DirectionalLight } from './lights';

export default function Scene() {
  return (
    <Canvas>
      <Suspense fallback={null}>
        <Plane />
        <Cube />
        <Sphere />
      </Suspense>

      <PerspectiveCamera />
      <DirectionalLight />

      <OrbitControls target={[0, 5, 0]} />
    </Canvas>
  );
}
