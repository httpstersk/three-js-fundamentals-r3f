import { useRef } from 'react';
import { Sphere } from '@react-three/drei';
import { Mesh } from 'three';

export default function SphereGeometry({ ...props }) {
  const mesh = useRef<Mesh>();
  const SPHERE_RADIUS = 3;
  const SPHERE_WIDTH_DIVISIONS = 32;
  const SPHERE_HEIGHT_DIVISIONS = 16;

  return (
    <mesh
      ref={mesh}
      position={[-SPHERE_RADIUS - 1, SPHERE_RADIUS + 2, 0]}
      {...props}
    >
      <Sphere
        args={[SPHERE_RADIUS, SPHERE_WIDTH_DIVISIONS, SPHERE_HEIGHT_DIVISIONS]}
        castShadow
        receiveShadow
      >
        <meshPhongMaterial color="#CA8" />
      </Sphere>
    </mesh>
  );
}
