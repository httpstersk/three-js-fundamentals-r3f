import { useMemo, useRef } from 'react';
import { createPortal, useFrame } from 'react-three-fiber';
import { Box } from '@react-three/drei';
import { Color, Mesh, Scene, WebGLRenderTarget } from 'three';
import { PerspectiveCamera as PerspectiveCameraType } from 'three';
import PerspectiveCamera from '../cameras/PerspectiveCamera';
import { CONSTANTS } from '../../constants';

const RenderTargetCube = ({ children }) => {
  const camera = useRef<PerspectiveCameraType>();
  const mesh = useRef<Mesh>();

  const [scene, target] = useMemo(() => {
    const scene = new Scene();
    scene.background = new Color('red');
    const target = new WebGLRenderTarget(512, 512);
    return [scene, target];
  }, []);

  useFrame(({ gl }) => {
    gl.setRenderTarget(target);
    gl.render(scene, camera.current);
    gl.setRenderTarget(null);
    mesh.current.rotation.x += CONSTANTS.SPEED_ROTATION;
    mesh.current.rotation.y += CONSTANTS.SPEED_ROTATION * 1.1;
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

      <mesh ref={mesh}>
        <Box args={[1, 1, 1]}>
          <meshPhongMaterial map={target.texture} />
        </Box>
      </mesh>
    </>
  );
};

export default RenderTargetCube;
