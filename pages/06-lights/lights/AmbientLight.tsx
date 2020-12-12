import { useTweaks } from 'use-tweaks';

export default function AmbientLight() {
  const { color, intensity } = useTweaks('Ambient Light', {
    color: '#fff',
    intensity: { value: 0.5, min: 0, max: 2 },
  });

  return <ambientLight color={color} intensity={intensity} />;
}
