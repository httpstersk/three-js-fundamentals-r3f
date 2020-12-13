import { useRef } from 'react';
import { useHelper } from '@react-three/drei';
import { useTweaks } from 'use-tweaks';
import { PointLightHelper } from 'three';
import { CONSTANTS } from '../../constants';

export default function PointLight() {
  const lightRef = useRef();

  const { color, distance, intensity } = useTweaks('Point Light', {
    color: CONSTANTS.DEFAULT_LIGHT_COLOR,
    distance: { value: 10, min: 0, max: 40 },
    intensity: { value: CONSTANTS.DEFAULT_LIGHT_INTENSITY, min: 0, max: 2 },
  });

  useHelper(lightRef, PointLightHelper);

  return (
    <pointLight
      color={color}
      distance={distance}
      intensity={intensity}
      ref={lightRef}
    />
  );
}
