import { useHelper } from '@react-three/drei';
import { folder, useControls } from 'leva';
import { useEffect, useRef, useState } from 'react';
import { DirectionalLightHelper, Object3D } from 'three';
import CONSTANTS from '@/constants/.';

export default function DirectionalLight() {
  const [isHelperOn, toggleHelper] = useState(false);

  const { color, intensity, targetX, targetY, targetZ, x, y, z } = useControls(
    'Directional Light',
    {
      color: CONSTANTS.DEFAULT_LIGHT_COLOR,
      intensity: { value: CONSTANTS.DEFAULT_LIGHT_INTENSITY, min: 0, max: 2 },
      Positions: folder(
        {
          x: { value: 1, min: -10, max: 10 },
          y: { value: 1, min: 0, max: 10 },
          z: { value: 1, min: -10, max: 10 },
        },
        { collapsed: true }
      ),
      Target: folder(
        {
          targetX: { value: 1, min: -10, max: 10 },
          targetY: { value: 1, min: 0, max: 10 },
          targetZ: { value: 1, min: -10, max: 10 },
        },
        { collapsed: true }
      ),
      'Show Helper': {
        value: !isHelperOn,
        onChange: () => toggleHelper((helper) => !helper),
      },
    }
  );

  const lightRef = useRef();
  const targetRef = useRef<Object3D>();
  const lightHelper = isHelperOn ? DirectionalLightHelper : null;

  useEffect(() => {
    targetRef?.current?.position.set(targetX, targetY, targetZ);
  }, [targetX, targetY, targetZ]);

  useHelper(lightRef, lightHelper);

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
