import { useRef, useState } from 'react';
import { useFrame } from 'react-three-fiber';
import { Box } from '@react-three/drei';
import { Mesh } from 'three';
import { getRandomColor } from '../utils';

const Cube = ({ ...props }) => {
  const { innerHeight, innerWidth } = window;
  const size = innerWidth / innerHeight / 2;
  const mesh = useRef<Mesh>();
  const [color, setColor] = useState('hotpink');

  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
    }
  });

  const onPointerOver = () => setColor(getRandomColor());
  const onPointerOut = () => setColor(getRandomColor());

  return (
    <mesh
      ref={mesh}
      onPointerOver={onPointerOver}
      onPointerOut={onPointerOut}
      {...props}
    >
      <Box args={[size, size, size]}>
        <meshPhongMaterial color={color} />
      </Box>
    </mesh>
  );
};

export default Cube;
