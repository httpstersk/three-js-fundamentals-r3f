import { useRef } from 'react';
import { useFrame } from 'react-three-fiber';
import { Icosahedron } from '@react-three/drei';
import { DoubleSide, Mesh } from 'three';
import { CONSTANTS } from '../../constants';
import { getRandomColor, rotateMesh } from '../../utils';

export default function IcosahedronGeometry({ ...props }) {
  const mesh = useRef<Mesh>();
  const radius = CONSTANTS.EXAMPLES_RADIUS;

  // Defaults ↓
  const detail = 0;

  useFrame(() => rotateMesh(mesh));

  return (
    <mesh {...props} ref={mesh}>
      <Icosahedron args={[radius, detail]}>
        <meshPhongMaterial side={DoubleSide} color={getRandomColor()} />
      </Icosahedron>
    </mesh>
  );
}
