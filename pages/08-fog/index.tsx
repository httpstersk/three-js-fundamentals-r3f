import { OrbitControls } from '@react-three/drei';
import { Canvas } from 'react-three-fiber';
import PerspectiveCamera from './cameras/PerspectiveCamera';
import Cube from './components/Cube';
import Fog from './components/Fog';

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

export default function Scene(controlsProps) {
  return (
    <Canvas>
      {CUBES.map(({ _id, color, x }) => {
        return <Cube color={color} ndx={_id} key={_id} position-x={x} />;
      })}

      <directionalLight
        color={0xffffff}
        intensity={1.0}
        position={[-1, 2, 4]}
      />

      <PerspectiveCamera />

      <Fog />

      <OrbitControls {...controlsProps} />
    </Canvas>
  );
}
