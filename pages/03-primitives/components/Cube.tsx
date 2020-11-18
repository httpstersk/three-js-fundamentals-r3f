import { useRef } from 'react';
import { useFrame } from 'react-three-fiber';
import { Box } from '@react-three/drei';
import { Mesh } from 'three';
import { rotateMesh } from '../utils';

export default function BoxGeometry({ ...props }) {
  const mesh = useRef<Mesh>();
  const width = 0.85;
  const height = 0.85;
  const depth = 0.85;

  useFrame(() => rotateMesh(mesh));

  return (
    <mesh {...props} ref={mesh}>
      <Box args={[width, height, depth]}>
        <meshPhongMaterial attach="material" color="hotpink" />
      </Box>
    </mesh>
  );
}
