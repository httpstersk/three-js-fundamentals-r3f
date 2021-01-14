import { useRef } from 'react';
import { useFrame } from 'react-three-fiber';
import { Ring } from '@react-three/drei';
import { DoubleSide, Mesh } from 'three';
import { CONSTANTS } from '../../constants';
import { getRandomColor, rotateMesh } from '../../utils';

export default function RingGeometry({ ...props }) {
  const mesh = useRef<Mesh>();
  const innerRadius = 2;
  const outerRadius = CONSTANTS.EXAMPLES_RADIUS;
  const thetaSegments = 18;

  // Defaults ↓
  const phiSegments = 8;
  const thetaStart = 0;
  const thetaLength = 2 * Math.PI;

  useFrame(() => rotateMesh(mesh));

  return (
    <mesh {...props} ref={mesh}>
      <Ring
        args={[
          innerRadius,
          outerRadius,
          thetaSegments,
          phiSegments,
          thetaStart,
          thetaLength,
        ]}
      >
        <meshPhongMaterial side={DoubleSide} color={getRandomColor()} />
      </Ring>
    </mesh>
  );
}