import { useRef } from 'react';
import { useFrame } from 'react-three-fiber';
import { Box, useTexture } from '@react-three/drei';
import { Mesh, Texture } from 'three';
import { rotateMesh } from '../../utils';

export default function HelloTexture({ ...props }) {
  const mesh = useRef<Mesh>();
  const width = 1;
  const height = 1;
  const depth = 1;

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
