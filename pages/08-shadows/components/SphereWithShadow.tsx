import { useRef } from 'react';
import { useFrame } from 'react-three-fiber';
import { Sphere } from '@react-three/drei';
import { ShadowPlane } from '.';
import { Mesh } from 'three';

export default function SphereWithShadow({ color, index, ...props }) {
  const SPHERE_RADIUS = 1;
  const SPHERE_WIDTH_DIVISIONS = 32;
  const SPHERE_HEIGHT_DIVISIONS = 16;
  const mesh = useRef<Mesh>();
  const positionX = (-SPHERE_RADIUS - 1) * index;
  const positionY = SPHERE_RADIUS + 2;

  return (
    <>
      <mesh {...props} ref={mesh} position-x={positionX} position-y={positionY}>
        <Sphere
          args={[
            SPHERE_RADIUS,
            SPHERE_WIDTH_DIVISIONS,
            SPHERE_HEIGHT_DIVISIONS,
          ]}
        >
          <meshPhongMaterial color={color} />
        </Sphere>
      </mesh>

      <ShadowPlane positionX={positionX} />
    </>
  );
}
