import { Suspense, useRef } from 'react';
import { Canvas } from 'react-three-fiber';
import { OrbitControls } from '@react-three/drei';
import PerspectiveCamera from './cameras/PerspectiveCamera';
import OrthographicCamera from './cameras/OrthographicCamera';
import Cube from './components/Cube';
import Plane from './components/Plane';
import Sphere from './components/Sphere';
import DirectionalLight from './lights/DirectionalLight';

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
