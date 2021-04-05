import { getRandomColor } from '@/utils/.';
import SphereWithShadow from './SphereWithShadow';

export default function BouncingSpheres({ num }) {
  const spheres = Array(num).fill({});

  return (
    <>
      {spheres.map((_, ndx) => (
        <SphereWithShadow color={getRandomColor()} key={ndx} ndx={ndx} />
      ))}
    </>
  );
}
