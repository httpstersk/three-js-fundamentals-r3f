import { useRef } from 'react';
import { useFrame } from 'react-three-fiber';
import { Box, useTexture } from '@react-three/drei';
import { Mesh, Texture } from 'three';
import { rotateMesh } from '../../utils';

export default function HelloTexture({ ...props }) {
  const mesh = useRef<Mesh>();
  const CUBE_SIZE = 1;
  const width = CUBE_SIZE;
  const height = CUBE_SIZE;
  const depth = CUBE_SIZE;

  const texture = useTexture('/static/images/wall.jpg') as Texture;
  useFrame(() => rotateMesh(mesh));

  return (
    <mesh {...props} ref={mesh}>
      <Box args={[width, height, depth]}>
        <meshBasicMaterial map={texture} />
      </Box>
    </mesh>
  );
}
