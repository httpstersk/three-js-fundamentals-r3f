import { Box } from '@react-three/drei';
import { useRef } from 'react';
import { Mesh } from 'three';

export default function Cube(props) {
  const mesh = useRef<Mesh>();
  const CUBE_SIZE = 6;
  const width = CUBE_SIZE;
  const height = CUBE_SIZE;
  const depth = CUBE_SIZE;

  return (
    <Box
      args={[width, height, depth]}
      castShadow
      position={[CUBE_SIZE + 1, CUBE_SIZE / 2, 0]}
      receiveShadow
      ref={mesh}
      {...props}
    >
      <meshPhongMaterial attach="material" color="#8AC" />
    </Box>
  );
}
