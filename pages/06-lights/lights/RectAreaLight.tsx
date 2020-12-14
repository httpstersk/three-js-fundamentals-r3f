import { useEffect, useRef } from 'react';
import { makeFolder, useTweaks } from 'use-tweaks';
import { Object3D } from 'three';
import { CONSTANTS } from '../../constants';

export default function RectAreaLight() {
  const {
    color,
    height,
    width,
    intensity,
    targetX,
    targetY,
    targetZ,
    x,
    y,
    z,
  } = useTweaks('RectArea Light', {
    color: CONSTANTS.DEFAULT_LIGHT_COLOR,
    height: { value: 10, min: 0, max: 20 },
    width: { value: 10, min: 0, max: 20 },
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
  });

  const lightRef = useRef();
  const targetRef = useRef<Object3D>();

  useEffect(() => {
    targetRef?.current?.position.set(targetX, targetY, targetZ);
  }, [targetX, targetY, targetZ]);

  return (
    <group ref={targetRef}>
      <rectAreaLight
        castShadow
        color={color}
        height={height}
        intensity={intensity}
        position={[x, y, z]}
        ref={lightRef}
        width={width}
      />
    </group>
  );
}
