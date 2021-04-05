import { OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';
import { Canvas } from 'react-three-fiber';
import PerspectiveCamera from '../cameras/PerspectiveCamera';
import { Cube, Plane, Room, Sphere } from '../components';
import { PointLightWithHelper } from '../lights';

export default function Example4(controlsProps) {
  return (
    <Canvas camera={{ position: [0, 10, 20] }} shadowMap>
      <Suspense fallback={null}>
        <Cube />
        <Sphere />
        <Plane />
        <Room />
      </Suspense>

      <PerspectiveCamera />

      <PointLightWithHelper />

      <OrbitControls target={[0, 5, 0]} {...controlsProps} />
    </Canvas>
  );
}
