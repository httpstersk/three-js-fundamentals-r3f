import { useRef } from 'react';
import { useFrame } from 'react-three-fiber';
import { Plane } from '@react-three/drei';
import { Mesh } from 'three';
import { rotateMesh } from '../utils';

export default function PlaneGeometry({ ...props }) {
  const mesh = useRef<Mesh>();
  const width = 9;
  const height = 9;

  // Defaults ↓
  const widthSegments = 1;
  const heightSegments = 1;

  useFrame(() => rotateMesh(mesh));

  return (
    <mesh {...props} ref={mesh}>
      <Plane args={[width, height, widthSegments, heightSegments]}>
        <meshPhongMaterial attach="material" color="hotpink" />
      </Plane>
    </mesh>
  );
}
