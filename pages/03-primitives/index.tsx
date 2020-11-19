import { Canvas } from 'react-three-fiber';
import { OrbitControls } from '@react-three/drei';
import { Flex } from '@react-three/flex';
import {
  Cone,
  Cube,
  Cylinder,
  Dodecahedron,
  Example,
  FlatCircle,
} from './components';

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
      <Flex alignItems="center" flexDirection="row" justifyContent="center">
        <Example>
          <Cube />
        </Example>

        <Example>
          <FlatCircle />
        </Example>

        <Example>
          <Cone />
        </Example>

        <Example>
          <Cylinder />
        </Example>

        <Example>
          <Dodecahedron />
        </Example>
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
