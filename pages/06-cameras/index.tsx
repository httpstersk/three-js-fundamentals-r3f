import { Suspense, useRef } from 'react';
import { Canvas } from 'react-three-fiber';
import { OrbitControls } from '@react-three/drei';
import PerspectiveCamera from './cameras/PerspectiveCamera';
import OrthographicCamera from './cameras/OrthographicCamera';
import { Cube, Plane, Sphere } from './components';
import { DirectionalLight } from './lights';

export default function Scene(controlsProps) {
  return (
    <Canvas>
      <Suspense fallback={null}>
        <Plane />
        <Cube />
        <Sphere />
      </Suspense>

      {/* <PerspectiveCamera /> */}
      <OrthographicCamera />

      <DirectionalLight />

      <OrbitControls target={[0, 5, 0]} {...controlsProps} />
    </Canvas>
  );
}
