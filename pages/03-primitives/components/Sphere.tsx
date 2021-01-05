import { useRef } from 'react';
import { useFrame } from 'react-three-fiber';
import { Sphere } from '@react-three/drei';
import { DoubleSide, Mesh } from 'three';
import { CONSTANTS } from '../../constants';
import { getRandomColor, rotateMesh } from '../../utils';

export default function SphereGeometry({ ...props }) {
  const mesh = useRef<Mesh>();
  const radius = CONSTANTS.EXAMPLES_RADIUS;
  const widthSegments = 12;
  const heightSegments = 8;

  // Defaults ↓
  const phiStart = 0;
  const phiLength = 2 * Math.PI;
  const thetaStart = 0;
  const thetaLength = Math.PI;

  useFrame(() => rotateMesh(mesh));

  return (
    <mesh {...props} ref={mesh}>
      <Sphere
        args={[
          radius,
          widthSegments,
          heightSegments,
          phiStart,
          phiLength,
          thetaStart,
          thetaLength,
        ]}
      >
        <meshPhongMaterial side={DoubleSide} color={getRandomColor()} />
      </Sphere>
    </mesh>
  );
}
