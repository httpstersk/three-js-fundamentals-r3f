import { OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';
import { Canvas } from 'react-three-fiber';
import CubesTypedArrays from './components/CubesTypedArrays';

const CUBES = [
  {
    _id: 1,
    color: 0x44ff44,
    x: 0,
  },
  {
    _id: 2,
    color: 0x4444ff,
    x: -4,
  },
  {
    _id: 3,
    color: 0xff4444,
    x: 4,
  },
];

export default function Scene(controlsProps) {
  return (
    <Canvas
      camera={{ aspect: 2, far: 100, fov: 75, near: 0.1, position: [0, 0, 5] }}
    >
      <Suspense fallback={null}>
        <CubesTypedArrays cubes={CUBES} />
      </Suspense>

      <directionalLight
        color={0xffffff}
        intensity={1.0}
        position={[-1, 2, 4]}
      />

      <OrbitControls {...controlsProps} />
    </Canvas>
  );
}
