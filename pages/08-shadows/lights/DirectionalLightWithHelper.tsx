import { useEffect, useRef, useState } from 'react';
import { useHelper } from '@react-three/drei';
import { useThree } from 'react-three-fiber';
import {
  DirectionalLight,
  DirectionalLightHelper,
  CameraHelper,
  Object3D,
  OrthographicCamera,
} from 'three';
import { makeButton, makeFolder, useTweaks } from 'use-tweaks';
import { CONSTANTS } from '../../constants';

export default function DirectionalLightWithHelper() {
  const [isHelperLightOn, toggleLightHelper] = useState(true);
  const [isHelperShadowOn, toggleShadowHelper] = useState(true);
  const { scene } = useThree();

  const { color, intensity, targetX, targetY, targetZ, x, y, z } = useTweaks(
    'Directional Light',
    {
      color: CONSTANTS.DEFAULT_LIGHT_COLOR,
      intensity: { value: CONSTANTS.DEFAULT_LIGHT_INTENSITY, min: 0, max: 2 },
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
        true
      ),
      ...makeButton(`Toggle Light Helper`, () =>
        toggleLightHelper((state) => !state)
      ),
      ...makeButton(`Toggle Shadow Helper`, () =>
        toggleShadowHelper((state) => !state)
      ),
    }
  );

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
  }, [isHelperShadowOn, lightRef.current]);

  return (
    <group ref={targetRef}>
      <directionalLight
        castShadow
        color={color}
        intensity={intensity}
        position={[x, y, z]}
        ref={lightRef}
        target={targetRef.current}
      />
    </group>
  );
}
