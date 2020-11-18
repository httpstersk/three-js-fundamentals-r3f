import { useRef } from 'react';
import { useFrame } from 'react-three-fiber';
import { Box } from '@react-three/drei';
import { Mesh } from 'three';
import { SPEED_ROTATION } from '../constants';

export default function BoxGeometry({ ...props }) {
  const mesh = useRef<Mesh>();
  const width = 0.85;
  const height = 0.85;
  const depth = 0.85;

  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.x += SPEED_ROTATION;
      mesh.current.rotation.y += SPEED_ROTATION;
    }
  });

  return (
    <mesh {...props} ref={mesh}>
      <Box args={[width, height, depth]}>
        <meshPhongMaterial attach="material" color="hotpink" />
      </Box>
    </mesh>
  );
}
