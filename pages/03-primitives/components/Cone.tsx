import { useRef } from 'react';
import { useFrame } from 'react-three-fiber';
import { Cone } from '@react-three/drei';
import { DoubleSide, Mesh } from 'three';
import { CONSTANTS } from '../../constants';
import { getRandomColor, rotateMesh } from '../../utils';

export default function ConeGeometry({ ...props }) {
  const mesh = useRef<Mesh>();
  const radius = 6;
  const height = CONSTANTS.EXAMPLES_HEIGHT;
  const radialSegments = 16;

  // Defaults ↓
  const heightSegments = 1;
  const openEnded = false;
  const thetaStart = 0;
  const thetaLength = 2 * Math.PI;

  useFrame(() => rotateMesh(mesh));

  return (
    <mesh {...props} ref={mesh}>
      <Cone
        args={[
          radius,
          height,
          radialSegments,
          heightSegments,
          openEnded,
          thetaStart,
          thetaLength,
        ]}
      >
        <meshPhongMaterial side={DoubleSide} color={getRandomColor()} />
      </Cone>
    </mesh>
  );
}
