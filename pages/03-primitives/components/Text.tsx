import { useRef } from 'react';
import { useFrame } from 'react-three-fiber';
import { useReflow } from '@react-three/flex';
import { Text } from '@react-three/drei';
import { Mesh } from 'three';
import { rotateMesh } from '../utils';

export default function TextGeometry({ ...props }) {
  const mesh = useRef<Mesh>();
  const reflow = useReflow();
  const font = '../fonts/Inter-Regular.woff';
  const size = 3;

  useFrame(() => rotateMesh(mesh));

  return (
    <mesh {...props} ref={mesh}>
      <Text
        anchorX="center"
        anchorY="middle"
        color="hotpink"
        font={font}
        fontSize={size}
        onSync={reflow}
        textAlign="center"
      >
        THREE.js
        <meshBasicMaterial toneMapped={false} />
      </Text>
    </mesh>
  );
}
