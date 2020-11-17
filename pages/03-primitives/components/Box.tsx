import { useRef } from 'react';
import { useFrame } from 'react-three-fiber';
import { Box } from '@react-three/drei';
import { Mesh } from 'three';
import { SPEED_ROTATION } from '../constants';

const Cube = ({ ...props }) => {
  const mesh = useRef<Mesh>();

  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.x += SPEED_ROTATION;
      mesh.current.rotation.y += SPEED_ROTATION;
    }
  });

  return (
    <mesh {...props} ref={mesh}>
      <Box args={[1, 1, 1]}>
        <meshPhongMaterial attach="material" color="hotpink" />
      </Box>
    </mesh>
  );
};

export default Cube;
