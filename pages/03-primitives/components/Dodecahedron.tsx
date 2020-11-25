import { useRef } from 'react';
import { useFrame } from 'react-three-fiber';
import { Dodecahedron } from '@react-three/drei';
import { DoubleSide, Mesh } from 'three';
import { EXAMPLES_RADIUS } from '../constants';
import { rotateMesh } from '../utils';

export default function DodecahedronGeometry({ ...props }) {
  const mesh = useRef<Mesh>();
  const radius = EXAMPLES_RADIUS;

  // Defaults ↓
  const detail = 0;

  useFrame(() => rotateMesh(mesh));

  return (
    <mesh {...props} ref={mesh}>
      <Dodecahedron args={[radius, detail]}>
        <meshPhongMaterial side={DoubleSide} color="hotpink" />
      </Dodecahedron>
    </mesh>
  );
}
