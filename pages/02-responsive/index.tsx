import dynamic from 'next/dynamic';
import { useRef } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';
import { Box, OrbitControls } from '@react-three/drei';
import { Mesh } from 'three';

const Camera = dynamic(() => import('./Camera'), { ssr: false });

const CUBES = [
  {
    _id: 1,
    color: 0x8844aa,
    x: -2,
  },
  {
    _id: 2,
    color: 0x44aa88,
    x: 0,
  },
  {
    _id: 3,
    color: 0xaa8844,
    x: 2,
  },
];

const Cube = ({ ...props }) => {
  const { color, ndx } = props;
  const mesh = useRef<Mesh>();

  useFrame(() => {
    if (mesh.current) {
      const speed = 1 + ndx * 0.1;
      const rot = 0.015 * speed;
      mesh.current.rotation.x += rot;
      mesh.current.rotation.y += rot;
    }
  });

  return (
    <mesh {...props} ref={mesh}>
      <Box args={[1, 1, 1]}>
        <meshPhongMaterial color={color} />
      </Box>
    </mesh>
  );
};

export default function Scene() {
  return (
    <Canvas>
      {CUBES.map(({ _id, color, x }) => {
        return <Cube color={color} ndx={_id} key={_id} position-x={x} />;
      })}

      <directionalLight
        color={0xffffff}
        intensity={1.0}
        position={[-1, 2, 4]}
      />
      <OrbitControls />
      <Camera />
    </Canvas>
  );
}
