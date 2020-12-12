import { useTweaks } from 'use-tweaks';

export default function HemisphereLight() {
  const { groundColor, skyColor, intensity } = useTweaks('Hemisphere Light', {
    intensity: { value: 1, min: 0, max: 2 },
    groundColor: '#b97a20',
    skyColor: '#b1e1ff',
  });

  return <hemisphereLight args={[skyColor, groundColor, intensity]} />;
}
