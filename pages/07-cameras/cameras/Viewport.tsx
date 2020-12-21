import React, { useRef } from 'react';
import { useFrame } from 'react-three-fiber';
import { OrthographicCamera } from '@react-three/drei';
import { OrthographicCamera as OrthographicCameraType } from 'three';

const Viewport = ({ children }) => {
  const viewportRef = useRef<OrthographicCameraType>();
  const FRUCTUM_SIZE = 800;
  const VIEWPORT_HEIGHT = window.innerHeight;
  const VIEWPORT_WIDTH = window.innerWidth;
  const VIEWPORT_HALF_WIDTH = VIEWPORT_WIDTH / 2;

  const miniMapLocationLeftPixels =
    window.innerWidth - 8 - window.innerWidth * 0.2;
  const miniMapLocationBottomPixels = 8;

  useFrame(({ gl, scene, camera }) => {
    gl.autoClear = true;
    gl.setViewport(0, 0, window.innerWidth, window.innerHeight);
    gl.setScissor(0, 0, window.innerWidth, window.innerHeight);
    gl.setScissorTest(true);
    gl.render(scene, camera);
    gl.autoClear = false;
    gl.clearDepth();

    gl.setViewport(
      miniMapLocationLeftPixels,
      miniMapLocationBottomPixels,
      window.innerWidth * 0.2,
      window.innerHeight * 0.2
    );

    gl.setScissor(
      miniMapLocationLeftPixels,
      miniMapLocationBottomPixels,
      window.innerWidth * 0.2,
      window.innerHeight * 0.2
    );

    gl.setScissorTest(true);
    viewportRef.current.position.x = 100;
    viewportRef.current.position.y = 300;
    viewportRef.current.position.z = 300;
    viewportRef.current.updateMatrixWorld();
    viewportRef.current.updateProjectionMatrix();
    gl.render(scene, viewportRef.current);
  }, 1);

  return (
    <OrthographicCamera
      bottom={VIEWPORT_HEIGHT}
      far={500}
      makeDefault
      left={VIEWPORT_HALF_WIDTH}
      children={children}
      near={250}
      ref={viewportRef}
      right={VIEWPORT_WIDTH}
      rotation={[(Math.PI * -90) / 180, 0, 0]}
      top={0}
      zoom={4.5}
    />
  );
};

export default Viewport;
