import { useRef } from 'react';
import { useFrame } from 'react-three-fiber';
import { Circle } from '@react-three/drei';
import { Mesh } from 'three';
import { SPEED_ROTATION } from '../constants';

const FlatCircle = ({ ...props }) => {
  const mesh = useRef<Mesh>();
  const radius = 1;
  const segments = 24;
  const thetaStart = 0; // Default
  const thetaLength = 2 * Math.PI; // Default

  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.x += SPEED_ROTATION;
      mesh.current.rotation.y += SPEED_ROTATION;
    }
  });

  return (
    <mesh {...props} ref={mesh}>
      <Circle args={[radius, segments, thetaStart, thetaLength]}>
        <meshPhongMaterial attach="material" color="gold" />
      </Circle>
    </mesh>
  );
};

export default FlatCircle;
