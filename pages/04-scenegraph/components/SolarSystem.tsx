import { useRef } from 'react';
import { useFrame } from 'react-three-fiber';
import { Color, Group } from 'three';
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
      <Earth
        color={new Color(0x2233ff)}
        emissive={new Color(0x112244)}
        position={[10, 0, 0]}
      >
        <Moon
          color={new Color(0x888888)}
          emissive={new Color(0x222222)}
          position={[2, 0, 0]}
          scale={[0.5, 0.5, 0.5]}
        />
      </Earth>

      <Sun emissive={new Color(0xffff00)} scale={[5, 5, 5]} />
    </group>
  );
}
