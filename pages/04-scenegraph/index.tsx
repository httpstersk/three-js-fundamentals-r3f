import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';
import { OrbitControls } from '@react-three/drei';
import { Object3D } from 'three';
import Earth from './components/Earth';
import Sun from './components/Sun';
import { rotateMeshY } from '../utils';

export default function Scene() {
  const obj = useRef<Object3D>();
  useFrame(() => rotateMeshY(obj));

  return (
    <Canvas
      camera={{
        aspect: 2,
        far: 1000,
        fov: 40,
        near: 0.1,
        position: [0, 150, 0],
        up: [0, 0, 1],
      }}
    >
      <pointLight color={0xffffff} intensity={3} />

      <group ref={obj}>
        <Sun emissive={0xffff00} scale={[5, 5, 5]}>
          <Earth
            emissive={0x112244}
            color={0x2233ff}
            position={[10, 0, 0]}
            scale={[0.5, 0.5, 0.5]}
          />
        </Sun>
      </group>
      <OrbitControls />
    </Canvas>
  );
}
