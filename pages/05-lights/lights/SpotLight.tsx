import { useHelper } from '@react-three/drei';
import { useEffect, useRef, useState } from 'react';
import { Object3D, SpotLightHelper } from 'three';
import { makeButton, makeFolder, useTweaks } from 'use-tweaks';
import { CONSTANTS } from '../../constants';

export default function SpotLight() {
  const [isHelperOn, toggleHelper] = useState(false);

  const {
    angle,
    color,
    distance,
    intensity,
    penumbra,
    targetX,
    targetY,
    targetZ,
    x,
    y,
    z,
  } = useTweaks('Spot Light', {
    angle: { value: 0.5, min: 0, max: 1 },
    color: CONSTANTS.DEFAULT_LIGHT_COLOR,
    distance: { value: 10, min: 0, max: 40 },
    intensity: { value: CONSTANTS.DEFAULT_LIGHT_INTENSITY, min: 0, max: 2 },
    penumbra: { value: 0.01, min: 0, max: 1 },
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
  });

  const lightRef = useRef();
  const targetRef = useRef<Object3D>();
  const lightHelper = isHelperOn ? SpotLightHelper : null;

  useEffect(() => {
    targetRef?.current?.position.set(targetX, targetY, targetZ);
  }, [targetX, targetY, targetZ]);

  useHelper(lightRef, lightHelper);

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
      />
    </group>
  );
}
