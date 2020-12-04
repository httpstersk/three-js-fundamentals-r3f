import { useRef } from 'react';
import { useFrame } from 'react-three-fiber';
import { Box, useTexture } from '@react-three/drei';
import { Mesh, Texture } from 'three';
import { rotateMesh } from '../../utils';

export default function SixTextures({ ...props }) {
  const mesh = useRef<Mesh>();
  const width = 1;
  const height = 1;
  const depth = 1;

  const [A, B, C, D, E, F] = useTexture([
    '/static/images/flower-1.jpg',
    '/static/images/flower-2.jpg',
    '/static/images/flower-3.jpg',
    '/static/images/flower-4.jpg',
    '/static/images/flower-5.jpg',
    '/static/images/flower-6.jpg',
  ]) as Texture[];
  useFrame(() => rotateMesh(mesh));

  return (
    <mesh {...props} ref={mesh}>
      <Box args={[width, height, depth]}>
        <meshBasicMaterial map={A} attachArray="material" />
        <meshBasicMaterial map={B} attachArray="material" />
        <meshBasicMaterial map={C} attachArray="material" />
        <meshBasicMaterial map={D} attachArray="material" />
        <meshBasicMaterial map={E} attachArray="material" />
        <meshBasicMaterial map={F} attachArray="material" />
      </Box>
    </mesh>
  );
}
