import { useControls } from 'leva';
import CONSTANTS from '@/constants/.';

export default function HemisphereLight() {
  const { groundColor, skyColor, intensity } = useControls('Hemisphere Light', {
    intensity: { value: CONSTANTS.DEFAULT_LIGHT_INTENSITY, min: 0, max: 2 },
    groundColor: '#b97a20',
    skyColor: '#b1e1ff',
  });

  return <hemisphereLight args={[skyColor, groundColor, intensity]} />;
}
