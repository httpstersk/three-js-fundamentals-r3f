import { Suspense, useRef } from 'react';
import { Canvas } from 'react-three-fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { PerspectiveCamera as PerspectiveCameraType } from 'three';
import { Cube, Plane, Sphere } from './components';
import { DirectionalLight } from './lights';

export default function Scene() {
  const camera = useRef<PerspectiveCameraType>();

  return (
    <Canvas>
      <Suspense fallback={null}>
        <Plane />
        <Cube />
        <Sphere />
      </Suspense>

      <PerspectiveCamera
        aspect={2}
        fov={45}
        makeDefault
        near={0.1}
        far={100}
        position={[0, 10, 20]}
        ref={camera}
      />

      <DirectionalLight />

      <OrbitControls target={[0, 5, 0]} />
    </Canvas>
  );
}
