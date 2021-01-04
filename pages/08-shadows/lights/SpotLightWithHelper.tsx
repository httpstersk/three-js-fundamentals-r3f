import { useEffect, useRef, useState } from 'react';
import { useHelper } from '@react-three/drei';
import { useThree } from 'react-three-fiber';
import {
  SpotLight,
  SpotLightHelper,
  CameraHelper,
  Object3D,
  PerspectiveCamera,
} from 'three';
import { makeButton, makeFolder, useTweaks } from 'use-tweaks';
import { CONSTANTS } from '../../constants';

export default function SpotLightWithHelper() {
  const [isHelperLightOn, toggleLightHelper] = useState(true);
  const [isHelperShadowOn, toggleShadowHelper] = useState(true);
  const { scene } = useThree();

  const {
    angle,
    color,
    distance,
    intensity,
    far,
    near,
    penumbra,
    targetX,
    targetY,
    targetZ,
    x,
    y,
    z,
  } = useTweaks('Spot Light', {
    color: CONSTANTS.DEFAULT_LIGHT_COLOR,
    intensity: { value: CONSTANTS.DEFAULT_LIGHT_INTENSITY, min: 0, max: 2 },
    distance: { value: 0, min: 0, max: 40 },
    angle: { value: 0.6, min: 0, max: 1 },
    penumbra: { value: 0, min: 0, max: 1 },
    ...makeFolder(
      'Shadow Camera',
      {
        near: { value: 0.5, min: 0.1, max: 50 },
        far: { value: 50, min: 0.1, max: 50 },
      },
      true
    ),
    ...makeFolder(
      'Positions',
      {
        targetX: { value: -4, min: -10, max: 10 },
        targetY: { value: 0, min: 0, max: 10 },
        targetZ: { value: -4, min: -10, max: 10 },
        x: { value: 0, min: -10, max: 10 },
        y: { value: 10, min: 0, max: 10 },
        z: { value: 10, min: -10, max: 10 },
      },
      false
    ),
    ...makeButton(`Toggle Light Helper`, () =>
      toggleLightHelper((state) => !state)
    ),
    ...makeButton(`Toggle Shadow Helper`, () =>
      toggleShadowHelper((state) => !state)
    ),
  });

  const lightRef = useRef<SpotLight>();
  const targetRef = useRef<Object3D>();
  const lightHelper = isHelperLightOn ? SpotLightHelper : null;

  useEffect(() => {
    targetRef?.current?.position.set(targetX, targetY, targetZ);
  }, [targetX, targetY, targetZ]);

  useHelper(lightRef, lightHelper);

  useEffect(() => {
    const camera: PerspectiveCamera = lightRef.current.shadow.camera;
    const cameraHelper = new CameraHelper(camera);
    isHelperShadowOn && scene.add(cameraHelper);

    return () => scene.remove(cameraHelper);
  }, [isHelperShadowOn, lightRef.current, far, near]);

  return (
    <group ref={targetRef}>
      <spotLight
        angle={angle}
        castShadow
        color={color}
        distance={distance}
        intensity={intensity}
        penumbra={penumbra}
        position={[x, y, z]}
        ref={lightRef}
        shadow-camera-far={far}
        shadow-camera-near={near}
        target={targetRef.current}
      />
    </group>
  );
}
