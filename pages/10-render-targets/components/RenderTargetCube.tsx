import { useMemo, useRef } from 'react';
import { createPortal, useFrame } from 'react-three-fiber';
import { Box } from '@react-three/drei';
import { Color, Scene, WebGLRenderTarget } from 'three';
import { PerspectiveCamera as PerspectiveCameraType } from 'three';
import PerspectiveCamera from '../cameras/PerspectiveCamera';

const RenderTargetCube = ({ children }) => {
  const camera = useRef<PerspectiveCameraType>();

  const [scene, target] = useMemo(() => {
    const scene = new Scene();
    scene.background = new Color('red');
    const target = new WebGLRenderTarget(512, 512);
    return [scene, target];
  }, []);

  useFrame(({ clock, gl }) => {
    // cam.current.position.z = 5 + Math.sin(clock.getElapsedTime() * 1.5) * 2;
    gl.setRenderTarget(target);
    gl.render(scene, camera.current);
    gl.setRenderTarget(null);
  });

  return (
    <>
      <PerspectiveCamera ref={camera} />

      {createPortal(children, scene)}

      <directionalLight
        color={0xffffff}
        intensity={1.0}
        position={[-1, 2, 4]}
      />

      <Box args={[1, 1, 1]}>
        <meshPhongMaterial color="blue" />
      </Box>
    </>
  );
};

export default RenderTargetCube;
