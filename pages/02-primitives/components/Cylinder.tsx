import { Cylinder } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from 'react-three-fiber';
import { DoubleSide, Mesh } from 'three';
import CONSTANTS from '@/constants/.';
import { getRandomColor, rotateMesh } from '@/utils/.';

export default function CylinderGeometry(props) {
  const mesh = useRef<Mesh>();
  const radiusTop = CONSTANTS.EXAMPLES_HEIGHT / 2;
  const radiusBottom = CONSTANTS.EXAMPLES_HEIGHT / 2;
  const height = CONSTANTS.EXAMPLES_HEIGHT;
  const radialSegments = 12;

  // Defaults ↓
  const heightSegments = 1;
  const openEnded = false;
  const thetaStart = 0;
  const thetaLength = 2 * Math.PI;

  useFrame(() => rotateMesh(mesh));

  return (
    <Cylinder
      args={[
        radiusTop,
        radiusBottom,
        height,
        radialSegments,
        heightSegments,
        openEnded,
        thetaStart,
        thetaLength,
      ]}
      ref={mesh}
      {...props}
    >
      <meshPhongMaterial
        attach="material"
        color={getRandomColor()}
        side={DoubleSide}
      />
    </Cylinder>
  );
}
