import { useEffect, useRef } from 'react';
import { useFrame, useThree } from 'react-three-fiber';
import { PerspectiveCamera } from 'three';

const Camera = ({ ...props }) => {
  const { setDefaultCamera } = useThree();
  const camera = useRef<PerspectiveCamera>();

  useEffect(() => {
    setDefaultCamera(camera.current!);
  }, [setDefaultCamera]);

  useFrame(() => camera.current!.updateMatrixWorld());

  return (
    <perspectiveCamera
      {...props}
      aspect={3}
      fov={75}
      position={[0, 0, 2]}
      rotation={[0, 0, 0]}
      ref={camera}
    />
  );
};

export default Camera;
