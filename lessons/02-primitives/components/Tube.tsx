import { Tube } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from 'react-three-fiber';
import { Curve, DoubleSide, Mesh, Vector3 } from 'three';
import { getRandomColor, rotateMesh } from '@/utils/.';

class CustomSinCurve extends Curve {
  private scale: number;

  constructor(scale) {
    super();
    this.scale = scale;
  }

  getPoint(t) {
    const tx = t * 3 - 1.5;
    const ty = Math.sin(2 * Math.PI * t);
    const tz = 0;
    return new Vector3(tx, ty, tz).multiplyScalar(this.scale);
  }
}

export default function TubeGeometry(props) {
  const mesh = useRef<Mesh>();
  const path = new CustomSinCurve(4);
  const radius = 1;
  const radialSegments = 8;
  const tubularSegments = 20;
  const closed = false;

  // Defaults ↓

  useFrame(() => rotateMesh(mesh));

  return (
    <Tube
      args={[path, tubularSegments, radius, radialSegments, closed]}
      ref={mesh}
      {...props}
    >
      <meshPhongMaterial
        attach="material"
        side={DoubleSide}
        color={getRandomColor()}
      />
    </Tube>
  );
}
