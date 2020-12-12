import { useTweaks } from 'use-tweaks';

export default function AmbientLight() {
  const { color, intensity } = useTweaks('Ambient Light', {
    intensity: { value: 1, min: 0, max: 2 },
    color: '#fff',
  });

  return <ambientLight color={color} intensity={intensity} />;
}
