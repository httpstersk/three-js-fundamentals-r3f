import { Parametric } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from 'react-three-fiber';
import { DoubleSide, Mesh } from 'three';
import { ParametricGeometries } from 'three-full';
import { getRandomColor, rotateMesh } from '@/utils/.';

export default function ParametricGeometry(props) {
  const mesh = useRef<Mesh>();
  const slices = 25;
  const stacks = 25;

  useFrame(() => rotateMesh(mesh));

  return (
    <Parametric
      args={[ParametricGeometries.klein, slices, stacks]}
      ref={mesh}
      {...props}
    >
      <meshPhongMaterial
        attach="material"
        color={getRandomColor()}
        side={DoubleSide}
      />
    </Parametric>
  );
}
