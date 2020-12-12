import { Suspense } from 'react';
import { Canvas } from 'react-three-fiber';
import { OrbitControls } from '@react-three/drei';
import { Cube, Plane, Sphere } from './components';
import { AmbientLight, DirectionalLight, HemisphereLight } from './lights';

export default function Scene() {
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

      <AmbientLight />
      <DirectionalLight />
      <HemisphereLight />

      <OrbitControls target={[0, 5, 0]} />
    </Canvas>
  );
}
