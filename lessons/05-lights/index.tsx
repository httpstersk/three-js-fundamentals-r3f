import { OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';
import { Canvas } from 'react-three-fiber';
import Cube from './components/Cube';
import Plane from './components/Plane';
import Sphere from './components/Sphere';
import AmbientLight from './lights/AmbientLight';
import DirectionalLight from './lights/DirectionalLight';
import HemisphereLight from './lights/HemisphereLight';
import PointLight from './lights/PointLight';
import RectAreaLight from './lights/RectAreaLight';
import SpotLight from './lights/SpotLight';

export default function Scene(controlsProps) {
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
      <PointLight />
      <RectAreaLight />
      <SpotLight />

      <OrbitControls target={[0, 5, 0]} {...controlsProps} />
    </Canvas>
  );
}
