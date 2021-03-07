import { PerspectiveCamera } from '@react-three/drei';
import { useRef } from 'react';
import { PerspectiveCamera as PerspectiveCameraType } from 'three';

export default function Perspective(props) {
  const camera = useRef<PerspectiveCameraType>();

  return (
    <PerspectiveCamera
      aspect={2}
      far={5}
      fov={75}
      makeDefault
      near={0.1}
      position={[0, 0, 2]}
      ref={camera}
      {...props}
    />
  );
}
