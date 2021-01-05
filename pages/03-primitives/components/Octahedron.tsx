import { useRef } from 'react';
import { useFrame } from 'react-three-fiber';
import { Octahedron } from '@react-three/drei';
import { DoubleSide, Mesh } from 'three';
import { CONSTANTS } from '../../constants';
import { getRandomColor, rotateMesh } from '../../utils';

export default function OctahedronGeometry({ ...props }) {
  const mesh = useRef<Mesh>();
  const radius = CONSTANTS.EXAMPLES_RADIUS;

  // Defaults ↓
  const detail = 0;

  useFrame(() => rotateMesh(mesh));

  return (
    <mesh {...props} ref={mesh}>
      <Octahedron args={[radius, detail]}>
        <meshPhongMaterial side={DoubleSide} color={getRandomColor()} />
      </Octahedron>
    </mesh>
  );
}
