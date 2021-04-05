import { Box, useTexture } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from 'react-three-fiber';
import { Mesh, Texture } from 'three';
import { rotateMesh } from '@/utils/.';

export default function HelloTexture(props) {
  const mesh = useRef<Mesh>();
  const CUBE_SIZE = 1;
  const width = CUBE_SIZE;
  const height = CUBE_SIZE;
  const depth = CUBE_SIZE;

  const texture = useTexture('/static/images/wall.jpg') as Texture;
  useFrame(() => rotateMesh(mesh));

  return (
    <Box args={[width, height, depth]} ref={mesh} {...props}>
      <meshBasicMaterial attach="material" map={texture} />
    </Box>
  );
}
