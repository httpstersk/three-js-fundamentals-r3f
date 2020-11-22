import { Canvas } from 'react-three-fiber';
import { OrbitControls } from '@react-three/drei';
import { Flex } from '@react-three/flex';
import {
  Cone,
  Cube,
  Cylinder,
  Dodecahedron,
  Example,
  Extrude,
  FlatCircle,
  Icosahedron,
  Octahedron,
  Parametric,
  Plane,
  Polyhedron,
  Ring,
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
      <Flex flexDirection="row" alignItems="flex-end" justifyContent="center">
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
      </Flex>

      <Flex flexDirection="row" alignItems="center" justifyContent="center">
        <Example>
          <Extrude />
        </Example>

        <Example>
          <Dodecahedron />
        </Example>

        <Example>
          <Icosahedron />
        </Example>

        <Example>
          <Octahedron />
        </Example>
      </Flex>

      <Flex flexDirection="row" alignItems="flex-start" justifyContent="center">
        <Example>
          <Parametric />
        </Example>

        <Example>
          <Plane />
        </Example>

        <Example>
          <Polyhedron />
        </Example>

        <Example>
          <Ring />
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
