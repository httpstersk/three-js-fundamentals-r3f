import { OrbitControls } from '@react-three/drei';
import React, { Fragment } from 'react';
import { Canvas } from 'react-three-fiber';
import { Color } from 'three';
import PerspectiveCamera from './cameras/PerspectiveCamera';
import Cube from './components/Cube';
import RenderTargetCube from './components/RenderTargetCube';

const CUBES = [
  {
    _id: 1,
    color: new Color(0x8844aa),
    x: -2,
  },
  {
    _id: 2,
    color: new Color(0x44aa88),
    x: 0,
  },
  {
    _id: 3,
    color: new Color(0xaa8844),
    x: 2,
  },
];

type Cube = {
  _id: number;
  color: Color;
  x: number;
};

type Props = {
  cubes: Cube[];
};

const InnerScene = ({ cubes }: Props) => (
  <Fragment>
    {cubes.map(({ _id, color, x }) => {
      return <Cube color={color} ndx={_id} key={_id} position-x={x} />;
    })}

    <directionalLight color={0xffffff} intensity={1.0} position={[-1, 2, 4]} />
  </Fragment>
);

export default function Scene(controlsProps) {
  return (
    <Canvas>
      <PerspectiveCamera />

      <RenderTargetCube>
        <InnerScene cubes={CUBES} />
      </RenderTargetCube>

      <OrbitControls {...controlsProps} />
    </Canvas>
  );
}
