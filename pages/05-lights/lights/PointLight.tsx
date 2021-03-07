import { useHelper } from '@react-three/drei';
import { useRef, useState } from 'react';
import { PointLightHelper } from 'three';
import { makeButton, useTweaks } from 'use-tweaks';
import { CONSTANTS } from '../../constants';

export default function PointLight() {
  const [isHelperOn, toggleHelper] = useState(false);
  const lightRef = useRef();

  const { color, distance, intensity } = useTweaks('Point Light', {
    color: CONSTANTS.DEFAULT_LIGHT_COLOR,
    distance: { value: 10, min: 0, max: 40 },
    intensity: { value: CONSTANTS.DEFAULT_LIGHT_INTENSITY, min: 0, max: 2 },
    ...makeButton(`${isHelperOn ? 'Hide' : 'Show'} Helper`, () =>
      toggleHelper((helper) => !helper)
    ),
  });

  const lightHelper = isHelperOn ? PointLightHelper : null;
  useHelper(lightRef, lightHelper);

  return (
    <pointLight
      color={color}
      distance={distance}
      intensity={intensity}
      ref={lightRef}
    />
  );
}
