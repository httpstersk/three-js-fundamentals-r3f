import { ReactNode, useRef } from 'react';
import { useFrame } from 'react-three-fiber';
import { Sphere } from '@react-three/drei';
import { Color, Mesh, Vector3 } from 'three';
import { ThreeVector3 } from '../../types';
import { rotateMeshY } from '../../utils';

interface IProps {
  children?: ReactNode;
  emissive: Color;
  position?: ThreeVector3;
  scale?: ThreeVector3;
}

export default function Sun({ children, emissive, position, scale }: IProps) {
  const mesh = useRef<Mesh>();
  const radius = 1;
  const widthSegments = 6;
  const heightSegments = 6;

  useFrame(() => rotateMeshY(mesh));

  return (
    <mesh position={position} ref={mesh} scale={scale}>
      <axesHelper args={[2]} />

      <Sphere args={[radius, widthSegments, heightSegments]}>
        <meshPhongMaterial emissive={emissive} />
      </Sphere>

      {children}
    </mesh>
  );
}
