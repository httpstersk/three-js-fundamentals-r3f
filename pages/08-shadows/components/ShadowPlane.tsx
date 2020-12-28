import { useRef } from 'react';
import { Plane, useTexture } from '@react-three/drei';
import { Mesh, Texture } from 'three';

const PLANE_SIZE = 1;
const SHADOW_SIZE = 4;

export default function ShadowPlaneGeometry({ positionX, ...props }) {
  const mesh = useRef<Mesh>();
  const texture = useTexture('/static/images/roundshadow.png') as Texture;

  return (
    <mesh
      {...props}
      position-x={positionX}
      position-y={0.001}
      ref={mesh}
      rotation-x={Math.PI * -0.5}
      scale={[SHADOW_SIZE, SHADOW_SIZE, SHADOW_SIZE]}
    >
      <Plane args={[PLANE_SIZE, PLANE_SIZE]}>
        <meshBasicMaterial
          depthWrite={false}
          map={texture}
          transparent={true}
        />
      </Plane>
    </mesh>
  );
}
