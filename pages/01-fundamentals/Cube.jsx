import { useRef } from 'react';
import { useFrame } from 'react-three-fiber';
import { Box } from '@react-three/drei';

const Cube = (props) => {
  const { color, ndx } = props;
  const mesh = useRef();

  useFrame(() => {
    if (mesh.current) {
      const speed = 1 + ndx * 0.1;
      const rot = 0.015 * speed;
      mesh.current.rotation.x += rot;
      mesh.current.rotation.y += rot;
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
