import { Suspense } from 'react';
import { Canvas } from 'react-three-fiber';
import { OrbitControls } from '@react-three/drei';
import { useTweaks } from 'use-tweaks';
import { Cube, Plane, Sphere } from './components';

export default function Scene() {
  const { intensity } = useTweaks(
    'Light',
    {
      intensity: { value: 1, min: 0, max: 2 },
    },
    { expanded: false }
  );

  return (
    <Canvas
      camera={{
        position: [0, 10, 20],
        fov: 45,
        aspect: 2,
        near: 0.1,
        far: 100,
      }}
    >
      <Suspense fallback={null}>
        <Plane />
        <Cube />
        <Sphere />
      </Suspense>

      <ambientLight color={0xffffff} intensity={intensity} />

      <OrbitControls target={[0, 5, 0]} />
    </Canvas>
  );
}
