import { getRandomColor } from '@/utils/.';
import { Box, OrbitControls } from '@react-three/drei';
import { useRef, useState } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';
import { Mesh } from 'three';

const Cube = (props) => {
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
    <Box
      args={[size, size, size]}
      onPointerOver={onPointerOver}
      onPointerOut={onPointerOut}
      ref={mesh}
      {...props}
    >
      <meshPhongMaterial attach="material" color={color} />
    </Box>
  );
};

export default function HomepageScene(controlsProps) {
  return (
    <Canvas camera={{ position: [0, 0, 2] }}>
      <Cube />

      <directionalLight
        color={0xffffff}
        intensity={1.0}
        position={[-1, 2, 4]}
      />

      <color args={['#010101']} attach="background" />
      <fog attach="fog" color="#010101" far={2} near={1} />

      <OrbitControls {...controlsProps} />
    </Canvas>
  );
}
