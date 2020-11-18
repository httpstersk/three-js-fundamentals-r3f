import { useRef } from 'react';
import { useFrame } from 'react-three-fiber';
import { Cone } from '@react-three/drei';
import { Mesh } from 'three';
import { rotateMesh } from '../utils';

export default function ConeGeometry({ ...props }) {
  const mesh = useRef<Mesh>();
  const radius = 0.5;
  const height = 1;
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
        <meshPhongMaterial attach="material" color="hotpink" />
      </Cone>
    </mesh>
  );
}
