import { useRef } from 'react';
import { useFrame } from 'react-three-fiber';
import { Circle } from '@react-three/drei';
import { DoubleSide, Mesh } from 'three';
import { CONSTANTS } from '../../constants';
import { getRandomColor, rotateMesh } from '../../utils';

export default function CircleGeometry({ ...props }) {
  const mesh = useRef<Mesh>();
  const radius = CONSTANTS.EXAMPLES_RADIUS;
  const segments = 24;

  // Defaults ↓
  const thetaStart = 0;
  const thetaLength = 2 * Math.PI;

  useFrame(() => rotateMesh(mesh));

  return (
    <mesh {...props} ref={mesh}>
      <Circle args={[radius, segments, thetaStart, thetaLength]}>
        <meshPhongMaterial side={DoubleSide} color={getRandomColor()} />
      </Circle>
    </mesh>
  );
}
