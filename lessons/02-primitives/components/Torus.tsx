import { Torus } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from 'react-three-fiber';
import { DoubleSide, Mesh } from 'three';
import { getRandomColor, rotateMesh } from '@/utils/.';

export default function TorusGeometry(props) {
  const mesh = useRef<Mesh>();
  const radius = 5;
  const tubeRadius = 2;
  const radialSegments = 8;
  const tubularSegments = 24;

  // Defaults ↓

  useFrame(() => rotateMesh(mesh));

  return (
    <Torus
      args={[radius, tubeRadius, radialSegments, tubularSegments]}
      ref={mesh}
      {...props}
    >
      <meshPhongMaterial
        attach="material"
        color={getRandomColor()}
        side={DoubleSide}
      />
    </Torus>
  );
}
