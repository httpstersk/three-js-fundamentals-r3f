import { useHelper } from '@react-three/drei';
import { useEffect, useRef, useState } from 'react';
import { DirectionalLightHelper, Object3D } from 'three';
import { makeButton, makeFolder, useTweaks } from 'use-tweaks';
import { CONSTANTS } from '../../constants';

export default function DirectionalLight() {
  const [isHelperOn, toggleHelper] = useState(false);

  const { color, intensity, targetX, targetY, targetZ, x, y, z } = useTweaks(
    'Directional Light',
    {
      color: CONSTANTS.DEFAULT_LIGHT_COLOR,
      intensity: { value: CONSTANTS.DEFAULT_LIGHT_INTENSITY, min: 0, max: 2 },
      ...makeFolder(
        'Positions',
        {
          targetX: { value: 1, min: -10, max: 10 },
          targetY: { value: 1, min: 0, max: 10 },
          targetZ: { value: 1, min: -10, max: 10 },
          x: { value: 1, min: -10, max: 10 },
          y: { value: 1, min: 0, max: 10 },
          z: { value: 1, min: -10, max: 10 },
        },
        false
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
