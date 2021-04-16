import { Box } from '@react-three/drei';
import { useRef } from 'react';
import { BackSide, Mesh } from 'three';

export default function Room(props) {
  const mesh = useRef<Mesh>();
  const CUBE_SIZE = 30;
  const width = CUBE_SIZE;
  const height = CUBE_SIZE;
  const depth = CUBE_SIZE;

  return (
    <Box
      args={[width, height, depth]}
      castShadow
      position={[0, CUBE_SIZE / 2 - 0.1, 0]}
      receiveShadow
      ref={mesh}
      {...props}
    >
      <meshPhongMaterial attach="material" color="#CCC" side={BackSide} />
    </Box>
  );
}
