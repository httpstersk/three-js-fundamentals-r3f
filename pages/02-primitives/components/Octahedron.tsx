import { Octahedron } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from 'react-three-fiber';
import { DoubleSide, Mesh } from 'three';
import CONSTANTS from '@/constants/.';
import { getRandomColor, rotateMesh } from '@/utils/.';

export default function OctahedronGeometry(props) {
  const mesh = useRef<Mesh>();
  const radius = CONSTANTS.EXAMPLES_RADIUS;

  // Defaults ↓
  const detail = 0;

  useFrame(() => rotateMesh(mesh));

  return (
    <Octahedron args={[radius, detail]} ref={mesh} {...props}>
      <meshPhongMaterial
        attach="material"
        color={getRandomColor()}
        side={DoubleSide}
      />
    </Octahedron>
  );
}
