import { useRef, useState } from 'react';
import { useHelper } from '@react-three/drei';
import { PointLight, PointLightHelper } from 'three';
import { makeButton, makeFolder, useTweaks } from 'use-tweaks';
import { CONSTANTS } from '../../constants';

export default function PointLightWithHelper() {
  const [isHelperLightOn, toggleLightHelper] = useState(true);

  const { color, distance, intensity, far, near, x, y, z } = useTweaks(
    'Point Light',
    {
      color: CONSTANTS.DEFAULT_LIGHT_COLOR,
      intensity: { value: CONSTANTS.DEFAULT_LIGHT_INTENSITY, min: 0, max: 2 },
      distance: { value: 0, min: 0, max: 40 },
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
          x: { value: 0, min: -10, max: 10 },
          y: { value: 10, min: 0, max: 10 },
          z: { value: 0, min: -10, max: 10 },
        },
        false
      ),
      ...makeButton(`Toggle Light Helper`, () =>
        toggleLightHelper((state) => !state)
      ),
    }
  );

  const lightRef = useRef<PointLight>();
  const lightHelper = isHelperLightOn ? PointLightHelper : null;

  useHelper(lightRef, lightHelper);

  return (
    <pointLight
      castShadow
      color={color}
      distance={distance}
      intensity={intensity}
      position={[x, y, z]}
      ref={lightRef}
      shadow-camera-far={far}
      shadow-camera-near={near}
    />
  );
}
