import { useLayoutEffect, useRef } from 'react';
import { Canvas, useFrame, useThree } from 'react-three-fiber';
import { PerspectiveCamera } from 'three';
import { Box, OrbitControls } from '@react-three/drei';

const Camera = () => {
  const camera = useRef(new PerspectiveCamera());
  const { setDefaultCamera } = useThree();

  useLayoutEffect(() => {
    if (camera.current) {
      setDefaultCamera(camera.current);
    }
  }, []);

  useFrame(() => {
    camera?.current?.updateMatrixWorld();
  });

  return (
    <perspectiveCamera
      fov={75}
      far={5}
      near={0.1}
      name="camera"
      onUpdate={(self) => {
        self.lookAt(0, 5, 0);
        self.updateProjectionMatrix();
      }}
      position={[0, 0, -2]}
      ref={camera}
    ></perspectiveCamera>
  );
};

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
      <Camera />
    </Canvas>
  );
}
