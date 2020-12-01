import { useRef } from 'react';
import { useFrame } from 'react-three-fiber';
import Earth from './Earth';
import Moon from './Moon';
import Sun from './Sun';
import { rotateMeshY } from '../../utils';

interface IProps {
  props: any;
}

export default function SolarSystem({ ...props }: IProps) {
  const groupRef = useRef<Group>();
  useFrame(() => rotateMeshY(groupRef));

  return (
    <group ref={groupRef} {...props}>
      <Earth emissive={0x112244} color={0x2233ff} position={[10, 0, 0]}>
        <Moon
          emissive={0x222222}
          color={0x888888}
          position={[2, 0, 0]}
          scale={[0.5, 0.5, 0.5]}
        />
      </Earth>
      <Sun emissive={0xffff00} scale={[5, 5, 5]} />
    </group>
  );
}
