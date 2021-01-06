import { Canvas } from 'react-three-fiber';
import { OrbitControls } from '@react-three/drei';
import { Cube, RenderTargetCube } from './components/';
import PerspectiveCamera from './cameras/PerspectiveCamera';

const CUBES = [
  {
    _id: 1,
    color: 0x8844aa,
    x: -2,
  },
  {
    _id: 2,
    color: 0x44aa88,
    x: 0,
  },
  {
    _id: 3,
    color: 0xaa8844,
    x: 2,
  },
];

export default function Scene() {
  return (
    <Canvas>
      <RenderTargetCube />

      <directionalLight
        color={0xffffff}
        intensity={1.0}
        position={[-1, 2, 4]}
      />

      <PerspectiveCamera />

      <OrbitControls />
    </Canvas>
  );
}
