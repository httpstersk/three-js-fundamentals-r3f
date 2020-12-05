import { useRef } from 'react';
import { useFrame } from 'react-three-fiber';
import { Box } from '@react-three/drei';
import { Mesh } from 'three';
import { getRandomColor, rotateMesh } from '../../utils';

export default function Cube({ ...props }) {
  const mesh = useRef<Mesh>();
  const width = 1;
  const height = 1;
  const depth = 1;

  useFrame(() => rotateMesh(mesh));

  return (
    <mesh {...props} ref={mesh}>
      <Box args={[width, height, depth]}>
        <meshPhongMaterial color={getRandomColor()} />
      </Box>
    </mesh>
  );
}
