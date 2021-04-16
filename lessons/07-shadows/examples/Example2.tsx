import { OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';
import { Canvas } from 'react-three-fiber';
import PerspectiveCamera from '../cameras/PerspectiveCamera';
import Cube from '../components/Cube';
import Plane from '../components/Plane';
import Sphere from '../components/Sphere';
import DirectionalLightWithHelper from '../lights/DirectionalLightWithHelper';

export default function Example2(controlsProps) {
  return (
    <Canvas camera={{ position: [0, 10, 20] }} shadowMap>
      <Suspense fallback={null}>
        <Cube />
        <Sphere />
        <Plane />
      </Suspense>

      <PerspectiveCamera />

      <DirectionalLightWithHelper />

      <OrbitControls target={[0, 5, 0]} {...controlsProps} />
    </Canvas>
  );
}
