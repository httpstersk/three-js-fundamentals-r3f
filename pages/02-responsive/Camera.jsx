import { useEffect, useMemo } from 'react';
import { useThree } from 'react-three-fiber';
import { PerspectiveCamera } from '@react-three/drei';

const Camera = ({ ...props }) => {
  const { gl, camera } = useThree();

  const setSizes = () => {
    if (typeof window !== 'undefined') {
      camera.aspect = window.innerWidth / window.innerHeight;
      gl.setPixelRatio(window.devicePixelRatio);
      gl.setSize(window.innerWidth, window.innerHeight, false);
      camera.updateProjectionMatrix();
    }
  };

  useEffect(() => {
    setSizes();
  }, []);

  useEffect(() => {
    window.addEventListener('resize', setSizes, false);
    return () => window.removeEventListener('resize', setSizes);
  }, []);

  return (
    <PerspectiveCamera
      {...props}
      aspect={3}
      fov={75}
      makeDefault
      position={[0, 0, 2]}
      rotation={[0, 0, 0]}
    />
  );
};

export default Camera;
