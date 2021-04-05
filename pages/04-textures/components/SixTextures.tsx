import { Box, useTexture } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from 'react-three-fiber';
import { Mesh, Texture } from 'three';
import { rotateMesh } from '@/utils/.';

export default function SixTextures(props) {
  const mesh = useRef<Mesh>();
  const CUBE_SIZE = 1;
  const width = CUBE_SIZE;
  const height = CUBE_SIZE;
  const depth = CUBE_SIZE;

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
    <Box args={[width, height, depth]} ref={mesh} {...props}>
      <meshBasicMaterial map={A} attachArray="material" />
      <meshBasicMaterial map={B} attachArray="material" />
      <meshBasicMaterial map={C} attachArray="material" />
      <meshBasicMaterial map={D} attachArray="material" />
      <meshBasicMaterial map={E} attachArray="material" />
      <meshBasicMaterial map={F} attachArray="material" />
    </Box>
  );
}
