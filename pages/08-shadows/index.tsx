import { Suspense } from 'react';
import { Canvas } from 'react-three-fiber';
import { OrbitControls } from '@react-three/drei';
import PerspectiveCamera from './cameras/PerspectiveCamera';
import { BouncingSpheres, Cube, Plane, Sphere } from './components';
import {
  DirectionalLight,
  DirectionalLightWithHelper,
  HemisphereLight,
} from './lights';

export const NUM_SPHERES = 15;

export default function Scene() {
  return (
    <Canvas camera={{ position: [0, 10, 20] }} shadowMap>
      {/* <color args={[0xffffff]} attach="background" /> */}

      <Suspense fallback={null}>
        {/* <BouncingSpheres num={NUM_SPHERES} /> */}
        <Cube />
        <Sphere />
        <Plane />
      </Suspense>

      <PerspectiveCamera />

      <DirectionalLightWithHelper />
      {/* <DirectionalLight /> */}
      {/* <HemisphereLight /> */}

      <OrbitControls target={[0, 5, 0]} />
    </Canvas>
  );
}
