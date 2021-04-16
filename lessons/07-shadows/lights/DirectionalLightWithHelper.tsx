import { useHelper } from '@react-three/drei';
import { folder, useControls } from 'leva';
import { useEffect, useRef, useState } from 'react';
import { useThree } from 'react-three-fiber';
import {
  CameraHelper,
  DirectionalLight,
  DirectionalLightHelper,
  Object3D,
  OrthographicCamera,
} from 'three';
import CONSTANTS from '@/constants/.';

export default function DirectionalLightWithHelper() {
  const [isHelperLightOn, toggleLightHelper] = useState(true);
  const [isHelperShadowOn, toggleShadowHelper] = useState(true);
  const { scene } = useThree();

  const {
    color,
    intensity,
    far,
    height,
    near,
    targetX,
    targetY,
    targetZ,
    width,
    x,
    y,
    z,
    zoom,
  } = useControls('Directional Light', {
    color: CONSTANTS.DEFAULT_LIGHT_COLOR,
    intensity: { value: CONSTANTS.DEFAULT_LIGHT_INTENSITY, min: 0, max: 2 },
    width: { value: 100, min: 1, max: 100 },
    height: { value: 100, min: 1, max: 100 },
    near: { value: 0.1, min: 0.1, max: 50 },
    far: { value: 50, min: 0.1, max: 50 },
    zoom: { value: 1, min: 0.01, max: 1.5 },
    Target: folder(
      {
        targetX: { value: -4, min: -10, max: 10 },
        targetY: { value: 0, min: 0, max: 10 },
        targetZ: { value: -4, min: -10, max: 10 },
      },
      { collapsed: true }
    ),
    Positions: folder(
      {
        x: { value: 0, min: -10, max: 10 },
        y: { value: 10, min: 0, max: 10 },
        z: { value: 10, min: -10, max: 10 },
      },
      { collapsed: true }
    ),
    'Show Light Helper': {
      value: !isHelperLightOn,
      onChange: () => toggleLightHelper((state) => !state),
    },
    'Show Shadow Helper': {
      value: !isHelperShadowOn,
      onChange: () => toggleShadowHelper((state) => !state),
    },
  });

  const lightRef = useRef<DirectionalLight>();
  const targetRef = useRef<Object3D>();
  const lightHelper = isHelperLightOn ? DirectionalLightHelper : null;

  useEffect(() => {
    targetRef?.current?.position.set(targetX, targetY, targetZ);
  }, [targetX, targetY, targetZ]);

  useHelper(lightRef, lightHelper);

  useEffect(() => {
    const camera: OrthographicCamera = lightRef.current.shadow.camera;
    const cameraHelper = new CameraHelper(camera);
    isHelperShadowOn && scene.add(cameraHelper);

    return () => scene.remove(cameraHelper);
  }, [isHelperShadowOn, lightRef.current, far, near, zoom]);

  return (
    <group ref={targetRef}>
      <directionalLight
        castShadow
        color={color}
        intensity={intensity}
        position={[x, y, z]}
        ref={lightRef}
        shadow-camera-far={far}
        shadow-camera-near={near}
        shadow-camera-zoom={zoom}
        shadow-mapSize-height={height}
        shadow-mapSize-width={width}
        target={targetRef.current}
      />
    </group>
  );
}
