import { folder, useControls } from 'leva';
import { useRef } from 'react';
import CONSTANTS from '@/constants/.';

export default function RectAreaLight() {
  const {
    color,
    height,
    width,
    intensity,
    rotationX,
    rotationY,
    rotationZ,
    x,
    y,
    z,
  } = useControls('RectArea Light', {
    color: CONSTANTS.DEFAULT_LIGHT_COLOR,
    height: { value: 10, min: 0, max: 20 },
    width: { value: 10, min: 0, max: 20 },
    intensity: { value: CONSTANTS.DEFAULT_LIGHT_INTENSITY, min: 0, max: 2 },
    Rotations: folder(
      {
        rotationX: { value: 1, min: 0, max: 1 },
        rotationY: { value: 1, min: 0, max: 1 },
        rotationZ: { value: 1, min: 0, max: 1 },
      },
      { collapsed: true }
    ),
    Positions: folder(
      {
        x: { value: 1, min: -10, max: 10 },
        y: { value: 1, min: 0, max: 10 },
        z: { value: 1, min: -10, max: 10 },
      },
      { collapsed: true }
    ),
  });

  const lightRef = useRef();

  return (
    <rectAreaLight
      castShadow
      color={color}
      height={height}
      intensity={intensity}
      position={[x, y, z]}
      rotation={[rotationX, rotationY, rotationZ]}
      ref={lightRef}
      width={width}
    />
  );
}
