import { useRef } from 'react';
import { useFrame } from 'react-three-fiber';
import { Polyhedron } from '@react-three/drei';
import { DoubleSide, Mesh } from 'three';
import { CONSTANTS } from '../../constants';
import { getRandomColor, rotateMesh } from '../../utils';

export default function PolyhedronGeometry({ ...props }) {
  const mesh = useRef<Mesh>();

  const verticesOfCube = [
    -1, -1, -1,    1, -1, -1,    1,  1, -1,    -1,  1, -1,
    -1, -1,  1,    1, -1,  1,    1,  1,  1,    -1,  1,  1,
  ];

  const indicesOfFaces = [
    2, 1, 0,    0, 3, 2,
    0, 4, 7,    7, 3, 0,
    0, 1, 5,    5, 4, 0,
    1, 2, 6,    6, 5, 1,
    2, 3, 7,    7, 6, 2,
    4, 5, 6,    6, 7, 4,
  ];

  const radius = CONSTANTS.EXAMPLES_RADIUS;

  // Defaults ↓
  const detail = 2;

  useFrame(() => rotateMesh(mesh));

  return (
    <mesh {...props} ref={mesh}>
      <Polyhedron args={[verticesOfCube, indicesOfFaces, radius, detail]}>
        <meshPhongMaterial side={DoubleSide} color={getRandomColor()} />
      </Polyhedron>
    </mesh>
  );
}
