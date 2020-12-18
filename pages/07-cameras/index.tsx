import { Suspense, useRef } from 'react';
import { Canvas } from 'react-three-fiber';
import { useTweaks } from 'use-tweaks';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { PerspectiveCamera as PerspectiveCameraType } from 'three';
import { Cube, Plane, Sphere } from './components';
import { DirectionalLight } from './lights';

export default function Scene() {
  const camera = useRef<PerspectiveCameraType>();
  const { far, fov, near } = useTweaks('Camera', {
    fov: { value: 45, min: 1, max: 180 },
    near: { value: 0.1, min: 0.1, max: 50 },
    far: { value: 100, min: 0.1, max: 100 },
  });

  return (
    <Canvas>
      <Suspense fallback={null}>
        <Plane />
        <Cube />
        <Sphere />
      </Suspense>

      <PerspectiveCamera
        aspect={2}
        fov={fov}
        makeDefault
        near={near}
        far={far}
        position={[0, 10, 20]}
        ref={camera}
      />

      <DirectionalLight />

      <OrbitControls target={[0, 5, 0]} />
    </Canvas>
  );
}
