import { useRef } from 'react';
import { useFrame } from 'react-three-fiber';
import { Torus } from '@react-three/drei';
import { Mesh } from 'three';
import { rotateMesh } from '../utils';

export default function TorusGeometry({ ...props }) {
  const mesh = useRef<Mesh>();
  const radius = 5;
  const tubeRadius = 2;
  const radialSegments = 8;
  const tubularSegments = 24;

  // Defaults ↓

  useFrame(() => rotateMesh(mesh));

  return (
    <mesh {...props} ref={mesh}>
      <Torus args={[radius, tubeRadius, radialSegments, tubularSegments]}>
        <meshPhongMaterial attach="material" color="hotpink" />
      </Torus>
    </mesh>
  );
}
