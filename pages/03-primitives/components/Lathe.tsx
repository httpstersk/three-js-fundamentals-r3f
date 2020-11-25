import { useEffect, useRef } from 'react';
import { useFrame } from 'react-three-fiber';
import { Lathe } from '@react-three/drei';
import { DoubleSide, Mesh, Vector2 } from 'three';
import { rotateMesh } from '../utils';

export default function LatheGeometry({ ...props }) {
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
    <mesh {...props} ref={mesh}>
      <Lathe args={[points, segments, phiStart, phiLength]}>
        <meshPhongMaterial side={DoubleSide} color="hotpink" />
      </Lathe>
    </mesh>
  );
}
