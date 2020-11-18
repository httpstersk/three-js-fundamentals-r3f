import { useRef } from 'react';
import { useFrame } from 'react-three-fiber';
import { Circle } from '@react-three/drei';
import { Mesh } from 'three';
import { EXAMPLES_RADIUS } from '../constants';
import { rotateMesh } from '../utils';

export default function CircleGeometry({ ...props }) {
  const mesh = useRef<Mesh>();
  const radius = EXAMPLES_RADIUS;
  const segments = 24;

  // Defaults ↓
  const thetaStart = 0;
  const thetaLength = 2 * Math.PI;

  useFrame(() => rotateMesh(mesh));

  return (
    <mesh {...props} ref={mesh}>
      <Circle args={[radius, segments, thetaStart, thetaLength]}>
        <meshPhongMaterial attach="material" color="gold" />
      </Circle>
    </mesh>
  );
}
