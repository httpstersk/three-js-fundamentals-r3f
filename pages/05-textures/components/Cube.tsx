import { useRef } from 'react';
import { useFrame } from 'react-three-fiber';
import { Box, useTexture } from '@react-three/drei';
import { DoubleSide, Mesh, Texture } from 'three';
import { getRandomColor, rotateMesh } from '../../utils';

export default function BoxGeometry({ ...props }) {
  const mesh = useRef<Mesh>();
  const width = 1;
  const height = 1;
  const depth = 1;

  const texture = useTexture('/static/images/wall.jpg') as Texture;
  useFrame(() => rotateMesh(mesh));

  return (
    <mesh {...props} ref={mesh}>
      <Box args={[width, height, depth]}>
        <meshBasicMaterial
          side={DoubleSide}
          color={getRandomColor()}
          map={texture}
        />
      </Box>
    </mesh>
  );
}
