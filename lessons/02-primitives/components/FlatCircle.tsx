import { Circle } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from 'react-three-fiber';
import { DoubleSide, Mesh } from 'three';
import CONSTANTS from '@/constants/.';
import { getRandomColor, rotateMesh } from '@/utils/.';

export default function CircleGeometry(props) {
  const mesh = useRef<Mesh>();
  const radius = CONSTANTS.EXAMPLES_RADIUS;
  const segments = 24;

  // Defaults ↓
  const thetaStart = 0;
  const thetaLength = 2 * Math.PI;

  useFrame(() => rotateMesh(mesh));

  return (
    <Circle
      args={[radius, segments, thetaStart, thetaLength]}
      ref={mesh}
      {...props}
    >
      <meshPhongMaterial
        attach="material"
        color={getRandomColor()}
        side={DoubleSide}
      />
    </Circle>
  );
}
