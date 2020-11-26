import { useRef } from 'react';
import { useFrame } from 'react-three-fiber';
import { Box } from '@react-three/drei';
import { DoubleSide, Mesh } from 'three';
import { EXAMPLES_HEIGHT } from '../../constants';
import { getRandomColor, rotateMesh } from '../../utils';

export default function BoxGeometry({ ...props }) {
  const mesh = useRef<Mesh>();
  const width = EXAMPLES_HEIGHT;
  const height = EXAMPLES_HEIGHT;
  const depth = EXAMPLES_HEIGHT;

  useFrame(() => rotateMesh(mesh));

  return (
    <mesh {...props} ref={mesh}>
      <Box args={[width, height, depth]}>
        <meshPhongMaterial side={DoubleSide} color={getRandomColor()} />
      </Box>
    </mesh>
  );
}
