import { Text } from '@react-three/drei';
import { useReflow } from '@react-three/flex';
import { useRef } from 'react';
import { useFrame } from 'react-three-fiber';
import { Mesh } from 'three';
import { getRandomColor, rotateMesh } from '@/utils/.';

export default function TextGeometry(props) {
  const mesh = useRef<Mesh>();
  const reflow = useReflow();
  const font = '../fonts/Inter-Regular.woff';
  const size = 3;

  useFrame(() => rotateMesh(mesh));

  return (
    <Text
      anchorX="center"
      anchorY="middle"
      color={getRandomColor()}
      font={font}
      fontSize={size}
      onSync={reflow}
      ref={mesh}
      textAlign="center"
      {...props}
    >
      THREE.js
      <meshBasicMaterial attach="material" toneMapped={false} />
    </Text>
  );
}
