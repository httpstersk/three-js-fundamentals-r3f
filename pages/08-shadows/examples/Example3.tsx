import { Suspense } from 'react';
import { Canvas } from 'react-three-fiber';
import { OrbitControls } from '@react-three/drei';
import PerspectiveCamera from '../cameras/PerspectiveCamera';
import { Cube, Plane, Sphere } from '../components';
import { SpotLightWithHelper } from '../lights';

export default function Example3() {
  return (
    <Canvas camera={{ position: [0, 10, 20] }} shadowMap>
      <Suspense fallback={null}>
        <Cube />
        <Sphere />
        <Plane />
      </Suspense>

      <PerspectiveCamera />

      <SpotLightWithHelper />

      <OrbitControls target={[0, 5, 0]} />
    </Canvas>
  );
}
