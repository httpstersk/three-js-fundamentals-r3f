import { Box } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from 'react-three-fiber';
import { Mesh } from 'three';

const Cube = (props) => {
  const { color, ndx, ...rest } = props;
  const mesh = useRef<Mesh>();

  useFrame(() => {
    if (mesh.current) {
      const speed = 1 + ndx * 0.1;
      const rot = 0.01 * speed;
      mesh.current.rotation.x += rot;
      mesh.current.rotation.y += rot;
    }
  });

  return (
    <Box args={[1, 1, 1]} ref={mesh} {...rest}>
      <meshPhongMaterial color={color} />
    </Box>
  );
};

export default Cube;
