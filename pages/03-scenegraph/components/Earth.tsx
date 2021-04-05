import { Sphere } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from 'react-three-fiber';
import { Mesh } from 'three';
import { rotateMeshY } from '@/utils/.';

export default function Earth(props) {
  const { children, color, emissive, position, scale, ...rest } = props;
  const mesh = useRef<Mesh>();
  const radius = 1;
  const widthSegments = 6;
  const heightSegments = 6;

  useFrame(() => rotateMeshY(mesh));

  return (
    <mesh position={position} ref={mesh} scale={scale}>
      <axesHelper args={[2]} />
      <gridHelper args={[2]} />

      <Sphere args={[radius, widthSegments, heightSegments]} {...rest}>
        <meshPhongMaterial
          attach="material"
          color={color}
          emissive={emissive}
        />
      </Sphere>
      {children}
    </mesh>
  );
}
