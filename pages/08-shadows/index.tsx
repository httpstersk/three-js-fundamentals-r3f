import { Suspense } from 'react';
import { Canvas } from 'react-three-fiber';
import { OrbitControls } from '@react-three/drei';
import PerspectiveCamera from './cameras/PerspectiveCamera';
import { BouncingSpheres, Plane } from './components';
import { DirectionalLight, HemisphereLight } from './lights';

export const NUM_SPHERES = 15;

export default function Scene() {
  return (
    <Canvas>
      <color args={[0xffffff]} attach="background" />

      <Suspense fallback={null}>
        <Plane />
        <BouncingSpheres num={15} />
      </Suspense>

      <PerspectiveCamera />

      <DirectionalLight />
      <HemisphereLight />

      <OrbitControls target={[0, 5, 0]} />
    </Canvas>
  );
}
