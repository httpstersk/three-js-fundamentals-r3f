import { OrbitControls } from '@react-three/drei';
import { Canvas } from 'react-three-fiber';
import Cone from './components/Cone';
import Cube from './components/Cube';
import Cylinder from './components/Cylinder';
import Dodecahedron from './components/Dodecahedron';
import Example from './components/Example';
import Extrude from './components/Extrude';
import FlatCircle from './components/FlatCircle';
import Icosahedron from './components/Icosahedron';
import Octahedron from './components/Octahedron';
import Parametric from './components/Parametric';
import Plane from './components/Plane';
import Polyhedron from './components/Polyhedron';
import Ring from './components/Ring';
import Row from './components/Row';
import Sphere from './components/Sphere';
import Tetrahedron from './components/Tetrahedron';
import Text from './components/Text';
import Torus from './components/Torus';
import TorusKnot from './components/TorusKnot';
import Tube from './components/Tube';

export default function Scene(controlsProps) {
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

        <Example>
          <Dodecahedron />
        </Example>

        <Example>
          <Extrude />
        </Example>

        <Example>
          <Icosahedron />
        </Example>
      </Row>

      <Row align="center">
        <Example>
          <Octahedron />
        </Example>

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

        <Example>
          <Tetrahedron />
        </Example>
      </Row>

      <Row align="flex-start">
        <Example>
          <Tetrahedron />
        </Example>

        <Example>
          <Text />
        </Example>

        <Example>
          <Torus />
        </Example>

        <Example>
          <TorusKnot />
        </Example>

        <Example>
          <Tube />
        </Example>
      </Row>

      <directionalLight
        color={0xffffff}
        intensity={1.0}
        position={[-1, 2, 4]}
      />

      <OrbitControls {...controlsProps} />
    </Canvas>
  );
}
