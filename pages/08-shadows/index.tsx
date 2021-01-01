import { Suspense } from 'react';
import { Canvas } from 'react-three-fiber';
import { OrbitControls } from '@react-three/drei';
import PerspectiveCamera from './cameras/PerspectiveCamera';
import { Plane, SphereWithShadow } from './components';
import { DirectionalLight, HemisphereLight } from './lights';
import { getRandomColor } from '../utils';

export const NUM_SPHERES = 15;

export default function Scene() {
  return (
    <Canvas>
      <color args={[0xffffff]} attach="background" />

      <Suspense fallback={null}>
        <Plane />
        {Array(NUM_SPHERES)
          .fill(0)
          .map((_, ndx) => {
            return (
              <SphereWithShadow color={getRandomColor()} ndx={ndx} key={ndx} />
            );
          })}
      </Suspense>

      <PerspectiveCamera />

      <DirectionalLight />
      <HemisphereLight />

      <OrbitControls target={[0, 5, 0]} />
    </Canvas>
  );
}
