import { useRef } from 'react';
import { useFrame } from 'react-three-fiber';
import { Box } from '@react-three/drei';
import { DoubleSide, Mesh } from 'three';
import { CONSTANTS } from '../../constants';
import { getRandomColor, rotateMesh } from '../../utils';

export default function BoxGeometry({ ...props }) {
  const mesh = useRef<Mesh>();
  const width = CONSTANTS.EXAMPLES_HEIGHT;
  const height = CONSTANTS.EXAMPLES_HEIGHT;
  const depth = CONSTANTS.EXAMPLES_HEIGHT;

  useFrame(() => rotateMesh(mesh));

  return (
    <mesh {...props} ref={mesh}>
      <Box args={[width, height, depth]}>
        <meshPhongMaterial side={DoubleSide} color={getRandomColor()} />
      </Box>
    </mesh>
  );
}
