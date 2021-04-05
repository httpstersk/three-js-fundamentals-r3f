import { TorusKnot } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from 'react-three-fiber';
import { DoubleSide, Mesh } from 'three';
import { getRandomColor, rotateMesh } from '@/utils/.';

export default function TorusKnotGeometry(props) {
  const mesh = useRef<Mesh>();
  const radius = 3.5;
  const tubeRadius = 1.5;
  const radialSegments = 24;
  const tubularSegments = 64;

  // Defaults ↓
  const p = 2;
  const q = 3;

  useFrame(() => rotateMesh(mesh));

  return (
    <TorusKnot
      args={[radius, tubeRadius, radialSegments, tubularSegments, p, q]}
      ref={mesh}
      {...props}
    >
      <meshPhongMaterial
        attach="material"
        color={getRandomColor()}
        side={DoubleSide}
      />
    </TorusKnot>
  );
}
