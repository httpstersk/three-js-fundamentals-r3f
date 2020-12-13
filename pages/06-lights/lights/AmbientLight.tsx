import { useTweaks } from 'use-tweaks';
import { CONSTANTS } from '../../constants';

export default function AmbientLight() {
  const { color, intensity } = useTweaks('Ambient Light', {
    color: CONSTANTS.DEFAULT_LIGHT_COLOR,
    intensity: { value: CONSTANTS.DEFAULT_LIGHT_INTENSITY, min: 0, max: 2 },
  });

  return <ambientLight color={color} intensity={intensity} />;
}
