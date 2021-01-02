import { useEffect, useRef, useState } from 'react';
import { useHelper } from '@react-three/drei';
import { useThree } from 'react-three-fiber';
import { DirectionalLightHelper, CameraHelper, Object3D } from 'three';
import { makeButton, makeFolder, useTweaks } from 'use-tweaks';
import { CONSTANTS } from '../../constants';

export default function DirectionalLight() {
  const [isHelperOn, toggleHelper] = useState(true);
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
      ...makeButton(`${isHelperOn ? 'Hide' : 'Show'} Helper`, () =>
        toggleHelper((helper) => !helper)
      ),
    }
  );

  const lightRef = useRef();
  const targetRef = useRef<Object3D>();
  const lightHelper = isHelperOn ? DirectionalLightHelper : null;

  useEffect(() => {
    targetRef?.current?.position.set(targetX, targetY, targetZ);
  }, [targetX, targetY, targetZ]);

  useHelper(lightRef, lightHelper);

  useEffect(() => {
    if (lightRef.current) {
      const cameraHelper = new CameraHelper(lightRef.current.shadow.camera);
      scene.add(cameraHelper);
    }
  }, []);

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
