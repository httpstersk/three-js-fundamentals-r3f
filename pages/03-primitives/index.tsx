import { Canvas } from 'react-three-fiber';
import { OrbitControls } from '@react-three/drei';
import { Flex, Box } from '@react-three/flex';
import { Cone, Cube, Cylinder, FlatCircle } from './components';

export default function Scene() {
  return (
    <Canvas
      camera={{
        position: [0, 0, 120],
        fov: 40,
        aspect: 2,
        near: 0.1,
        far: 1000,
      }}
    >
      <Flex
        alignItems="center"
        flexDirection="row"
        justifyContent="center"
        padding={1}
      >
        <Box centerAnchor>
          <Cube />
        </Box>
        <Box centerAnchor>
          <FlatCircle />
        </Box>
        <Box centerAnchor>
          <Cone />
        </Box>
        <Box centerAnchor>
          <Cylinder />
        </Box>
      </Flex>

      <directionalLight
        color={0xffffff}
        intensity={1.0}
        position={[-1, 2, 4]}
      />

      <OrbitControls />
    </Canvas>
  );
}
