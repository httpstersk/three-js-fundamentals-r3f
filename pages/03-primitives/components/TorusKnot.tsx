import { useRef } from 'react';
import { useFrame } from 'react-three-fiber';
import { TorusKnot } from '@react-three/drei';
import { Mesh } from 'three';
import { rotateMesh } from '../utils';

export default function TorusKnotGeometry({ ...props }) {
  const mesh = useRef<Mesh>();
  const radius = 5;
  const tubeRadius = 2;
  const radialSegments = 8;
  const tubularSegments = 24;

  // Defaults ↓
  const p = 2;
  const q = 3;

  useFrame(() => rotateMesh(mesh));

  return (
    <mesh {...props} ref={mesh}>
      <TorusKnot
        args={[radius, tubeRadius, radialSegments, tubularSegments, p, q]}
      >
        <meshPhongMaterial attach="material" color="hotpink" />
      </TorusKnot>
    </mesh>
  );
}
