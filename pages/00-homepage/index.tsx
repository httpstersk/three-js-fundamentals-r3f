import { Canvas } from 'react-three-fiber';
import Cube from './Cube';

export default function HomepageScene() {
  return (
    <Canvas camera={{ position: [0, 0, 2] }}>
      <Cube />

      <directionalLight
        color={0xffffff}
        intensity={1.0}
        position={[-1, 2, 4]}
      />
    </Canvas>
  );
}
