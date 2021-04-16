import { OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';
import { Canvas } from 'react-three-fiber';
import { NUM_SPHERES } from '..';
import PerspectiveCamera from '../cameras/PerspectiveCamera';
import BouncingSpheres from '../components/BouncingSpheres';
import Plane from '../components/Plane';
import DirectionalLight from '../lights/DirectionalLight';
import HemisphereLight from '../lights/HemisphereLight';

export default function Example1(controlsProps) {
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

      <OrbitControls target={[0, 5, 0]} {...controlsProps} />
    </Canvas>
  );
}
