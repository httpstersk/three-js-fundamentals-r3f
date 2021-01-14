import { useRef } from 'react';
import { useFrame } from 'react-three-fiber';
import { Box } from '@react-three/drei';
import { Mesh } from 'three';

const Cube = ({ ...props }) => {
  const { color } = props;
  const mesh = useRef<Mesh>();

  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh {...props} ref={mesh}>
      <Box args={[1, 1, 1]}>
        <meshPhongMaterial color={color} />
      </Box>
    </mesh>
  );
};

export default Cube;
