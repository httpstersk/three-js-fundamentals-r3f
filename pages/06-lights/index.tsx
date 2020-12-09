import { Suspense } from 'react';
import { Canvas } from 'react-three-fiber';
import { OrbitControls } from '@react-three/drei';
import { useTweaks } from 'use-tweaks';
import { Color } from 'three';
import { Cube, Plane, Sphere } from './components';

export default function Scene() {
  // const { color, intensity } = useTweaks('Light', {
  //   intensity: { value: 1, min: 0, max: 2 },
  //   color: '#fff',
  // });

  const { groundColor, skyColor, intensity } = useTweaks('Light', {
    intensity: { value: 1, min: 0, max: 2 },
    groundColor: '#b97a20',
    skyColor: '#b1e1ff',
  });

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

      {/* <ambientLight color={color} intensity={intensity} /> */}

      <hemisphereLight
        skyColor={skyColor}
        groundColor={new Color(groundColor)}
        intensity={intensity}
      />

      <OrbitControls target={[0, 5, 0]} />
    </Canvas>
  );
}
