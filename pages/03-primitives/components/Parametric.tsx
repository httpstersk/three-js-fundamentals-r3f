import { useRef } from 'react';
import { useFrame } from 'react-three-fiber';
import { Parametric } from '@react-three/drei';
import { ParametricGeometries } from 'three-full';
import { DoubleSide, Mesh } from 'three';
import { rotateMesh } from '../utils';

export default function ParametricGeometry({ ...props }) {
  const mesh = useRef<Mesh>();
  const slices = 25;
  const stacks = 25;

  useFrame(() => rotateMesh(mesh));

  return (
    <mesh {...props} ref={mesh}>
      <Parametric args={[ParametricGeometries.klein, slices, stacks]}>
        <meshPhongMaterial
          side={DoubleSide}
          color="hotpink"
          side={DoubleSide}
        />
      </Parametric>
    </mesh>
  );
}
