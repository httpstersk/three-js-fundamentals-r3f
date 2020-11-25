import { useRef } from 'react';
import { useFrame } from 'react-three-fiber';
import { Tetrahedron } from '@react-three/drei';
import { DoubleSide, Mesh } from 'three';
import { EXAMPLES_RADIUS } from '../constants';
import { getRandomColor, rotateMesh } from '../utils';

export default function TetrahedronGeometry({ ...props }) {
  const mesh = useRef<Mesh>();
  const radius = EXAMPLES_RADIUS;

  // Defaults ↓
  const detail = 0;

  useFrame(() => rotateMesh(mesh));

  return (
    <mesh {...props} ref={mesh}>
      <Tetrahedron args={[radius, detail]}>
        <meshPhongMaterial side={DoubleSide} color={getRandomColor()} />
      </Tetrahedron>
    </mesh>
  );
}
