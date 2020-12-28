import { Suspense, useRef } from 'react';
import { Canvas } from 'react-three-fiber';
import { OrbitControls } from '@react-three/drei';
import PerspectiveCamera from './cameras/PerspectiveCamera';
import { Plane, SphereWithShadow } from './components';
import { DirectionalLight, HemisphereLight } from './lights';
import { getRandomColor } from '../utils';

export default function Scene() {
  return (
    <Canvas>
      <color args={[0xffffff]} attach="background" />

      <Suspense fallback={null}>
        <Plane />
        {Array(15)
          .fill(0)
          .map((_, index) => {
            return (
              <SphereWithShadow
                color={getRandomColor()}
                index={index}
                key={index}
              />
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
