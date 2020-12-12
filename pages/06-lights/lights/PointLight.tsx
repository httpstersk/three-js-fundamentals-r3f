import { useRef } from 'react';
import { useHelper } from '@react-three/drei';
import { useTweaks } from 'use-tweaks';
import { PointLightHelper } from 'three';

export default function PointLight() {
  const lightRef = useRef();

  const { color, distance, intensity } = useTweaks('Point Light', {
    color: '#ffffff',
    distance: { value: 10, min: 0, max: 40 },
    intensity: { value: 0.5, min: 0, max: 2 },
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
