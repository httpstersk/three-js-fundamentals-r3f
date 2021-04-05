import { Dodecahedron } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from 'react-three-fiber';
import { DoubleSide, Mesh } from 'three';
import CONSTANTS from '@/constants/.';
import { getRandomColor, rotateMesh } from '@/utils/.';

export default function DodecahedronGeometry(props) {
  const mesh = useRef<Mesh>();
  const radius = CONSTANTS.EXAMPLES_RADIUS;

  // Defaults ↓
  const detail = 0;

  useFrame(() => rotateMesh(mesh));

  return (
    <Dodecahedron args={[radius, detail]} ref={mesh} {...props}>
      <meshPhongMaterial
        attach="material"
        color={getRandomColor()}
        side={DoubleSide}
      />
    </Dodecahedron>
  );
}
