import { Lathe } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import { useFrame } from 'react-three-fiber';
import { DoubleSide, Mesh, Vector2 } from 'three';
import { getRandomColor, rotateMesh } from '@/utils/.';

export default function LatheGeometry(props) {
  const mesh = useRef<Mesh>();
  const points = [];

  // Defaults ↓
  const segments = 12;
  const phiStart = 0;
  const phiLength = 2 * Math.PI;

  useEffect(() => {
    for (let i = 0; i < 10; ++i) {
      points.push(new Vector2(Math.sin(i * 0.2) * 3 + 3, (i - 5) * 0.8));
    }
  }, []);

  useFrame(() => rotateMesh(mesh));
  console.log(points);

  return (
    <Lathe args={[points, segments, phiStart, phiLength]} ref={mesh} {...props}>
      <meshPhongMaterial
        attach="material"
        color={getRandomColor()}
        side={DoubleSide}
      />
    </Lathe>
  );
}
