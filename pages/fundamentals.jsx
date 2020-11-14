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
  const mesh = useRef();

  useFrame(() => {
    if (mesh.current) {
      mesh.current.updateMatrixWorld();
      mesh.current.rotation.x += 0.015;
      mesh.current.rotation.y += 0.015;
    }
  });

  return (
    <mesh ref={mesh}>
      <Box args={[1, 1, 1]}>
        <meshPhongMaterial color={0x44aa88} />
      </Box>
    </mesh>
  );
};

export default function Fundamentals() {
  return (
    <Canvas>
      <Scene />
      <directionalLight
        color={0xffffff}
        intensity={1.0}
        position={[-1, 1, -10]}
      />
      <OrbitControls />
      <Camera />
    </Canvas>
  );
}
