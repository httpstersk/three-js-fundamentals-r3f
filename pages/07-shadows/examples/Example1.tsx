import { OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';
import { Canvas } from 'react-three-fiber';
import { NUM_SPHERES } from '..';
import PerspectiveCamera from '../cameras/PerspectiveCamera';
import { BouncingSpheres, Plane } from '../components';
import { DirectionalLight, HemisphereLight } from '../lights';

export default function Example1() {
  return (
    <Canvas camera={{ position: [0, 10, 20] }}>
      <color args={[255, 255, 255]} attach="background" />

      <Suspense fallback={null}>
        <BouncingSpheres num={NUM_SPHERES} />
        <Plane />
      </Suspense>

      <PerspectiveCamera />

      <DirectionalLight />
      <HemisphereLight />

      <OrbitControls target={[0, 5, 0]} />
    </Canvas>
  );
}
