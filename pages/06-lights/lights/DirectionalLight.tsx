import { useEffect, useRef } from 'react';
import { DirectionalLightHelper, Object3D } from 'three';
import { useHelper } from '@react-three/drei';
import { useTweaks } from 'use-tweaks';

export default function DirectionalLight() {
  const { color, intensity, x, y, z, targetX, targetY, targetZ } = useTweaks(
    'Directional Light',
    {
      intensity: { value: 1, min: 0, max: 2 },
      color: '#fff',
      x: { value: 1, min: -10, max: 10 },
      y: { value: 1, min: 0, max: 10 },
      z: { value: 1, min: -10, max: 10 },
      targetX: { value: 1, min: -10, max: 10 },
      targetY: { value: 1, min: 0, max: 10 },
      targetZ: { value: 1, min: -10, max: 10 },
    }
  );

  const lightRef = useRef();
  const targetRef = useRef<Object3D>();

  useEffect(() => {
    targetRef?.current?.position.set(targetX, targetY, targetZ);
  }, [targetX, targetY, targetZ]);

  useHelper(lightRef, DirectionalLightHelper);

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
