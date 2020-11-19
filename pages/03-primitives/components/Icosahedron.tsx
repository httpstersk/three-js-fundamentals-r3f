import { useRef } from 'react';
import { useFrame } from 'react-three-fiber';
import { Icosahedron } from '@react-three/drei';
import { Mesh } from 'three';
import { EXAMPLES_RADIUS } from '../constants';
import { rotateMesh } from '../utils';

export default function IcosahedronGeometry({ ...props }) {
  const mesh = useRef<Mesh>();
  const radius = EXAMPLES_RADIUS;

  // Defaults ↓
  const detail = 0;

  useFrame(() => rotateMesh(mesh));

  return (
    <mesh {...props} ref={mesh}>
      <Icosahedron args={[radius, detail]}>
        <meshPhongMaterial attach="material" color="hotpink" />
      </Icosahedron>
    </mesh>
  );
}
