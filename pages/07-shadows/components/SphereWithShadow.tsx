import { useRef } from 'react';
import { useFrame } from 'react-three-fiber';
import { Plane, Sphere, useTexture } from '@react-three/drei';
import { NUM_SPHERES } from '..';
import { Group, MathUtils, Material, Mesh, Texture } from 'three';

export default function SphereWithShadow({ color, ndx, ...props }) {
  const PLANE_SIZE = 1;
  const SHADOW_SIZE = 4;
  const SPHERE_RADIUS = 1;
  const SPHERE_WIDTH_DIVISIONS = 32;
  const SPHERE_HEIGHT_DIVISIONS = 16;
  const sphereRef = useRef<Mesh>();
  const groupRef = useRef<Group>();
  const shadowRef = useRef<Material>();
  const texture = useTexture('/static/images/roundshadow.png') as Texture;
  const positionX = 0;
  const positionY = SPHERE_RADIUS + 2;

  useFrame(({ clock }) => {
    if (groupRef.current && shadowRef.current) {
      const u = ndx / NUM_SPHERES;
      const speed = clock.getElapsedTime() * 0.2;
      const angle = speed + u * Math.PI * 2 * (ndx % 1 ? 1 : -1);
      const radius = Math.sin(speed) * 10;

      groupRef.current.position.x = Math.cos(angle) * radius;
      groupRef.current.position.y = 0;
      groupRef.current.position.z = Math.sin(angle) * radius;

      const yOff = Math.abs(Math.sin(clock.getElapsedTime() * 2 + ndx));
      sphereRef.current.position.y = positionY + MathUtils.lerp(-2, 2, yOff);
      shadowRef.current.opacity = MathUtils.lerp(1, 0.25, yOff);
    }
  });

  return (
    <group ref={groupRef}>
      <mesh
        {...props}
        ref={sphereRef}
        position-x={positionX}
        position-y={positionY}
      >
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

      <mesh
        {...props}
        position-x={positionX}
        position-y={0.001}
        rotation-x={Math.PI * -0.5}
        scale={[SHADOW_SIZE, SHADOW_SIZE, SHADOW_SIZE]}
      >
        <Plane args={[PLANE_SIZE, PLANE_SIZE]}>
          <meshBasicMaterial
            depthWrite={false}
            ref={shadowRef}
            map={texture}
            transparent={true}
          />
        </Plane>
      </mesh>
    </group>
  );
}
