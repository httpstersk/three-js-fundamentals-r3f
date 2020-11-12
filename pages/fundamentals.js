import { useRef } from 'react';
import { Canvas } from 'react-three-fiber';
import { Box, OrbitControls } from '@react-three/drei';

const Scene = () => {
  const scene = useRef();

  return (
    <group ref={scene}>
      <Box></Box>
    </group>
  );
};

export default function Fundamentals() {
  return (
    <Canvas>
      <Scene />
      <OrbitControls />
    </Canvas>
  );
}
