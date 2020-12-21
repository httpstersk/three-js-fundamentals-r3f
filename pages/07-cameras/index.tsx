import { Suspense, useRef } from 'react';
import { Canvas } from 'react-three-fiber';
import { OrbitControls } from '@react-three/drei';
import PerspectiveCamera from './cameras/PerspectiveCamera';
import OrthographicCamera from './cameras/OrthographicCamera';
import Viewport from './cameras/Viewport';
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

      {/* <PerspectiveCamera /> */}
      {/* <OrthographicCamera /> */}
      <Viewport></Viewport>

      <DirectionalLight />

      <OrbitControls target={[0, 5, 0]} />
    </Canvas>
  );
}
