import { useRef } from 'react';
import { useFrame } from 'react-three-fiber';
import { Cone } from '@react-three/drei';
import { Mesh } from 'three';
import { SPEED_ROTATION } from '../constants';

export default function ConeGeometry({ ...props }) {
  const mesh = useRef<Mesh>();
  const radius = 0.75;
  const height = 1.5;
  const radialSegments = 16;

  // Defaults ↓
  const heightSegments = 1;
  const openEnded = false;
  const thetaStart = 0;
  const thetaLength = 2 * Math.PI;

  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.x += SPEED_ROTATION;
      mesh.current.rotation.y += SPEED_ROTATION;
    }
  });

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
