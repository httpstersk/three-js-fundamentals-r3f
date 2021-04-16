import { OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';
import { Canvas } from 'react-three-fiber';
import PerspectiveCamera from '../cameras/PerspectiveCamera';
import Cube from '../components/Cube';
import Plane from '../components/Plane';
import Room from '../components/Room';
import Sphere from '../components/Sphere';
import PointLightWithHelper from '../lights/PointLightWithHelper';

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
