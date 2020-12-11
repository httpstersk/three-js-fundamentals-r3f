import { useRef } from 'react';
import { DirectionalLightHelper } from 'three';
import { useHelper } from '@react-three/drei';
import { useTweaks } from 'use-tweaks';

export default function DirectionalLight() {
  const { color, intensity, x, y, z } = useTweaks('Directional Light', {
    intensity: { value: 1, min: 0, max: 2 },
    color: '#fff',
    x: { value: 1, min: -10, max: 10 },
    y: { value: 1, min: 0, max: 10 },
    z: { value: 1, min: -10, max: 10 },
  });

  const lightRef = useRef();
  useHelper(lightRef, DirectionalLightHelper);

  return (
    <>
      <directionalLight
        castShadow
        color={color}
        intensity={intensity}
        position={[x, y, z]}
        ref={lightRef}
      />
    </>
  );
}
