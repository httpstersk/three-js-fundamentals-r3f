import { Canvas } from 'react-three-fiber';
import { OrbitControls } from '@react-three/drei';
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
  Row,
  Sphere,
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
      <Row align="flex-end">
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
      </Row>

      <Row align="center">
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
      </Row>

      <Row align="flex-start">
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

        <Example>
          <Sphere />
        </Example>
      </Row>

      <directionalLight
        color={0xffffff}
        intensity={1.0}
        position={[-1, 2, 4]}
      />

      <OrbitControls />
    </Canvas>
  );
}
