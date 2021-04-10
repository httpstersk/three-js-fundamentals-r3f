import { useHelper } from '@react-three/drei';
import { folder, useControls } from 'leva';
import { useRef, useState } from 'react';
import { PointLight, PointLightHelper } from 'three';
import CONSTANTS from '@/constants/.';

export default function PointLightWithHelper() {
  const [isHelperLightOn, toggleLightHelper] = useState(true);

  const { color, distance, intensity, far, near, x, y, z } = useControls(
    'Point Light',
    {
      color: CONSTANTS.DEFAULT_LIGHT_COLOR,
      intensity: { value: CONSTANTS.DEFAULT_LIGHT_INTENSITY, min: 0, max: 2 },
      distance: { value: 0, min: 0, max: 40 },
      near: { value: 0.5, min: 0.1, max: 50 },
      far: { value: 50, min: 0.1, max: 50 },
      Positions: folder(
        {
          x: { value: 0, min: -10, max: 10 },
          y: { value: 10, min: 0, max: 10 },
          z: { value: 0, min: -10, max: 10 },
        },
        { collapsed: true }
      ),
      'Show Helper': {
        value: !isHelperLightOn,
        onChange: () => toggleLightHelper((state) => !state),
      },
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
