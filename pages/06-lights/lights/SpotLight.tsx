import { useEffect, useRef } from 'react';
import { useHelper } from '@react-three/drei';
import { makeFolder, useTweaks } from 'use-tweaks';
import { SpotLightHelper, Object3D } from 'three';
import { CONSTANTS } from '../../constants';

export default function SpotLight() {
  const {
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
    color: CONSTANTS.DEFAULT_LIGHT_COLOR,
    distance: { value: 10, min: 0, max: 40 },
    intensity: { value: CONSTANTS.DEFAULT_LIGHT_INTENSITY, min: 0, max: 2 },
    penumbra: { value: 0.5, min: 0, max: 1 },
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
  });

  const lightRef = useRef();
  const targetRef = useRef<Object3D>();

  useEffect(() => {
    targetRef?.current?.position.set(targetX, targetY, targetZ);
  }, [targetX, targetY, targetZ]);

  useHelper(lightRef, SpotLightHelper);

  return (
    <group ref={targetRef}>
      <spotLight
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
